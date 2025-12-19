import CommonInputField from "@/shared/AuthShared/CommonInputField";
import React from "react";
import { CopyLinkIconSVG } from "../SVG/DashboardLayoutSVG";
import toast from "react-hot-toast";

const ReferralLink = () => {
  const refferalLink = "https://www.vantafy.com/refer-1142";
  const handleCopyLink = () => {
    navigator.clipboard
      .writeText(refferalLink)
      .then(() => {
        toast.success("Link copied to clipboard!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Please try again later");
      });
  };
  return (
    <div className="bg-white rounded-2xl p-4 w-full shadow-[0_0.785px_2.355px_0_rgba(0,0,0,0.10),0_0.785px_1.57px_-0.785px_rgba(0,0,0,0.10)] space-y-2 sm:space-y-4">
      <p className="text-lg sm:text-xl font-medium">Your Referral Link</p>

      <div>
        <div className="relative">
          <CommonInputField
            value={refferalLink}
            readOnly
            className={"px-6"}
          ></CommonInputField>
          <button
            onClick={handleCopyLink}
            className="bg-primary flex items-center justify-center mt-2 sm:mt-0 w-full sm:w-fit gap-2 text-white font-medium text-xs sm:text-sm px-2.5 py-1.5 rounded-xl sm:absolute sm:top-1/2 sm:-translate-y-1/2 right-2.5 cursor-pointer"
          >
            <CopyLinkIconSVG /> Copy link
          </button>
        </div>
        <p className="text-xs sm:text-sm text-[#4A4A4A] mt-1.5">
          Share this link to give your friends{" "}
          <span className="text-[#00AEEF]">15% off!</span>
        </p>
      </div>

      <div className="flex items-center gap-3.5">
        {/* Total Referred */}
        <div className="w-full bg-[#FF92EB] space-y-1 px-6 py-3 rounded-2xl">
          <p className="text-xs font-medium text-white">
            Total People Referred
          </p>
          <p className="text-white font-bold text-2xl sm:text-3xl lg:text-4xl">
            12
          </p>
        </div>

        {/* Free month Earned */}
        <div className="w-full bg-[#55B7FF] space-y-1 px-6 py-3 rounded-2xl">
          <p className="text-xs font-medium text-white">Free month Earned</p>
          <p className="text-white font-bold text-2xl sm:text-3xl lg:text-4xl">
            3
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReferralLink;
