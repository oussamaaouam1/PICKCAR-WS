import React from "react";
import { useAppSelector } from "@/state/redux";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { FiltersState, setFilters } from "@/state";
import { debounce } from "lodash";
import { cleanParams } from "@/lib/utils";
const FiltersBar = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();
  const filters = useAppSelector((state) => state.global.filters);
  const isFiltersFullOpen = useAppSelector(
    (state) => state.global.isFiltersFullOpen
  );
  const viewMode = useAppSelector((state) => state.global.viewMode);
  const [searchInput, setsearchInput] = React.useState<string>(
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
    if (key === "priceRange" || key === "seats") {
      const currentArrayRange = [...filters[key]];
      if (isMin !== null) {
        const index = isMin ? 0 : 1;
        currentArrayRange[index] = value === "any" ? null : Number(value);
      }
      newValue = currentArrayRange;
    } else if (key === "coordinates") {
      newValue = value === "any" ? [0, 0] : value.map(Number);
    } else {
      newValue = value === "any" ? "any" : value;
    }
    const newFilters = {
      ...filters,
      [key]: newValue,
    };
    dispatch(setFilters(newFilters));
    updateURL(newFilters);
  };
  return <div className="flex justify-between items-center w-full py-5">
    {/* Filters */}
    <div className="flex justify-between items-center gap-4 p-2">
      
    </div>
  </div>;
};
export default FiltersBar;
