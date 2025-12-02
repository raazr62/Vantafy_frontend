import CommonTitle from "@/shared/LandingShared/CommonTitle";
import React from "react";
import RepresentPlatformCarousel from "./RepresentPlatformCarousel";
import CommonContainer from "@/shared/LandingShared/CommonContainer";

const RepresentPlatform = () => {
  return (
    <CommonContainer>
      <CommonTitle title={"Represent platform"} />
      <RepresentPlatformCarousel />
    </CommonContainer>
  );
};

export default RepresentPlatform;
