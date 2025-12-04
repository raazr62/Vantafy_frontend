import { BigLockSVG } from "@/components/SVG/AuthLayoutSVG";
import React from "react";

const LockBanner = () => {
  return (
    <div
      className="bg-[linear-gradient(180deg,#FF53EB_0%,#FF89F1_100%)]
      px-9 relative flex-[45%] overflow-hidden flex items-center justify-center"
    >
      {/* Outer Circle */}
      <div className="bg-[#F243DD] p-20.5 rounded-full aspect-square flex items-center justify-center">
        {/* Middle Circle */}
        <div className="bg-[#FF00E1] p-10.5 rounded-full aspect-square flex items-center justify-center">
          {/* Inner Circle */}
          <div className="bg-[#FFBFF7] p-16 rounded-full aspect-square flex items-center justify-center">
            <BigLockSVG />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LockBanner;
