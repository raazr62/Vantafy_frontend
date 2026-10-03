import CommonContainer from "@/shared/LandingShared/CommonContainer";
import CommonTitle from "@/shared/LandingShared/CommonTitle";

const Device = () => {
  return (
    <CommonContainer>
      <CommonTitle title="Devices" />

      {/* Content */}
      <div className="max-w-5xl mx-auto space-y-4 text-center mt-10 sm:mt-12 lg:mt-15 px-4">
        <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#8400a4]">
          This Platform is Available for Desktop and Mobile
        </p>
        <p className="text-[#333333] font-medium text-base sm:text-lg">
          Seamless Access, Anywhere, Anytime. Our platform is fully optimized
          for both Desktop and Mobile. Whether you're at your desk or on the
          move, enjoy a consistent and powerful experience across all your
          devices.
        </p>
        <div className="pt-2 text-left inline-block">
          <ul className="list-disc space-y-2.5 sm:space-y-3 pl-5">
            <li className="font-medium text-sm sm:text-base text-[#333333]">
              <span className="font-semibold text-black">Cross-platform Compatibility:</span> Works on both PC and Phone.
            </li>
            <li className="font-medium text-sm sm:text-base text-[#333333]">
              <span className="font-semibold text-black">User-Friendly Interface:</span> Optimized for both large and small screens.
            </li>
            <li className="font-medium text-sm sm:text-base text-[#333333]">
              <span className="font-semibold text-black">Uninterrupted Access:</span> Use it 24/7, even while traveling.
            </li>
          </ul>
        </div>
      </div>
    </CommonContainer>
  );
};

export default Device;
