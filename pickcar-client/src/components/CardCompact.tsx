import { CarIcon, Cog, Heart, Star, User2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const CardCompact = ({
  car,
  onFavoriteToggle,
  showFavoriteButton = true,
  carLink,
  isFavorite,
}: CardCompactProps) => {
  const [imgSrc, setImgSrc] = useState(
    car.photoUrls?.[0] || "/cartypes/suv3.jpg"
  );
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg w-full flex h-40 mb-5">
      <div className="relative w-1/3">
        {/* <div className="w-full h-48 relative"> */}
        <Image
          src={imgSrc}
          alt={car.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onError={() => setImgSrc("/placeholder.jpg")}
        />
        {/* </div> */}
      </div>
      <div className="w-2/3 p-4 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold font-michroma mb-1">
              {carLink ? (
                <Link
                  href={carLink}
                  className="hover:underline hover:text-primary-700 font-michroma"
                  scroll={false}
                >
                  {car.name}
                </Link>
              ) : (
                car.name
              )}
            </h2>
            {showFavoriteButton && (
              <button
                className="bg-white rounded-full p-1 "
                onClick={onFavoriteToggle}
              >
                <Heart
                  className={`w-4 h-4 ${
                    isFavorite ? "text-red-500 fill-red-500" : "text-gray-600 cursor-pointer hover:fill-red-500"
                  }`}
                />
              </button>
            )}
          </div>
          <p className="text-gray-600 mb-1 font-michroma text-sm">
            {car?.location?.address},{car?.location?.city}
          </p>
          <div className="flex  items-center text-sm">
            <Star className="w-3 h-3 text-yellow-400 mr-1" />
            <span className="font-semibold font-michroma">
              {car.rating.toFixed(1)}
            </span>
            <span className="text-gray-600 ml-1 font-michroma">
              ({car.numberOfReviews})
            </span>
            {/* <div className="flex items-center mb-2"></div> */}
          </div>
        </div>
        {/* <hr /> */}
        <div className="flex justify-between items-center text-gray-600 text-sm">
          <div className="flex gap-2 text-gray-600">
            <span className="flex items-center">
              <User2 className="w-4 h-4 mr-1" />
              {car.seats}
            </span>
            <span className="flex items-center">
              <Cog className="w-4 h-4 mr-1 font-michroma" />
              {car.transmission}
            </span>
            <span className="flex items-center">
              <CarIcon className="w-4 h-4 mr-1" />
              {car.carType}
            </span>
          </div>
          <p className="text-base font-bold font-michroma">
            MAD{car.pricePerDay}
            <span className="text-gray-600  font-normal text-xs font-michroma">
              {" "}
              /Day
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardCompact;
