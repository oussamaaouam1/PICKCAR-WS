"use client";
import Card from "@/components/Card";
import Header from "@/components/ui/Header";
import Loading from "@/components/ui/Loading";
import {
  // useGetAuthUserQuery,
  useGetCarQuery,
  useGetCarReservationsQuery,
  // useGetManagerCarsQuery,
  useGetPaymentsQuery,
} from "@/state/api";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const RentersCar = () => {
  const { id } = useParams();
  const carId = Number(id);

  const { data: car, isLoading: carLoading } = useGetCarQuery(carId);
  const { data: reservations, isLoading: reservationLoading } =
    useGetCarReservationsQuery(carId);
  const { data: payments, isLoading: paymentsLoading } =
    useGetPaymentsQuery(carId);

  if (carLoading || reservationLoading || paymentsLoading) return <Loading />;

  const getCurrentPaymentStatus = (reservationId: number) => {
    const currentDate = new Date();
    const currentPayment = payments?.find(
      (payment) =>
        payment.reservationId === reservationId &&
        new Date(payment.dueDate).getDay() === currentDate.getDay() &&
        new Date(payment.dueDate).getFullYear() === currentDate.getFullYear()
    );
    return currentPayment?.paymentStatus || "Not Paid";
  };

  return (
    <div className="dashboard-container">
      {/* Back to Cars page */}

      <Link
        href="/manager/cars"
        className="flex items-center mb-4 hover:text-primary-500 text-primary-700 font-semibold font-michroma"
        scroll={false}
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Cars
      </Link>
      <Header title={car?.name || "Car"} subtitle="Manage Renters and reservations for this Car" />
    
    </div>
  );
};

export default RentersCar;
