import React from "react";

const ReviewSectionSkeleton = () => {
  return (
    <div className="w-full mt-5 sm:mt-8 animate-pulse">
      <div className="flex flex-col-reverse xl:flex-row xl:min-h-[500px] xl:max-h-[500px] rounded-3xl overflow-hidden border border-gray-200">
        {/* Left: text content */}
        <div className="w-full xl:w-[60%] p-5 sm:p-6 xl:p-8 flex flex-col justify-between gap-4">
          <div className="space-y-4">
            {/* Company logo */}
            <div className="h-10 w-24 bg-gray-200 rounded" />
            {/* Review title */}
            <div className="h-7 w-3/4 bg-gray-200 rounded" />
            <div className="h-7 w-1/2 bg-gray-200 rounded" />
            {/* Review text */}
            <div className="space-y-2 mt-2">
              <div className="h-4 w-full bg-gray-200 rounded" />
              <div className="h-4 w-full bg-gray-200 rounded" />
              <div className="h-4 w-2/3 bg-gray-200 rounded" />
            </div>
          </div>
          {/* Rating + name */}
          <div className="space-y-2">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-4 h-4 bg-gray-200 rounded-full" />
              ))}
            </div>
            <div className="h-5 w-32 bg-gray-200 rounded" />
            <div className="h-4 w-24 bg-gray-200 rounded" />
          </div>
        </div>
        {/* Right: image */}
        <div className="w-full xl:w-[40%] max-h-[300px] xl:min-h-[500px] bg-gray-200 rounded-t-3xl xl:rounded-t-none xl:rounded-r-3xl" />
      </div>
    </div>
  );
};

export default ReviewSectionSkeleton;
