import { createNewUserInDatabase } from "@/lib/utils";
import { Manager, Renter } from "@/types/prismaTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { fetchAuthSession, getCurrentUser } from "aws-amplify/auth";
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
  tagTypes: ["Managers", "Renters"],
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
      
    })
    
  })
})


export const {
  useGetAuthUserQuery,useUpdateRenterSettingsMutation,
  useUpdateManagerSettingsMutation
} = api;
