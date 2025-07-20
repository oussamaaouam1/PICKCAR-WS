"use client";
import { CustomFormField } from "@/components/FormField";
import { Form } from "@/components/ui/form";
import Header from "@/components/ui/Header";
import { CarTypeEnum } from "@/lib/constants";
import { CarFormData, carListingSchema } from "@/lib/schemas";
import { useCreateCarMutation, useGetAuthUserQuery } from "@/state/api";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
// import { format } from 'url';
// import { string } from 'zod';

const NewCar = () => {
  const [createCar] = useCreateCarMutation();
  const { data: authUser } = useGetAuthUserQuery();

  const form = useForm<CarFormData>({
    resolver: zodResolver(carListingSchema),
    defaultValues: {
      name: "",
      description: "",
      pricePerDay: 100,
      applicationFee: 20,
      availableFrom: new Date(),
      availableTo: new Date(),
      // carType: CarTypeEnum.SUV,
      fuelType: "combustion",
      transmission: "automatic",
      brand: "",
      address: "",
      city: "",
      state: "",
      country: "",
      postalCode: "",
      seats: 2,
      carFeatures: [],
      imageUrls: [],
      // location: ''
    },
  });

  const onSubmit = async (data: CarFormData) => {
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
  };
  return (
    <div className="dashboard-container max-w-7xl m-auto p-6">
      <Header
        title="Add New Car"
        subtitle="Create a New Car listing with detailed information"
      />
      <div className="bg-white rounded-xl p-6">
        <Form {...form}>
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
                  name="transmission"
                  label="Transmission"
                  type="select"
                  placeholder="Select Transmission Type"
                  options={[
                    { value: "automatic", label: "Automatic" },
                    { value: "manual", label: "Manual" },
                    { value: "All", label: "All" },
                  ]}
                />
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default NewCar;
