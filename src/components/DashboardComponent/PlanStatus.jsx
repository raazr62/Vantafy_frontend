import React from "react";
import { CrownIconSVG } from "../SVG/DashboardLayoutSVG";

const PlanStatus = () => {
  return (
    <div className="p-4 bg-white rounded-[18px] border border-primary flex flex-col sm:flex-row items-center justify-between">
      <div className="flex items-center flex-col sm:flex-row gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 sm:p-3.5 bg-linear-to-b from-[#4E78FD] to-[#FF1BE4] w-fit rounded-[12px]">
            <CrownIconSVG />
          </div>
          <p className="text-xl sm:text-2xl lg:text-[32px] font-bold sm:hidden">
            $49<span className="text-[#9A9A9A] text-base font-normal">/mo</span>
          </p>
        </div>
        <div>
          <p className="text-base sm:text-lg lg:text-xl font-bold flex items-center gap-2">
            Premium Plan Active
            <span className="bg-linear-to-b from-[#4E78FD] to-[#FF1BE4] rounded-[6px] p-1 sm:p-2 text-xs font-bold text-white">
              Active
            </span>
          </p>
          <p className="text-[#9A9A9A] text-sm">
            Your subscription renews on December 17, 2025
          </p>
        </div>
      </div>
      <p className="text-xl sm:text-2xl lg:text-[32px] font-bold hidden sm:block">
        $49<span className="text-[#9A9A9A] text-base font-normal">/mo</span>
      </p>
    </div>
  );
};

export default PlanStatus;
