import React from "react";

const AmongOurCustomerSkeleton = () => {
  return (
    <div className="overflow-hidden w-full pt-10 sm:pt-12 lg:pt-15 animate-pulse">
      <div className="flex gap-2.5 px-4">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="relative min-w-[250px] md:min-w-[280px] xl:min-w-[348px] shrink-0 rounded-2xl overflow-hidden"
          >
            {/* Portrait image placeholder */}
            <div className="w-full max-h-[300px] md:max-h-[350px] lg:max-h-[430px] h-[300px] md:h-[350px] lg:h-[430px] bg-gray-200 rounded-2xl" />
            {/* Name/sub overlay placeholder */}
            <div className="absolute bottom-0 left-0 right-0 p-4 space-y-2">
              <div className="h-5 w-3/5 bg-gray-300 rounded" />
              <div className="h-4 w-2/5 bg-gray-300 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AmongOurCustomerSkeleton;
