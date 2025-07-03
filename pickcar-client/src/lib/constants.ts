import {
  // Wifi,
  // Location,
  Thermometer,
  Sun,
  Car,
  // Seat,
  // Speedometer,
  Battery,
  LucideIcon,
  Gauge,
  Cog,
  Map,
  CarFront,
  Truck,
  MapPin,
  Bluetooth,
  Baby,
  SunSnow
} from "lucide-react";

// Car Features (Amenities) Enum
export enum CarFeatureEnum {
  Bluetooth = "Bluetooth",
  GPS = "GPS",
  HeatedSeats = "HeatedSeats",
  Sunroof = "Sunroof",
  ParkingSensors = "ParkingSensors",
  CruiseControl = "CruiseControl",
  // LeatherSeats = "LeatherSeats",
  AirConditioning = "AirConditioning",
  AlloyWheels = "AlloyWheels",
  ChildSeat = "ChildSeat",
  AutomaticTransmission = "AutomaticTransmission",
  GPSNavigation = "GPSNavigation",
}

// Mapping Car Features to Icons
export const CarFeatureIcons: Record<CarFeatureEnum, LucideIcon> = {
  Bluetooth: Bluetooth,
  GPS : MapPin,
  HeatedSeats: Thermometer,
  Sunroof: Sun,
  ParkingSensors: Car,
  CruiseControl: Gauge,
  // LeatherSeats: Seat,
  AirConditioning: SunSnow,
  AlloyWheels: Car,
  ChildSeat: Baby,
  AutomaticTransmission: Cog,
  GPSNavigation: Map,
};

// Car Types Enum
export enum CarTypeEnum {
  Sedan = "Sedan",
  SUV = "SUV",
  Convertible = "Convertible",
  Truck = "Truck",
  Electric = "Electric",
  Minivan = "Minivan",
  Hatchback = "Hatchback",
  Coupe = "Coupe",
}

// Mapping Car Types to Icons
export const CarTypeIcons: Record<CarTypeEnum, LucideIcon> = {
  Sedan: Car,
  SUV: CarFront,
  Convertible: Sun,
  Truck: Truck,
  Electric: Battery,
  Minivan: Car,
  Hatchback: Car,
  Coupe: Car,
};

// Navbar Height (still relevant for the car rental application)
export const NAVBAR_HEIGHT = 80; // in pixels

// Test Users for Development (Car Rental Roles)
export const testUsers = {
  renter: {
    username: "Alice Johnson",
    userId: "us-east-2:abcdefgh-1234-5678-90ab-cdefghijklmn",
    signInDetails: {
      loginId: "alice.johnson@example.com",
      authFlowType: "USER_SRP_AUTH",
    },
  },
  renterRole: "renter",
  manager: {
    username: "David Smith",
    userId: "us-east-2:12345678-90ab-cdef-1234-567890abcdef",
    signInDetails: {
      loginId: "david.smith@example.com",
      authFlowType: "USER_SRP_AUTH",
    },
  },
  managerRole: "manager",
};
