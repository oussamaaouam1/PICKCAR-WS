"use client";
import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useAppSelector } from "@/state/redux";
import { useGetCarsQuery } from "@/state/api";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN as string;

const Map = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const filters = useAppSelector((state) => state.global.filters);
  const isFiltersFullOpen = useAppSelector(
    (state) => state.global.isFiltersFullOpen
  );
  const { data: cars, isLoading, isError } = useGetCarsQuery(filters);

  useEffect(() => {
    if (isLoading || isError || !cars || !mapContainerRef.current) return;

    // Initialize map only if it hasn't been initialized yet
    if (!mapRef.current) {
      mapRef.current = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: "mapbox://styles/oussamaaouam/cmbxqauju018u01qwacbjd0za",
        center: filters.coordinates || [33.5731, -7.6191],
        zoom: 10,
      });
    }

    // Handle resize with proper check for map instance
    const handleResize = () => {
      if (mapRef.current) {
        setTimeout(() => {
          mapRef.current?.resize();
        }, 700);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [isLoading, isError, cars, filters.coordinates]);

  return (
    <div className="basis-5/12 grow relative rounded-xl">
      <div
        className="map-container rounded-xl"
        ref={mapContainerRef}
        style={{
          height: "100%",
          width: "100%",
        }}
      />
    </div>
  );
};

export default Map;
