import React from "react";
import googlePartnerImg from "@/assets/Images/homeImages/google-partner.png";

const Delist = () => {
  return (
    <div className="w-full mt-4 sm:mt-6 px-4 sm:px-6">
      <div className="bg-[#AD46FF0A] py-8 sm:py-10 lg:py-12 w-full rounded-3xl px-4 sm:px-8">
        <div className="max-w-2xl mx-auto space-y-4 sm:space-y-6">
          <h3 className="text-center bg-linear-to-r from-[#4E78FD] to-[#FF1BE4] bg-clip-text text-transparent font-semibold text-2xl sm:text-3xl lg:text-[32px]">
            Search Engine Removals
          </h3>
          <p className="text-sm sm:text-base text-center text-[#333333] font-medium max-w-xl mx-auto">
            Our trusted reporting process quickly removes infringing content from search engines, which reduces visibility and unwanted exposure.
          </p>

          {/* Google Trusted Copyright Removal Program Member Badge */}
          <div className="mt-4 sm:mt-6 bg-[#AD46FF0D] border border-[#AD46FF1F] rounded-2xl py-3.5 sm:py-4 px-5 sm:px-8 flex items-center justify-center gap-3 sm:gap-4 max-w-lg mx-auto shadow-xs">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-lg p-1 flex items-center justify-center shrink-0 shadow-2xs">
              <img
                src={googlePartnerImg}
                alt="Google Partner"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xs sm:text-sm md:text-base font-semibold text-gray-800 text-left">
              Google Trusted Copyright Removal Program Member
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delist;
