import CommonContainer from "@/shared/LandingShared/CommonContainer";
import CommonTitle from "@/shared/LandingShared/CommonTitle";
import { LocalImages } from "../AllPhotos/HomeLocalImages";
import { IdentityScanSVG, IdentityTrackSVG } from "../SVG/HomeLayoutSVG";

const IdentityTracking = () => {
  return (
    <CommonContainer>
      <CommonTitle title="Identity Tracking" />
      <div className="flex items-center justify-between">
        {/* Image */}
        <div className="relative rounded-[12px] overflow-hidden">
          <img
            src={LocalImages.IdentitiyTrackingImage}
            alt="Identity Tracking"
            className="min-w-full min-h-full object-cover rounded-2xl"
          />
          <p className="absolute top-0 left-0 w-10 h-10 bg-[#00C0FF] rounded-full flex items-center justify-center">
            <IdentityTrackSVG />
          </p>
          <p className="absolute bottom-0 right-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <IdentityScanSVG />
          </p>
        </div>

        <img
          src={LocalImages.IdentitiyTrackingImage}
          alt="Identity Tracking"
          className="min-w-full min-h-full object-cover rounded-2xl"
        />

        {/* Content */}
        <div>
          <p className="text-2xl font-semibold">
            Searching through all of your stage names is how I found you.
          </p>
          <p className="text-xl">
            To ensure full coverage, our AI searches for unauthorized content
            using all of your stage names.
          </p>
        </div>
      </div>
    </CommonContainer>
  );
};

export default IdentityTracking;
