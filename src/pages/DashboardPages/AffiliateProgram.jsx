import ReferralHistory from "@/components/DashboardComponent/ReferralHistory";
import ReferralLink from "@/components/DashboardComponent/ReferralLink";
import React from "react";

const AffiliateProgram = () => {
  return (
    <div className="flex flex-col gap-4 h-full">
      <ReferralLink />
      <ReferralHistory />
    </div>
  );
};

export default AffiliateProgram;
