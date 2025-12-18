import React, { useState } from "react";
import { WhatWeDoMockData } from "@/lib/HomeMockData";
import CommonTitle from "@/shared/LandingShared/CommonTitle";
import CommonContainer from "@/shared/LandingShared/CommonContainer";
import Scan from "./Scan";
import Delist from "./Delist";
import Takedown from "./Takedown";

const WhatWeDo = () => {
  const [activeCard, setActiveCard] = useState("Scan");

  return (
    <CommonContainer id="what-we-do">
      <CommonTitle title="What we do" />
      <p className="text-center text-[#333] font-medium py-8">
        Discover our full suite of copyright protection features
      </p>

      <div className="grid grid-cols-4 gap-4 w-full">
        {WhatWeDoMockData.map((weDo) => {
          const isActive = weDo.name === activeCard;

          return (
            <div
              key={weDo.name}
              onClick={() => setActiveCard(weDo.name)}
              className={`rounded-[12px] border border-[#DCE4FF] py-3 px-8
                flex flex-col items-center justify-center gap-2 group
                hover:bg-[linear-gradient(90deg,#3F80FF_0%,#FF1BE4_87.03%)]
                hover:border-purple-700 cursor-pointer transition-all duration-300
                ${
                  isActive
                    ? "bg-[linear-gradient(90deg,#3F80FF_0%,#FF1BE4_87.03%)] border-purple-700"
                    : ""
                }
              `}
            >
              {/* ICON */}
              {React.cloneElement(weDo.icon, {
                className: `transition-colors ${
                  isActive ? "text-white" : "text-black group-hover:text-white"
                }`,
              })}

              {/* TEXT */}
              <p
                className={`text-sm font-medium text-center transition-colors ${
                  isActive ? "text-white" : "text-black group-hover:text-white"
                }`}
              >
                {weDo.name}
              </p>
            </div>
          );
        })}
      </div>

      {activeCard === "Scan" && <Scan />}
      {activeCard === "Delist" && <Delist />}
      {activeCard === "Takedown" && <Takedown />}
    </CommonContainer>
  );
};

export default WhatWeDo;
