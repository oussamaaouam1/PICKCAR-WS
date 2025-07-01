import { useGetCarQuery } from "@/state/api";
import { CheckCircle2, MapPin, Star } from "lucide-react";
import React from "react";

const CarOverview = ({ carId }: CarOverviewProps) => {
  const { data: car, isError, isLoading } = useGetCarQuery(carId);
  if (isLoading) return <>Loading ...</>;
  if (isError || !car) {
    return <>Car not found !</>;
  }
  return (
    <div>
      {/* header */}
      <div className="mb-4">
        <div className="text-sm text-gray-600 font-michroma ">
          <h1 className="text-3xl font-bold my-5 font-michroma">{car.name}</h1>
          <div className="flex justify-between items-center">
            <span className="flex justify-center text-gray-500">
              <MapPin className="w-4 h-4 mr-1 text-gray-700" />
              {car.location?.city},{car.location?.state},{""}
              {car.location?.country}
            </span>
            <div className="flex justify-between items-center gap-3">
              <span className="flex items-center text-yellow-500">
                <Star className="w-4 h-4 mr-1 fill-current" />
                {car.rating?.toFixed(1) || "N/A"}({car.numberOfReviews || 0}{" "}
                Reviews)
                {" ,"}
              </span>
              <span className="text-green-600 flex">
                <CheckCircle2 className="w-4 h-4 mr-1" />
                Verified Listing
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Details */}
      <div className="border border-primary-200 rounded-xl p-6 mb-6">
        <div className="flex justify-between items-center gap-4 px-5">
          <div>
            <div className="text-sm text-gray-500 font-michroma">
              Daily Rent
            </div>
            <div className="font-semibold font-michroma">
              MAD {car.pricePerDay.toLocaleString()}
            </div>
          </div>
            <div className="border-l border-primary-700 h-10"></div>
          <div>
            <div className="text-sm text-gray-500 font-michroma">Seats</div>
            <div className="font-semibold font-michroma">{car.seats}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500 font-michroma">Transmission</div>
            <div className="font-semibold font-michroma">{car.transmission}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500 font-michroma">Car Type</div>
            <div className="font-semibold font-michroma">{car.carType}</div>
          </div>
        </div>
      </div>
      {/* Summary  */}
      <div className="my-16">
        <h2 className="text-xl font-semibold mb-5"> About {car.name}</h2>
      </div>
    </div>
  );
};

export default CarOverview;
