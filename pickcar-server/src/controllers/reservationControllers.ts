import { Request,Response } from "express";
import { PrismaClient } from "@prisma/client";
// import { wktToGeoJSON } from "@terraformer/wkt";


const prisma = new PrismaClient();


export const getReservations = async (req:Request, res:Response): Promise<void> => {
  try{
    const reservations = await prisma.reservation.findMany({
      include:{
        renter:true, 
        car:true
      }
    })
    res.status(200).json(reservations);
  } catch (error :any ){
    res.status(500).json({message:`Error fetching reservations: ${error.message}`});
  }
};
export const getReservationPayments = async (req:Request, res:Response): Promise<void> => {
  try{
    const { reservationId } = req.params; 
    const payments = await prisma.payment.findMany({
    where : {
      reservationId: Number(reservationId)}
    })
    res.status(200).json(payments);
  }catch(error :any ){
    res.status(500).json({message:`Error fetching reservation payments: ${error.message}`});
  }
};