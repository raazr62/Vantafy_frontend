import CommonContainer from "@/shared/LandingShared/CommonContainer";
import CommonTitle from "@/shared/LandingShared/CommonTitle";
import { IdentityScanSVG, IdentityTrackSVG } from "../SVG/HomeLayoutSVG";
import IdentityTrackingSkeleton from "./IdentityTrackingSkeleton";
import SectionError from "./SectionError";

const IdentityTracking = ({ identity_tracking, isLoading, isError }) => {
  return (
    <CommonContainer>
      <CommonTitle title="Identity Tracking" />
      {isLoading ? (
        <IdentityTrackingSkeleton />
      ) : isError ? (
        <SectionError message="Failed to load identity tracking section." />
      ) : (
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-10 px-4 xl:px-0 mt-10 sm:mt-12 lg:mt-15">
          {/* Image */}
          <div className="relative rounded-[12px] flex-1">
            <img
              src={import.meta.env.VITE_IMAGE_URL + identity_tracking[0].image}
              alt="Identity Tracking"
              className="min-w-full min-h-full object-cover rounded-2xl"
            />
            <p className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 p-2 sm:p-3 bg-[#00C0FF] rounded-full flex items-center justify-center">
              <IdentityTrackSVG />
            </p>
            <p className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 p-2 sm:p-3 bg-primary rounded-full flex items-center justify-center">
              <IdentityScanSVG />
            </p>
          </div>

          {/* Content */}
          <div className="flex-1 space-y-2 text-center lg:text-left">
            <p className="text-lg sm:text-xl lg:text-2xl font-semibold">
              {identity_tracking[0].title}
            </p>
            <p className="text-base sm:text-lg lg:text-xl">
              {identity_tracking[0].short_description}
            </p>
          </div>
        </div>
      )}
    </CommonContainer>
  );
};

export default IdentityTracking;
