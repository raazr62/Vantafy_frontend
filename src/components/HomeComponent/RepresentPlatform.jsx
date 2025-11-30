import CommonTitle from "@/shared/LandingShared/CommonTitle";
import React from "react";
import RepresentPlatformCarousel from "./RepresentPlatformCarousel";

const RepresentPlatform = () => {
  return (
    <div className="flex flex-col items-center my-20">
      <CommonTitle title={"Represent platform"} />
      <RepresentPlatformCarousel />
    </div>
  );
};

export default RepresentPlatform;
