import { CarIcon, Cog, Heart, Star, User2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Card = ({
  car,
  onFavoriteToggle,
  showFavoriteButton = true,
  carLink,
  isFavorite,
}: CardProps) => {
  const [imgSrc, setImgSrc] = useState(
    car.photoUrls?.[0] || "/cartypes/suv3.jpg"
  );
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg w-full mb-5">
      <div className="relative">
        <div className="w-full h-48 relative">
          <Image
            src={imgSrc}
            alt={car.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={() => setImgSrc("/placeholder.jpg")}
          />
        </div>
        {showFavoriteButton && (
          <button
            className="absolute bottom-4 right-4 bg-white hover:bg-white/90 rounded-full p-2 cursor-pointer"
            onClick={onFavoriteToggle}
          >
            <Heart
              className={`w-5 h-5 ${
                isFavorite ? "text-red-500 fill-red-500" : "text-gray-600"
              }`}
            />
          </button>
        )}
        </div>
        
        <div className="p-4">
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
          <p className="text-gray-600 mb-2 font-michroma">
            {car?.location?.address},{car?.location?.city}
          </p>
          <div className="flex justify-between items-center">
            <div className="flex items-center mb-2">
              <Star className="w-4 h-4 text-yellow-400 mr-1" />
              <span className="font-semibold font-michroma">
                {car.rating.toFixed(1)}
              </span>
              <span className="text-gray-600 ml-1 font-michroma">
                ({car.numberOfReviews} Reviews)
              </span>
            </div>
            <p className="text-lg font-bold mb-3 font-michroma">
              MAD{car.pricePerDay}{" "}
              <span className="text-gray-600 text-base font-normal font-michroma">
                {" "}
                /Day 
              </span>
            </p>
          </div>
          <hr />
          <div className="flex justify-between items-center gap-4 text-gray-600 mt-5">
            <span className="flex items-center">
              <User2 className="w-5 h-5 mr-2" />
              {car.seats}
            </span>
            <span className="flex items-center">
              <Cog className="w-5 h-5 mr-2 font-michroma" />
              {car.transmission}
            </span>
            <span className="flex items-center">
              <CarIcon className="w-5 h-5 mr-2" />
              {car.carType}
            </span>
          </div>
        </div>
      
    </div>
  );
};

export default Card;
