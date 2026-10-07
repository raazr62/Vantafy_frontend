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
    const defaultLimits = [5, 10, 15, 20];
    const memberLimit =
      Number(plan.member_limit) && Number(plan.member_limit) > 0
        ? Number(plan.member_limit)
        : defaultLimits[i % defaultLimits.length];

    const rawPrice = Number(plan.price) || 0;
    const perPersonPrice = Math.round(rawPrice / memberLimit);

    const agencyStyles = [
      {
        cardBg: "bg-[linear-gradient(180deg,#FFFFFF_0%,#E5E5E7_100%)] border-[#D4D4D8]",
        pillBorder: "border-[#CCCCCC]",
        btnBg: "!bg-[#CCCCCC] hover:!bg-[#B5B5B5]",
        btnBorder: "border border-[#A8A8A8]",
      },
      {
        cardBg: "bg-[linear-gradient(180deg,#FFFBF0_0%,#FFE4B8_100%)] border-[#FFC069]",
        pillBorder: "border-[#FFC069]",
        btnBg: "!bg-[#FFA82E] hover:!bg-[#F0971D]",
        btnBorder: "border border-[#E89218]",
      },
      {
        cardBg: "bg-[linear-gradient(180deg,#FFFFFF_0%,#C8C8C8_100%)] border-[#B0B0B0]",
        pillBorder: "border-[#B0B0B0]",
        btnBg: "!bg-[#B8B8B8] hover:!bg-[#A3A3A3]",
        btnBorder: "border border-[#969696]",
      },
      {
        cardBg: "bg-[linear-gradient(180deg,#F0FBFF_0%,#B5F0FF_100%)] border-[#66E0FF]",
        pillBorder: "border-[#66E0FF]",
        btnBg: "!bg-[#33D6FF] hover:!bg-[#1ACBFA]",
        btnBorder: "border border-[#00BCE8]",
      },
    ];

    const style = agencyStyles[i % agencyStyles.length];

    return (
      <div
        key={plan.id}
        className={`pt-6 sm:pt-8 pb-7 sm:pb-[31px] px-4 sm:px-6 ${style.cardBg} border rounded-[32px] sm:rounded-[50px] shadow-[0_15px_18.75px_-3.75px_rgba(0,0,0,0.10),0_6px_7.5px_-4.5px_rgba(0,0,0,0.10)] flex flex-col items-center justify-between h-full min-h-[520px] transition-transform hover:-translate-y-1 duration-200`}
      >
        {/* Head: Package Name & Subtitle */}
        <p className="text-2xl md:text-[32px] font-semibold text-center text-black">
          {plan.name}
        </p>
        <p className="text-xs font-semibold text-gray-700">Package</p>

        {/* Top Per Creator Price Pill */}
        <div
          className={`w-[54%] min-w-[190px] max-w-[295px] aspect-[295/113] bg-white border ${style.pillBorder} rounded-[55px] shadow-xs flex items-center justify-center gap-1.5 mt-4 mb-1 px-3`}
        >
          <span className="text-2xl sm:text-[32px] font-semibold text-black">
            ${perPersonPrice}
          </span>
          <span className="text-[10px] sm:text-xs font-medium text-gray-600 whitespace-nowrap">
            /per creator
          </span>
        </div>

        {/* Total Price below unit price bubble */}
        <p className="text-xs sm:text-sm font-bold text-gray-700 text-center mb-1">
          Total: ${rawPrice} / month
        </p>

        {/* Features List (if available) */}
        <div className="flex flex-col items-center mb-2 sm:mb-3 w-full text-center">
          {plan.features && plan.features.length > 0 && (
            <div className="w-full">
              {plan.features.map((feature, index) => (
                <p
                  key={index}
                  className="py-1 sm:py-1.5 border-b text-xs leading-tight border-gray-400 border-dotted w-full text-center text-gray-800 first:text-xs sm:first:text-sm first:font-bold"
                >
                  {feature.name}
                </p>
              ))}
            </div>
          )}
        </div>

        {/* Bottom Section: Member Limit (Star Count) & Subscribe Button */}
        <div className="flex flex-col items-center gap-2.5 mt-auto w-full pt-2">
          <div className="flex items-center justify-center gap-1.5 text-[20px] leading-none font-bold text-black">
            <span>{memberLimit}</span>
            <StarIconSVG className="w-[20px] h-[20px] text-black fill-current" />
          </div>

          <Button
            onClick={() => handleSubscription(plan.stripe_price_id, plan.type)}
            className={`!bg-none ${style.btnBg} ${style.btnBorder} text-black text-xs sm:text-sm font-bold w-[36%] min-w-[150px] max-w-[195px] h-[48px] sm:h-[56px] rounded-[28px] cursor-pointer shadow-xs flex items-center justify-center`}
          >
            SUBSCRIBE
          </Button>
        </div>
      </div>
    );
  }

  // Non-agency plans (Monthly & Annual)
  const nonAgencyStyles = [
    {
      cardBg: "bg-[linear-gradient(180deg,#FFFFFF_0%,#FFE5F7_100%)] border-[#FFB6ED]",
      pillBorder: "border-[#FFB6ED]",
      btnBg: "!bg-[#FF88E7] hover:!bg-[#F072D6]",
      btnBorder: "border border-[#FF66DE]",
      starIcon: (
        <svg className="w-[20px] h-[20px]" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g>
            <polygon fill="#FFFFFF" points="37.5 58.56 16.92 69.38 20.85 46.46 4.19 30.23 27.21 26.89 37.5 6.04 47.79 26.89 70.81 30.23 54.15 46.46 58.08 69.38 37.5 58.56" />
            <path fill="#FF77ED" d="M37.5,9.43l8.6,17.42.7,1.41,1.56.23,19.23,2.79-13.91,13.56-1.13,1.1.27,1.55,3.29,19.15-17.2-9.04-1.4-.73-1.4.73-17.2,9.04,3.29-19.15.27-1.55-1.13-1.1-13.91-13.56,19.23-2.79,1.56-.23.7-1.41,8.6-17.42M37.5,2.65l-11.29,22.87L.97,29.18l18.27,17.8-4.31,25.14,22.58-11.87,22.58,11.87-4.31-25.14,18.27-17.8-25.24-3.67L37.5,2.65h0Z" />
          </g>
          <g>
            <path fill="#FF77ED" fillRule="evenodd" d="M56,56H19c-.67,4.67-1.33,9.33-2,14,7-3.67,14-7.33,21-11,6.67,3.33,13.33,6.67,20,10-.67-4.33-1.33-8.67-2-13Z" />
          </g>
        </svg>
      ),
    },
    {
      cardBg: "bg-[linear-gradient(180deg,#FFFFFF_0%,#D8F8FF_100%)] border-[#66E0FF]",
      pillBorder: "border-[#66E0FF]",
      btnBg: "!bg-[#33D6FF] hover:!bg-[#1ACBFA]",
      btnBorder: "border border-[#00BCE8]",
      starIcon: (
        <svg className="w-[20px] h-[20px]" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g>
            <polygon fill="#FFFFFF" points="37.5 58.56 16.92 69.38 20.85 46.46 4.19 30.23 27.21 26.89 37.5 6.04 47.79 26.89 70.81 30.23 54.15 46.46 58.08 69.38 37.5 58.56" />
            <path fill="#4FD4FF" d="M37.5,9.43l8.6,17.42.7,1.41,1.56.23,19.23,2.79-13.91,13.56-1.13,1.1.27,1.55,3.29,19.15-17.2-9.04-1.4-.73-1.4.73-17.2,9.04,3.29-19.15.27-1.55-1.13-1.1-13.91-13.56,19.23-2.79,1.56-.23.7-1.41,8.6-17.42M37.5,2.65l-11.29,22.87L.97,29.18l18.27,17.8-4.31,25.14,22.58-11.87,22.58,11.87-4.31-25.14,18.27-17.8-25.24-3.67L37.5,2.65h0Z" />
          </g>
          <g>
            <path fill="#4FD4FF" fillRule="evenodd" d="M55,56v-8c.33-1.67.67-3.33,1-5H19c.33,1.67.67,3.33,1,5-.33,3-.67,6-1,9-.67,4.33-1.33,8.67-2,13,7-3.67,14-7.33,21-11,6.67,3.33,13.33,6.67,20,10-1-4.33-2-8.67-3-13Z" />
          </g>
        </svg>
      ),
    },
    {
      cardBg: "bg-[linear-gradient(180deg,#FFFFFF_0%,#F3E2FF_100%)] border-[#D89EFF]",
      pillBorder: "border-[#D89EFF]",
      btnBg: "!bg-[#C575FF] hover:!bg-[#B25BF5]",
      btnBorder: "border border-[#A547EC]",
      starIcon: (
        <svg className="w-[20px] h-[20px]" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g>
            <polygon fill="#FFFFFF" points="37.5 58.56 16.92 69.38 20.85 46.46 4.19 30.23 27.21 26.89 37.5 6.04 47.79 26.89 70.81 30.23 54.15 46.46 58.08 69.38 37.5 58.56" />
            <path fill="#E295FF" d="M37.5,9.43l8.6,17.42.7,1.41,1.56.23,19.23,2.79-13.91,13.56-1.13,1.1.27,1.55,3.29,19.15-17.2-9.04-1.4-.73-1.4.73-17.2,9.04,3.29-19.15.27-1.55-1.13-1.1-13.91-13.56,19.23-2.79,1.56-.23.7-1.41,8.6-17.42M37.5,2.65l-11.29,22.87L.97,29.18l18.27,17.8-4.31,25.14,22.58-11.87,22.58,11.87-4.31-25.14,18.27-17.8-25.24-3.67L37.5,2.65h0Z" />
          </g>
          <g>
            <path fill="#E295FF" fillRule="evenodd" d="M55,47c4.67-5.67,9.33-10.33,14-16-4.33-1-8.67-2-13-3H19c-4.67,1-9.33,2-14,3,5,5.67,11,11.33,16,17-.33,3-1.67,6-2,9-.67,4.33-1.33,8.67-2,13,7-3.67,14-7.33,21-11,6.67,3.33,13.33,6.67,20,10-1-4.33-2-8.67-3-13v-9Z" />
          </g>
        </svg>
      ),
    },
    {
      cardBg: "bg-[linear-gradient(180deg,#FFFFFF_0%,#E5E5E7_100%)] border-[#D4D4D8]",
      pillBorder: "border-[#CCCCCC]",
      btnBg: "!bg-[#CCCCCC] hover:!bg-[#B5B5B5]",
      btnBorder: "border border-[#A8A8A8]",
      starIcon: (
        <svg className="w-[20px] h-[20px]" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g>
            <polygon fill="#5D5D5D" fillRule="evenodd" points="37.5 58.56 16.92 69.38 20.85 46.46 4.19 30.23 27.21 26.89 37.5 6.04 47.79 26.89 70.81 30.23 54.15 46.46 58.08 69.38 37.5 58.56" />
            <path fill="#FFFFFF" d="M37.5,9.43l8.6,17.42.7,1.41,1.56.23,19.23,2.79-13.91,13.56-1.13,1.1.27,1.55,3.29,19.15-17.2-9.04-1.4-.73-1.4.73-17.2,9.04,3.29-19.15.27-1.55-1.13-1.1-13.91-13.56,19.23-2.79,1.56-.23.7-1.41,8.6-17.42M37.5,2.65l-11.29,22.87L.97,29.18l18.27,17.8-4.31,25.14,22.58-11.87,22.58,11.87-4.31-25.14,18.27-17.8-25.24-3.67L37.5,2.65h0Z" />
          </g>
        </svg>
      ),
    },
  ];

  const style = nonAgencyStyles[i % nonAgencyStyles.length];
  const periodLabel = plan.type === "year" ? "/year" : "/month";

  return (
    <div
      key={plan.id}
      className={`pt-6 sm:pt-8 pb-7 sm:pb-[31px] px-4 sm:px-6 ${style.cardBg} border rounded-[32px] sm:rounded-[50px] shadow-[0_15px_18.75px_-3.75px_rgba(0,0,0,0.10),0_6px_7.5px_-4.5px_rgba(0,0,0,0.10)] flex flex-col items-center justify-between h-full min-h-[520px] transition-transform hover:-translate-y-1 duration-200`}
    >
      {/* Head: Package Name & Subtitle */}
      <p className="text-2xl md:text-[32px] font-semibold text-center text-black">
        {plan.name}
      </p>
      <p className="text-xs font-semibold text-gray-700">Package</p>

      {/* Top Price Pill */}
      <div
        className={`w-[54%] min-w-[190px] max-w-[295px] aspect-[295/113] bg-white border ${style.pillBorder} rounded-[55px] shadow-xs flex items-center justify-center gap-1 mt-4 mb-2 px-3`}
      >
        <span className="text-2xl sm:text-[32px] font-semibold text-black">
          ${plan.price}
        </span>
        <span className="text-[10px] sm:text-xs font-medium text-gray-600 whitespace-nowrap">
          {periodLabel}
        </span>
      </div>

      {/* Features List */}
      <div className="flex flex-col items-center mb-2 sm:mb-3 w-full text-center">
        {plan.features && plan.features.length > 0 && (
          <div className="w-full">
            {plan.features.map((feature, index) => (
              <p
                key={index}
                className="py-1 sm:py-1.5 border-b text-xs leading-tight border-gray-400 border-dotted w-full text-center text-gray-800 first:text-xs sm:first:text-sm first:font-bold"
              >
                {feature.name}
              </p>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Section: Star Icon & Subscribe Button */}
      <div className="flex flex-col items-center gap-2.5 mt-auto w-full pt-2">
        <div className="flex items-center justify-center gap-1.5 text-[20px] leading-none font-bold">
          {style.starIcon}
        </div>

        <Button
          onClick={() => handleSubscription(plan.stripe_price_id, plan.type)}
          className={`!bg-none ${style.btnBg} ${style.btnBorder} text-black text-xs sm:text-sm font-bold w-[36%] min-w-[150px] max-w-[195px] h-[48px] sm:h-[56px] rounded-[28px] cursor-pointer shadow-xs flex items-center justify-center`}
        >
          SUBSCRIBE
        </Button>
      </div>
    </div>
  );
};

export default PlansPriceCard;





