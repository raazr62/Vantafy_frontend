import React from "react";
import { ourCustomerMockData } from "@/lib/HomeMockData";
import Marquee from "react-fast-marquee";

const AmongOurCustomerCarousel = () => {
  return (
    <div className="overflow-hidden relative w-full select-none container pt-10 sm:pt-12 lg:pt-15 group">
      {/* Left Fade */}
      {/* <div className="absolute left-0 top-0 h-full w-40 sm:w-45 lg:w-50 z-10 pointer-events-none bg-linear-to-r from-white via-white/40 to-transparent" /> */}

      <Marquee pauseOnHover={true} speed={50} gradient={false}>
        {ourCustomerMockData.map((user) => (
          <div
            key={user.id}
            className="relative min-w-[250px] md:min-w-[280px] xl:min-w-[348px] rounded-2xl mx-1 sm:mx-1.5 lg:mx-2.5"
          >
            <img
              src={user.avatar}
              alt={user.name}
              className="w-full h-full max-h-[300px] md:max-h-[350px] lg:max-h-[430px] object-top object-cover rounded-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-[#62626233] backdrop-blur-[3px] rounded-b-2xl space-y-1">
              <p className="flex items-center gap-2 text-white text-lg md:text-xl lg:text-2xl font-semibold">
                {user.name}{" "}
                <img
                  src={user.companyLogo}
                  className="w-4.5 sm:w-5.5 lg:w-6"
                  alt="Company Logo"
                />
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-white">
                Subscribe {user.subscribe}
              </p>
            </div>
          </div>
        ))}
      </Marquee>

      {/* Right Fade */}
      {/* <div className="absolute right-0 top-0 h-full w-40 sm:w-45 lg:w-50 z-10 pointer-events-none bg-linear-to-l from-white via-white/40 to-transparent" /> */}
    </div>
  );
};

export default AmongOurCustomerCarousel;
