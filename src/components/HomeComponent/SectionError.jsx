import React from "react";
import { MdErrorOutline } from "react-icons/md";
import { HiRefresh } from "react-icons/hi";

/**
 * Reusable on-brand error state for landing page sections.
 * Matches the site's pink/blue gradient design language.
 *
 * @param {string}   message   - Custom error message (optional)
 * @param {boolean}  showRetry - Show reload button (default true)
 */
const SectionError = ({
  message = "Something went wrong while loading this section.",
  showRetry = true,
}) => {
  return (
    <div className="w-full mt-10 sm:mt-12 lg:mt-15 px-4 xl:px-0 flex justify-center">
      <div className="relative w-full max-w-lg rounded-2xl border border-[#AD46FF]/30 bg-[linear-gradient(138deg,rgba(255,27,228,0.04)_0%,rgba(63,128,255,0.06)_100%)] px-6 py-10 flex flex-col items-center gap-4 overflow-hidden">
        {/* Soft glow blobs */}
        <div className="pointer-events-none absolute -top-10 -left-10 w-32 h-32 rounded-full bg-primary/10 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-secondary/10 blur-2xl" />

        {/* Icon */}
        <div className="relative z-10 flex items-center justify-center w-14 h-14 rounded-full bg-[linear-gradient(135deg,rgba(255,27,228,0.15),rgba(63,128,255,0.15))] border border-[#AD46FF]/20">
          <MdErrorOutline className="text-[#AD46FF] text-3xl" />
        </div>

        {/* Text */}
        <div className="relative z-10 text-center space-y-1">
          <p className="font-semibold text-[#212b36] text-base sm:text-lg">
            Oops, something went wrong
          </p>
          <p className="text-sm text-[#333]/60">{message}</p>
        </div>

        {/* Retry button */}
        {showRetry && (
          <button
            onClick={() => window.location.reload()}
            className="relative z-10 flex items-center gap-2 mt-1 px-5 py-2 rounded-full text-sm font-semibold text-white bg-linear-to-r from-[#ff1be4] to-[#3f80ff] hover:opacity-90 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <HiRefresh className="text-base" />
            Retry
          </button>
        )}
      </div>
    </div>
  );
};

export default SectionError;
