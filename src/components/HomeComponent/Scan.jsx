import React from "react";
import ComprehensiveScanning from "./ComprehensiveScanning";
import ProtectionStats from "./ProtectionStats";
import WhatWeDoFeatureCards from "./WhatWeDoFeatureCards";

const Scan = () => {
  return (
    <div className="w-full mt-4 sm:mt-6 px-4 sm:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 items-stretch">
        <ComprehensiveScanning />
        <ProtectionStats />
      </div>
      <WhatWeDoFeatureCards />
    </div>
  );
};

export default Scan;
