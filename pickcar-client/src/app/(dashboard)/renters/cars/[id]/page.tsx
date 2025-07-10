import Loading from "@/components/ui/Loading";
import {
  useGetAuthUserQuery,
  useGetCarQuery,
  useGetPaymentsQuery,
  useGetReservationsQuery,
} from "@/state/api";
import { Car, Reservation } from "@/types/prismaTypes";
import { MapPin } from "lucide-react";
import { useParams } from "next/navigation";
import React from "react";


const CarCard = ({
  car,
  currentReservation
}:{
  car: Car,
  currentReservation : Reservation
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden p-6 flex-1 flex flex-col justify-between">
      {/* Header */}
      <div className="flex gap-5">
        <div className="w-64 h-32 object-cover bg-slate-500 rounded-xl"></div>

        <div className="flex flex-col justify-between">
          <div>
            <div className="bg-green-500 w-fit text-white px-4 py-1 rounded-full text-sm font-semibold">
              Active Leases
            </div>

            <h2 className="text-2xl font-bold my-2">{car.name}</h2>
            <div className="flex items-center mb-2">
              <MapPin className="w-5 h-5 mr-1" />
              <span>
                {car.location.city}, {car.location.country}
              </span>
            </div>
          </div>
          <div className="text-xl font-bold">
            ${currentReservation.rent}{" "}
            <span className="text-gray-500 text-sm font-normal">/ night</span>
          </div>
        </div>
      </div>
      {/* Dates */}
      <div>
        <hr className="my-4" />
        <div className="flex justify-between items-center">
          <div className="xl:flex">
            <div className="text-gray-500 mr-2">Start Date: </div>
            <div className="font-semibold">
              {new Date(currentReservation.startDate).toLocaleDateString()}
            </div>
          </div>
          <div className="border-[0.5px] border-primary-300 h-4" />
          <div className="xl:flex">
            <div className="text-gray-500 mr-2">End Date: </div>
            <div className="font-semibold">
              {new Date(currentReservation.endDate).toLocaleDateString()}
            </div>
          </div>
          <div className="border-[0.5px] border-primary-300 h-4" />
          <div className="xl:flex">
            <div className="text-gray-500 mr-2">Next Payment: </div>
            <div className="font-semibold">
              {new Date(currentReservation.endDate).toLocaleDateString()}
            </div>
          </div>
        </div>
        <hr className="my-4" />
      </div>
    </div>
  );

}




const RentalCar = () => {
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
  if (!car || carError) return <div> Error loading Car</div>;

  const currentReservation = reservations?.find(
    (reservation) => reservation.carId === car.id
  );

  return <div className="dashboard-container">
    <div className="w-full mx-auto">
      <div className="md:flex gap-10">
        {currentReservation && (
          <CarCard car= {car} currentReservation= {currentReservation} /> 
        )} 
        {/* <PaymentMethod /> */}
      </div>
      {/* <BillingHistory payments = {payments || []} /> */}
    </div>
  </div>;
};

export default RentalCar;
