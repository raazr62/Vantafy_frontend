import CommonTitle from "@/shared/LandingShared/CommonTitle";
import React from "react";
import RepresentPlatformCarousel from "./RepresentPlatformCarousel";
import CommonContainer from "@/shared/LandingShared/CommonContainer";

const RepresentPlatform = ({ platforms }) => {
  return (
    <CommonContainer className={"mt-45 sm:mt-25 w-full"}>
      <CommonTitle title={"Represent platform"} />
      <RepresentPlatformCarousel platforms={platforms} />
    </CommonContainer>
  );
};

export default RepresentPlatform;
