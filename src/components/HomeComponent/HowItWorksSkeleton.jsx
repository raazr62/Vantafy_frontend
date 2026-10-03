import React from "react";

const HowItWorksSkeleton = () => {
  return (
    <div className="w-full mt-10 sm:mt-12 lg:mt-15 animate-pulse">
      {/* Accordion items */}
      <div className="w-full px-4 sm:px-6 space-y-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="border-b border-gray-200 py-4 space-y-2">
            <div className="h-6 w-4/5 bg-gray-200 rounded" />
            {i === 0 && (
              <div className="space-y-2 pt-2">
                <div className="h-4 w-full bg-gray-200 rounded" />
                <div className="h-4 w-3/4 bg-gray-200 rounded" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorksSkeleton;
