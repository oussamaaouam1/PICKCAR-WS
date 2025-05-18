-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "postgis";

-- CreateEnum
CREATE TYPE "CarFeature" AS ENUM ('Bluetooth', 'GPS', 'HeatedSeats', 'Sunroof', 'ParkingSensors', 'CruiseControl', 'AirConditioning', 'AlloyWheels', 'ChildSeat', 'AutomaticTransmission', 'GPSNavigation');

-- CreateEnum
CREATE TYPE "CarType" AS ENUM ('Sedan', 'SUV', 'Convertible', 'Truck', 'Electric', 'Minivan', 'Hatchback', 'Coupe');

-- CreateEnum
CREATE TYPE "ReservationStatus" AS ENUM ('Pending', 'Approved', 'Rejected', 'Completed', 'Cancelled');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('Pending', 'Paid', 'PartiallyPaid', 'Overdue', 'Refunded');

-- CreateTable
CREATE TABLE "Car" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "pricePerDay" DOUBLE PRECISION NOT NULL,
    "availableFrom" TIMESTAMP(3) NOT NULL,
    "availableTo" TIMESTAMP(3) NOT NULL,
    "carType" "CarType" NOT NULL,
    "carFeatures" "CarFeature"[],
    "imageUrls" TEXT[],
    "locationId" INTEGER NOT NULL,
    "rating" DOUBLE PRECISION DEFAULT 0,
    "numberOfReviews" INTEGER DEFAULT 0,
    "managerCognitoId" TEXT NOT NULL,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Manager" (
    "id" SERIAL NOT NULL,
    "cognitoId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,

    CONSTRAINT "Manager_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Renter" (
    "id" SERIAL NOT NULL,
    "cognitoId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,

    CONSTRAINT "Renter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reservation" (
    "id" SERIAL NOT NULL,
    "carId" INTEGER NOT NULL,
    "renterCognitoId" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "totalPrice" DOUBLE PRECISION NOT NULL,
    "status" "ReservationStatus" NOT NULL,
    "paymentStatus" "PaymentStatus" NOT NULL DEFAULT 'Pending',

    CONSTRAINT "Reservation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Application" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "message" TEXT,
    "carId" INTEGER NOT NULL,
    "renterCognitoId" TEXT NOT NULL,

    CONSTRAINT "Application_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payment" (
    "id" SERIAL NOT NULL,
    "amountDue" DOUBLE PRECISION NOT NULL,
    "amountPaid" DOUBLE PRECISION NOT NULL,
    "dueDate" TIMESTAMP(3) NOT NULL,
    "paymentDate" TIMESTAMP(3),
    "paymentStatus" "PaymentStatus" NOT NULL,
    "reservationId" INTEGER NOT NULL,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Location" (
    "id" SERIAL NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "postalCode" TEXT NOT NULL,
    "coordinates" geography(Point, 4326) NOT NULL,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_RenterFavorites" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_RenterFavorites_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Manager_cognitoId_key" ON "Manager"("cognitoId");

-- CreateIndex
CREATE UNIQUE INDEX "Renter_cognitoId_key" ON "Renter"("cognitoId");

-- CreateIndex
CREATE INDEX "_RenterFavorites_B_index" ON "_RenterFavorites"("B");

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_managerCognitoId_fkey" FOREIGN KEY ("managerCognitoId") REFERENCES "Manager"("cognitoId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_renterCognitoId_fkey" FOREIGN KEY ("renterCognitoId") REFERENCES "Renter"("cognitoId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Application" ADD CONSTRAINT "Application_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Application" ADD CONSTRAINT "Application_renterCognitoId_fkey" FOREIGN KEY ("renterCognitoId") REFERENCES "Renter"("cognitoId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_reservationId_fkey" FOREIGN KEY ("reservationId") REFERENCES "Reservation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RenterFavorites" ADD CONSTRAINT "_RenterFavorites_A_fkey" FOREIGN KEY ("A") REFERENCES "Car"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RenterFavorites" ADD CONSTRAINT "_RenterFavorites_B_fkey" FOREIGN KEY ("B") REFERENCES "Renter"("id") ON DELETE CASCADE ON UPDATE CASCADE;
