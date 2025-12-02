import { InspectMockData } from "@/lib/HomeMockData";
import React from "react";

const ComprehensiveScanning = () => {
  return (
    <div className="bg-primary/3 rounded-2xl py-11 mt-12 container mx-auto">
      <div className="max-w-3xl mx-auto">
        <h6 className="text-center bg-linear-to-r from-[#4E78FD] to-[#FF1BE4] bg-clip-text text-transparent text-[32px] font-semibold">
          Comprehensive Scanning
        </h6>

        <p className="capitalize text-center py-4 text-[#333]">
          Our advanced software crawls the internet 24/7, combined with manual
          scans by trainned agents to ensure nothing is missed.
        </p>

        {/* We Inspect */}
        <div className="w-full py-5 px-4 rounded-2xl bg-[linear-gradient(90deg,rgba(78,120,253,0.04)_0%,rgba(255,27,228,0.04)_100%)]">
          <p className="text-center text-primary text-xl font-semibold mb-4">
            We Inspect:
          </p>
          <div className="space-y-6">
            {InspectMockData.map((inspect) => (
              <p
                key={inspect.id}
                className="flex items-center gap-2 text-xs font-semibold"
              >
                {inspect.icon} {inspect.detail}
              </p>
            ))}
          </div>
        </div>

        {/* Copyright detected */}
        <div className="w-full py-5 px-4 rounded-2xl bg-[linear-gradient(90deg,rgba(78,120,253,0.04)_0%,rgba(255,27,228,0.04)_100%)] text-center mt-6">
          <p className="text-[#155DFC] font-bold text-[32px]">12+ Billion</p>
          <p className="text-[#212B36] font-medium">
            copyright infringements detected
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveScanning;
