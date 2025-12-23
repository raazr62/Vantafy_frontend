import { InspectMockData } from "@/lib/HomeMockData";
import React from "react";

const ComprehensiveScanning = () => {
  return (
    <div className="shadow-[0_20px_25px_-5px_rgba(0,0,0,0.10),0_8px_10px_-6px_rgba(0,0,0,0.10)] border border-[#F3E8FF] p-4 sm:p-6 lg:p-8 rounded-3xl flex-1 h-full flex flex-col">
      <h6 className="bg-linear-to-r from-[#155DFC] to-[#9810FA] bg-clip-text text-transparent text-2xl lg:text-3xl">
        Comprehensive Scanning
      </h6>

      <p className="pt-1 pb-4 text-[#4A5565] text-sm sm:text-base">
        Our advanced software crawls the internet 24/7, combined with manual
        scans by trainned agents to ensure nothing is missed.
      </p>

      {/* We Inspect */}
      <div className="space-y-3 sm:space-y-5">
        {InspectMockData.map((inspect) => (
          <p
            key={inspect.id}
            className="text-sm sm:text-base flex items-center gap-2 text-[#364153]"
          >
            <span className="p-2 bg-[linear-gradient(135deg,#F3E8FF_0%,#DBEAFE_100%)] rounded-xl">
              {inspect.icon}
            </span>
            {inspect.detail}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ComprehensiveScanning;
