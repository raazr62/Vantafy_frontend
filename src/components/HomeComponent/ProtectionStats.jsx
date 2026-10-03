import React from "react";
import { ShieldIconSVG } from "../SVG/HomeLayoutSVG";
import { protectionStatsMockData } from "@/lib/HomeMockData";

const ProtectionStats = () => {
  return (
    <div className="flex-1 bg-[#5A72FB] text-white p-4 sm:p-6 lg:p-8 rounded-3xl h-full flex flex-col shadow-[0_20px_25px_-5px_rgba(0,0,0,0.10),0_8px_10px_-6px_rgba(0,0,0,0.10)]">
      <p className="items-center gap-1 sm:gap-2 font-bold px-4 bg-[#FFFFFF33] inline-flex rounded-4xl py-1.5 w-fit text-sm sm:text-base">
        <ShieldIconSVG />
        Protection Stats
      </p>

      <p className="text-3xl sm:text-4xl lg:text-5xl font-medium my-4">
        1+ Million
      </p>
      <p className="text-[#FFFFFFE5] text-base sm:text-lg lg:text-xl">
        Copyright infringements detected
      </p>

      {/* Stats Card */}
      <div className="grid grid-cols-2 gap-2 sm:gap-4 mt-4">
        {protectionStatsMockData.map((data) => (
          <div
            key={data.id}
            className="p-4.5 rounded-[14px] bg-[#FFFFFF1A] border border-[#FFFFFF33]"
          >
            <p className="text-lg sm:text-xl lg:text-2xl">{data.count}</p>
            <p className="text-xs sm:text-sm">{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProtectionStats;
