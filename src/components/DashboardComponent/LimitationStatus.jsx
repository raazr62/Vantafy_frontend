import React from "react";
import {
  AlertIconSVG,
  UpgradeTierIconSVG,
} from "@/components/SVG/DashboardLayoutSVG";
import { Button } from "@/components/ui/button";

const LimitationStatus = () => {
  return (
    <div className="bg-[linear-gradient(180deg,rgba(58,184,255,0.15)_0%,rgba(255,78,207,0.15)_100%)] shadow-[0_4px_20px_0_rgba(255,78,207,0.15)] flex justify-between items-center p-5 rounded-2xl flex-col gap-3 lg:gap-0 lg:flex-row">
      <div className="flex items-center flex-col sm:flex-row sm:gap-4">
        <div className="bg-[linear-gradient(180deg,#3F80FF_0%,#FF1BE4_87.03%)] p-2 md:p-3 rounded-[12px]">
          <AlertIconSVG className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
        </div>

        {/* Details */}
        <div>
          <p className="text-base md:text-lg font-medium sm:font-semibold text-[#212B36]">
            You have <span className="text-primary">30 links</span> awaiting
            removal under your current plan.
          </p>
          <p className="text-xs md:text-sm text-[#707070]">
            <span className="text-sky-400">Upgrade your plan</span> to clear
            them faster and increase your monthly limit.
          </p>
        </div>
      </div>

      {/* Upgrade Button */}
      <Button
        className={
          "rounded-[12px] py-2 lg:py-5! text-xs sm:text-sm lg:font-bold px-3 lg:px-6!"
        }
      >
        <UpgradeTierIconSVG /> Upgrade Tier
      </Button>
    </div>
  );
};

export default LimitationStatus;
