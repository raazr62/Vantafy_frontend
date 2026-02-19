import React from "react";

const FAQSkeleton = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-10 mt-10 sm:mt-12 lg:mt-15 w-full animate-pulse">
      {/* Accordion items */}
      <div className="flex-5/7 w-full space-y-1">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="border-b border-gray-200 py-4 space-y-2">
            <div className="flex items-start gap-3">
              <div className="h-8 w-10 bg-gray-200 rounded shrink-0" />
              <div className="h-6 w-4/5 bg-gray-200 rounded" />
            </div>
          </div>
        ))}
      </div>
      {/* Circle spinner placeholder */}
      <div className="flex-2/7 flex items-center justify-center">
        <div className="w-[300px] h-[300px] lg:w-full lg:h-full max-w-[400px] max-h-[400px] bg-gray-200 rounded-full" />
      </div>
    </div>
  );
};

export default FAQSkeleton;
