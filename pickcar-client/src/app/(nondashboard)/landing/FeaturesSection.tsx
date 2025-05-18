/* eslint-disable @next/next/no-img-element */
"use client"
import {  CarFront, CircleDollarSign, Smile } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const Slideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const images = [
    '/images/img1.webp',
    '/images/img2.webp', 
    '/images/img3.jpg',
    '/images/img4.jpg'
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <img 
      src={images[currentImageIndex]}
      alt="Car slideshow"
      className="w-full h-full object-cover"
    />
  );
};

// Animation variants for the container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      // Stagger children animations
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

// Animation variants for each feature item
const itemVariants = {
  hidden: { 
    opacity: 0,
    y: 20 // Start slightly below final position
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

const FeaturesSection = () => {
  return (
    <div className="relative min-h-screen w-full">
      <div className="flex items-center justify-center h-screen">
        <motion.div 
          className="relative max-w-7xl w-4/5 h-9/12 bg-secondary-50 items-center rounded-4xl p-4 sm:min-w-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between h-full">
            <div className="w-full lg:w-1/2 text-center lg:text-left lg:ml-80">
              <motion.h1 
                className="font-michroma text-xl"
                variants={itemVariants}
              >
                <span className="font-merase text-primary-250">PICKCAR</span> is
                a new way
                <br />
                to <span className="text-primary-700">rent a car</span>
              </motion.h1>
              <motion.div 
                className="flex flex-col items-center lg:items-start justify-center mt-4 space-x-2 lg:py-10"
                variants={itemVariants}
              >
                <h1 className="text-center font-bold font-michroma flex items-center justify-center gap-2">
                  <Smile className="text-primary-700 text-left" />
                  New way to rent a car
                </h1>
                <p className="text-center text-sm font-michroma text-gray-600">
                  choose from a massive cars available in your service near you
                  in few clicks.
                </p>
              </motion.div>
              <motion.div 
                className="flex flex-col items-center lg:items-start justify-center mt-4 space-x-2 lg:py-10"
                variants={itemVariants}
              >
                <h1 className="text-center font-bold font-michroma flex items-center justify-center gap-2">
                  <CircleDollarSign className="text-primary-700 text-left" />
                  Provide the best pricing
                </h1>
                <p className="text-center text-sm font-michroma text-gray-600">
                  Flexible pricing options to suit your budget without
                  compromising quality.
                </p>
              </motion.div>
              <motion.div 
                className="flex flex-col items-center lg:items-start justify-center mt-4 space-x-2 lg:py-10"
                variants={itemVariants}
              >
                <h1 className="text-center font-bold font-michroma flex items-center justify-center gap-2">
                  <CarFront className="text-primary-700 text-left" />
                  Cars for your every need{" "}
                </h1>
                <p className="text-center text-sm font-michroma text-gray-600">
                  Explore a different types of cars based on your needs
                </p>
              </motion.div>
            </div>
            <motion.div 
              className="w-full mt-8 lg:mt-0 lg:absolute lg:w-5/12 lg:h-11/12 lg:-left-58 lg:top-[4%] rounded-4xl overflow-hidden"
              variants={itemVariants}
            >
              <Slideshow />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturesSection;
