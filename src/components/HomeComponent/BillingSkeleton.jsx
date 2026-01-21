import React from "react";

const BillingSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-2 sm:mt-4 mx-auto w-full">
      {[1, 2, 3, 4].map((item) => (
        <div
          key={item}
          className="py-3 sm:py-6 px-2.5 bg-gray-200/10 animate-pulse rounded-[12px] shadow-lg flex flex-col items-center w-full min-h-[400px]"
        >
          {/* Plan Name */}
          <div className="h-8 w-24 bg-gray-300/20 rounded mb-2"></div>

          {/* Subtitle */}
          <div className="h-4 w-16 bg-gray-300/20 rounded mb-6"></div>

          {/* Price */}
          <div className="h-12 w-32 bg-gray-300/20 rounded-[45px] mb-8"></div>

          {/* Features List */}
          <div className="flex flex-col items-center w-full gap-4 mb-8">
            <div className="h-4 w-3/4 bg-gray-300/20 rounded border-b border-gray-300/10"></div>
            <div className="h-4 w-3/4 bg-gray-300/20 rounded border-b border-gray-300/10"></div>
            <div className="h-4 w-3/4 bg-gray-300/20 rounded border-b border-gray-300/10"></div>
            <div className="h-4 w-3/4 bg-gray-300/20 rounded border-b border-gray-300/10"></div>
            <div className="h-4 w-3/4 bg-gray-300/20 rounded border-b border-gray-300/10"></div>
          </div>

          {/* Button */}
          <div className="h-10 w-32 bg-gray-300/20 rounded mt-auto"></div>
        </div>
      ))}
    </div>
  );
};

export default BillingSkeleton;
