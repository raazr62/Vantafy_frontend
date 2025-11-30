import { WhatWeDoMockData } from "@/lib/HomeMockData";
import CommonTitle from "@/shared/LandingShared/CommonTitle";
import React from "react";
import ComprehensiveScanning from "./ComprehensiveScanning";

const WhatWeDo = () => {
  return (
    <div className="flex flex-col items-center mt-30 mb-20 container mx-auto">
      <CommonTitle title={"What we do"} />
      <p className="text-center text-[#333] font-medium py-8">
        Discover our full suite of copyright protection features
      </p>

      {/* Stats */}
      <div className="grid grid-cols-8 gap-3 w-full">
        {WhatWeDoMockData.map((weDo) => (
          <div
            key={weDo.id}
            className="rounded-[12px] border border-[#DCE4FF] py-3 px-8 flex flex-col items-center justify-center hover:bg-[linear-gradient(90deg,#3F80FF_0%,#FF1BE4_87.03%)] group gap-2 hover:border-purple-700"
          >
            {weDo.icon}
            <p className="text-center group-hover:text-white text-sm font-medium">
              {weDo.name}
            </p>
          </div>
        ))}
      </div>

      {/* Comprehensive Scanning */}
      <ComprehensiveScanning />
    </div>
  );
};

export default WhatWeDo;
