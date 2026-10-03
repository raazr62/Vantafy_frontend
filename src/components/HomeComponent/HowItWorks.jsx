import CommonContainer from "@/shared/LandingShared/CommonContainer";
import CommonTitle from "@/shared/LandingShared/CommonTitle";
import React from "react";
import HowItWorksAccordion from "./HowItWorksAccordion";
import HowItWorksSkeleton from "./HowItWorksSkeleton";
import SectionError from "./SectionError";

const HowItWorks = ({ how_it_works, isLoading, isError }) => {
  return (
    <CommonContainer id={"how-it-works"}>
      <CommonTitle title={"How It Works"} />

      {isLoading ? (
        <HowItWorksSkeleton />
      ) : isError ? (
        <SectionError message="Failed to load how it works section." />
      ) : (
        <div className="w-full mt-10 sm:mt-12 lg:mt-15">
          {/* Accordion How it works */}
          <HowItWorksAccordion how_it_works={how_it_works} />
        </div>
      )}
    </CommonContainer>
  );
};

export default HowItWorks;
