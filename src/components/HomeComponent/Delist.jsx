import React from "react";
import {
  BrowserIconSVG,
  SearchIconSVG,
  WarningIconSVG,
} from "../SVG/HomeLayoutSVG";

const Delist = () => {
  return (
    <div className="w-full mt-4 sm:mt-6 px-4 sm:px-6">
      <div className="bg-[#AD46FF0A] py-7 sm:py-9 lg:py-11 w-full rounded-3xl px-4 sm:px-6">
        <div className="max-w-2xl mx-auto space-y-2 sm:space-y-4">
          <p className="text-center bg-linear-to-r from-[#4E78FD] to-[#FF1BE4] bg-clip-text text-transparent font-semibold text-xl sm:text-2xl lg:text-[32px]">
            Search Engine Removals
          </p>
          <p className="text-sm sm:text-base text-center text-[#333333] font-medium">
            Our trusted reporting process quickly removes infringing content from search engines, which reduces visibility and unwanted exposure.
            Google Trusted Copyright Removal Program Member (Badge)
          </p>

          {/* We Inspect */}
          <div className="py-6 sm:py-8 px-4 rounded-2xl bg-[linear-gradient(90deg,rgba(78,120,253,0.04)_0%,rgba(255,27,228,0.04)_100%)] space-y-3">
            <p className="text-primary text-center text-base sm:text-lg font-semibold">
              We Inspect:
            </p>
            <p className="flex items-center gap-2 text-xs sm:text-sm font-medium">
              <SearchIconSVG /> 100% remove from google
            </p>
            <p className="flex items-center gap-2 text-xs sm:text-sm font-medium">
              <BrowserIconSVG /> Google search engine covered
            </p>
          </div>

          {/* Notify */}
          <p className="py-4 sm:py-6 flex items-center gap-2 justify-center bg-[linear-gradient(90deg,rgba(78,120,253,0.04)_0%,rgba(255,27,228,0.04)_100%)] rounded-2xl font-medium text-xs sm:text-sm px-2 sm:px-4">
            <WarningIconSVG /> We preserve referrals, reviews, and affiliate
            content you wish to keep
          </p>
        </div>
      </div>
    </div>
  );
};

export default Delist;
