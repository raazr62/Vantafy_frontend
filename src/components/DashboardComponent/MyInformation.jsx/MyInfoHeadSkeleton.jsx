import React from "react";

const MyInfoHeadSkeleton = () => {
  return (
    <div className="bg-white rounded-2xl px-4 py-2 md:p-4 w-full shadow-[0_0.785px_2.355px_0_rgba(0,0,0,0.10),0_0.785px_1.57px_-0.785px_rgba(0,0,0,0.10)] flex flex-wrap sm:flex-row items-center justify-center sm:justify-between gap-2 sm:gap-4">
      {/* Title Section Skeleton */}
      <div className="space-y-2">
        <div className="h-7 w-32 bg-gray-300/20 rounded animate-pulse"></div>
        <div className="h-4 w-40 bg-gray-300/20 rounded animate-pulse"></div>
      </div>

      {/* Right Part Skeleton */}
      <div className="flex flex-wrap justify-center sm:flex-row items-center gap-2 sm:gap-4">
        {/* Member Usage Skeleton */}
        <div className="p-4 bg-[#F8FAFC] rounded-[12px] border-2 border-[#E2E8F0] space-y-2 animate-pulse">
          <div className="h-5 w-32 bg-gray-300/20 rounded"></div>
          <div className="h-3 w-full rounded-2xl bg-gray-300/20"></div>
          <div className="h-4 w-40 bg-gray-300/20 rounded"></div>
        </div>

        {/* Button Skeleton */}
        <div className="h-12 w-36 bg-gray-300/20 rounded-[12px] animate-pulse"></div>
      </div>
    </div>
  );
};

export default MyInfoHeadSkeleton;
