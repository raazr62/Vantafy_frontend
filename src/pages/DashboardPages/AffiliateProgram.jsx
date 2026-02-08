import ReferralHistory from "@/components/DashboardComponent/ReferralHistory";
import ReferralLink from "@/components/DashboardComponent/ReferralLink";
import { useGetAffiliateProgram } from "@/hooks/useGetAffiliateProgram";
import React from "react";

const AffiliateProgram = () => {
  const {
    data: affiliateProgramData,
    isLoading,
    isError,
  } = useGetAffiliateProgram();

  return (
    <div className="flex flex-col pb-4 lg:pb-0 gap-4 h-full">
      <ReferralLink
        affiliateProgramData={affiliateProgramData?.data}
        isLoading={isLoading}
        isError={isError}
      />
      <ReferralHistory
        affiliateProgramData={affiliateProgramData?.data}
        isLoading={isLoading}
        isError={isError}
      />
    </div>
  );
};

export default AffiliateProgram;
