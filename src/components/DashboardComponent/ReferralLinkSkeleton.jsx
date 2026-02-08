import React from "react";

const ReferralLinkSkeleton = () => {
  return (
    <div className="bg-white rounded-2xl p-4 w-full shadow-[0_0.785px_2.355px_0_rgba(0,0,0,0.10),0_0.785px_1.57px_-0.785px_rgba(0,0,0,0.10)] space-y-2 sm:space-y-4 animate-pulse">
      {/* Title Skeleton */}
      <div className="h-7 w-48 bg-gray-300/20 rounded"></div>

      <div>
        {/* Input Field Skeleton */}
        <div className="relative">
          <div className="h-12 w-full bg-gray-300/20 rounded-lg mb-2 sm:mb-0"></div>
          {/* Button Skeleton */}
          <div className="h-8 w-28 bg-gray-300/20 rounded-xl sm:absolute sm:top-1/2 sm:-translate-y-1/2 right-2.5"></div>
        </div>

        {/* Description Skeleton */}
        <div className="h-4 w-64 bg-gray-300/20 rounded mt-1.5"></div>
      </div>

      {/* Stats Cards Skeleton */}
      <div className="flex items-center gap-3.5">
        {/* Total Referred Skeleton */}
        <div className="w-full bg-gray-300/20 space-y-2 px-6 py-3 rounded-2xl">
          <div className="h-4 w-32 bg-gray-300/30 rounded"></div>
          <div className="h-10 w-16 bg-gray-300/30 rounded"></div>
        </div>

        {/* Free month Earned Skeleton */}
        <div className="w-full bg-gray-300/20 space-y-2 px-6 py-3 rounded-2xl">
          <div className="h-4 w-32 bg-gray-300/30 rounded"></div>
          <div className="h-10 w-16 bg-gray-300/30 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default ReferralLinkSkeleton;
