import Card from "@/components/Card";
import CardCompact from "@/components/CardCompact";
import {
  useAddFavoriteCarMutation,
  useGetAuthUserQuery,
  useGetCarsQuery,
  useGetRenterQuery,
  useRemoveFavoriteCarMutation,
} from "@/state/api";
import { useAppSelector } from "@/state/redux";
import { Car } from "@/types/prismaTypes";
import React from "react";

const Listings = () => {
  const { data: authUser } = useGetAuthUserQuery();
  const {data: renter} = useGetRenterQuery(
    authUser?.cognitoInfo?.userId || "",
    {
      skip: !authUser?.cognitoInfo?.userId
    }
  )
  const [addFavorite] = useAddFavoriteCarMutation();
  const [removeFavorite] = useRemoveFavoriteCarMutation();
  const viewMode = useAppSelector((state) => state.global.viewMode);
  const filters = useAppSelector((state) => state.global.filters);

  const { data: cars, isLoading, isError } = useGetCarsQuery(filters);
  const handleFavoriteToggle = async (carId: number) => {
    if (!authUser) return;
    const isFavorite = renter?.favorites?.some(
      (fav: Car) => fav.id === carId
    );
    if (isFavorite) {
      await removeFavorite({
        cognitoId: authUser.cognitoInfo.userId,
        carId,
      });
    } else
      addFavorite({
        cognitoId: authUser.cognitoInfo.userId,
        carId,
      });
  };

  if (isLoading) return <>Loading ...</>;
  if (isError || !cars) return <div>Failed to fetch Cars</div>;
  // console.log("location",filters.location)

  return (
    <div className="w-full">
      <h3 className="text-sm px-4 font-bold font-michroma">
        {cars.length}{" "}
        <span className="text-gray-700 font-michroma ">
          Places in {filters.location}
        </span>
      </h3>
      <div className="flex">
        <div className="p-4 w-full">
          {cars?.map((car) =>
            viewMode === "grid" ? (
              <Card
                key={car.id}
                car={car}
                isFavorite={
                  renter?.favorites?.some((fav: Car) => fav.id === car.id) ||
                  false
                }
                onFavoriteToggle={() => handleFavoriteToggle(car.id)}
                showFavoriteButton={!!authUser}
                carLink={`/search/${car.id}`}
              />
            ) : (
              <CardCompact
                key={car.id}
                car={car}
                isFavorite={
                  renter?.favorites?.some((fav: Car) => fav.id === car.id) ||
                  false
                }
                onFavoriteToggle={() => handleFavoriteToggle(car.id)}
                showFavoriteButton={!!authUser}
                carLink={`/search/${car.id}`}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Listings;
