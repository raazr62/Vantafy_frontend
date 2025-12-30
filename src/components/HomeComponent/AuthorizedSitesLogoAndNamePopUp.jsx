import { AuthorizedSitesLogoAndLinkMockData } from "@/lib/HomeMockData";
import { VscGlobe } from "react-icons/vsc";
import React, { useEffect, useRef, useCallback } from "react";

/**
 * AuthorizedSitesLogoAndNamePopUp Component
 * Modal popup for selecting a platform to authorize
 * Features: Click outside to close, Escape key support, keyboard navigation
 */
const AuthorizedSitesLogoAndNamePopUp = ({ handleSelectPlatform, onClose }) => {
  const modalRef = useRef(null);
  const firstFocusableRef = useRef(null);

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose?.();
      }
    };

    // Add a small delay to prevent immediate closing
    const timeoutId = setTimeout(() => {
      document.addEventListener("mousedown", handleClickOutside);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  // Focus first element when modal opens
  useEffect(() => {
    if (firstFocusableRef.current) {
      firstFocusableRef.current.focus();
    }
  }, []);

  // Handle platform selection
  const handlePlatformClick = useCallback(
    (platform) => {
      handleSelectPlatform(platform);
    },
    [handleSelectPlatform]
  );

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e, platform) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handlePlatformClick(platform);
      }
    },
    [handlePlatformClick]
  );

  return (
    <div
      ref={modalRef}
      role="dialog"
      aria-label="Select a platform"
      aria-modal="true"
      className="rounded-2xl p-6 border border-gray-300 shadow-lg space-y-6 sm:space-y-8 overflow-y-auto max-h-[400px] w-full sm:max-w-170 absolute bg-white top-13 sm:left-0 z-50"
    >
      {/* Subscription Platforms */}
      <PlatformSection
        title="Subscription Platforms"
        platforms={AuthorizedSitesLogoAndLinkMockData.subscriptionPlatforms}
        onPlatformClick={handlePlatformClick}
        onKeyDown={handleKeyDown}
        firstFocusableRef={firstFocusableRef}
      />

      {/* Streaming Platforms */}
      <PlatformSection
        title="Streaming Platforms"
        platforms={AuthorizedSitesLogoAndLinkMockData.streamingPlatforms}
        onPlatformClick={handlePlatformClick}
        onKeyDown={handleKeyDown}
      />

      {/* Non Subscription Platforms */}
      <PlatformSection
        title="Non Subscription Platforms"
        platforms={AuthorizedSitesLogoAndLinkMockData.nonSubscriptionPlatforms}
        onPlatformClick={handlePlatformClick}
        onKeyDown={handleKeyDown}
      />

      {/* Other Platforms */}
      <div>
        <p className="text-lg font-medium text-gray-500 mb-4 sm:mb-5">
          Other Platforms
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            onClick={() => handlePlatformClick({ name: "Custom" })}
            onKeyDown={(e) => handleKeyDown(e, { name: "Custom" })}
            tabIndex={0}
            role="button"
            aria-label="Add custom platform"
            className="flex items-center gap-1 sm:gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500"
          >
            <VscGlobe size={18} aria-hidden="true" />
            <p className="text-sm">Custom</p>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * PlatformSection Component
 * Reusable section for displaying a category of platforms
 */
const PlatformSection = ({
  title,
  platforms,
  onPlatformClick,
  onKeyDown,
  firstFocusableRef,
}) => {
  return (
    <div>
      <p className="text-lg font-medium text-gray-500 mb-4 sm:mb-5">{title}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {platforms.map((platform, index) => (
          <PlatformItem
            key={platform.id}
            platform={platform}
            onClick={onPlatformClick}
            onKeyDown={onKeyDown}
            ref={index === 0 && firstFocusableRef ? firstFocusableRef : null}
          />
        ))}
      </div>
    </div>
  );
};

/**
 * PlatformItem Component
 * Individual platform button with logo and name
 */
const PlatformItem = React.forwardRef(
  ({ platform, onClick, onKeyDown }, ref) => {
    const handleClick = useCallback(() => {
      onClick(platform);
    }, [platform, onClick]);

    const handleKeyPress = useCallback(
      (e) => {
        onKeyDown(e, platform);
      },
      [platform, onKeyDown]
    );

    return (
      <div
        ref={ref}
        onClick={handleClick}
        onKeyDown={handleKeyPress}
        tabIndex={0}
        role="button"
        aria-label={`Select ${platform.name}`}
        className="flex items-center gap-1 sm:gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500"
      >
        <img
          src={platform.logo}
          alt=""
          aria-hidden="true"
          className="w-6 h-6"
          loading="lazy"
        />
        <p className="text-sm">{platform.name}</p>
      </div>
    );
  }
);

PlatformItem.displayName = "PlatformItem";

export default AuthorizedSitesLogoAndNamePopUp;
