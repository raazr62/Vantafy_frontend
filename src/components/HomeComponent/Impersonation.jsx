import { impersonationMockData } from "@/lib/HomeMockData";
import React from "react";

const Impersonation = () => {
  return (
    <div className="bg-[#AD46FF0A] py-7 sm:py-9 lg:py-11 w-full mt-4 sm:mt-6 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto space-y-2 sm:space-y-4">
        <p className="text-center bg-linear-to-r from-[#4E78FD] to-[#FF1BE4] bg-clip-text text-transparent font-semibold text-xl sm:text-2xl lg:text-[32px]">
          Impersonation Protection
        </p>
        <p className="text-center text-[#333333] font-medium text-sm sm:text-base">
          Protected Platforms:
        </p>
        <div className="grid grid-cols-2 gap-2 sm:gap-4 lg:gap-6">
          {/* Platforms */}
          {impersonationMockData.map((impersonation) => (
            <div
              key={impersonation.id}
              className="space-y-1 py-4 sm:py-6 px-2 sm:px-4 rounded-2xl bg-[linear-gradient(90deg,rgba(78,120,253,0.04)_0%,rgba(255,27,228,0.04)_100%)] flex flex-col items-center justify-center gap-1 sm:gap-2 last:col-span-2"
            >
              <img
                src={impersonation.logo}
                alt={impersonation.siteName}
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
              />
              <p className="font-semibold text-sm sm:text-base">
                {impersonation.siteName}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Impersonation;
