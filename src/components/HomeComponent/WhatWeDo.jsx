import React, { useState } from "react";
import { WhatWeDoMockData } from "@/lib/HomeMockData";
import CommonTitle from "@/shared/LandingShared/CommonTitle";
import CommonContainer from "@/shared/LandingShared/CommonContainer";
import Scan from "./Scan";
import Delist from "./Delist";
import Takedown from "./Takedown";
import Impersonation from "./Impersonation";
import Platforms from "./Platforms";
import PersonalAgent from "./PersonalAgent";
import AiProtection from "./AiProtection";
import Anonymous from "./Anonymous";
import { cn } from "@/lib/utils";

const WhatWeDo = () => {
  const [activeCard, setActiveCard] = useState("Scan");
  return (
    <CommonContainer id="what-we-do">
      <CommonTitle title="What we do" />
      <p className="text-sm sm:text-base text-center text-[#333] font-medium py-4 sm:py-6 lg:py-8 px-4 xl:px-0">
        Discover our full suite of copyright protection features
      </p>

      {/* Old */}
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-4 w-full px-4 xl:px-0">
        {WhatWeDoMockData.map((weDo) => {
          const isActive = weDo.name === activeCard;

          return (
            <div
              key={weDo.name}
              onClick={() => setActiveCard(weDo.name)}
              className={cn(
                "relative rounded-[12px] border border-b-6 border-[#DCE4FF] py-2 sm:py-3 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center gap-1 sm:gap-2 overflow-hidden cursor-pointer",
                isActive && "bg-fuchsia-50 rounded-2xl  border-sky-500"
              )}
            >
              {isActive && (
                <div className="absolute w-96 h-96 left-[-111px] top-[-245px] bg-fuchsia-100 rounded-full" />
              )}

              <div className="relative z-50 flex flex-col items-center gap-2">
                {React.cloneElement(weDo.icon)}
                <p className="text-xs sm:text-sm font-medium text-center text-black">
                  {weDo.name}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {activeCard === "Scan" && <Scan />}
      {activeCard === "Delist" && <Delist />}
      {activeCard === "Takedown" && <Takedown />}
      {activeCard === "Impersonation" && <Impersonation />}
      {activeCard === "Platforms" && <Platforms />}
      {activeCard === "Personal Agent" && <PersonalAgent />}
      {activeCard === "Ai Protection" && <AiProtection />}
      {activeCard === "Anonymous" && <Anonymous />}
    </CommonContainer>
  );
};

export default WhatWeDo;
