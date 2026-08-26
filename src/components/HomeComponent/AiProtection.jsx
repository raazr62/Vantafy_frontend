import { aiProtectionMockData } from "@/lib/HomeMockData";
import React from "react";

const AiProtection = () => {
  return (
    <div className="bg-[#AD46FF0A] py-7 sm:py-9 lg:py-11 w-full mt-4 sm:mt-6 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto space-y-2 sm:space-y-4">
        <p className="text-center bg-linear-to-r from-[#4E78FD] to-[#FF1BE4] bg-clip-text text-transparent font-semibold text-xl sm:text-2xl lg:text-[32px]">
          AI-Powered Protection
        </p>
        <p className="text-center text-[#333333] font-medium text-sm sm:text-base">
          Advanced artificial intelligence technology protects your content with
          precision and speed.
        </p>

        <div className="space-y-2 sm:space-y-4">
          {aiProtectionMockData.map((data) => (
            <div
              key={data.id}
              className="py-4 px-2 sm:py-6 sm:px-4 rounded-2xl bg-[linear-gradient(90deg,rgba(78,120,253,0.04)_0%,rgba(255,27,228,0.04)_100%)] flex items-center gap-2"
            >
              <p className="bg-linear-to-r from-[#EC70DA] to-[#51AEFA] p-2 sm:p-2.5 rounded-xl">
                {data.icon}
              </p>
              <div>
                <p className="text-[#333333] font-semibold text-sm sm:text-base">
                  {data.title}
                </p>
                <p className="text-[#333333] text-sm sm:text-base">
                  {data.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AiProtection;
