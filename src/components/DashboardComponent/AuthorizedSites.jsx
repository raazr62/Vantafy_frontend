import CommonInputField from "@/shared/AuthShared/CommonInputField";
import React, { useState } from "react";
import { FaPlus, FaRegTrashAlt } from "react-icons/fa";
import AuthorizedSitesLogoAndNamePopUp from "../HomeComponent/AuthorizedSitesLogoAndNamePopUp";
import { AuthorizedSitesLogoAndLinkMockData } from "@/lib/HomeMockData";
import { IoCloseCircleOutline } from "react-icons/io5";
import { VscGlobe } from "react-icons/vsc";

const AuthorizedSites = () => {
  const [authorizedSitesData, setAuthorizedSitesData] = useState([]);
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [url, setUrl] = useState("");

  // Extract domain safely
  const getDomain = (url) => {
    try {
      return new URL(url).hostname.replace("www.", "");
    } catch {
      return null;
    }
  };

  const handleAuthorizeSitesSubmit = (e) => {
    e.preventDefault();

    const domain = getDomain(url);
    if (!domain) return;

    const newSite = {
      id: crypto.randomUUID(),
      url,
      domain,
    };

    setAuthorizedSitesData((prev) => [...prev, newSite]);
    setUrl("");
  };

  const handleDelete = (id) => {
    setAuthorizedSitesData((prev) => prev.filter((site) => site.id !== id));
  };

  const handleSelectPlatform = (platform) => {
    setSelectedPlatform(platform);
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white py-4 sm:py-6 px-2 sm:px-4.5 rounded-b-[12px] grow min-h-0">
      <div className="p-4 border border-[#EAEAEA] rounded-xl space-y-4 h-full flex flex-col">
        {/* Add Site */}
        <form
          onSubmit={handleAuthorizeSitesSubmit}
          className="flex sm:items-center flex-col sm:flex-row gap-2 relative"
        >
          {/* {selectedPlatform.name === "Custom" && (
            <CommonInputField
              name="authorizedLink"
              type="url"
              value={url}
              // onChange={(e) => setUrl(e.target.value)}
              placeholder="Paste website URL here"
              className="px-6 border-[#707070]"
              required
            />
          )} */}

          {!selectedPlatform && (
            <div
              onClick={() => setIsModalOpen(true)}
              className="w-full py-2 text-sm sm:text-base sm:py-3.5 rounded-lg border border-gray-300 hover:border-gray-400 cursor-pointer px-4 flex items-center justify-between"
            >
              <p className="flex items-center gap-2 text-primary">
                <FaPlus size={14} /> Add an account
              </p>
              <div className="flex relative">
                {AuthorizedSitesLogoAndLinkMockData.subscriptionPlatforms
                  .slice(0, 3)
                  .map((platform, idx) => (
                    <div
                      key={platform.id}
                      className={`relative ${
                        idx === 0
                          ? "-left-4"
                          : idx === 1
                          ? "-left-6"
                          : idx === 2
                          ? "-left-10"
                          : ""
                      }`}
                    >
                      <img
                        src={platform.logo}
                        alt={platform.name}
                        className="w-6 h-6"
                      />
                    </div>
                  ))}
                <div className="text-xs font-semibold bg-black px-2 py-1 rounded-full absolute right-2 top-1/2 -translate-y-1/2 text-white">
                  28+
                </div>
              </div>
            </div>
          )}

          {/* Custom Platform */}
          {selectedPlatform && selectedPlatform.name === "Custom" && (
            <div className="relative w-full">
              <CommonInputField
                name="authorizedLink"
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Paste website URL here"
                className="pl-9! border-[#707070]"
                required
              />
              <VscGlobe
                size={18}
                className="absolute top-1/2 -translate-y-1/2 left-3"
              />
              <p className="bg-white absolute left-5 -top-3 px-1 text-sm text-primary">
                Your url
              </p>
              <IoCloseCircleOutline
                className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 text-2xl hover:text-red-500 transition-all duration-300"
                onClick={() => setSelectedPlatform(null)}
              />
            </div>
          )}

          {/* Non Custom Platform */}
          {selectedPlatform && selectedPlatform.name !== "Custom" && (
            <div className="relative w-full">
              <CommonInputField
                name="authorizedLink"
                type="text"
                placeholder="your-username"
                className="pl-11! border-[#707070]"
                required
              />
              <img
                src={selectedPlatform.logo}
                alt={selectedPlatform.name}
                className="absolute top-1/2 -translate-y-1/2 left-3 w-6 h-6"
              />
              <p className="bg-white absolute left-5 -top-3 px-1 text-sm text-primary">
                {selectedPlatform.link}
              </p>
              <IoCloseCircleOutline
                className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 text-2xl hover:text-red-500 transition-all duration-300"
                onClick={() => setSelectedPlatform(null)}
              />
            </div>
          )}

          <button
            type="submit"
            className="bg-sky-500 text-white rounded-xl sm:px-9.5 py-1.5 sm:py-4 text-sm sm:text-base font-semibold cursor-pointer"
          >
            Add
          </button>
          {isModalOpen && (
            <AuthorizedSitesLogoAndNamePopUp
              handleSelectPlatform={handleSelectPlatform}
            />
          )}
        </form>

        {/* Authorized Sites List */}
        <div className="space-y-2 grow min-h-0 overflow-y-auto">
          {authorizedSitesData.map((site) => (
            <div
              key={site.id}
              className="flex items-center justify-between bg-[#F9F9F9] border border-[#A8B2B5] rounded-xl p-3"
            >
              <div className="flex items-center gap-3">
                {/* Dynamic Logo */}
                <img
                  src={`https://logo.clearbit.com/${site.domain}`}
                  onError={(e) => {
                    e.currentTarget.src = `https://www.google.com/s2/favicons?domain=${site.domain}&sz=64`;
                  }}
                  alt={site.domain}
                  className="w-4.5 h-4.5 sm:w-8 sm:h-8 rounded"
                />

                <p className="text-xs sm:text-sm text-gray-700 truncate max-w-[260px] sm:max-w-full">
                  {site.url}
                </p>
              </div>

              <FaRegTrashAlt
                onClick={() => handleDelete(site.id)}
                color="red"
                className="cursor-pointer"
                size={18}
              />
            </div>
          ))}

          {authorizedSitesData.length === 0 && (
            <p className="text-sm sm:text-xl md:text-2xl lg:text-3xl text-gray-400 text-center h-full flex items-center justify-center">
              No authorized sites added yet
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthorizedSites;
