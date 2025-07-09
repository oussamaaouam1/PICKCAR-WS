import Loading from "@/components/ui/Loading";
import {
  useGetAuthUserQuery,
  useGetCarQuery,
  useGetPaymentsQuery,
  useGetReservationsQuery,
} from "@/state/api";
import { useParams } from "next/navigation";
import React from "react";

const Car = () => {
  const { id } = useParams();
  const { data: authUser } = useGetAuthUserQuery();
  const {
    data: car,
    isLoading: carLoading,
    error: carError,
  } = useGetCarQuery(Number(id));
  const { data: reservations, isLoading: reservationsLoading } =
    useGetReservationsQuery(parseInt(authUser?.cognitoInfo?.userId || "0"), {
      skip: !authUser?.cognitoInfo?.userId,
    });
  const { data: payments, isLoading: paymentsLoading } = useGetPaymentsQuery(
    reservations?.[0]?.id || 0,
    { skip: !reservations?.[0]?.id }
  );

  if (carLoading || reservationsLoading || paymentsLoading) return <Loading />;
  if (!car || carError) return <div>Error loading Car</div>;

  const currentReservation = reservations?.find(
    (reservation) => reservation.carId === car.id
  );

  return <div className="dashboard-container">
    <div className="w-full mx-auto">
      <div className="md:flex gap-10">
        {currentReservation && (
          <CarCard car= {car} currentReservation= {currentReservation} />
        )}
        <PaymentMethode />
      </div>
      <BillingHistory payments = {payments || []} />
    </div>
  </div>;
};

export default Car;
