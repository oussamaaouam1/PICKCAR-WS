'use client'
import SettingsForm from "@/components/SettingsForm";
import {
  useGetAuthUserQuery,
  useUpdateRenterSettingsMutation,
} from "@/state/api";
import React from 'react'


const RenterSettings = () => {
  const { data: authUser , isLoading} = useGetAuthUserQuery();
  console.log("authUser",authUser)
  const [updateRenter] = useUpdateRenterSettingsMutation();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loading loading-spinner loading-lg"> Loading ...</span>
      </div>
    );
  }
  const initialData = {
    name: authUser?.userInfo?.name,
    email: authUser?.userInfo?.email,
    phoneNumber: authUser?.userInfo?.phoneNumber ,
    // address: authUser?.address || "",
    // city: authUser?.city || "",
    // state: authUser?.state || "",
    // zipCode: authUser?.zipCode || "",
  };
  const handleSubmit = async ( data:typeof initialData) => {
    await updateRenter({
      cognitoId: authUser?.userInfo.cognitoId,
      ...data
  })
}
  return (
    
<SettingsForm 
initialData={initialData}
onSubmit={handleSubmit}
userType="renter"
/>
  )
}

export default RenterSettings
