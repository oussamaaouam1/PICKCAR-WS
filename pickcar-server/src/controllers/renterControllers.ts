import { Request,Response } from "express";
import { PrismaClient } from "@prisma/client";


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