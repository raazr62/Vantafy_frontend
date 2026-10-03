import React from "react";
import { ourCustomerMockData } from "@/lib/HomeMockData";
import Marquee from "react-fast-marquee";

const AmongOurCustomerCarousel = ({ customers = [] }) => {
  const getImageUrl = (path) => {
    if (!path) return "";
    if (path.startsWith("http")) return path;
    const baseUrl = (import.meta.env.VITE_IMAGE_URL || "").replace(/\/$/, "");
    const cleanPath = path.startsWith("/") ? path : `/${path}`;
    return `${baseUrl}${cleanPath}`;
  };

  const displayCustomers =
    customers.length > 0
      ? Array.from({ length: Math.max(3, Math.ceil(12 / customers.length)) }, () => customers).flat()
      : [];

  return (
    <div className="overflow-hidden relative w-full select-none container pt-10 sm:pt-12 lg:pt-15 group">
      {/* Left Fade */}
      {/* <div className="absolute left-0 top-0 h-full w-40 sm:w-45 lg:w-50 z-10 pointer-events-none bg-linear-to-r from-white via-white/40 to-transparent" /> */}

      <Marquee pauseOnHover={true} speed={50} gradient={false}>
        {displayCustomers.map((customer, idx) => (
          <div
            key={`${customer.id}-${idx}`}
            className="relative min-w-[125px] md:min-w-[140px] xl:min-w-[174px] rounded-xl mx-1 sm:mx-1.5 lg:mx-2.5"
          >
            <img
              src={getImageUrl(customer.profile_pic)}
              alt={customer.name}
              className="w-full h-full max-h-[150px] md:max-h-[175px] lg:max-h-[215px] object-top object-cover rounded-xl"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1494790108377-be9c29b29330";
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-2.5 bg-[#62626233] backdrop-blur-[3px] rounded-b-xl space-y-0.5">
              <p className="flex items-center gap-1.5 text-white text-xs md:text-sm font-semibold">
                {customer.name}{" "}
                {customer.social_media_icon && (
                  <img
                    src={getImageUrl(customer.social_media_icon)}
                    className="w-3 sm:w-3.5 lg:w-4 object-contain inline-block"
                    alt="Social Media Icon"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                )}
              </p>
              <p className="text-[10px] sm:text-xs text-white">
                Subscribe {customer.followers_count}
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
