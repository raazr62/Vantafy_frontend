import RecommendedPackages from "@/components/OtherComponent/RecommendedPackages";
import Logo from "@/shared/LandingShared/Logo";
import React from "react";

const RecommendPlan = () => {
  return (
    <div className="container max-w-7xl mx-auto flex items-center justify-center h-svh py-5">
      <div className="w-full h-full flex flex-col">
        <Logo variant="grayFull" className={"mx-auto mb-3 w-40 shrink-0"} />
        <div className="rounded-[12px] border border-[#EFE6FD] flex flex-col p-6 flex-1 min-h-0">
          <div className="shrink-0">
            <p className="text-2xl font-medium">Recommend plan</p>
            <p className="text-[#90A1B9] text-justify mt-1">
              We analyze your niche recommend best plan for you
            </p>
          </div>
          <div className="flex justify-center flex-1 overflow-y-auto w-full mt-4 pb-4 min-h-0">
            <RecommendedPackages />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendPlan;
