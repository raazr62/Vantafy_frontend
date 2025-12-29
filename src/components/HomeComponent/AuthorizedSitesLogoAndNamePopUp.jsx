import { AuthorizedSitesLogoAndLinkMockData } from "@/lib/HomeMockData";
import { VscGlobe } from "react-icons/vsc";

const AuthorizedSitesLogoAndNamePopUp = ({ handleSelectPlatform }) => {
  return (
    <div className="rounded-2xl p-6 border border-gray-300 space-y-6 sm:space-y-8 overflow-y-auto max-h-[400px] w-full sm:max-w-170 absolute bg-white top-13 sm:left-0">
      {/* Subscription Platforms */}
      <div>
        <p className="text-lg font-medium text-gray-500 mb-4 sm:mb-5">
          Subscription Platforms
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {AuthorizedSitesLogoAndLinkMockData.subscriptionPlatforms.map(
            (platform) => (
              <div
                onClick={() => handleSelectPlatform(platform)}
                key={platform.id}
                className="flex-1/3 flex items-center gap-1 sm:gap-2 cursor-pointer"
              >
                <img
                  src={platform.logo}
                  alt={platform.name}
                  className="w-6 h-6"
                />
                <p className="text-sm">{platform.name}</p>
              </div>
            )
          )}
        </div>
      </div>

      {/* Streaming Platforms */}
      <div>
        <p className="text-lg font-medium text-gray-500 mb-4 sm:mb-5">
          Streaming Platforms
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {AuthorizedSitesLogoAndLinkMockData.streamingPlatforms.map(
            (platform) => (
              <div
                onClick={() => handleSelectPlatform(platform)}
                key={platform.id}
                className="flex items-center gap-1 sm:gap-2 cursor-pointer"
              >
                <img
                  src={platform.logo}
                  alt={platform.name}
                  className="w-6 h-6"
                />
                <p className="text-sm">{platform.name}</p>
              </div>
            )
          )}
        </div>
      </div>

      {/* Non Subscription Platforms */}
      <div>
        <p className="text-lg font-medium text-gray-500 mb-4 sm:mb-5">
          Non Subscription Platforms
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {AuthorizedSitesLogoAndLinkMockData.nonSubscriptionPlatforms.map(
            (platform) => (
              <div
                onClick={() => handleSelectPlatform(platform)}
                key={platform.id}
                className="flex items-center gap-1 sm:gap-2 cursor-pointer"
              >
                <img
                  src={platform.logo}
                  alt={platform.name}
                  className="w-6 h-6"
                />
                <p className="text-sm">{platform.name}</p>
              </div>
            )
          )}
        </div>
      </div>

      {/* Other Platforms */}
      <div>
        <p className="text-lg font-medium text-gray-500 mb-4 sm:mb-5">
          Other Platforms
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            onClick={() => handleSelectPlatform({ name: "Custom" })}
            className="flex items-center gap-1 sm:gap-2 cursor-pointer"
          >
            <VscGlobe size={18} />

            <p className="text-sm">Custom</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AuthorizedSitesLogoAndNamePopUp;
