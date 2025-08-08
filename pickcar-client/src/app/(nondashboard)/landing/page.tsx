import React from "react";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import CarTypes from "./CarTypes";
import CitiesSection from "./CitiesSection";
// import InfoSection from "./InfoSection";
import Footer from "./Footer";
import InfoSection2 from "./InfoSection2";

const Landing = () => {
  return (
    <div className="overflow-hidden w-full">
      <HeroSection />
      <FeaturesSection />
      <CarTypes />
      <CitiesSection />
      {/* <InfoSection /> */}
      <InfoSection2 />
      <Footer />
    </div>
  );
};

export default Landing;
