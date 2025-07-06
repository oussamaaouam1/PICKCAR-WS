import { CarFeatureEnum, CarFeatureIcons, CarTypeEnum, CarTypeIcons } from "@/lib/constants";
import { formatEnumString } from "@/lib/utils";
import { useGetCarQuery } from "@/state/api";
// import { CarFeature } from "@/types/prismaTypes";
import { HelpCircle } from "lucide-react";
import React from "react";

const CarDetails = ({ carId }: CarDetailsProps) => {
  const { data: car, isError, isLoading } = useGetCarQuery(carId);
  if (isLoading) return <>Loading ...</>;
  if (isError || !car) {
    return <>Car not found !</>;
  }
  console.log("car",car)
  return (
    <div className="mb-6">
      {/* car features */}
      <div>
        <h2 className="text-xl font-semibold my-3 font-michroma">
          car Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {car.carFeatures.map((CarFeature: CarFeatureEnum) => {
            const Icon =
              CarFeatureIcons[CarFeature as CarFeatureEnum] || HelpCircle;
            return (
              <div
                className="flex flex-col items-center border rounded-xl py-8 px-4"
                key={CarFeature}
              >
                <Icon className="w-8 h-8 mb-2 text-gray-700 " />
                <span className="text-sm text-center text-gray-700 font-michroma">
                  {formatEnumString(CarFeature)}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* car type */}
      {/* car type */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold my-3 font-michroma">Car Type</h2>
        <div className="flex items-center gap-4 border rounded-xl py-6 px-4 w-fit">
          {(() => {
            const TypeIcon =
              CarTypeIcons[car.carType as CarTypeEnum] || HelpCircle;
            return <TypeIcon className="w-8 h-8 text-gray-700" />;
          })()}
          <span className="text-lg text-gray-700 font-michroma">
            {car.carType}
          </span>
        </div>
      </div>

      {/* brand and fuel type */}
        <h3 className="text-xl font-semibold font-michroma my-8">
          Technical features
        </h3>
      <div className="mt-8 flex gap-8">

        <div>
          <h3 className="text-md font-semibold font-michroma">Brand</h3>
          <span className="text-gray-700 font-michroma">{car.brand}</span>
        </div>
        <div>
          <h3 className="text-md font-semibold font-michroma">Fuel Type</h3>
          <span className="text-gray-700 font-michroma">{car.fuelType}</span>
        </div>
        <div>
          <h3 className="text-md font-semibold font-michroma">Transmission</h3>
          <span className="text-gray-700 font-michroma">{car.transmission}</span>
        </div>
      </div>
        
      {/* availability */}
      <div className="mt-8">
        <h3 className="text-md font-semibold font-michroma">Availability</h3>
        <span className="text-gray-700 font-michroma">
          {new Date(car.availableFrom).toLocaleDateString()} -{" "}
          {new Date(car.availableTo).toLocaleDateString()}
        </span>
      </div>
    </div>
  );
};

export default CarDetails;
