/**
 * TypeScript Declaration File for PickCar Application
 * This file defines all the types, interfaces, and enums used throughout the application.
 * It serves as a central location for type definitions and ensures type safety across the application.
 */

// Import necessary types from external libraries and our own types
import { LucideIcon } from "lucide-react"; // For icon components
import { AuthUser } from "aws-amplify/auth"; // For AWS Cognito authentication
import { Manager, Renter, Car, Application,/* Location, Payment, Reservation*/ } from "./prismaTypes"; // Core data models from Prisma
import { MotionProps as OriginalMotionProps } from "framer-motion"; // For animation components

/**
 * Extends the Framer Motion library's MotionProps interface
 * to include className property for styling
 */
declare module "framer-motion" {
  interface MotionProps extends OriginalMotionProps {
    className?: string;
  }
}

/**
 * Global type declarations for the application
 * These types are available throughout the application without explicit imports
 */
declare global {
  // ==================== COMPONENT PROPS ====================

  /**
   * Props for sidebar navigation links
   * @property href - URL to navigate to
   * @property icon - Icon component to display
   * @property label - Text label for the link
   */
  interface SidebarLinkProps {
    href: string;
    icon: LucideIcon;
    label: string;
  }

  /**
   * Props for the car overview component
   * @property carId - ID of the car to display overview for
   */
  interface CarOverviewProps {
    carId: number;
  }

  /**
   * Props for the application modal component
   * @property isOpen - Whether the modal is currently open
   * @property onClose - Function to call when closing the modal
   * @property carId - ID of the car being applied for
   */
  interface ApplicationModalProps {
    isOpen: boolean;
    onClose: () => void;
    carId: number;
  }

  /**
   * Props for the contact widget component
   * @property onOpenModal - Function to call when opening the contact modal
   */
  interface ContactWidgetProps {
    onOpenModal: () => void;
  }

  /**
   * Props for the image previews component
   * @property images - Array of image URLs to display
   */
  interface ImagePreviewsProps {
    images: string[];
  }

  /**
   * Props for the car details component
   * @property carId - ID of the car to display details for
   */
  interface CarDetailsProps {
    carId: number;
  }

  /**
   * Props for the car location component
   * @property carId - ID of the car to display location for
   */
  interface CarLocationProps {
    carId: number;
  }

  /**
   * Props for the application card component
   * @property application - Application data to display
   * @property userType - Type of user viewing the application (manager or renter)
   * @property children - Child components to render
   */
  interface ApplicationCardProps {
    application: Application;
    userType: "manager" | "renter";
    children: React.ReactNode;
  }

  /**
   * Props for the car card component
   * @property car - Car data to display
   * @property isFavorite - Whether the car is favorited
   * @property onFavoriteToggle - Function to toggle favorite status
   * @property showFavoriteButton - Whether to show the favorite button
   * @property carLink - Optional link to the car details page
   */
  interface CardProps {
    car: Car;
    isFavorite: boolean;
    onFavoriteToggle: () => void;
    showFavoriteButton?: boolean;
    carLink?: string;
  }

  /**
   * Props for the compact car card component
   * Similar to CardProps but for a more compact display
   */
  interface CardCompactProps {
    car: Car;
    isFavorite: boolean;
    onFavoriteToggle: () => void;
    showFavoriteButton?: boolean;
    carLink?: string;
  }

  /**
   * Props for the header component
   * @property title - Main title text
   * @property subtitle - Secondary title text
   */
  interface HeaderProps {
    title: string;
    subtitle: string;
  }

  /**
   * Props for the navigation bar component
   * @property isDashboard - Whether the navbar is in dashboard mode
   */
  interface NavbarProps {
    isDashboard: boolean;
  }

  /**
   * Props for the application sidebar component
   * @property userType - Type of user (manager or renter)
   */
  interface AppSidebarProps {
    userType: "manager" | "renter";
  }

  /**
   * Props for the settings form component
   * @property initialData - Initial form data
   * @property onSubmit - Function to handle form submission
   * @property userType - Type of user (manager or renter)
   */
  interface SettingsFormProps {
    initialData: SettingsFormData;
    onSubmit: (data: SettingsFormData) => Promise<void>;
    userType: "manager" | "renter";
  }

  /**
   * Represents a user in the system
   * @property cognitoInfo - Authentication information from AWS Cognito
   * @property userInfo - User information (either Renter or Manager)
   * @property userRole - User's role information
   */
  interface User {
    cognitoInfo: AuthUser;
    userInfo: Renter | Manager;
    userRole: JsonObject | JsonPrimitive | JsonArray;
  }
}

// Export an empty object to make this a module
export {};
