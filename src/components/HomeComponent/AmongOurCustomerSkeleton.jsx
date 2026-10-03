import React from "react";

const AmongOurCustomerSkeleton = () => {
  return (
    <div className="overflow-hidden w-full pt-10 sm:pt-12 lg:pt-15 animate-pulse">
      <div className="flex gap-2.5 px-4">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="relative min-w-[125px] md:min-w-[140px] xl:min-w-[174px] shrink-0 rounded-xl overflow-hidden"
          >
            {/* Portrait image placeholder */}
            <div className="w-full max-h-[150px] md:max-h-[175px] lg:max-h-[215px] h-[150px] md:h-[175px] lg:h-[215px] bg-gray-200 rounded-xl" />
            {/* Name/sub overlay placeholder */}
            <div className="absolute bottom-0 left-0 right-0 p-2.5 space-y-1">
              <div className="h-3 w-3/5 bg-gray-300 rounded" />
              <div className="h-2.5 w-2/5 bg-gray-300 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AmongOurCustomerSkeleton;
