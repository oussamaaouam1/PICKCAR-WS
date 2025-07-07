"use client";
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
    { favoriteIds: renter?.Favorites?.map((fav: { id: number }) => fav.id) },
    { skip: !renter?.Favorites || renter?.Favorites.length === 0 }
  );
  if (isLoading) return <Loading />;
  if (error)
    return (
      <div className="font-michroma font-bold">Error loading favorites</div>
    );
  return <div></div>;
};

export default Favorites;
