import RecommendedPackages from "@/components/OtherComponent/RecommendedPackages";
import Logo from "@/shared/LandingShared/Logo";
import React from "react";

const RecommendPlan = () => {
  return (
    <div className="container lg:max-w-7xl mx-auto flex items-center justify-center mt-2 mb-5">
      <div className="w-full h-full flex flex-col">
        <div className="bg-white/90 backdrop-blur-xs mb-3 shrink-0 sticky top-0 w-full">
          <Logo variant="grayFull" className={"mx-auto"} />
        </div>
        <div className="rounded-[12px] border border-[#EFE6FD] flex flex-col p-4 sm:p-6 flex-1 mx-4 sm:mx-0">
          <div className="shrink-0">
            <p className="text-lg sm:text-xl lg:text-2xl font-medium">
              Recommend plan
            </p>
            <p className="text-sm sm:text-base text-[#90A1B9] text-justify mt-1">
              We analyze your niche recommend best plan for you
            </p>
          </div>
          <div className="flex justify-center flex-1 w-full mt-4 pb-4">
            <RecommendedPackages />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendPlan;
