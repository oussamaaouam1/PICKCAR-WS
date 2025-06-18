import { createSlice,PayloadAction } from "@reduxjs/toolkit";
// import { set } from "zod";
export interface FiltersState {
  location: string;
  seats: string;
  carType: string;
  carFeature: string[];
  availableFrom: string;
  priceRange: [number, number] |[null, null];
  coordinates: [number, number];
  carBrand: string;
  fuelType: string;
  transmission: string;
}
interface InitialStateTypes {
  filters: FiltersState;
  isFiltersFullOpen: boolean;
  viewMode: "grid" | "list"; // "grid" or "list"
}

export const initialState: InitialStateTypes = {
  filters: {
    location: "",
    seats: "any",
    // "any" is a placeholder for any number of seats
    carType: "any",
    carFeature: [],
    availableFrom: "any",
    priceRange:[null, null],
    coordinates: [-7.5, 33.5], // Default coordinates for Casablanca
    carBrand: "any",
    fuelType: "any",
    transmission: "any",
  },
  isFiltersFullOpen: false,
  viewMode: "grid", // "grid" or "list"
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setFilters: (state,action:PayloadAction<Partial<FiltersState>>) =>{
      if (action.payload.priceRange) {
        const [min, max] = action.payload.priceRange;
        if (min !== null && max !== null && min > max) {
          return; // Invalid price range
        }
      }
      state.filters = {
        ...state.filters,
        ...action.payload,
      };
    },
    toggleFiltersFullOpen: (state) => {
      state.isFiltersFullOpen = !state.isFiltersFullOpen;
    },
    setViewMode: (state, action: PayloadAction<"grid" | "list">) => {
      state.viewMode = action.payload;
    }
  },
});

export const {
  setFilters,
  toggleFiltersFullOpen,
  setViewMode
} = globalSlice.actions;

export default globalSlice.reducer;
