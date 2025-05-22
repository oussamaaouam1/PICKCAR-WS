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
      transmission,
      fuelType,
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
    if(priceMin){
      whereConditions.push(
        Prisma.sql`c."pricePerDay" >= ${Number(priceMin)}`
      )
    }
    if(priceMax){
      whereConditions.push(
        Prisma.sql`c."pricePerDay" <= ${Number(priceMax)}`
      )
    }
    if(seats && seats !== "any"){
      whereConditions.push(
        Prisma.sql`c."seats" >= ${Number(seats)}`
      )
    }
    if(carType && carType !== "any"){
      whereConditions.push(
        Prisma.sql`c."carType" <= ${carType}::"CarType"`
      )
    }
    if(carFeature && carFeature !== "any"){
      const carFeatureArray = (carFeature as string).split(",").map(Number);
      whereConditions.push(
        Prisma.sql`c.carFeature @> ${carFeatureArray}`
      )
    }
    if (availableFrom && availableFrom !== "any"){
      const availableFromDate = 
      typeof availableFrom ==="string" ? availableFrom : null;
      if (availableFromDate) {
        const date = new Date(availableFromDate);
        if (!isNaN(date.getTime())) {
          whereConditions.push(
            Prisma.sql`EXIST (
              SELECT 1 FROM "Reservation" r
              WHERE r."carId" = c.id
              AND r."startDate" <= ${date.toISOString()}
            )`
          )
        }
      }
    }
    
    
  }catch(error :any ){
    res.status(500).json({message:`Error fetching cars: ${error.message}`});
  }
};

