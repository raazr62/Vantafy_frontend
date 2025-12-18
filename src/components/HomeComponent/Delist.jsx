import React from "react";
import {
  BrowserIconSVG,
  SearchIconSVG,
  WarningIconSVG,
} from "../SVG/HomeLayoutSVG";

const Delist = () => {
  return (
    <div className="bg-[#AD46FF0A] py-11 w-full mt-6">
      <div className="max-w-2xl mx-auto space-y-4">
        <p className="text-center bg-linear-to-r from-[#4E78FD] to-[#FF1BE4] bg-clip-text text-transparent font-semibold text-[32px]">
          Search Delisting
        </p>
        <p className="text-center text-[#333333] font-medium">
          As a trusted partner, Google rapidly delists any infringing content we
          report, ensuring your content doesn't appear in search results.
        </p>

        {/* We Inspect */}
        <div className="py-8 px-4 rounded-2xl bg-[linear-gradient(90deg,rgba(78,120,253,0.04)_0%,rgba(255,27,228,0.04)_100%)] space-y-3">
          <p className="text-primary text-center text-lg font-semibold">
            We Inspect:
          </p>
          <p className="flex items-center gap-2 text-sm font-medium">
            <SearchIconSVG /> 100% remove from google
          </p>
          <p className="flex items-center gap-2 text-sm font-medium">
            <BrowserIconSVG /> 100% remove from google
          </p>
        </div>

        {/* Notify */}
        <p className="py-6 flex items-center gap-2 justify-center bg-[linear-gradient(90deg,rgba(78,120,253,0.04)_0%,rgba(255,27,228,0.04)_100%)] rounded-2xl font-medium text-sm">
          <WarningIconSVG /> We preserve referrals, reviews, and affiliate
          content you wish to keep
        </p>
      </div>
    </div>
  );
};

export default Delist;
