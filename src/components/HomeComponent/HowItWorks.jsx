import CommonContainer from "@/shared/LandingShared/CommonContainer";
import CommonTitle from "@/shared/LandingShared/CommonTitle";
import React from "react";
import HowItWorksAccordion from "./HowItWorksAccordion";
import HowItWorksImages from "./HowItWorksImages";

const HowItWorks = () => {
  return (
    <CommonContainer>
      <CommonTitle title={"How it works"} />

      {/* FAQ */}
      <div className="w-full flex items-center justify-between gap-16 mt-6">
        {/* Accordion How it works
         */}
        <HowItWorksAccordion />

        {/* How It works Image */}
        <HowItWorksImages />
      </div>
    </CommonContainer>
  );
};

export default HowItWorks;
