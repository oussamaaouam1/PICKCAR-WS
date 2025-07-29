/*
Warnings:

- Added the required column `applicationFee` to the `Car` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
-- First add the columns with default values for existing records
ALTER TABLE "Car"
ADD COLUMN "postedDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE "Car" ADD COLUMN "applicationFee" DOUBLE PRECISION;

-- Then remove the default constraints (optional, but keeps your schema clean)
ALTER TABLE "Car" ALTER COLUMN "postedDate" DROP DEFAULT;