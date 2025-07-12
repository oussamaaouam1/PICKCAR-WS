"use client";
import Card from "@/components/Card";
import Header from "@/components/ui/Header";
import Loading from "@/components/ui/Loading";
import {
  useGetAuthUserQuery,
  // useGetCarQuery,
  // useGetCarsQuery,
  useGetCurrentCarsQuery,
  useGetRenterQuery,
} from "@/state/api";
import React from "react";

const Cars = () => {
  const { data: authUser } = useGetAuthUserQuery();
  const { data: renter } = useGetRenterQuery(
    authUser?.cognitoInfo?.userId || "",
    {
      skip: !authUser?.cognitoInfo?.userId,
    }
  );
  const {
    data: currentCars,
    isLoading,
    error,
  } = useGetCurrentCarsQuery(authUser?.cognitoInfo?.userId || "", {
    skip: !authUser?.cognitoInfo?.userId,
  });
  if (isLoading) return <Loading />;
  if (error)
    return (
      <div className="font-michroma font-bold">Error loading current Cars</div>
    );
  return (
    <div className="dashboard-container w-full">
      <Header
        title="Current Cars"
        subtitle="View and manage your current Cars"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {currentCars?.map((car) => (
          <Card
            key={car.id}
            car={car}
            isFavorite={renter?.favorites.includes(car.id) || false}
            onFavoriteToggle={() => {}}
            showFavoriteButton={false}
            carLink={`/renter/cars/${car.id}`}
          />
        ))}
      </div>
      {(!currentCars || currentCars.length === 0) && (
        <p className="font-semibold font-michroma text-primary-250 w-full text-center">
          {" "}
          You don&apos;t Any Current Cars
        </p>
      )}
    </div>
  );
};

export default Cars;
