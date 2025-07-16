"use client";
import Card from "@/components/Card";
import Header from "@/components/ui/Header";
import Loading from "@/components/ui/Loading";
import {
  useGetAuthUserQuery,
  useGetManagerCarsQuery,
} from "@/state/api";
import React from "react";

const Cars = () => {
  const { data: authUser } = useGetAuthUserQuery();
const {
  data: managerCars,
  isLoading,
  error,
} = useGetManagerCarsQuery(authUser?.cognitoInfo?.userId || "", 
  {skip: !authUser?.cognitoInfo?.userId,}
);
  if (isLoading) return <Loading />;
  if (error)
    return (
      <div className="font-michroma font-bold">Error loading Manager Cars</div>
    );
  return (
    <div>
      <Header title="My Cars" subtitle="Brows and manage your Cars" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 m-5">
        {managerCars?.map((car) => (
          <Card
            key={car.id}
            car={car}
            isFavorite={false}
            onFavoriteToggle={() => {}}
            showFavoriteButton={false}
            carLink={`/manager/cars/${car.id}`}
          />
        ))}
      </div>
      {(!managerCars || managerCars.length === 0) && (
        <p className="font-semibold font-michroma text-primary-250 m-5">
          {" "}
          You don&apos;t Any listed Cars
        </p>
      )}
    </div>
  );
};

export default Cars;
