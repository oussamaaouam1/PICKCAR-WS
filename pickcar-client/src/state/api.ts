import { cleanParams, createNewUserInDatabase } from "@/lib/utils";
import {
  Application,
  Car,
  Manager,
  Payment,
  Renter,
  Reservation,
} from "@/types/prismaTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { fetchAuthSession, getCurrentUser } from "aws-amplify/auth";
import { FiltersState } from ".";
// import { result } from "lodash";
// import { create } from "lodash";
// import { get } from "http";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
    prepareHeaders: async (headers) => {
      const session = await fetchAuthSession();
      const { idToken } = session.tokens ?? {};
      if (idToken) {
        headers.set("Authorization", `Bearer ${idToken}`);
      }
      return headers;
    },
  }),
  reducerPath: "api",
  tagTypes: [
    "Managers",
    "Renters",
    "Cars",
    "CarDetails",
    "Reservations",
    "Payments",
    "Applications",
  ],
  endpoints: (build) => ({
    getAuthUser: build.query<User, void>({
      queryFn: async (_, _queryApi, _extraoptions, fetchWithBQ) => {
        try {
          const session = await fetchAuthSession();
          // console.log("session", session);
          const { idToken } = session.tokens ?? {};
          const user = await getCurrentUser();
          const userRole = idToken?.payload["custom:role"] as string;

          const endpoint =
            userRole === "manager"
              ? `/managers/${user.userId}`
              : `/renters/${user.userId}`;
          let userDetailsResponse = await fetchWithBQ(endpoint);
          // console.log("userDetailsResponse", userDetailsResponse);

          //if the user is not found in the database, create a new user
          if (
            userDetailsResponse.error &&
            userDetailsResponse.error.status === 404
          ) {
            userDetailsResponse = await createNewUserInDatabase(
              user,
              idToken,
              userRole,
              fetchWithBQ
            );
          }

          return {
            data: {
              cognitoInfo: { ...user },
              userInfo: userDetailsResponse.data as Renter | Manager,
              userRole,
            },
          };
        } catch (error: any) {
          return {
            error: (error.message as Error) || "Could not fetch user data",
          };
        }
      },
    }),
    //we will receive the Renter from the backend ,and sending the cognito id to the backend and the Partial renter object mean a partial update of their data

    updateManagerSettings: build.mutation<
      Manager,
      { cognitoId: string } & Partial<Manager>
    >({
      query: ({ cognitoId, ...updatedManager }) => ({
        url: `/Managers/${cognitoId}`,
        method: "PUT",
        body: updatedManager,
      }),
      invalidatesTags: (result) => [{ type: "Renters", id: result?.id }],
    }),
    //car related endpoints

    getCars: build.query<
      Car[],
      Partial<FiltersState> & { favoriteIds?: number[] }
    >({
      query: (filters) => {
        const params = cleanParams({
          location: filters.location,
          priceMin: filters.priceRange?.[0],
          priceMax: filters.priceRange?.[1],
          seats: filters.seats,
          transmission: filters.transmission,
          fuelType: filters.fuelType,
          carType: filters.carType,
          carFeature: filters.carFeature,
          availableFrom: filters.availableFrom,
          favoriteIds: filters.favoriteIds?.join(","),
          latitude: filters.coordinates?.[1],
          longitude: filters.coordinates?.[0],
        });
        return { url: "cars", params };
      },
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Cars" as const, id })),
              { type: "Cars", id: "LIST" },
            ]
          : [{ type: "Cars", id: "LIST" }],
    }),

    getCar: build.query<Car, number>({
      query: (id) => `cars/${id}`,
      providesTags: (result, error, id) => [{ type: "CarDetails", id }],
    }),

    //renter related end points

    getRenter: build.query<Renter, string>({
      query: (cognitoId) => `renters/${cognitoId}`,
      providesTags: (result) => [{ type: "Renters", id: result?.id }],
    }),
    getCurrentCars: build.query<Car[], string>({
      query: (cognitoId) => `renters/${cognitoId}/current-cars`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Cars" as const, id })),
              { type: "Cars", id: "LIST" },
            ]
          : [{ type: "Cars", id: "LIST" }],
    }),

    updateRenterSettings: build.mutation<
      Renter,
      { cognitoId: string } & Partial<Renter>
    >({
      query: ({ cognitoId, ...updatedRenter }) => ({
        url: `/renters/${cognitoId}`,
        method: "PUT",
        body: updatedRenter,
      }),
      invalidatesTags: (result) => [{ type: "Renters", id: result?.id }],
    }),
    addFavoriteCar: build.mutation<
      Renter,
      { cognitoId: string; carId: number }
    >({
      query: ({ cognitoId, carId }) => ({
        url: `/renters/${cognitoId}/favorites/${carId}`,
        method: "POST",
      }),
      invalidatesTags: (result) => [
        { type: "Renters", id: result?.id },
        { type: "Cars", id: "LIST" },
      ],
    }),
    removeFavoriteCar: build.mutation<
      Renter,
      { cognitoId: string; carId: number }
    >({
      query: ({ cognitoId, carId }) => ({
        url: `/renters/${cognitoId}/favorites/${carId}`,
        method: "DELETE",
      }),
      invalidatesTags: (result) => [
        { type: "Renters", id: result?.id },
        { type: "Cars", id: "LIST" },
      ],
    }),

    //manager related endpoints

    getManagerCars: build.query<Car[], string>({
      query: (cognitoId) => `managers/${cognitoId}/cars`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Cars" as const, id })),
              { type: "Cars", id: "LIST" },
            ]
          : [{ type: "Cars", id: "LIST" }],
    }),

    createCar: build.mutation<Car, FormData>({
      query: (newCar) => ({
        url: "cars",
        method: "POST",
        body: newCar,
      }),
      invalidatesTags: (result) => [
        { type: "Cars", id: "LIST" },
        { type: "Managers", id: result?.manager?.id },
      ],
    }),

    deleteCar: build.mutation<{ message: string }, number>({
      query: (carId) => ({
        url: `cars/${carId}`,
        method: "DELETE",
      }),
      invalidatesTags: () => [{ type: "Cars", id: "LIST" }],
    }),

    // reservation related endpoint

    getReservations: build.query<Reservation[], number>({
      query: () => "reservations",
      providesTags: ["Reservations"],
    }),
    getCarReservations: build.query<Reservation, number>({
      query: (carId) => `cars/${carId}/reservations`,
      providesTags: ["Reservations"],
    }),
    getPayments: build.query<Payment[], number>({
      query: (reservationId) => `reservations/${reservationId}/payments`,
      providesTags: ["Payments"],
    }),
    //applications related endpoints
    getApplications: build.query<
      Application[],
      { userId?: string; userType?: string }
    >({
      query: (params) => {
        const queryParams = new URLSearchParams();
        if (params.userId) {
          queryParams.append("userId", params.userId.toString());
        }
        if (params.userType) {
          queryParams.append("userType", params.userType.toString());
        }

        return `applications?${queryParams.toString()}`;
      },
      providesTags: ["Applications"],
    }),
    updateApplicationStatus: build.mutation<
      Application & { reservation?: Reservation },
      { id: number; status: string }
    >({
      query: ({ id, status }) => ({
        url: `applications/${id}/status`,
        method: "PUT",
        body: { status },
      }),
      invalidatesTags: ["Applications", "Reservations"],
    }),
    createApplication: build.mutation<Application, Partial<Application>>({
      query: (body) => ({
        url: "applications",
        method: "POST",
        body: body,
      }),
      invalidatesTags:  ["Applications"],
    }),
  }),
});

export const {
  useGetAuthUserQuery,
  useUpdateRenterSettingsMutation,
  useUpdateManagerSettingsMutation,
  useGetCarsQuery,
  useGetCarQuery,
  useGetCurrentCarsQuery,
  useGetManagerCarsQuery,
  useCreateCarMutation,
  useDeleteCarMutation,
  useGetRenterQuery,
  useAddFavoriteCarMutation,
  useRemoveFavoriteCarMutation,
  useGetReservationsQuery,
  useGetCarReservationsQuery,
  useGetPaymentsQuery,
  useGetApplicationsQuery,
  useUpdateApplicationStatusMutation,
  useCreateApplicationMutation,
} = api;
