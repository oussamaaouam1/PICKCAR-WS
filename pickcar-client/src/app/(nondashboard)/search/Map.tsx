"use client";
import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useAppSelector } from "@/state/redux";
import { useGetCarsQuery } from "@/state/api";
import { Car } from "@/types/prismaTypes";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN as string;

// Helper to offset duplicate coordinates
function offsetCoordinates(cars: Car[]) {
  const coordMap = new Map<string, number>();
  return cars.map(car => {
    const key = `${car.location.coordinates.longitude},${car.location.coordinates.latitude}`;
    const count = coordMap.get(key) || 0;
    coordMap.set(key, count + 1);

    // Offset by up to ±0.0001 per duplicate
    const offset = 0.0003 * count;
    return {
      ...car,
      location: {
        ...car.location,
        coordinates: {
          longitude: car.location.coordinates.longitude + offset,
          latitude: car.location.coordinates.latitude + offset,
        }
      }
    };
  });
}

const CarMap = () => {
  const mapContainerRef = useRef(null);
  const filters = useAppSelector((state) => state.global.filters);
  const {
    data: cars,
    isLoading,
    isError,
  } = useGetCarsQuery(filters);
  console.log("cars",cars)

  useEffect(() => {
    if (isLoading || isError || !cars) return;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current!,
      style: "mapbox://styles/oussamaaouam/cmbxqauju018u01qwacbjd0za",
      center: filters.coordinates || [-7.589843, 33.573110], // Casablanca coordinates [lng, lat]
      zoom: 11,
    });

    // Offset duplicate coordinates
    const offsetCars = offsetCoordinates(cars);

    offsetCars.forEach((car) => {
      const marker = createPropertyMarker(car, map);
      const markerElement = marker.getElement();
      const path = markerElement.querySelector("path[fill='#3FB1CE']");
      if (path) path.setAttribute("fill", "#46b9B0");
    });

    const resizeMap = () => {
      if (map) setTimeout(() => map.resize(), 700);
    };
    resizeMap();

    return () => map.remove();
  }, [isLoading, isError, cars, filters.coordinates]);

  if (isLoading) return <>Loading...</>;
  if (isError || !cars) return <div>Failed to fetch properties</div>;

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

const createPropertyMarker = (car: Car, map: mapboxgl.Map) => {
  const marker = new mapboxgl.Marker()
    .setLngLat([
      car.location.coordinates.longitude,
      car.location.coordinates.latitude,
    ])
    .setPopup(
      new mapboxgl.Popup().setHTML(
        `
        <div class="marker-popup">
          <div class="marker-popup-image"></div>
          <div>
            <a href="/search/${car.id}" target="_blank" class="marker-popup-title">${car.name}</a>
            <p class="marker-popup-price">
              MAD ${car.pricePerDay}
              <span class="marker-popup-price-unit"> / Day</span>
            </p>
          </div>
        </div>
        `
      )
    )
    .addTo(map);
  return marker;
};

export default CarMap;
