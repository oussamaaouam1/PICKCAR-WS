import { useGetCarQuery } from "@/state/api";
import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Compass, MapPin } from "lucide-react";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN as string;

const CarLocation = ({ carId }: CarDetailsProps) => {
  const { data: car, isError, isLoading } = useGetCarQuery(carId);
  const mapContainerRef = useRef(null);

  useEffect(() => {
    if (isLoading || isError || !car) return;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current!,
      style: "mapbox://styles/oussamaaouam/cmbxqauju018u01qwacbjd0za",
      center: [
        car.location.coordinates.longitude,
        car.location.coordinates.latitude,
      ],
      zoom: 14,
    });

    const marker = new mapboxgl.Marker()
      .setLngLat([
        car.location.coordinates.longitude,
        car.location.coordinates.latitude,
      ])
      .addTo(map);
    const markerElement = marker.getElement();
    const path = markerElement.querySelector("path[fill='#3FB1CE']");
    if (path) path.setAttribute("fill", "#46b9B0");

    return () => map.remove();
  }, [car, isError, isLoading]);
  if (isLoading) return <>Loading ...</>;
  if (isError || !car) {
    return <>Car not found !</>;
  }
  return (
    <div className="py-16 ">
      <h3 className="text-xl font-semibold text-primary-250 dark:text-primary-100 font-michroma">
        Map and Location
      </h3>
      <div className="flex justify-between  items-center text-sm text-primary-500 mt-2">
        <div className="flex items-center text-gray-500 font-michroma">
          <MapPin className="w-4 h-4 mr-1 text-gray-700" />
          Car Address :
          <span className="ml-2 font-semibold text-gray-700 font-michroma">
            {car.location.address || "Address not available"}
          </span>
        </div>
        <a
          href={`https://maps.google.com/?q=${encodeURIComponent(
            car.location?.address || ""
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-between items-center hover:underline gap-2 text-primary-500 font-michroma"
        >
          <Compass className="w-5 h-5" />
          Get Directions
        </a>
      </div>
      <div
        className="relative mt-4 h-48 md:h-56 max-h-1/4 max-w-2xl mx-auto rounded-xl border border-gray-200 shadow overflow-hidden bg-gray-100"
        ref={mapContainerRef}
      />
    </div>
  );
};

export default CarLocation;
