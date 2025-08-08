import { Request, Response } from "express";
import { Application, PrismaClient, ReservationStatus } from "@prisma/client";
import { connect } from "http2";
// import { wktToGeoJSON } from "@terraformer/wkt";

const prisma = new PrismaClient();

export const listApplications = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { userId, userType } = req.query;

    let whereClause = {};

    if (userId && userType) {
      if (userType === "renter") {
        whereClause = { renterCognitoId: String(userId) };
      } else if (userType === "manager") {
        whereClause = {
          car: {
            managerCognitoId: String(userId),
          },
        };
      }
    }

    const applications = await prisma.application.findMany({
      where: whereClause,
      include: {
        car: {
          include: {
            location: true,
            manager: true,
          },
        },
        renter: true,
      },
    });
    function calculateNextPaymentDate(startDate: Date) {
      const today = new Date();
      const nextPaymentDate = new Date(startDate);
      while (nextPaymentDate <= today) {
        nextPaymentDate.setMonth(nextPaymentDate.getMonth() + 1);
      }
      return nextPaymentDate;
    }
    const formattedApplications = await Promise.all(
      applications.map(async (app) => {
        const reservation = await prisma.reservation.findFirst({
          where: {
            renter: {
              cognitoId: app.renterCognitoId,
            },
            carId: app.carId,
          },
          orderBy: {
            startDate: "desc",
          },
        });
        return {
          ...app,
          car: {
            ...app.car,
            address: app.car.location.address,
          },
          manager: app.car.manager,
          reservation: reservation
            ? {
                ...reservation,
                nextPaymentDate: calculateNextPaymentDate(
                  reservation.startDate
                ),
              }
            : null,
        };
      })
    );
    res.status(200).json(formattedApplications);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error fetching applications: ${error.message}` });
  }
};

export const createApplication = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      applicationDate,
      status,
      carId,
      renterCognitoId,
      name,
      email,
      phoneNumber,
      message,
    } = req.body;

    const car = await prisma.car.findUnique({
      where: { id: carId },
      select: { pricePerDay: true, manager: true },
    });
    if (!car) {
      res.status(404).json({ message: "Car not found" });
      return;
    }
    const newApplication = await prisma.$transaction(async (prisma) => {
      //create the reservation
      const reservation = await prisma.reservation.create({
        data: {
          startDate: new Date(), // Assuming the reservation starts now
          endDate: new Date(
            new Date().setFullYear(new Date().getFullYear() + 1)
          ), // One year later

          totalPrice: car?.pricePerDay || 0,
          car: {
            connect: { id: carId },
          },
          renter: {
            connect: { cognitoId: renterCognitoId },
          },
          status: ReservationStatus.Pending, // Add the required status field
        },
      });

      //create the application
      const application = await prisma.application.create({
        data: {
          applicationDate: new Date(applicationDate),
          status,
          name,
          email,
          phoneNumber,
          message,
          car: {
            connect: { id: carId },
          },
          renter: {
            connect: { cognitoId: renterCognitoId },
          },
          reservation: {
            connect: { id: reservation.id }, // Link the application to the reservation
          },
        },
        include: {
          car: true,
          renter: true,
          reservation: true, // Include the reservation in the response
        },
      });
      return application;
    });
    res.status(201).json(newApplication);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error creating application: ${error.message}` });
  }
};

export const updateApplicationStatus = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const application = await prisma.application.findUnique({
      where: { id: Number(id) },
      include: {
        car: true,
        renter: true,
      },
    });
    if (!application) {
      res.status(404).json({ message: "Application not found" });
      return;
    }

    if (status === "Approved") {
      const newReservation = await prisma.reservation.create({
        data: {
          startDate: new Date(), // Assuming the reservation starts now
          endDate: new Date(new Date().setMonth(new Date().getMonth() + 1)), // One year later
          totalPrice: application.car.pricePerDay || 0,
          carId: application.carId,
          renterCognitoId: application.renterCognitoId,
          status: ReservationStatus.Approved, // Set the status to completed
        },
      });

      // Add this line to update the application status when approved
      await prisma.application.update({
        where: { id: Number(id) },
        data: { status },
      });
    } else {
      await prisma.application.update({
        where: { id: Number(id) },
        data: { status },
      });
    }
    // Fetch the updated application with the reservation details included
    const updatedApplication = await prisma.application.findUnique({
      where: { id: Number(id) },
      include: {
        car: true,
        renter: true,
        reservation: true, // Include the reservation in the response
      },
    });
    res.status(200).json(updatedApplication);
  } catch (error: any) {
    res
      .status(500)
      .json({
        message: `Error updating reservation payments: ${error.message}`,
      });
  }
};
