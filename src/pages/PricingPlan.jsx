import PricingAndPlanPackages from "@/components/OtherComponent/PricingAndPlanPackages";
import Logo from "@/shared/LandingShared/Logo";
import React from "react";

const PricingPlan = () => {
  return (
    <div className="container max-w-7xl mx-auto flex items-center justify-center mt-2 mb-5">
      <div className="w-full h-full flex flex-col">
        <Logo variant="grayFull" className={"mx-auto mb-3 w-40 shrink-0"} />
        <div className="rounded-[12px] border border-[#EFE6FD] flex flex-col p-6 flex-1">
          <div className="shrink-0">
            <p className="text-2xl font-medium">Pricing & Plan</p>
            <p className="text-[#90A1B9] text-justify mt-1">
              Choose your perfect plan
            </p>
          </div>
          <div className="flex justify-center flex-1 w-full mt-4 pb-4">
            <PricingAndPlanPackages />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
