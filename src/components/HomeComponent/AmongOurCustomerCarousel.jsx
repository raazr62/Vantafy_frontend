import React from "react";
import { ourCustomerMockData } from "@/lib/HomeMockData";

const AmongOurCustomerCarousel = () => {
  return (
    <div className="overflow-hidden relative w-full select-none container pt-10 sm:pt-12 lg:pt-15 group">
      {/* Left Fade */}
      <div className="absolute left-0 top-0 h-full w-40 sm:w-45 lg:w-50 z-10 pointer-events-none bg-linear-to-r from-white via-white/40 to-transparent" />

      <div className="flex gap-2 sm:gap-3 lg:gap-5 whitespace-nowrap animate-marquee group-hover:animation-paused">
        {/* First Set */}
        {ourCustomerMockData.map((user) => (
          <div
            key={user.id}
            className="flex items-center gap-2 border border-gray-200 p-2 sm:p-3 rounded-xl min-w-[220px] sm:min-w-[280px]"
          >
            <img
              src={user.avatar}
              alt={user.name}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
            />

            <div>
              <div className="flex gap-1 sm:gap-2 items-center">
                <p className="text-sm sm:text-base font-semibold">
                  {user.name}
                </p>
                <img
                  src={user.companyLogo}
                  className="w-10 sm:w-12 lg:w-14"
                  alt={user.companyLogo}
                />
              </div>
              <p className="text-xs sm:text-sm">Subscribe {user.subscribe}</p>
            </div>
          </div>
        ))}

        {/* Duplicate Set (Loop) */}
        {ourCustomerMockData.map((user) => (
          <div
            key={`2-${user.id}`}
            className="flex items-center gap-2 border border-gray-200 p-2 sm:p-3 rounded-xl min-w-[220px] sm:min-w-[280px]"
          >
            <img
              src={user.avatar}
              alt={user.name}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
            />

            <div>
              <div className="flex gap-1 sm:gap-2 items-center">
                <p className="text-sm sm:text-base font-semibold">
                  {user.name}
                </p>
                <img
                  src={user.companyLogo}
                  className="w-10 sm:w-12 lg:w-14"
                  alt={user.companyLogo}
                />
              </div>
              <p className="text-xs sm:text-sm">Subscribe {user.subscribe}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Right Fade */}
      <div className="absolute right-0 top-0 h-full w-40 sm:w-45 lg:w-50 z-10 pointer-events-none bg-linear-to-l from-white via-white/40 to-transparent" />
    </div>
  );
};

export default AmongOurCustomerCarousel;
