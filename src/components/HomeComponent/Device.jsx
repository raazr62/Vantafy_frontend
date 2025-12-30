import CommonContainer from "@/shared/LandingShared/CommonContainer";
import CommonTitle from "@/shared/LandingShared/CommonTitle";
import { LocalImages } from "../AllPhotos/HomeLocalImages";

const Device = () => {
  return (
    <CommonContainer>
      <CommonTitle title="Device" />

      {/* Content */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-6 sm:gap-8 lg:gap-10 mt-10 sm:mt-12 lg:mt-15">
        {/* Details */}
        <div className="flex-4/7 space-y-3 sm:space-y-4.5 lg:space-y-5.5">
          <p className="text-xl sm:text-2xl lg:text-3xl font-medium">
            This Platform available for Desktop and Mobile also
          </p>
          <p className="text-[#212B36] font-medium text-lg sm:text-xl lg:text-2xl">
            Seamless Access, Anywhere, Anytime." Our platform is fully optimized
            for both Desktop and Mobile. Whether you're at your desk or on the
            move, enjoy a consistent and powerful experience across all your
            devices
          </p>
          <ul className="list-disc space-y-2 sm:space-y-3 lg:space-y-4.5 ml-8 sm:ml-10 lg:ml-12">
            <li className="font-medium text-lg sm:text-xl lg:text-2xl text-[#212B36]">
              Cross-platform Compatibility: Works on both PC and Phone.
            </li>
            <li className="font-medium text-lg sm:text-xl lg:text-2xl text-[#212B36]">
              User-Friendly Interface: Optimized for both large and small
              screens.
            </li>
            <li className="font-medium text-lg sm:text-xl lg:text-2xl text-[#212B36]">
              Uninterrupted Access: Use it 24/7, even while traveling.
            </li>
          </ul>
        </div>

        {/* Image */}
        <div className="flex-3/6">
          <img
            src={LocalImages.responsiveImage}
            className="w-full h-full"
            alt="Device Image"
          />
        </div>
      </div>
    </CommonContainer>
  );
};

export default Device;
