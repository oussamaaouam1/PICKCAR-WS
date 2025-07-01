"use client"
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const ImagePreviews = ({ images }: ImagePreviewsProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  return (
    <div className="relative h-[450px] w-full">
      {images.map((image, index) => (
        <div
          className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
          key={image}
        >
          <Image
            src={image}
            alt={`Car Image ${index + 1}`}
            fill
            priority={index == 0}
            className="object-cover cursor-pointer transform duration-500 ease-in-out"
          />
        </div>
      ))}
      <button
        onClick={handlePrev}
        className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-secondary-700 bg-opacity-50 p-2 rounded-full focus:outline-none   cursor-pointer hover:bg-primary-700"
        aria-label="Previous image"
      >
        <ChevronLeft className="text-white" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-secondary-700 bg-opacity-50 p-2 rounded-full focus:outline-none cursor-pointer hover:bg-primary-700"
        aria-label="Previous image"
      >
        <ChevronRight className="text-white" />
      </button>
    </div>
  );
};

export default ImagePreviews;
