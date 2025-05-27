import { Request,Response } from "express";
import { PrismaClient } from "@prisma/client";
import { wktToGeoJSON } from "@terraformer/wkt";


const prisma = new PrismaClient();


export const getRenter = async (req:Request, res:Response): Promise<void> => {
  try{
    const {cognitoId} = req.params;
    const renter = await prisma.renter.findUnique({
      where: {cognitoId},
      include: {
        favorites: true
      }
    })
    if(renter){
      res.json(renter);
    }else{
      res.status(404).json({message:"Renter not found"});

    }
  }catch(error :any ){
    res.status(500).json({message:`Error fetching renter: ${error.message}`});
  }
};

export const createRenter = async (req:Request, res:Response): Promise<void> => {
  try{
    const {cognitoId,name,email,phoneNumber} = req.body;
    const renter = await prisma.renter.create({
      data:{
        cognitoId,
        name,
        email,
        phoneNumber
      }
    })
    res.status(201).json(renter);
  }catch(error:any){
    res.status(500).json({message:`Error creating renter: ${error.message}`});
  }
};
export const updateRenter = async (req:Request, res:Response): Promise<void> => {
  try{
    const {cognitoId} = req.params;
    
    const {name,email,phoneNumber} = req.body;
    const updateRenter = await prisma.renter.update({
      where: {cognitoId},
      data:{
        cognitoId,
        name,
        email,
        phoneNumber
      }
    })
    res.status(201).json(updateRenter);
  }catch(error:any){
    res.status(500).json({message:`Error updating renter: ${error.message}`});
  }
};



export const getRenterCars = async(
  req: Request,
  res: Response
): Promise<void> => {
  try {

    const { cognitoId } = req.params;
    

    const cars = await prisma.car.findMany({
      where: {renters: {some: {cognitoId}}},
      include: {
        location: true,
        // reservations: true,
      },
    })

const carsWithFormattedLocation = await Promise.all(
  cars.map(async (car) => {
    // Convert PostGIS coordinates to GeoJSON

    const coordinates : { coordinates : string}[]= 
      await prisma.$queryRaw`
      SELECT ST_asText(coordinates) as coordinates 
      FROM "Location" 
      WHERE id = ${car.locationId}
      `;
      const geoJSON :any = wktToGeoJSON(coordinates[0]?.coordinates || "" );
          // Extract longitude and latitude
      const longitude = geoJSON.coordinates[0];
      // Note: GeoJSON coordinates are in [longitude, latitude] order
      // so we need to access them accordingly
      const latitude = geoJSON.coordinates[1];


      return  {
        ...car,
        location: {
          ...car.location,
          coordinates: {
            longitude,
            latitude,
          },
        },
      }

  })
)
      res.status(200).json(carsWithFormattedLocation);
      

  } catch (error: any) {
    res.status(500).json({ message: `Error fetching manager cars: ${error.message}` });
  }
}


// Note: The getRenterCars function is similar to the getManagerCars function, but it filters cars based on the renter's cognitoId.


// The getRenterCars function retrieves all cars associated with a specific renter by their cognitoId.
// It uses Prisma to query the database and includes the car's location information.
// The function formats the car's location coordinates from PostGIS to GeoJSON format before returning the response.
export const addFavoriteCar = async(
  req: Request,
  res: Response
): Promise<void> => {
  try {
const { cognitoId, carId }= req.params;
const renter = await prisma.renter.findUnique({
  where: { cognitoId },
  include: { favorites: true }
});
const carIdNumber = Number(carId)
const existingFavorites = renter?.favorites || [];

if (!existingFavorites.some(fav => fav.id === carIdNumber)) {
  const updatedRenter = await prisma.renter.update({
    where: { cognitoId },
    data: {
      favorites: {
        connect: { id: carIdNumber }
      }
    },
  include : {favorites: true}
  });
  res.status(200).json(updatedRenter);
}else{
  res.status(409).json({ message: "Car is already in favorites" });
  // 409 Conflict status code indicates that the request could not be completed due to a conflict with the current state of the resource.
}
  } catch (error: any) {
    res.status(500).json({ message: `Error adding favorite car: ${error.message}` });
  }
}
export const removeFavoriteCar = async(
  req: Request,
  res: Response
): Promise<void> => {
  try {
const { cognitoId, carId }= req.params;

const carIdNumber = Number(carId)
const updatedRenter = await prisma.renter.update({
  where: { cognitoId },
  data: {
    favorites: {
      disconnect: { id: carIdNumber }
    }
  },
  include: { favorites: true }
})
// const existingFavorites = renter?.favorites || [];
res.status(200).json(updatedRenter);
// The disconnect operation removes the specified car from the renter's favorites without deleting the car itself.

  } catch (error: any) {
    res.status(500).json({ message: `Error removing favorite car: ${error.message}` });
  }
}