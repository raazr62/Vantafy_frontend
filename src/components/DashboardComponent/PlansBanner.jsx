import React from "react";
import { SparkIconSVG } from "../SVG/DashboardLayoutSVG";

const PlansBanner = () => {
  return (
    <div className="bg-[linear-gradient(180deg,rgba(78,120,253,0.7)_0%,rgba(255,27,228,0.7)_100%)] py-8 rounded-[18px] shadow-lg mt-4 flex flex-col items-center justify-center gap-3">
      <p className="bg-[#FFFFFF33] rounded-full px-4 py-1.5 text-[13px] text-white font-semibold flex items-center gap-2 w-fit">
        <SparkIconSVG /> CHOOSE YOUR PLAN
      </p>

      <p className="text-white font-bold text-4xl">Protect Your Content</p>
      <p className="text-white/90">
        Advanced AI-powered protection against content leaks and impersonators
      </p>
    </div>
  );
};

export default PlansBanner;
