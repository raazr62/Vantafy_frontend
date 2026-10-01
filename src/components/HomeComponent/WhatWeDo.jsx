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
import { MdSwipe } from "react-icons/md";
import { motion } from "motion/react";

const WhatWeDo = () => {
  const [activeCard, setActiveCard] = useState("Scan");
  return (
    <CommonContainer id="what-we-do" className={"w-full"}>
      <CommonTitle title="What We Do" />
      {/* <p className="text-sm sm:text-base text-center text-[#333] font-medium py-4 sm:py-6 lg:py-8 px-4 xl:px-0">
        Discover our full suite of copyright protection features
      </p> */}

      {/* Mobile Scroll Indicator */}
      <div className="flex md:hidden justify-center items-center mt-10">
        <motion.div
          className="flex items-center gap-1 text-xs font-semibold text-gray-400"
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 1 }}
        >
          <span>Swipe to see more</span>
          <motion.div
            animate={{
              x: [0, 10, 0],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <MdSwipe className="text-fuchsia-500 text-sm" />
          </motion.div>
        </motion.div>
      </div>

      {/* Mobile Scroll Indicator (Dots) */}
      <div className="flex md:hidden justify-center gap-2 mt-2 mb-3">
        {WhatWeDoMockData.map((data, idx) => (
          <div
            key={idx}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              activeCard === data.name ? "bg-primary w-6" : "bg-gray-300 w-2"
            )}
          />
        ))}
      </div>

      <div className="flex md:grid md:grid-cols-4 overflow-x-auto snap-x snap-mandatory gap-3 sm:gap-4 w-full px-4 sm:px-6 pb-2 no-scrollbar sm:mt-12 lg:mt-15">
        {WhatWeDoMockData.map((weDo, idx) => {
          const isActive = weDo.name === activeCard;

          return (
            <div
              key={idx}
              onClick={() => setActiveCard(weDo.name)}
              className={cn(
                "relative min-w-[120px] shrink-0 snap-center rounded-[12px] border border-b-6 border-[#DCE4FF] py-2 sm:py-3 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center gap-1 sm:gap-2 overflow-hidden cursor-pointer",
                isActive && "bg-fuchsia-50 rounded-2xl  border-sky-500"
              )}
            >
              {isActive && (
                <div className="absolute w-40 h-40 -top-20 -left-20 sm:w-45 sm:h-45 sm:-top-20 sm:-left-20 xl:w-96 xl:h-96 xl:left-[-111px] xl:top-[-245px] bg-fuchsia-100 rounded-full" />
              )}

              <div className="relative z-10 flex flex-col items-center gap-2">
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
      {activeCard === "Delisting" && <Delist />}
      {activeCard === "Deletion" && <Takedown />}
      {activeCard === "Detection" && <Impersonation />}
      {activeCard === "Deepfakes" && <Platforms />}
      {activeCard === "Human Touch" && <PersonalAgent />}
      {activeCard === "Anonymity" && <AiProtection />}
      {activeCard === "Reports" && <Anonymous />}
    </CommonContainer>
  );
};

export default WhatWeDo;
