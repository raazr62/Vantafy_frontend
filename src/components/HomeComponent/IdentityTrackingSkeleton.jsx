import React from "react";

const IdentityTrackingSkeleton = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-6 mt-10 sm:mt-12 lg:mt-15 animate-pulse">
      {/* Image placeholder */}
      <div className="relative rounded-2xl flex-1 w-full">
        <div className="w-full h-[280px] sm:h-[340px] lg:h-[400px] bg-gray-200 rounded-2xl" />
        {/* Icon badges */}
        <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-10 h-10 sm:w-12 sm:h-12 bg-gray-300 rounded-full" />
        <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-10 h-10 sm:w-12 sm:h-12 bg-gray-300 rounded-full" />
      </div>
      {/* Text placeholder */}
      <div className="flex-1 space-y-3 text-center lg:text-left">
        <div className="h-7 sm:h-8 w-3/4 bg-gray-200 rounded mx-auto lg:mx-0" />
        <div className="h-5 w-full bg-gray-200 rounded" />
        <div className="h-5 w-5/6 bg-gray-200 rounded" />
        <div className="h-5 w-2/3 bg-gray-200 rounded" />
      </div>
    </div>
  );
};

export default IdentityTrackingSkeleton;
