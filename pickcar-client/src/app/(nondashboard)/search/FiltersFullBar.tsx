import { FiltersState, initialState, setFilters } from "@/state";
import { useAppSelector } from "@/state/redux";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { debounce } from "lodash";
import { cleanParams, cn, formatEnumString } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import {
  CarFeatureEnum,
  CarFeatureIcons,
  CarTypeEnum,
  CarTypeIcons,
} from "@/lib/constants";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

const FiltersFullBar = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();
  // const filters = useAppSelector((state) => state.global.filters);
  const [localFilters, setLocalFilters] = useState(initialState.filters);
  const isFiltersFullOpen = useAppSelector(
    (state) => state.global.isFiltersFullOpen
  );

  // updateUrl function to update the URL with the current filters
  const updateURL = debounce((newFilters: FiltersState) => {
    const cleanFilters = cleanParams(newFilters);
    const updatedSearchParams = new URLSearchParams();

    Object.entries(cleanFilters).forEach(([key, value]) => {
      updatedSearchParams.set(
        key,
        Array.isArray(value) ? value.join(",") : value.toString()
      );
    });
    router.push(
      `${pathname}?${updatedSearchParams.toString()}`
      // { scroll: false,}
    );
  });

  const handleSubmit = () => {
    dispatch(setFilters(localFilters));
    updateURL(localFilters);
  };
  const handleReset = () => {
    setLocalFilters(initialState.filters);
    dispatch(setFilters(initialState.filters));
    updateURL(initialState.filters);
  };

  const handleCarFeatureChange = (feature: CarFeatureEnum) => {
    setLocalFilters((prev) => ({
      ...prev,
      carFeature: prev.carFeature.includes(feature)
        ? prev.carFeature.filter((f) => f !== feature)
        : [...prev.carFeature, feature],
    }));
  };

  const handleLocationSearch = async () => {
    try {
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
          localFilters.location
        )}.json?access_token=${
          process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
        }&fuzzyMatch=true`
      );
      const data = await response.json();
      if (data.features && data.features.length > 0) {
        const [lng, lat] = data.features[0].center;
        setLocalFilters((prev) => ({
          ...prev,
          coordinates: [lng, lat],
        }));
      }
      // Update the URL with the new location and coordinates
    } catch (error) {
      console.error("Error fetching location data:", error);
    }
  }
    if (!isFiltersFullOpen) return null;

    return (
      <div className="bg-white rounded-lg px-4 h-full overflow-auto pb-10 ">
        <div className="flex flex-col space-y-6">
          {/* location */}
          <div className="">
            <h4 className="font-bold font-michroma mb-2">Location</h4>
            <div className="flex items-center">
              <Input
                placeholder="Enter location"
                value={localFilters.location}
                onChange={(e) =>
                  setLocalFilters((prev) => ({
                    ...prev,
                    location: e.target.value,
                  }))
                }
                className="rounded-l-xl rounded-r-none border-r-0"
              />
              <Button
                onClick={handleLocationSearch}
                className="rounded-r-xl rounded-l-none border-l-none border-primary-700 shadow-none border hover:bg-primary-700 hover:text-white cursor-pointer"
              >
                <Search className="h-4 w-4 " />
              </Button>
            </div>
          </div>
        </div>
        {/* Car type */}
        <div className="">
          <h4 className="font-bold font-michroma my-2">Car type</h4>
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(CarTypeIcons).map(([type, Icon]) => (
              <div
                key={type}
                className={cn(
                  "flex flex-col items-center justify-center p-2 border rounded-xl cursor-pointer",
                  localFilters.carType === type
                    ? "border-primary-700 bg-primary-700 text-white transition-colors duration-300 ease-in-out"
                    : "border-gray-200 "
                )}
                onClick={() =>
                  setLocalFilters((prev) => ({
                    ...prev,
                    carType: type as CarTypeEnum,
                  }))
                }
              >
                <Icon className="w-6 h-6 mb-2 " />
                <span className="text-sm font-michroma">{type}</span>
              </div>
            ))}
          </div>
        </div>
        {/* price range */}
        <div>
          <h4 className="font-bold my-4 font-michroma text-xs">
            Price range (Daily)
          </h4>
          <Slider
            min={0}
            max={2000} //to be changed in case of increasing  pricing  cases
            step={50}
            value={[
              localFilters.priceRange[0] ?? 0,
              localFilters.priceRange[1] ?? 2000,
            ]}
            onValueChange={(value) =>
              setLocalFilters((prev) => ({
                ...prev,
                priceRange: value as [number, number],
              }))
            }
            className="text-primary-700"
          />
          <div className="flex justify-between mt-2 font-michroma font-bold text-xs">
            <span>MAD {localFilters.priceRange[0] ?? 0}</span>
            <span>MAD {localFilters.priceRange[1] ?? 2000}</span>
          </div>
        </div>

        {/* Number of seats */}
        <div>
          <h4 className="font-bold my-4 font-michroma text-xs">
            Number of seats
          </h4>
          <Slider
            min={2}
            max={9}
            step={1}
            value={[parseInt(localFilters.seats || "2")]}
            onValueChange={(value) =>
              setLocalFilters((prev) => ({
                ...prev,
                seats: value[0].toString(),
              }))
            }
            className="text-primary-700"
          />
          <div className="flex justify-between mt-2 font-michroma font-bold text-xs">
            <span>{localFilters.seats || "2"} seats</span>
            <span>9 seats</span>
          </div>
        </div>
        <div>
          <h4 className="font-bold my-4 font-michroma text-xs">Car features</h4>
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(CarFeatureIcons).map(([feature, Icon]) => (
              <div
                key={feature}
                className={cn(
                  "flex flex-col items-center justify-center p-2 border rounded-xl cursor-pointer",
                  localFilters.carFeature.includes(feature as CarFeatureEnum)
                    ? "border-primary-700 bg-primary-700 text-white transition-colors duration-300 ease-in-out"
                    : "border-gray-200"
                )}
                onClick={() =>
                  handleCarFeatureChange(feature as CarFeatureEnum)
                }
              >
                <Icon className="w-5 h-5 hover:cursor-pointer" />
                <Label className="hover:cursor-pointer">
                  {formatEnumString(feature)}
                </Label>
              </div>
            ))}
          </div>
        </div>
        {/* Available From */}
        <div>
          <h4 className="font-bold my-4 font-michroma text-xs">
            available From
          </h4>
          <Input
            type="date"
            value={
              localFilters.availableFrom !== "any"
                ? localFilters.availableFrom
                : ""
            }
            onChange={(e) =>
              setLocalFilters((prev) => ({
                ...prev,
                availableFrom: e.target.value ? e.target.value : "any",
              }))
            }
            className="rounded-xl  w-auto"
          />
        </div>
        {/* Apply and Reset Buttons */}
        <div className="flex gap-4 mt-6">
          <Button
            onClick={handleSubmit}
            className="flex-1 bg-primary-700 text-white rounded-xl cursor-pointer hover:bg-secondary-500 hover:text-black font-michroma tracking-widest"
          >
            APPLY FILTERS
          </Button>
          <Button
            onClick={handleReset}
            className="flex-1 bg-primary-250 text-white rounded-xl cursor-pointer hover:bg-primary-600  font-michroma tracking-widest"
          >
            RESET FILTERS
          </Button>
        </div>
      </div>
    );
  };

export default FiltersFullBar;
