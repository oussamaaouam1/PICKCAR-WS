import { Button } from "@/components/ui/button";
import { CircleArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const InfoSection = () => {
  return (
    <div className="flex items-center justify-center  w-full py-20 px-4  ">
      <div className="relative max-w-3xl w-full mx-auto lg:ml-[25%]">
        <Image
          src="/info.jpg"
          alt="Landing Image"
          width={500}
          height={500}
          className="w-full h-full object-cover rounded-4xl"
        />
        <div
          className="absolute bg-white w-full sm:w-4/5 md:w-3/4 lg:w-[500px] rounded-4xl p-4 
                    lg:top-[80%] lg:-right-[150%] 
                    md:top-[80%] md:left-1/2 md:-translate-x-1/2
                    sm:top-[90%] sm:left-1/2 sm:-translate-x-1/2
                    top-[95%] left-1/2 -translate-x-1/2
                    transform -translate-y-1/2 
                    flex flex-col items-center justify-center text-center 
                    shadow-lg border border-black py-6 sm:py-9 px-4 sm:px-10
                    mx-auto"
        >
          <h1 className="font-michroma text-2xl sm:text-3xl">
            Have a car without having a car
          </h1>
          <p className="font-michroma text-lg sm:text-xl mt-4">
            Get access to a car nearby that&apos;s ready to drive. Go for a day or a
            week - just return the car when you&apos;re done. Easy, right?
          </p>
          <Button className="bg-white text-primary-700 font-michroma rounded-4xl px-4 p-5 mt-7 hover:bg-primary-700 transition duration-300 ease-in-out border border-primary-700 hover:text-white cursor-pointer font-bold tracking-widest">
            See how it works
            <CircleArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
