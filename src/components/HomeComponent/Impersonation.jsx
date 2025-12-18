import { impersonationMockData } from "@/lib/HomeMockData";
import React from "react";

const Impersonation = () => {
  return (
    <div className="bg-[#AD46FF0A] py-11 w-full mt-6">
      <div className="max-w-2xl mx-auto space-y-4">
        <p className="text-center bg-linear-to-r from-[#4E78FD] to-[#FF1BE4] bg-clip-text text-transparent font-semibold text-[32px]">
          Impersonation Protection
        </p>
        <p className="text-center text-[#333333] font-medium">
          Protected Platforms:
        </p>
        <div className="grid grid-cols-2 gap-6">
          {/* Platforms */}
          {impersonationMockData.map((impersonation) => (
            <div
              key={impersonation.id}
              className="space-y-1 py-6 px-4 rounded-2xl bg-[linear-gradient(90deg,rgba(78,120,253,0.04)_0%,rgba(255,27,228,0.04)_100%)] flex flex-col items-center justify-center gap-2 last:col-span-2"
            >
              <img
                src={impersonation.logo}
                alt={impersonation.siteName}
                className="w-12 h-12"
              />
              <p className="font-semibold">{impersonation.siteName}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Impersonation;
