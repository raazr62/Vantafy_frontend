import React from "react";

const RepresentPlatformSkeleton = () => {
  return (
    <div className="overflow-hidden w-full pt-10 sm:pt-12 lg:pt-15 animate-pulse">
      <div className="flex items-center gap-6 sm:gap-8 lg:gap-10 px-4">
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className="h-6 sm:h-8 lg:h-10 bg-gray-200 rounded-full shrink-0"
            style={{ width: `${60 + (i % 3) * 20}px` }}
          />
        ))}
      </div>
    </div>
  );
};

export default RepresentPlatformSkeleton;
