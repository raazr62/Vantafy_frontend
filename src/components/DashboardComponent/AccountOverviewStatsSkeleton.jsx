import React from "react";

const AccountOverviewStatsSkeleton = () => {
  return (
    <div className="grid grid-cols-2 gap-2 sm:gap-4 animate-pulse">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div
          key={item}
          className="bg-[linear-gradient(90deg,rgba(78,120,253,0.04)_0%,rgba(255,27,228,0.04)_100%)] p-3 sm:p-4 rounded-xl text-center space-y-1 md:space-y-2"
        >
          {/* Label skeleton */}
          <div className="h-4 w-20 bg-gray-300/20 rounded mx-auto"></div>
          {/* Value skeleton */}
          <div className="h-7 w-16 bg-gray-300/20 rounded mx-auto"></div>
        </div>
      ))}
    </div>
  );
};

export default AccountOverviewStatsSkeleton;
