import { Request,Response } from "express";
import { PrismaClient } from "@prisma/client";
import { wktToGeoJSON } from "@terraformer/wkt";


const prisma = new PrismaClient();


export const getManager = async (req:Request, res:Response): Promise<void> => {
  try{
    const {cognitoId} = req.params;
    const manager = await prisma.manager.findUnique({
      where: {cognitoId},
      // include: {
      //   favorites: true
      // }
    })
    if(manager){
      res.json(manager);
    }else{
      res.status(404).json({message:"Manager not found"});

    }
  }catch(error :any ){
    res.status(500).json({message:`Error fetching Manager: ${error.message}`});
  }
};

export const createManager = async (req:Request, res:Response): Promise<void> => {
  try{
    const {cognitoId,name,email,phoneNumber} = req.body;
    const manager = await prisma.manager.create({
      data:{
        cognitoId,
        name,
        email,
        phoneNumber
      }
    })
    res.status(201).json(manager);
  }catch(error:any){
    res.status(500).json({message:`Error creating manager: ${error.message}`});
  }
};
export const updateManager = async (req:Request, res:Response): Promise<void> => {
  try{
    const {cognitoId} = req.params;
    const {name,email,phoneNumber} = req.body;
    const updateManager = await prisma.manager.update({
      where: {cognitoId},
      data:{
        name,
        email,
        phoneNumber
      }
    })
    res.status(201).json(updateManager);
  }catch(error:any){
    res.status(500).json({message:`Error creating manager: ${error.message}`});
  }
};



export const getManagerCars = async(
  req: Request,
  res: Response
): Promise<void> => {
  try {

    const { cognitoId } = req.params;
    

    const cars = await prisma.car.findMany({
      where: {managerCognitoId: cognitoId},
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