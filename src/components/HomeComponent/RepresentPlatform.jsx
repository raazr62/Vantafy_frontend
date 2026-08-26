import CommonTitle from "@/shared/LandingShared/CommonTitle";
import React from "react";
import RepresentPlatformCarousel from "./RepresentPlatformCarousel";
import CommonContainer from "@/shared/LandingShared/CommonContainer";
import RepresentPlatformSkeleton from "./RepresentPlatformSkeleton";
import SectionError from "./SectionError";

const RepresentPlatform = ({ platforms, isLoading, isError }) => {
  return (
    <CommonContainer className={"mt-45 sm:mt-25 w-full"}>
      <CommonTitle title={"Represented Platforms"} />
      {isLoading ? (
        <RepresentPlatformSkeleton />
      ) : isError ? (
        <SectionError message="Failed to load platforms." />
      ) : (
        <RepresentPlatformCarousel platforms={platforms} />
      )}
    </CommonContainer>
  );
};

export default RepresentPlatform;
