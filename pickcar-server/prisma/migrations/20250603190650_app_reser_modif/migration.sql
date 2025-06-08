/*
  Warnings:

  - A unique constraint covering the columns `[reservationId]` on the table `Application` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "ApplicationStatus" AS ENUM ('Pending', 'Denied', 'Approved');

-- AlterTable
ALTER TABLE "Application" ADD COLUMN     "applicationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "reservationId" INTEGER,
ADD COLUMN     "status" "ApplicationStatus" NOT NULL DEFAULT 'Pending';

-- CreateIndex
CREATE UNIQUE INDEX "Application_reservationId_key" ON "Application"("reservationId");

-- AddForeignKey
ALTER TABLE "Application" ADD CONSTRAINT "Application_reservationId_fkey" FOREIGN KEY ("reservationId") REFERENCES "Reservation"("id") ON DELETE SET NULL ON UPDATE CASCADE;
