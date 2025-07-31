"use client";
import { CustomFormField } from "@/components/FormField";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import Header from "@/components/ui/Header";
import { CarFeatureEnum, CarTypeEnum } from "@/lib/constants";
import { CarFormData, carListingSchema } from "@/lib/schemas";
import { useCreateCarMutation, useGetAuthUserQuery } from "@/state/api";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Country, State, City } from "country-state-city";

// Type definitions for country-state-city
interface CountryType {
  name: string;
  isoCode: string;
}

interface StateType {
  name: string;
  isoCode: string;
  countryCode: string;
}

interface CityType {
  name: string;
  stateCode: string;
  countryCode: string;
}

const NewCar = () => {
  const [createCar] = useCreateCarMutation();
  const { data: authUser } = useGetAuthUserQuery();

  // Country, state and city dropdowns
  const [countries] = useState<CountryType[]>(Country.getAllCountries());
  const [states, setStates] = useState<StateType[]>([]);
  const [cities, setCities] = useState<CityType[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<CountryType | null>(null);
  const [selectedState, setSelectedState] = useState<StateType | null>(null);

  const handleCountryChange = (countryName: string) => {
    const country = countries.find((c) => c.name === countryName);
    if (country) {
      setSelectedCountry(country);
      const countryStates = State.getStatesOfCountry(country.isoCode);
      setStates(countryStates);
      setCities([]);
      setSelectedState(null);
    }
  };

  const handleStateChange = (stateCode: string) => {
    const state = states.find((s) => s.isoCode === stateCode);
    if (state && selectedCountry) {
      setSelectedState(state);
      const stateCities = City.getCitiesOfState(selectedCountry.isoCode, state.isoCode);
      setCities(stateCities);
    }
  };

  const form = useForm<CarFormData>({
    resolver: zodResolver(carListingSchema),
    defaultValues: {
      name: "",
      description: "",
      pricePerDay: 100,
      applicationFee: 20,
      carType: CarTypeEnum.SUV,
      fuelType: "combustion",
      transmission: "Automatic",
      brand: "",
      address: "",
      city: "",
      state: "",
      country: "",
      postalCode: "",
      seats: 2,
      carFeatures: "",
    },
  });

  const onSubmit = async (data: CarFormData) => {
    console.log("onSubmit called", data);
    if (!authUser?.cognitoInfo?.userId) {
      throw new Error("No manager ID found");
    }

    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      if (key === "imageUrls") {
        const files = value as File[];
        files.forEach((file: File) => {
          formData.append("images", file);
        });
      } else if (Array.isArray(value)) {
        formData.append(key, JSON.stringify(value));
      } else {
        formData.append(key, String(value));
      }
    });

    formData.append("managerCognitoId", authUser.cognitoInfo.userId);
    await createCar(formData);
    console.log(form.formState.errors);
  };

  return (
    <div className="dashboard-container max-w-7xl m-auto p-6">
      <Header
        title="Add New Car"
        subtitle="Create a New Car listing with detailed information"
      />
      <div className="bg-white rounded-xl p-6">
        <Form {...form}>
          <>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="p-4 space-y-10"
            >
              {/* basic Information */}
              <div>
                <h2 className="text-gl font-semibold mb-4 font-michroma">
                  Basic Information
                </h2>
                <div className="space-y-4">
                  <CustomFormField name="name" label="Car Name" />
                  <CustomFormField
                    name="description"
                    label="Description"
                    type="textarea"
                  />
                </div>
              </div>
              <hr className="my-6 border-gray-200" />
              {/* pricing part */}
              <div className="space-y-6">
                <h2 className="text-lg font-semibold font-michroma mb-4">
                  Pricing
                </h2>
                <div className="grid grid-col-1 md:grid-cols-2 gap-4">
                  <CustomFormField
                    name="pricePerDay"
                    label="Price Per Day (MAD)"
                    type="number"
                  />
                  <CustomFormField
                    name="applicationFee"
                    label="application Fee (MAD)"
                    type="number"
                  />
                </div>
              </div>
              {/* Car details */}
              <div className="space-y-6">
                <h2 className="text-lg font-semibold mb-4 font-michroma">
                  Car Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <CustomFormField
                    name="seats"
                    label="Number of Seats"
                    type="number"
                  />
                  <CustomFormField
                    name="carType"
                    label="Car Type"
                    type="select"
                    placeholder="Select Car Type"
                    options={Object.keys(CarTypeEnum).map((type) => ({
                      value: type,
                      label: type,
                    }))}
                  />
                  <CustomFormField
                    name="brand"
                    label="Brand"
                    className="w-full"
                  />
                  <CustomFormField
                    name="fuelType"
                    label="Fuel Type"
                    className="w-full"
                    type="select"
                    options={[
                      { value: "combustion", label: "Combustion" },
                      { value: "Electric", label: "Electric" },
                      { value: "Hybrid", label: "Hybrid" },
                    ]}
                  />

                  <CustomFormField
                    name="transmission"
                    label="Transmission"
                    type="select"
                    placeholder="Select Transmission Type"
                    options={[
                      { value: "Automatic", label: "Automatic" },
                      { value: "Manual", label: "Manual" },
                      { value: "All", label: "All" },
                    ]}
                  />
                </div>
              </div>
              <hr className="my-6 border-gray-200" />
              {/* Car features */}
              <div>
                <h2 className="text-lg font-semibold font-michroma">
                  Select your included car Features
                </h2>
                <div className="space-y-6">
                  <CustomFormField
                    name="carFeatures"
                    label="Car Features"
                    type="select"
                    options={Object.keys(CarFeatureEnum).map((feature) => ({
                      value: feature,
                      label: feature,
                    }))}
                  />
                </div>
              </div>
              <hr className="my-6 border-gray-200" />
              {/* Images */}
              <div>
                <h2 className="text-lg font-semibold font-michroma">
                  Upload your Car Images
                </h2>
                <CustomFormField
                  name="imageUrls"
                  label="Car Images"
                  type="file"
                  accept="image/*"
                />
              </div>
              <hr className="my-6 border-gray-200" />
              {/* Location and address */}
              <div className="space-y-6">
                <h2 className="text-lg font-semibold mb-4">
                  Address & location
                </h2>
                <CustomFormField
                  name="country"
                  label="Country"
                  type="select"
                  placeholder="Select Country"
                  options={countries.map((country) => ({
                    value: country.name,
                    label: country.name,
                  }))}
                  onChange={handleCountryChange}
                />
                <div className="flex justify-between gap-4">
                  <CustomFormField
                    name="state"
                    label="State"
                    className="w-full"
                    type="select"
                    disabled={!selectedCountry}
                    placeholder="Select State"
                    options={states.map((state) => ({
                      value: state.isoCode,
                      label: state.name,
                    }))}
                    onChange={handleStateChange}
                  />
                  <CustomFormField
                    name="city"
                    label="City"
                    className="w-full"
                    type="select"
                    disabled={!selectedState}
                    placeholder="Select City"
                    options={cities.map((city) => ({
                      value: city.name,
                      label: city.name,
                    }))}
                  />
                  <CustomFormField
                    name="postalCode"
                    label="Postal Code"
                    className="w-full"
                  />
                </div>
                <CustomFormField name="address" label="Address" />
              </div>
              <div className="flex justify-center">
                <Button
                  type="submit"
                  className="bg-primary-700 text-white w-full max-w-3xl font-michroma cursor-pointer"
                >
                  Create Car
                </Button>
              </div>
            </form>
          </>
        </Form>
      </div>
    </div>
  );
};

export default NewCar;
