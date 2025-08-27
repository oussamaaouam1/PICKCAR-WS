import { Request, Response } from "express";
import {
  PrismaClient,
  Prisma,
  CarFeature,
  CarType,
  TransmissionType,
  FuelType,
  Location,
} from "@prisma/client";
import { wktToGeoJSON } from "@terraformer/wkt";
import { Upload } from "@aws-sdk/lib-storage";
import { S3Client } from "@aws-sdk/client-s3";
import axios from "axios";

const prisma = new PrismaClient();
const s3Client = new S3Client({
  region: process.env.AWS_REGION,
});
// Initialize the S3 client

export const getCars = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      favoriteIds,
      priceMin,
      priceMax,
      seats,
      carType,
      availableFrom,
      carFeature,
      carBrand,
      transmission,
      fuelType,
      latitude,
      longitude,
    } = req.query;

    let whereConditions: Prisma.Sql[] = [];

    if (favoriteIds) {
      const favoriteIdsArray = (favoriteIds as string).split(",").map(Number);
      whereConditions.push(
        Prisma.sql`c.id IN (${Prisma.join(favoriteIdsArray)})`
      );
    }
    if (priceMin) {
      whereConditions.push(Prisma.sql`c."pricePerDay" >= ${Number(priceMin)}`);
    }
    if (priceMax) {
      whereConditions.push(Prisma.sql`c."pricePerDay" <= ${Number(priceMax)}`);
    }
    if (seats && seats !== "any") {
      whereConditions.push(Prisma.sql`c."seats" >= ${Number(seats)}`);
    }
    if (carType && carType !== "any") {
      whereConditions.push(Prisma.sql`c."carType" <= ${carType}::"CarType"`);
    }
    if (transmission && transmission !== "any") {
      whereConditions.push(
        Prisma.sql`c."transmission" = ${transmission}::"TransmissionType"`
      );
    }
    if (fuelType && fuelType !== "any") {
      whereConditions.push(Prisma.sql`c."fuelType" = ${fuelType}::"FuelType"`);
    }
    //car features past code
    //     if(carFeature && carFeature !== "any"){
    //   const carFeatureArray = (carFeature as string).split(",").map(Number);
    //   whereConditions.push(
    //     Prisma.sql`c.carFeatures @> ${carFeatureArray}`
    //   )
    // }
    if (carFeature && carFeature !== "any") {
      const carFeatureArray = (carFeature as string).split(",");
      whereConditions.push(
        Prisma.sql`c."carFeatures" @> ARRAY[${Prisma.join(
          carFeatureArray
        )}]::"CarFeature"[]`
      );
    }
    //check the availability of the car
    if (availableFrom && availableFrom !== "any") {
      const availableFromDate =
        typeof availableFrom === "string" ? availableFrom : null;
      if (availableFromDate) {
        const date = new Date(availableFromDate);
        if (!isNaN(date.getTime())) {
          whereConditions.push(
            Prisma.sql`EXISTS (
              SELECT 1 FROM "Reservation" r
              WHERE r."carId" = c.id
              AND r."startDate" <= ${date.toISOString()}
            )`
          );
        }
      }
    }

    if (latitude && longitude) {
      const lat = parseFloat(latitude as string);
      const lng = parseFloat(longitude as string);
      const radiusInKm = 1000; // Define your radius in kilometers  to be scalable for a search radius configurable rather than hardcoded
      const degrees = radiusInKm / 111.32; // Approximate conversion from km to degrees

      whereConditions.push(
        Prisma.sql`ST_DWithin(
          l.coordinates::geometry,
          ST_SetSRID(ST_MakePoint(${lng}, ${lat}), 4326),
          ${degrees}
        )`
      );
    }
    if (carBrand && carBrand !== "any") {
      whereConditions.push(Prisma.sql`c."carBrand" = ${carBrand}`);
    }

    const completeQuery = Prisma.sql`
    SELECT
      c.*,
      json_build_object(
        'id', l.id,
        'address', l.address,
        'city', l.city,
        'state', l.state,
        'country', l.country,
        'postalCode', l."postalCode",
        'coordinates',json_build_object(
          'longitude', ST_X(l."coordinates"::geometry),
          'latitude', ST_Y(l."coordinates"::geometry)
        )
      ) as location
    FROM "Car" c
    JOIN "Location" l ON c."locationId" = l.id
    ${
      whereConditions.length > 0
        ? Prisma.sql`WHERE ${Prisma.join(whereConditions, " AND ")}`
        : Prisma.empty
    }
    `;
    // const cars = await prisma.$queryRaw(completeQuery);

    try {
      const cars = await prisma.$queryRaw(completeQuery);
      res.status(200).json(cars);
    } catch (error) {
      console.error("Database query failed:", error);
      res.status(500).json({ error: "Failed to fetch cars" });
    }
    // res.status(200).json(cars);
  } catch (error: any) {
    res.status(500).json({ message: `Error fetching cars: ${error.message}` });
  }
};

