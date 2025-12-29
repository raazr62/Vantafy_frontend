import CommonInputField from "@/shared/AuthShared/CommonInputField";
import React, { useCallback, useMemo, useRef, useEffect } from "react";
import { FaPlus, FaRegTrashAlt } from "react-icons/fa";
import AuthorizedSitesLogoAndNamePopUp from "../HomeComponent/AuthorizedSitesLogoAndNamePopUp";
import { AuthorizedSitesLogoAndLinkMockData } from "@/lib/HomeMockData";
import { IoCloseCircleOutline } from "react-icons/io5";
import { VscGlobe } from "react-icons/vsc";
import { useAuthorizedSites } from "@/hooks/useAuthorizedSites";
import { getLogoUrls, isValidUrl } from "@/utils/urlHelpers";
import Swal from "sweetalert2";
import toast, { Toaster } from "react-hot-toast";

/**
 * AuthorizedSites Component
 * Manages a list of authorized websites/platforms for the user
 * Allows adding platforms by username or custom URLs
 */
const AuthorizedSites = () => {
  const {
    sites,
    selectedPlatform,
    isModalOpen,
    url,
    hasSites,
    addSite,
    removeSite,
    selectPlatform,
    setModalOpen,
    setUrl,
    resetForm,
  } = useAuthorizedSites();

  const formRef = useRef(null);
  const modalTriggerRef = useRef(null);

  // Compute total platform count dynamically
  const totalPlatformCount = useMemo(() => {
    const {
      subscriptionPlatforms,
      streamingPlatforms,
      nonSubscriptionPlatforms,
    } = AuthorizedSitesLogoAndLinkMockData;
    return (
      subscriptionPlatforms.length +
      streamingPlatforms.length +
      nonSubscriptionPlatforms.length
    );
  }, []);

  // Handle form submission
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (!selectedPlatform) return;

      // Validate custom URL
      if (selectedPlatform.name === "Custom" && !isValidUrl(url)) {
        toast.error("Please enter a valid URL");
        return;
      }

      const formData = new FormData(e.target);
      const username = formData.get("username") || "";

      const success = addSite(selectedPlatform, username);

      if (success) {
        toast.success(
          `Successfully added ${
            selectedPlatform.name === "Custom" ? url : selectedPlatform.name
          }`
        );
        // Reset form
        e.target.reset();
      } else {
        toast.error("Failed to add site. Please check the URL.");
      }
    },
    [selectedPlatform, addSite, url]
  );

  // Handle platform selection
  const handleSelectPlatform = useCallback(
    (platform) => {
      selectPlatform(platform);
    },
    [selectPlatform]
  );

  // Handle delete with SweetAlert2 confirmation
  const handleDelete = useCallback(
    async (id, siteName) => {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: `Do you want to remove "${siteName}"?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#ef4444",
        cancelButtonColor: "#6b7280",
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "Cancel",
      });

      if (result.isConfirmed) {
        removeSite(id);
        toast.success("Site removed successfully!");
      }
    },
    [removeSite]
  );

  // Handle modal open
  const handleOpenModal = useCallback(() => {
    setModalOpen(true);
  }, [setModalOpen]);

  // Handle Escape key to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isModalOpen) {
        setModalOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isModalOpen, setModalOpen]);

  // Focus management when modal closes
  useEffect(() => {
    if (!isModalOpen && modalTriggerRef.current) {
      modalTriggerRef.current.focus();
    }
  }, [isModalOpen]);

  return (
    <div className="bg-white py-4 sm:py-6 px-2 sm:px-4.5 rounded-b-[12px] grow min-h-0">
      <div className="p-4 border border-[#EAEAEA] rounded-xl space-y-4 h-full flex flex-col">
        {/* Add Site Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex sm:items-center flex-col sm:flex-row gap-2 relative"
        >
          {/* No Platform Selected - Show Add Button */}
          {!selectedPlatform && (
            <div
              ref={modalTriggerRef}
              onClick={handleOpenModal}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleOpenModal();
                }
              }}
              tabIndex={0}
              role="button"
              aria-label="Add an account"
              aria-haspopup="dialog"
              aria-expanded={isModalOpen}
              className="w-full py-2 text-sm sm:text-base sm:py-3.5 rounded-lg border border-gray-300 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent cursor-pointer px-4 flex items-center justify-between transition-all"
            >
              <p className="flex items-center gap-2 text-primary">
                <FaPlus size={14} aria-hidden="true" /> Add an account
              </p>
              <div
                className="flex relative"
                aria-label={`${totalPlatformCount} platforms available`}
              >
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
                        alt=""
                        aria-hidden="true"
                        className="w-6 h-6"
                      />
                    </div>
                  ))}
                <div
                  className="text-xs font-semibold bg-black px-2 py-1 rounded-full absolute right-2 top-1/2 -translate-y-1/2 text-white"
                  aria-label={`${totalPlatformCount} total platforms`}
                >
                  {totalPlatformCount}+
                </div>
              </div>
            </div>
          )}

          {/* Custom Platform Input */}
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
                aria-label="Enter custom website URL"
              />
              <VscGlobe
                size={18}
                className="absolute top-1/2 -translate-y-1/2 left-3 pointer-events-none"
                aria-hidden="true"
              />
              <p className="bg-white absolute left-5 -top-3 px-1 text-sm text-primary">
                Your url
              </p>
              <button
                type="button"
                onClick={resetForm}
                aria-label="Cancel custom URL"
                className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 text-2xl hover:text-red-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 rounded"
              >
                <IoCloseCircleOutline aria-hidden="true" />
              </button>
            </div>
          )}

          {/* Non-Custom Platform Input */}
          {selectedPlatform && selectedPlatform.name !== "Custom" && (
            <div className="relative w-full">
              <input
                name="username"
                type="text"
                placeholder="your-username"
                className="w-full py-2 text-sm sm:text-base sm:py-3.5 rounded-lg border border-[#707070] outline-none transition focus:border-primary pl-11"
                required
                aria-label={`Enter your ${selectedPlatform.name} username`}
              />
              <img
                src={selectedPlatform.logo}
                alt=""
                aria-hidden="true"
                className="absolute top-1/2 -translate-y-1/2 left-3 w-6 h-6 pointer-events-none"
              />
              <p className="bg-white absolute left-5 -top-3 px-1 text-sm text-primary">
                {selectedPlatform.link}
              </p>
              <button
                type="button"
                onClick={resetForm}
                aria-label={`Cancel ${selectedPlatform.name} selection`}
                className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 text-2xl hover:text-red-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 rounded"
              >
                <IoCloseCircleOutline aria-hidden="true" />
              </button>
            </div>
          )}

          {/* Submit Button - Only show when platform is selected */}
          {selectedPlatform && (
            <button
              type="submit"
              className="bg-sky-500 text-white rounded-xl sm:px-9.5 py-1.5 sm:py-4 text-sm sm:text-base font-semibold cursor-pointer hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Add authorized site"
            >
              Add
            </button>
          )}

          {/* Platform Selection Modal */}
          {isModalOpen && (
            <AuthorizedSitesLogoAndNamePopUp
              handleSelectPlatform={handleSelectPlatform}
              onClose={() => setModalOpen(false)}
            />
          )}
        </form>

        {/* Authorized Sites List */}
        <div
          className="space-y-2 grow min-h-0 overflow-y-auto"
          role="list"
          aria-label="Authorized sites"
        >
          {sites.map((site) => (
            <SiteItem key={site.id} site={site} onDelete={handleDelete} />
          ))}

          {/* Empty State */}
          {!hasSites && (
            <div className="h-full flex items-center justify-center">
              <p className="text-sm sm:text-xl md:text-2xl lg:text-3xl text-gray-400 text-center">
                No authorized sites added yet
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

/**
 * SiteItem Component
 * Displays a single authorized site with logo and delete button
 */
const SiteItem = React.memo(({ site, onDelete }) => {
  const [logoSrc, setLogoSrc] = React.useState(() => {
    const urls = getLogoUrls(site.domain);
    return urls.primary;
  });
  const [logoError, setLogoError] = React.useState(false);

  const handleLogoError = useCallback(() => {
    if (!logoError) {
      const urls = getLogoUrls(site.domain);
      setLogoSrc(urls.fallback);
      setLogoError(true);
    }
  }, [logoError, site.domain]);

  const handleDelete = useCallback(() => {
    onDelete(site.id, site.url);
  }, [site.id, site.url, onDelete]);

  return (
    <div
      className="flex items-center justify-between bg-[#F9F9F9] border border-[#A8B2B5] rounded-xl p-3 hover:bg-gray-100 transition-colors"
      role="listitem"
    >
      <div className="flex items-center gap-3 flex-1 min-w-0">
        {/* Dynamic Logo */}
        <img
          src={logoSrc}
          onError={handleLogoError}
          alt={`${site.domain} logo`}
          className="w-4.5 h-4.5 sm:w-8 sm:h-8 rounded shrink-0"
          loading="lazy"
        />

        <p
          className="text-xs sm:text-sm text-gray-700 truncate"
          title={site.url}
        >
          {site.url}
        </p>
      </div>

      <button
        onClick={handleDelete}
        aria-label={`Delete ${site.url}`}
        className="text-red-500 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 rounded p-1 transition-colors shrink-0"
      >
        <FaRegTrashAlt size={18} aria-hidden="true" />
      </button>
    </div>
  );
});

SiteItem.displayName = "SiteItem";

export default AuthorizedSites;
