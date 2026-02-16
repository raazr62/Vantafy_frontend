import React from "react";

const RequestRemovalStatsSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 animate-pulse">
      {[1, 2, 3, 4].map((item) => (
        <div
          key={item}
          className="flex items-center gap-2 sm:gap-3 bg-white rounded-2xl p-4 w-full shadow-[0_0.785px_2.355px_0_rgba(0,0,0,0.10),0_0.785px_1.57px_-0.785px_rgba(0,0,0,0.10)]"
        >
          {/* Icon skeleton */}
          <div className="w-10 h-10 bg-gray-300/20 rounded-[10px]"></div>

          {/* Content skeleton */}
          <div className="flex-1 space-y-2">
            <div className="h-7 w-16 bg-gray-300/20 rounded"></div>
            <div className="h-4 w-28 bg-gray-300/20 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RequestRemovalStatsSkeleton;
