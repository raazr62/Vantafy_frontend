import { requestRemovalStatsMockData } from "@/lib/DashboardMockData";
import React from "react";

const RequestRemovalStats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
      {requestRemovalStatsMockData.map((data) => (
        <div
          key={data.id}
          className="flex items-center gap-2 sm:gap-3 bg-white rounded-2xl p-4 w-full shadow-[0_0.785px_2.355px_0_rgba(0,0,0,0.10),0_0.785px_1.57px_-0.785px_rgba(0,0,0,0.10)]"
        >
          <div className={`p-2.5 rounded-[10px] ${data.bg}`}>{data.icon}</div>
          <div>
            <p className="text-lg sm:text-xl lg:text-2xl font-bold">
              {data.count}
            </p>
            <p className="text-[#4A4A4A] text-xs sm:font-medium">
              {data.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RequestRemovalStats;