export const getCar = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const car = await prisma.car.findUnique({
      where: { id: Number(id) },
      include: {
        location: true,
        // reservations: true,
      },
    });
    if (car) {
      const coordinates: { coordinates: string }[] =
        await prisma.$queryRaw`SELECT ST_asText(coordinates) as coordinates FROM "Location" WHERE id = ${car.locationId}`;
      const geoJSON: any = wktToGeoJSON(coordinates[0]?.coordinates || "");
      const longitude = geoJSON.coordinates[0];
      const latitude = geoJSON.coordinates[1];

      const carWithCoordinates = {
        ...car,
        location: {
          ...car.location,
          coordinates: {
            longitude,
            latitude,
          },
        },
      };
      res.status(200).json(carWithCoordinates);
    }
  } catch (error: any) {
    res.status(500).json({ message: `Error fetching car: ${error.message}` });
  }
};
export const createCar = async (req: Request, res: Response): Promise<void> => {
  try {
    const files = req.files as Express.Multer.File[];
    const {
      address,
      city,
      state,
      country,
      postalCode,
      managerCognitoId,
      ...carData
    } = req.body;
    // Images Upload to S3
    const imageUrls = await Promise.all(
      files.map(async (file) => {
        const uploadParams = {
          Bucket: process.env.AWS_S3_BUCKET_NAME || "",
          Key: `cars/${Date.now()}-${file.originalname}`,
          Body: file.buffer,
          ContentType: file.mimetype,
        };
        const uploadResult = await new Upload({
          client: s3Client,
          params: uploadParams,
        }).done();
        return uploadResult.Location;
      })
    );
    // Geocoding the address using OpenStreetMap Nominatim API
    const geocodingUrl = `https://nominatim.openstreetmap.org/search?${new URLSearchParams(
      {
        street: address,
        city,
        country,
        postalcode: postalCode,
        format: "json",
        limit: "1",
      }
    ).toString()}`;
    const geocodingResponse = await axios.get(geocodingUrl, {
      headers: {
        "User-Agent": "PickCarApp/1.0",
      },
    });
    const [longitude, latitude] =
      geocodingResponse.data[0]?.lon && geocodingResponse.data[0]?.lat
        ? [
            parseFloat(geocodingResponse.data[0].lon),
            parseFloat(geocodingResponse.data[0].lat),
          ]
        : [0, 0];

    // Create the location entry
    const [location] = await prisma.$queryRaw<Location[]>`
      INSERT INTO "Location" (address, city, state, country, "postalCode", coordinates)
      VALUES (
        ${address},
        ${city},
        ${state}, 
        ${country}, 
        ${postalCode},
        ST_SetSRID(ST_MakePoint(${longitude}, ${latitude}), 4326))
      RETURNING id, address, city, state, country, "postalCode", ST_asText(coordinates) as coordinates
      `;

    // Reset the Car sequence to prevent unique constraint issues
    await prisma.$executeRawUnsafe(
      `SELECT setval('"Car_id_seq"', (SELECT COALESCE(MAX(id) + 1, 1) FROM "Car"), false)`
    );

    // Create a car
    const newCar = await prisma.car.create({
      data: {
        ...carData,
        images: imageUrls,
        locationId: location.id,

        managerCognitoId,
        carFeatures:
          typeof carData.carFeatures === "string"
            ? carData.carFeatures.split(",")
            : [],
        carType: carData.carType as CarType,
        transmission: carData.transmission as TransmissionType,
        fuelType: carData.fuelType as FuelType,
        seats: parseFloat(carData.seats as string),
        brand: carData.brand as string,
        applicationFee: parseFloat(carData.applicationFee),
        pricePerDay: parseFloat(carData.pricePerDay),
      },
      include: {
        location: true,
        manager: true,
      },
    });
    res.status(201).json({
      message: "Car created successfully",
      car: newCar,
    });
  } catch (error: any) {
    res.status(500).json({ message: `Error creating car: ${error.message}` });
  }
};
export const deleteCar = async (req:Request, res:Response): Promise<void> =>{
  try{
    const {id}= req.params;
    const managerCognitoId = req.user?.id; //extract the cognito Id from auth middleware
    if (!managerCognitoId){
      res.status(401).json({message: "Unauthorized"});
      return;

    }
    //check if the car exists
    const car = await prisma.car.findFirst({
      where : {
        id:Number(id),
        managerCognitoId: managerCognitoId,
      },
      include : {
        reservations: true,
        applications: true,
        location: true,
      }
    });
    if(!car){
      res.status(404).json({message: "Car not found!"});
      return;
    }
    //check if there are any reservations for the car
    if(car.reservations.length > 0){
      res.status(400).json({message: "Car has reservations and cannot be deleted!"});
      return;
    }
    //check if there are any applications for the car
    if(car.applications.length > 0){
      res.status(400).json({message: "Car has applications and cannot be deleted!"});
      return;
    }
    await prisma.$transaction(async(tx)=>{
      //Delete applications
      await tx.application.deleteMany({
        where: {carId:Number(id)},
      });
      //Delete The car
      await tx.car.delete({
        where: {id:Number(id)},
      });
    })
    res.status(200).json({message: "Car deleted with successfully"})
  } catch(error: any){
    console.error("Error deleting car:", error);
    res.status(500).json({message: ` ${error.message}`});
  }
}
