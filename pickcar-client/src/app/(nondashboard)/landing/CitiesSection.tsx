"use client";
import Image from "next/image";
import React, { useState } from "react"; // Add useState import
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { setFilters } from "@/state";

// Animation variants for the container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      // Stagger children animations with a longer delay for dramatic effect
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

// Animation variants for the title
const titleVariants = {
  hidden: {
    opacity: 0,
    y: -50, // Start above final position
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

// Animation variants for each city card
const cityVariants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
    rotate: -10, // Start slightly rotated
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
    },
  },
  hover: {
    scale: 1.05,
    rotate: 2,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

const CitiesSection = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState(""); // Add searchQuery state

  const handleLocationSearch = async (cityName: string) => {
    try {
      if (!cityName) return;

      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
          cityName
        )}.json?access_token=${
          process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
        }&fuzzyMatch=true`
      );
      const data = await response.json();
      if (data.features && data.features.length > 0) {
        const [lng, lat] = data.features[0].center;
        dispatch(
          setFilters({
            location: cityName,
            coordinates: [lng, lat],
          })
        );
        const params = new URLSearchParams({
          location: cityName,
          lat: lat.toString(),
          lng: lng, // Convert lng to string
        });
        router.push(`/search?${params.toString()}`);
      }
    } catch (error) {
      console.error("error search location: ", error);
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <motion.h1
        className="text-4xl text-center font-michroma font-semibold tracking-wider m-auto py-10"
        variants={titleVariants}
      >
        Available all over Moroccan Kingdom
      </motion.h1>
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4 p-5 py-10 md:max-w-10/12 m-auto"
        variants={containerVariants}
      >
        {[
          { name: "Marrakech", image: "/cities/Marrakech.jpg" },
          { name: "Tangier", image: "/cities/Tanger.jpg" },
          { name: "Rabat", image: "/cities/Rabat.jpg" },
          { name: "Ouarzazate", image: "/cities/Ouarzazate.jpg" },
          { name: "Essaouira", image: "/cities/Essaouira.jpeg" },
          { name: "Casablanca", image: "/cities/Casablanca.jpeg" },
          { name: "Fes", image: "/cities/Fes.jpg" },
          { name: "Agadir", image: "/cities/Agadir.jpeg" },
          { name: "Chefchaouen", image: "/cities/Chefchaouen.jpeg" },
          { name: "Meknes", image: "/cities/Meknes.jpeg" },
        ].map((city, index) => (
          <motion.div
            key={city.name}
            className="flex flex-col lg:flex-row items-center justify-center gap-2.5 cursor-pointer text-center"
            variants={cityVariants}
            whileHover="hover"
            custom={index}
            onClick={() => handleLocationSearch(city.name)} // Add onClick handler
          >
            <Image
              src={city.image}
              alt={`${city.name} pic`}
              width={150}
              height={150}
              className="rounded-4xl"
            />
            <p className="font-michroma font-semibold tracking-wider min-w-[112px]">
              {city.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
      <div className="flex justify-center w-full my-8">
        <div className="w-4/5 h-1 bg-gray-300"></div>
      </div>
    </motion.div>
  );
};

export default CitiesSection;
