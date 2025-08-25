"use client";
import Card from "@/components/Card";
import Header from "@/components/ui/Header";
import Loading from "@/components/ui/Loading";
import {
  useGetAuthUserQuery,
  // useGetCarQuery,
  useGetCarsQuery,
  useGetRenterQuery,
} from "@/state/api";
import React from "react";

const Favorites = () => {
  const { data: authUser } = useGetAuthUserQuery();
  const { data: renter } = useGetRenterQuery(
    authUser?.cognitoInfo?.userId || "",
    {
      skip: !authUser?.cognitoInfo?.userId,
    }
  );
  const {
    data: favoriteCars,
    isLoading,
    error,
  } = useGetCarsQuery(
    { favoriteIds: renter?.favorites?.map((fav: { id: number }) => fav.id) },
    { skip: !renter?.favorites || renter?.favorites.length === 0 }
  );
  if (isLoading) return <Loading />;
  if (error)
    return (
      <div className="font-michroma font-bold">Error loading favorites</div>
    );
  return (
    <div>
      <Header
        title="Favorites Cars"
        subtitle="Brows and manage your saved Cars"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 m-5">
        {favoriteCars?.map((car) => (
          <Card
            key={car.id}
            car={car}
            isFavorite={true}
            onFavoriteToggle={() => {}}
            showFavoriteButton={false}
            carLink={`/renters/cars/${car.id}`}
          />
        ))}
      </div>
      {(!favoriteCars || favoriteCars.length === 0) && (
        <p className="font-semibold font-michroma text-primary-250">
          {" "}
          You don&apos;t Any Favorite Cars
        </p>
      )}
    </div>
  );
};

export default Favorites;
