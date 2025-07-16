"use client";
// import Card from "@/components/Card";
import Header from "@/components/ui/Header";
import Loading from "@/components/ui/Loading";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  // useGetAuthUserQuery,
  useGetCarQuery,
  useGetCarReservationsQuery,
  // useGetManagerCarsQuery,
  useGetPaymentsQuery,
} from "@/state/api";
import { TableCell } from "@aws-amplify/ui-react";
import { ArrowLeft, CheckCircle, Download } from "lucide-react";
import Image from "next/image";
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
    <div className="dashboard-container w-full ">
      {/* Back to Cars page */}

      <Link
        href="/managers/cars"
        className="flex items-center mb-4 hover:text-primary-500 text-primary-700 font-semibold font-michroma cursor-pointer"
        scroll={false}
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Cars
      </Link>
      <Header
        title={car?.name || "Car"}
        subtitle="Manage Renters and reservations for this Car"
      />

      <div className="w-full space-y-6 m-auto">
        <div className="mt-8 bg-white rounded-xl shadow-md overflow-hidden p-6 md:min-w-[800px]">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-2xl font-bold mb-1 font-michroma">
                Renters Overview
              </h2>
              <p className="text-sm text-gray-500 font-michroma">
                Manage and View all Renters for this Car
              </p>
            </div>
            <div>
              <button className="bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-xl flex item-center justify-center hover:bg-primary-700 hover:text-white cursor-pointer">
                <Download className="w-5 h-5 mr-2" />
                <span>Download All</span>
              </button>
            </div>
          </div>
          <hr className="mt-4 mb-1 border-gray-500" />
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="text-gray-500 ">
                <TableRow className="text-gray-500 border-gray-500">
                  <TableHead className="text-gray-500">Renter</TableHead>
                  <TableHead className="text-gray-500">
                    Reservation Period
                  </TableHead>
                  <TableHead className="text-gray-500">Total price</TableHead>
                  <TableHead className="text-gray-500">
                    Current Payment Status
                  </TableHead>
                  <TableHead className="text-gray-500">Contact</TableHead>
                  <TableHead className="text-gray-500">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {reservations?.map((reservation) => (
                  <TableRow key={reservation.id} className="h-24">
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <Image
                          src="/landing-i1.png"
                          alt={reservation.renter.name}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                        <div>
                          <div className="font-semibold font-michroma">
                            {reservation.renter.name}
                          </div>
                          <div className="text-sm text-gray-500 font-michroma">
                            {reservation.renter.email}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        {new Date(reservation.startDate).toLocaleDateString()} -
                      </div>
                      <div>
                        {new Date(reservation.endDate).toLocaleDateString()}
                      </div>
                    </TableCell>
                    <TableCell>
                      MAD {reservation.totalPrice.toFixed(2)}
                    </TableCell>
                    <TableCell>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold font-michroma ${
                          getCurrentPaymentStatus(reservation.id) === "Paid"
                            ? "bg-green-100 text-green-800 border-green-300"
                            : "bg-red-100 text-red-800 border-red-300"
                        }`}
                      >
                        {getCurrentPaymentStatus(reservation.id) === "Paid" && (
                          <CheckCircle className="w-4 h-4 inline-block mr-1" />
                        )}
                        {getCurrentPaymentStatus(reservation.id)}
                      </span>
                    </TableCell>
                    <TableCell>{reservation.renter.phoneNumber}</TableCell>
                    <TableCell>
                      <button className="border border-gray-300 text-gray-700 py-2 px-4 rounded-md flex items-center justify-center font-semibold hover:bg-primary-700 hover:text-primary-50">
                        <Download className="w-4 h-4 mr-1" />
                        Download Agreement Or Invoice
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentersCar;
