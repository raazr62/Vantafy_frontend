import React from "react";
import { Button } from "../ui/button";

const StarIconSVG = ({ className = "w-4 h-4" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
  </svg>
);

const PlansPriceCard = ({ plan, handleSubscription, i }) => {
  const isAgency = plan.type === "agency";

  if (isAgency) {
    const memberLimit = Number(plan.member_limit) || 1;
    const rawPrice = Number(plan.price) || 0;
    const perPersonPrice = Math.round(rawPrice / memberLimit);

    const agencyStyles = [
      {
        cardBg: "bg-[linear-gradient(180deg,#FFFFFF_0%,#E5E5E7_100%)] border-[#D4D4D8]",
        pillBorder: "border-[#CCCCCC]",
        btnBg: "bg-[#CCCCCC] hover:bg-[#B5B5B5] text-black",
      },
      {
        cardBg: "bg-[linear-gradient(180deg,#FFFBF0_0%,#FFE4B8_100%)] border-[#FFC069]",
        pillBorder: "border-[#FFC069]",
        btnBg: "bg-[#FFA82E] hover:bg-[#F0971D] text-black",
      },
      {
        cardBg: "bg-[linear-gradient(180deg,#FFFFFF_0%,#C8C8C8_100%)] border-[#B0B0B0]",
        pillBorder: "border-[#B0B0B0]",
        btnBg: "bg-[#B8B8B8] hover:bg-[#A3A3A3] text-black",
      },
      {
        cardBg: "bg-[linear-gradient(180deg,#F0FBFF_0%,#B5F0FF_100%)] border-[#66E0FF]",
        pillBorder: "border-[#66E0FF]",
        btnBg: "bg-[#33D6FF] hover:bg-[#1ACBFA] text-black",
      },
    ];

    const style = agencyStyles[i % agencyStyles.length];

    return (
      <div
        key={plan.id}
        className={`py-3 sm:py-6 px-2.5 ${style.cardBg} border rounded-[12px] shadow-[0_15px_18.75px_-3.75px_rgba(0,0,0,0.10),0_6px_7.5px_-4.5px_rgba(0,0,0,0.10)] flex flex-col items-center justify-between h-full transition-transform hover:-translate-y-1 duration-200`}
      >
        {/* Top Per Creator Price Pill */}
        <div className={`px-4 sm:px-6 py-2 sm:py-3 bg-white border ${style.pillBorder} rounded-[45px] shadow-xs flex items-center justify-center gap-1 mt-2 sm:mt-4 mb-2`}>
          <span className="text-xl sm:text-2xl font-extrabold text-black">
            ${perPersonPrice}
          </span>
          <span className="text-xs font-medium text-gray-600">
            /per creator
          </span>
        </div>

        {/* Features List (if available) */}
        <div className="flex flex-col items-center mb-4 sm:mb-8 w-full text-center">
          {plan.features && plan.features.length > 0 && (
            <div className="space-y-1.5 w-full">
              {plan.features.map((feature, index) => (
                <p key={index} className="py-1.5 border-b text-xs border-gray-400 border-dotted w-full text-center text-gray-800 font-medium">
                  {feature.name}
                </p>
              ))}
            </div>
          )}
        </div>

        {/* Bottom Section: Member Limit (Star Count) & Subscribe Button */}
        <div className="flex flex-col items-center gap-2 mt-auto w-full">
          <div className="flex items-center gap-1 text-sm font-bold text-black">
            <span>{plan.member_limit ?? memberLimit}</span>
            <StarIconSVG className="w-4 h-4 text-black fill-current" />
          </div>

          <button
            onClick={() => handleSubscription(plan.stripe_price_id, plan.type)}
            className={`${style.btnBg} text-xs font-extrabold px-6 sm:px-8 py-2.5 rounded-full cursor-pointer transition-all shadow-xs border-none tracking-wide`}
          >
            SUBSCRIBE
          </button>
        </div>
      </div>
    );
  }

  // Non-agency plans (Monthly & Annual) remain unchanged
  const backroundColor =
    i === 0
      ? "bg-[linear-gradient(135deg,#4A5565_0%,#364153_50%,#101828_100%)]"
      : i === 1
        ? "bg-[linear-gradient(135deg,#D08700_0%,#A65F00_50%,#733E0A_100%)]"
        : i === 2
          ? "bg-[linear-gradient(135deg,#D1D5DC_0%,#99A1AF_50%,#6A7282_100%)]"
          : i === 3
            ? "bg-[linear-gradient(135deg,#53EAFD_0%,#00D3F2_50%,#00B8DB_100%)]"
            : "";

  return (
    <div
      key={plan.id}
      className={`py-3 sm:py-6 px-2.5 ${backroundColor} text-white rounded-[12px] shadow-[0_15px_18.75px_-3.75px_rgba(0,0,0,0.10),0_6px_7.5px_-4.5px_rgba(0,0,0,0.10)] flex flex-col items-center h-full`}
    >
      <p className="text-2xl md:text-[32px] font-semibold text-center">
        {plan.name}
      </p>
      <p className="text-xs font-semibold">Package</p>
      <p className="px-6 sm:px-8 py-2 sm:py-4 bg-white text-black text-2xl sm:text-[32px] font-semibold rounded-[45px] mt-6 mb-3">
        ${plan.price}
      </p>
      <div className="flex flex-col items-center mb-4 sm:mb-8 md:mb-10 lg:mb-12 w-full">
        {plan.features.map((feature, index) => (
          <p
            key={index}
            className="py-2 sm:py-2.5 border-b text-xs border-white border-dotted w-full text-center first:text-sm first:font-bold"
          >
            {feature.name}
          </p>
        ))}
      </div>
      <Button
        onClick={() => handleSubscription(plan.stripe_price_id, plan.type)}
        className={
          "bg-[linear-gradient(90deg,#FF8904_0%,#FDC700_100%)] text-black text-xs font-bold mt-auto"
        }
      >
        SUBSCRIBE
      </Button>
    </div>
  );
};

export default PlansPriceCard;
