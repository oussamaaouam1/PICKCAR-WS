import { useGetApplicationsQuery, useGetAuthUserQuery } from "@/state/api";
import React, { useState } from "react";

const Applications = () => {
  const { data: authUser } = useGetAuthUserQuery();
  const [activeTab, setActiveTab] = useState("all "); //all or pending or approved or Denied

  const {
    data: applications,
    isLoading,
    isError,
  } = useGetApplicationsQuery(
    {
      userId: authUser?.cognitoInfo?.userId,
      userType: "manager",
    },
    { skip: !authUser?.cognitoInfo?.userId }
  );

  return <div></div>;
};

export default Applications;
