import * as z from "zod";
import { CarFeatureEnum, CarTypeEnum } from "./constants";

// Car Listing Schema
export const carListingSchema = z.object({
  name: z.string().min(1, "Car name is required"),
  description: z.string().min(1, "Description is required"),
  pricePerDay: z.coerce.number().positive().min(0, "Price must be a positive number").int(),
  availableFrom: z.coerce.date(),
  availableTo: z.coerce.date(),
  carType: z.nativeEnum(CarTypeEnum),
  carFeatures: z.array(z.nativeEnum(CarFeatureEnum)).min(1, "At least one car feature is required"),
  imageUrls: z.array(z.string().url()).min(1, "At least one image is required"),
  location: z.string().min(1, "Location is required"),
  rating: z.coerce.number().min(0).max(5, "Rating must be between 0 and 5").optional(),
});

export type CarListingData = z.infer<typeof carListingSchema>;

// Application Schema
export const applicationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
  message: z.string().optional(),
  carId: z.number().positive().int(),  // To reference the car being rented
});

export type ApplicationData = z.infer<typeof applicationSchema>;

// Car Reservation Schema
export const carReservationSchema = z.object({
  carId: z.number().positive().int(),
  renterId: z.string().min(1, "Renter ID is required"),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
  totalPrice: z.coerce.number().positive().int(),
  status: z.enum(["pending", "approved", "rejected"]),
});

export type CarReservationData = z.infer<typeof carReservationSchema>;

// User Schema (Renter / Manager)
export const userSchema = z.object({
  username: z.string().min(1, "Username is required"),
  email: z.string().email("Invalid email address"),
  role: z.enum(["renter", "manager"]),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  signInDetails: z.object({
    loginId: z.string(),
    authFlowType: z.string(),
  }),
});

export type UserData = z.infer<typeof userSchema>;

// Car Type Schema
export const carTypeSchema = z.object({
  name: z.nativeEnum(CarTypeEnum),
  icon: z.string().optional(), // You can store icons as string URLs or just references
});

export type CarTypeData = z.infer<typeof carTypeSchema>;

// Car Feature Schema
export const carFeatureSchema = z.object({
  feature: z.nativeEnum(CarFeatureEnum),
  icon: z.string().optional(), // You can store icon references
});
export type ApplicationFormData = z.infer<typeof applicationSchema>;

export const settingsSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
});
export type SettingsFormData = z.infer<typeof settingsSchema>;


export type CarFeatureData = z.infer<typeof carFeatureSchema>;
