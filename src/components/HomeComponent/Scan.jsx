import React from "react";
import ComprehensiveScanning from "./ComprehensiveScanning";
import ProtectionStats from "./ProtectionStats";
import { TikMarkIConSVG } from "../SVG/HomeLayoutSVG";

const Scan = () => {
  return (
    <div className="w-full mt-4 sm:mt-6 px-4 sm:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
        <ComprehensiveScanning />
        <ProtectionStats />
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Automated Detection */}
        <div className="p-4 sm:p-6 rounded-2xl bg-[linear-gradient(135deg,rgba(43,127,255,0.10)_0%,rgba(21,93,252,0.10)_100%)] border border-[#BEDBFF]">
          <p className="p-3 rounded-[14px] bg-white text-[#9810FA] w-fit">
            <TikMarkIConSVG />
          </p>
          <p className="text-base sm:text-lg text-[#101828] my-2">
            Automated Detection
          </p>
          <p className="text-[#4A5565] text-xs sm:text-sm">
            AI-powered scanning automatically identifies unauthorized use of
            your content across the internet.
          </p>
        </div>

        {/* Legal Support */}
        <div className="p-4 sm:p-6 rounded-2xl bg-[linear-gradient(135deg,#AD46FF1A_0%,#9810FA1A_100%)] border border-[#E9D4FF]">
          <p className="p-3 rounded-[14px] bg-white text-[#155DFC] w-fit">
            <TikMarkIConSVG />
          </p>
          <p className="text-base sm:text-lg text-[#101828] my-2">
            Legal Support
          </p>
          <p className="text-[#4A5565] text-xs sm:text-sm">
            Professional takedown notices and legal documentation for copyright
            enforcement.
          </p>
        </div>

        {/* Automated Detection */}
        <div className="p-4 sm:p-6 rounded-2xl bg-[linear-gradient(135deg,#F6339A1A_0%,#E600761A_100%)] border border-[#FCCEE8]">
          <p className="p-3 rounded-[14px] bg-white text-[#E60076] w-fit">
            <TikMarkIConSVG />
          </p>
          <p className="text-base sm:text-lg text-[#101828] my-2">
            Automated Detection
          </p>
          <p className="text-[#4A5565] text-xs sm:text-sm">
            AI-powered scanning automatically identifies unauthorized use of
            your content across the internet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Scan;
