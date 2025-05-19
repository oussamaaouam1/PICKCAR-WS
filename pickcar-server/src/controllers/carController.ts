import { Request,Response } from "express";
import { PrismaClient, Prisma } from "@prisma/client";


const prisma = new PrismaClient();


export const getCars = async (req:Request, res:Response): Promise<void> => {
  try{
    const {
      favoriteIds,
      priceMin,
      priceMax,
      seats,
      carType,
      availableFrom,
      carFeature,
      carBrand,
      latitude,
      longitude,
    } = req.query;

    let whereConditions : Prisma.Sql[]= [];

    if(favoriteIds){
      const favoriteIdsArray = (favoriteIds as string).split(",").map(Number);
      whereConditions.push(
        Prisma.sql`c.id IN (${Prisma.join(favoriteIdsArray)})`
      )
    }
    
  }catch(error :any ){
    res.status(500).json({message:`Error fetching cars: ${error.message}`});
  }
};

