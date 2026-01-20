import CommonContainer from "@/shared/LandingShared/CommonContainer";
import CommonTitle from "@/shared/LandingShared/CommonTitle";
import React from "react";
import HowItWorksAccordion from "./HowItWorksAccordion";
import HowItWorksImages from "./HowItWorksImages";

const HowItWorks = ({ how_it_works }) => {
  return (
    <CommonContainer id={"how-it-works"}>
      <CommonTitle title={"How it works"} />

      {/* FAQ */}
      <div className="w-full flex items-center justify-between lg:gap-4 xl:gap-16 mt-10 sm:mt-12 lg:mt-15">
        {/* Accordion How it works
         */}
        <HowItWorksAccordion how_it_works={how_it_works} />

        {/* How It works Image */}
        <HowItWorksImages />
      </div>
    </CommonContainer>
  );
};

export default HowItWorks;
