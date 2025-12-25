import CommonTitle from "@/shared/LandingShared/CommonTitle";
import React from "react";
import RepresentPlatformCarousel from "./RepresentPlatformCarousel";
import CommonContainer from "@/shared/LandingShared/CommonContainer";

const RepresentPlatform = () => {
  return (
    <CommonContainer className={"mt-50 sm:mt-25 w-full"}>
      <CommonTitle title={"Represent platform"} />
      <RepresentPlatformCarousel />
    </CommonContainer>
  );
};

export default RepresentPlatform;
