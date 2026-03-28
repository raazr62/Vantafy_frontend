import React from "react";

const HeroSkeleton = () => {
  return (
    <section className="container mx-auto flex  flex-col-reverse items-center justify-center lg:justify-between lg:flex-row sm:gap-10 overflow-hidden lg:items-start sm:pt-6 md:pt-8  lg:pt-10 px-4 xl:px-0 animate-pulse">
      {/* Left: text + button skeleton */}
      <div className="absolute top-90 sm:static -mt-20 md:mt-0 pb-20 flex flex-col items-center gap-4 lg:items-start max-w-2xl lg:pt-5 w-full">
        {/* Title */}
        <div className="h-10 sm:h-12 lg:h-14 w-[90%] sm:w-[80%] bg-gray-200 rounded-xl" />
        <div className="h-10 sm:h-12 lg:h-14 w-[70%] sm:w-[60%] bg-gray-200 rounded-xl" />
        {/* Subtitle */}
        <div className="h-5 w-[85%] bg-gray-200 rounded-lg mt-1" />
        <div className="h-5 w-[65%] bg-gray-200 rounded-lg" />
        {/* CTA Button */}
        <div className="h-11 w-40 hidden md:block bg-gray-200 rounded-lg mt-2"/>
      </div>

      {/* Right: radar circle skeleton */}
      <div className="w-full flex justify-center lg:justify-end pt-10 lg:p-10">
        <div className="relative min-w-[220px] min-h-[220px] sm:min-w-[280px] sm:min-h-[280px] lg:min-w-[400px] lg:min-h-[400px] scale-[0.8] md:scale-[0.85] lg:scale-100 origin-center">
          <div className="w-full h-full rounded-full bg-gray-200" />
        </div>
      </div>
    </section>
  );
};

export default HeroSkeleton;
