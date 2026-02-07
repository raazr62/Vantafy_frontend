import MyInfoHead from "@/components/DashboardComponent/MyInformation.jsx/MyInfoHead";
import MyMembers from "@/components/DashboardComponent/MyInformation.jsx/MyMembers";
import { useGetMemberLimits } from "@/hooks/useGetMemberLimits";
import React from "react";

const MyInformation = () => {
  const { data, isLoading, isError } = useGetMemberLimits();

  // Calculate if we should show the warning (when less than 3 slots remaining)
  const shouldShowWarning =
    data?.data?.member_limit != null &&
    data?.data?.current_member_count != null &&
    data.data.member_limit - data.data.current_member_count < 3;

  return (
    <div className="space-y-4 flex flex-col h-full pb-4 lg:pb-0">
      {shouldShowWarning && (
        <MyInfoHead data={data} isLoading={isLoading} isError={isError} />
      )}
      <MyMembers />
    </div>
  );
};

export default MyInformation;
