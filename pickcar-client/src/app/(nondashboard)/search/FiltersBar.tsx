import React from "react";
import { useAppSelector } from "@/state/redux";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { FiltersState, setFilters, setViewMode, toggleFiltersFullOpen } from "@/state";
import { debounce } from "lodash";
import { cleanParams, cn, formatPriceValue } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Filter, Grid, List, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CarTypeIcons } from "@/lib/constants";
const FiltersBar = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();
  const filters = useAppSelector((state) => state.global.filters);
  const isFiltersFullOpen = useAppSelector(
    (state) => state.global.isFiltersFullOpen
  );
    // const [localFilters, setLocalFilters] = React.useState(initialState.filters);
  
  const viewMode = useAppSelector((state) => state.global.viewMode);
  const [searchInput, setSearchInput] = React.useState<string>(
    filters.location
  );
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

  const handleFilterChange = (
    key: string,
    value: any,
    isMin: boolean | null
  ) => {
    let newValue = value;
    if (key === "priceRange"
      // || key === "seats"
    ) {
      const currentArrayRange = [...filters[key]];
      if (isMin !== null) {
        const index = isMin ? 0 : 1;
        currentArrayRange[index] = value === "any" ? null : Number(value);
      }
      newValue = currentArrayRange;
    } else if (key === "coordinates") {
      newValue = value === "any" ? [0, 0] : value.map(Number);
    }else if (key === "seats") {
    newValue = value === "any" ? null : Number(value);
  }else {
      newValue = value === "any" ? "any" : value;
    }
    const newFilters = {
      ...filters,
      [key]: newValue,
    };
    dispatch(setFilters(newFilters));
    updateURL(newFilters);
  };

  const handleLocationSearch = async () => {
    try {
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
          searchInput
        )}.json?access_token=${
          process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
        }&fuzzyMatch=true`
      );
      const data = await response.json();
      if (data.features && data.features.length > 0) {
        const [lng, lat] = data.features[0].center;
        dispatch(
        setFilters({
          location:searchInput,
          coordinates: [lng, lat],
        }))
      }
      console.log("Location data fetched successfully:", data);
      
    } catch (error) {
      console.error("Error fetching location data:", error);
    }
  };

  return (
    <div className="flex justify-between items-center w-full py-5 font-michroma">
      {/* Filters */}
      <div className="flex justify-between items-center gap-4 p-2">
        {/* All Filters */}
        <Button
          variant="outline"
          className={cn(
            "gap-2 rounded-xl border-primary-700 hover:bg-primary-700 hover:text-white cursor-pointer",
            isFiltersFullOpen &&
              "bg-primary-250 text-primary-100 border border-primary-250"
          )}
          onClick={() => dispatch(toggleFiltersFullOpen())}
        >
          <Filter className="h-4 w-4" />
          <span>All Filters</span>
        </Button>
        {/* Search location Input */}
        <div className="flex items-center gap-3">
          <div className="flex">
            <Input
              placeholder="Search location"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="w-40 rounded-l-xl rounded-r-none border-secondary-900 border-r-0 "
            />
            <Button
              onClick={handleLocationSearch}
              className="rounded-r-xl rounded-l-none border-l-none border-primary-700 shadow-none border hover:bg-primary-700 hover:text-white cursor-pointer"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
          {/* Price Range */}
          <div className="flex gap-1 ">
            {/* Minium Price Selector */}
            <Select
              value={filters.priceRange[0]?.toString() || "any"}
              onValueChange={(value) =>
                handleFilterChange("priceRange", value, true)
              }
            >
              <SelectTrigger className=" rounded-xl  border-secondary-900 cursor-pointer">
                <SelectValue>
                  {formatPriceValue(filters.priceRange[0], true)}
                </SelectValue>
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="any" className="cursor-pointer">
                  {" "}
                  Any Min Price
                </SelectItem>
                {[100, 200, 300, 400, 500, 600, 700, 800, 900, 1000].map(
                  (price) => (
                    <SelectItem
                      key={price}
                      value={price.toString()}
                      className="cursor-pointer"
                    >
                      MAD {price}
                    </SelectItem>
                  )
                )}
              </SelectContent>
            </Select>
            {/* Maximum Price Selector */}
            <Select
              value={filters.priceRange[0]?.toString() || "any"}
              onValueChange={(value) =>
                handleFilterChange("priceRange", value, false)
              }
            >
              <SelectTrigger className=" rounded-xl  border-secondary-900 cursor-pointer">
                <SelectValue>
                  {formatPriceValue(filters.priceRange[1], false)}
                </SelectValue>
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="any" className="cursor-pointer">
                  {" "}
                  Any Max Price
                </SelectItem>
                {[100, 200, 300, 400, 500, 600, 700, 800, 900, 1000].map(
                  (price) => (
                    <SelectItem
                      key={price}
                      value={price.toString()}
                      className="cursor-pointer"
                    >
                      MAD {price}
                    </SelectItem>
                  )
                )}
              </SelectContent>
            </Select>
          </div>
          {/* seats */}
          <div className="flex gap-1 ">
            {/* seats selector */}
            <Select
              value={filters.seats?.toString() || "any"}
              onValueChange={(value) =>
                handleFilterChange("seats", value, null)
              }
            >
              <SelectTrigger className="rounded-xl border-secondary-900 cursor-pointer">
                <SelectValue placeholder="Seats">
                  {filters.seats === null || filters.seats === "any"
                    ? "Any number of seats"
                    : `${filters.seats} Seats`}
                </SelectValue>
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="any" className="cursor-pointer">
                  Any number of seats
                </SelectItem>
                {Array.from({ length: 8 }, (_, i) => i + 2).map((seats) => (
                  <SelectItem
                    key={seats}
                    value={seats.toString()}
                    className="cursor-pointer"
                  >
                    {seats} Seats
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {/* Car Type */}
          <div className="flex gap-1 ">
            {/* seats selector */}
            <Select
              value={filters.carType || "any"}
              onValueChange={(value) =>
                handleFilterChange("carType", value, null)
              }
            >
              <SelectTrigger className=" rounded-xl  border-secondary-900 cursor-pointer">
                <SelectValue placeholder="Car Type" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="any" className="cursor-pointer">
                  Any Car Type
                </SelectItem>
                {Object.entries(CarTypeIcons).map(([type, Icon]) => (
                  <SelectItem key={type} value={type}>
                    <div className="flex items-center">
                      <Icon className="h-4 w-4 mr-2" />
                      <span>
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                      </span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {/* View Mode */}
          <div className="flex justify-between items-center gap-4 p-2">
            <div className="flex border rounded-xl">
              <Button
                variant="ghost"
                className={cn(
                  "px-3 py-1 rounded-none rounded-l-lg hover:bg-primary-700 hover:text-white cursor-pointer",
                  viewMode === "list" ? "bg-primary-250 text-white" : ""
                )}
                onClick={() => dispatch(setViewMode("list"))}
              >
                <List className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                className={cn(
                  "px-3 py-1 rounded-none rounded-r-lg hover:bg-primary-700 hover:text-white cursor-pointer",
                  viewMode === "grid" ? "bg-primary-250 text-white" : ""
                )}
                onClick={() => dispatch(setViewMode("grid"))}
              >
                <Grid className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FiltersBar;
