import { cleanParams, createNewUserInDatabase } from "@/lib/utils";
import { Car, Manager, Renter } from "@/types/prismaTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { fetchAuthSession, getCurrentUser } from "aws-amplify/auth";
import { FiltersState } from ".";
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
    }
  }),
  reducerPath: "api",
  tagTypes: ["Managers", "Renters", "Cars"],
  endpoints: (build) => ({
    getAuthUser: build.query<User, void>({
      queryFn: async (_, _queryApi, _extraoptions, fetchWithBQ) => {
        try {
          const session = await fetchAuthSession();
          // console.log("session", session);   
          const {idToken} = session.tokens ?? {};
          const user = await getCurrentUser();
          const userRole = idToken?.payload["custom:role"] as string;

          const endpoint =
            userRole === "manager"
              ? `/managers/${user.userId}`
              : `/renters/${user.userId}`;
          let userDetailsResponse = await fetchWithBQ(endpoint);
          // console.log("userDetailsResponse", userDetailsResponse);

          //if the user is not found in the database, create a new user
          if (userDetailsResponse.error&& userDetailsResponse.error.status === 404) {
            userDetailsResponse = await createNewUserInDatabase(
              user,
              idToken,
              userRole,
              fetchWithBQ
            )
            
          }

          return {
            data: { cognitoInfo:{...user},
            userInfo: userDetailsResponse.data as Renter | Manager ,
            userRole,
          } ,
            };
        } catch (error: any ) {
          return { error: error.message as Error ||'Could not fetch user data' };
        }
      }
    }),
    //we will receive the Renter from the backend ,and sending the cognito id to the backend and the Partial renter object mean a partial update of their data
    updateRenterSettings: build.mutation < Renter,{cognitoId:string}&Partial<Renter>>
    ({
      query :({cognitoId,...updatedRenter}) => ({
        url: `/renters/${cognitoId}`,
        method: "PUT",
        body: updatedRenter,
      }),
      invalidatesTags: (result)=>[{type:'Renters', id: result?.id}],
      
    }),
    updateManagerSettings: build.mutation < Manager,{cognitoId:string}&Partial<Manager>>
    ({
      query :({cognitoId,...updatedManager}) => ({
        url: `/Managers/${cognitoId}`,
        method: "PUT",
        body: updatedManager,
      }),
      invalidatesTags: (result)=>[{type:'Renters', id: result?.id}],
      
    }),
    //car related endpoints
    getCars : build.query<Car[],Partial<FiltersState> &{favoriteIds? : number[]}>({
    query:(filters) =>{
      const params = cleanParams({
        location: filters.location,
        priceMin : filters.priceRange?.[0],
        priceMax : filters.priceRange?.[1],
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
      return {url:"cars",params}
    },
    providesTags: (result) =>
      result?
        [
          ...result.map(({ id }) => ({ type: "Cars" as const, id })),
          { type: "Cars", id: "LIST" }
        ]
        : [{ type: "Cars", id: "LIST" }],
    })
    
  })
})


export const {
  useGetAuthUserQuery,useUpdateRenterSettingsMutation,
  useUpdateManagerSettingsMutation,
  useGetCarsQuery
} = api;
