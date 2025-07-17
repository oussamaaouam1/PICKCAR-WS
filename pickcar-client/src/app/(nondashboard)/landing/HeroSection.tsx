"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CalendarDays, MapPin, Search } from "lucide-react";
// import dynamic from "next/dynamic";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen w-full">
      <Image
        src="/heroBG.jpg"
        alt="hero image"
        fill
        className="object-cover object-center brightness-95"
        priority={true}
      />
      <div className="absolute inset-0 bg-black/40"></div>
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-5xl w-full mx-auto text-center mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-merase font-bold text-white mb-4">
            Your Trusted{" "}
            <span className="text-primary-700">Car Rental Partner</span>
          </h1>
          <h2 className="font-michroma text-base sm:text-lg md:text-2xl text-white font-medium mb-12">
            Rent a Car in Just a Few Clicks
          </h2>
        </div>

        <div className="w-full max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-2 sm:p-4 flex flex-col sm:flex-row gap-4">
            <div className="flex-1 flex items-center space-x-2 border-b sm:border-b-0 sm:border-r border-gray-200 p-2">
              <MapPin className="text-primary-700 w-5 h-5 flex-shrink-0" />
              <Input
                type="text"
                placeholder="Pickup Location"
                className="bg-transparent border-none focus:ring-0 focus:outline-none text-gray-900 placeholder-gray-500"
              />
            </div>

            <div className="flex-1 flex items-center space-x-2 border-b sm:border-b-0 sm:border-r border-gray-200 p-2">
              <CalendarDays className="text-primary-700 w-5 h-5 flex-shrink-0" />
              <Input
                type="text"
                placeholder="Pickup date"
                className="bg-transparent border-none focus:ring-0 focus:outline-none text-gray-900 placeholder-gray-500"
              />
            </div>

            <div className="flex-1 flex items-center space-x-2 border-b sm:border-b-0 sm:border-r border-gray-200 p-2">
              <CalendarDays className="text-primary-700 w-5 h-5 flex-shrink-0" />
              <Input
                type="text"
                placeholder="Return date"
                className="bg-transparent border-none focus:ring-0 focus:outline-none text-gray-900 placeholder-gray-500"
              />
            </div>

            <Button className="w-full sm:w-auto bg-primary-700 text-white font-semibold rounded-xl hover:bg-primary-800 transition duration-300 ease-in-out py-6 cursor-pointer">
              <Search className="w-5 h-5 sm:mr-2" />
              <a href="http://localhost:3000/search" className="hidden sm:inline">Search</a>
            </Button>
          </div>
        </div>
        <div>
          <h1>Discover our IOS and Android application</h1>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
