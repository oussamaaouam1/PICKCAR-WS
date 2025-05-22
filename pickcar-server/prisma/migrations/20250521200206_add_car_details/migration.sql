/*
Warnings:

- Added the required column `brand` to the `Car` table without a default value. This is not possible if the table is not empty.
- Added the required column `fuelType` to the `Car` table without a default value. This is not possible if the table is not empty.
- Added the required column `seats` to the `Car` table without a default value. This is not possible if the table is not empty.
- Added the required column `transmission` to the `Car` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TransmissionType" AS ENUM ('All', 'Manual', 'Automatic');

-- CreateEnum
CREATE TYPE "FuelType" AS ENUM ('combustion', 'Electric', 'Hybrid');

-- AlterTable
ALTER TABLE "Car"
ADD COLUMN "brand" TEXT DEFAULT 'Unknown',
ADD COLUMN "fuelType" "FuelType" DEFAULT 'combustion',
ADD COLUMN "seats" INTEGER DEFAULT 4,
ADD COLUMN "transmission" "TransmissionType" DEFAULT 'Manual';

-- Update existing rows with default values
UPDATE "Car"
SET
    "brand" = 'Unknown',
    "fuelType" = 'combustion',
    "seats" = 4,
    "transmission" = 'Manual'
WHERE
    "brand" IS NULL;

-- Make columns required
ALTER TABLE "Car"
ALTER COLUMN "brand"
SET
    NOT NULL,
ALTER COLUMN "fuelType"
SET
    NOT NULL,
ALTER COLUMN "seats"
SET
    NOT NULL,
ALTER COLUMN "transmission"
SET
    NOT NULL;

-- CreateTable
CREATE TABLE "_RenterCars" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_RenterCars_AB_pkey" PRIMARY KEY ("A", "B")
);

-- CreateIndex
CREATE INDEX "_RenterCars_B_index" ON "_RenterCars" ("B");

-- AddForeignKey
ALTER TABLE "_RenterCars"
ADD CONSTRAINT "_RenterCars_A_fkey" FOREIGN KEY ("A") REFERENCES "Car" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RenterCars"
ADD CONSTRAINT "_RenterCars_B_fkey" FOREIGN KEY ("B") REFERENCES "Renter" ("id") ON DELETE CASCADE ON UPDATE CASCADE;