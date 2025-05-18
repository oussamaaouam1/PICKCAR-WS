"use client"
import Image from 'next/image';
import React from 'react'
import { motion } from 'framer-motion';

// Animation variants for the container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      // Stagger children animations with a delay
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

// Animation variants for each car type card
const cardVariants = {
  hidden: { 
    opacity: 0,
    y: 50, // Start below final position
    scale: 0.8 // Start slightly smaller
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      mass: 0.5
    }
  },
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

const CarTypes = () => {
  return (
    <motion.div
      className="bg-white py-20 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <motion.h1
        className="text-4xl text-center font-michroma font-semibold tracking-wider"
        variants={cardVariants}
      >
        A wide range of car types to choose from
      </motion.h1>
      <div>
        <div className="py-10 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8 max-w-3/4 mx-auto">
            <motion.div
              className="w-full md:w-1/3 bg-secondary-300 p-4 rounded-4xl shadow-lg cursor-pointer"
              variants={cardVariants}
              whileHover="hover"
            >
              <div>
                <Image
                  src="/cartypes/pickup.jpg"
                  alt="hero image"
                  width={500}
                  height={500}
                  className="object-cover object-center brightness-95 rounded-4xl shadow-lg"
                />
              </div>
              <h2 className="text-xl font-semibold text-center py-4">Pickup</h2>
            </motion.div>
            <motion.div
              className="w-full md:w-1/3 bg-secondary-300 p-4 rounded-4xl shadow-lg cursor-pointer"
              variants={cardVariants}
              whileHover="hover"
            >
              <div>
                <Image
                  src="/cartypes/suv3.jpg"
                  alt="hero image"
                  width={500}
                  height={500}
                  className="object-cover object-center brightness-95 rounded-4xl shadow-lg"
                />
              </div>
              <h2 className="text-xl font-semibold text-center py-4">SUV</h2>
              {/* <p className="mt-2">
                Experience luxury and comfort with our sedans.
              </p> */}
            </motion.div>
            <motion.div
              className="w-full md:w-1/3 bg-secondary-300 p-4 rounded-4xl shadow-lg cursor-pointer"
              variants={cardVariants}
              whileHover="hover"
            >
              <div>
                <Image
                  src="/cartypes/family.jpg"
                  alt="hero image"
                  width={500}
                  height={500}
                  className="object-cover object-center brightness-95 rounded-4xl shadow-lg"
                />
              </div>
              <h2 className="text-xl font-semibold text-center py-4">
                Family car
              </h2>
              {/* <p className="mt-2">Get the job done with our powerful trucks.</p> */}
            </motion.div>
            <motion.div
              className="w-full md:w-1/3 bg-secondary-300 p-4 rounded-4xl shadow-lg cursor-pointer"
              variants={cardVariants}
              whileHover="hover"
            >
              <div>
                <Image
                  src="/cartypes/commercial.jpg"
                  alt="hero image"
                  width={500}
                  height={500}
                  className="object-cover object-center brightness-95 rounded-4xl shadow-lg"
                />
              </div>
              <h2 className="text-xl font-semibold text-center py-4">
                Commercial
              </h2>
              {/* <p className="mt-2">Get the job done with our powerful trucks.</p> */}
            </motion.div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full my-8">
        <div className="w-4/5 h-1 bg-gray-300"></div>
      </div>
    </motion.div>
  );
}

export default CarTypes
