import React from "react";

const ReferralHistorySkeleton = () => {
  return (
    <div className="bg-white rounded-2xl p-4 w-full shadow-[0_0.785px_2.355px_0_rgba(0,0,0,0.10),0_0.785px_1.57px_-0.785px_rgba(0,0,0,0.10)] min-h-0 flex flex-col animate-pulse">
      {/* Title Skeleton */}
      <div className="h-7 w-40 bg-gray-300/20 rounded mb-4"></div>

      <div className="grow min-h-0 flex flex-col">
        {/* Table Header Skeleton */}
        <div className="flex items-center justify-between px-5 py-3 border-b-2 border-b-[#eeedf0]">
          <div className="h-4 w-28 bg-gray-300/20 rounded"></div>
          <div className="h-4 w-20 bg-gray-300/20 rounded"></div>
        </div>

        {/* Table Rows Skeleton */}
        <div className="grow overflow-y-auto">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="flex items-center justify-between px-5 py-3 border-b-2 border-b-[#eeedf0]"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-300/20 rounded-[6px]"></div>
                <div className="h-4 w-32 bg-gray-300/20 rounded"></div>
              </div>
              <div className="h-4 w-24 bg-gray-300/20 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReferralHistorySkeleton;
