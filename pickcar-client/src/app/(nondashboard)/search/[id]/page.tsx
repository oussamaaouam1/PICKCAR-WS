"use client";
import { useGetAuthUserQuery } from "@/state/api";
import { useParams } from "next/navigation";
import React from "react";
import ImagePreviews from "./ImagePreviews";
import CarOverview from "./CarOverview";
import CarDetails from "./CarDetails";
import CarLocation from "./CarLocation";
import ContactWidget from "./ContactWidget";
import ApplicationModal from "./ApplicationModal";

const SingleListing = () => {
  const { id } = useParams();
  const carId = Number(id);
  const { data: authUser } = useGetAuthUserQuery();
  const [IsModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <div className="">
      {/* This is where you would fetch and display the details of a single listing */}
      <ImagePreviews
        images={["/singlelisting-2.jpg", "/singlelisting-3.jpg"]}
      />
      <div className="flex flex-col md:flex-row justify-center gap-10 mx-10 md:w-2/3 md:mx:auto mt-16 mb-8">
        <div className="order-2 md:order-1">
          <CarOverview carId={carId} />
          <CarDetails carId={carId} />
          <CarLocation carId={carId} />
        </div>
        <div className="order-1 md:order-2">
          <ContactWidget onOpenModal={() => setIsModalOpen(true)} />
        </div>
      </div>
      {authUser && (
        <ApplicationModal
          isOpen={IsModalOpen}
          onClose={() => setIsModalOpen(false)}
          carId={carId}
        />
      )}
    </div>
  );
};

export default SingleListing;
