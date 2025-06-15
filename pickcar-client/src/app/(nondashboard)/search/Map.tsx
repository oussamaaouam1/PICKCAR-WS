'use client'
import React, { useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useAppDispatch, useAppSelector } from "@/state/redux";
import { useGetCarsQuery } from "@/state/api";
import { setFilters } from "@/state";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN as string;

const Map = () => {
  const mapContainerRef = useRef(null);
  const filters = useAppSelector((state) => state.global.filters);
  const isFiltersFullOpen = useAppSelector((state) => state.global.isFiltersFullOpen);
  const dispatch = useAppDispatch();



  // Clear coordinates from filters
  React.useEffect(() => {
    dispatch(setFilters({ coordinates: [null, null] }));
  }, [dispatch]);

  const {
    data: cars,
    isLoading,
    isError
  } =useGetCarsQuery(filters)
  console.log('cars',cars)

  return <div></div>;
};

export default Map;
