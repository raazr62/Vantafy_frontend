import React from "react";
import { Button } from "../ui/button";

const PlansPriceCard = ({ plan, handleSubscription, i }) => {
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
      className={`py-3 sm:py-6 px-2.5 ${backroundColor} text-white rounded-[12px] shadow-[0_15px_18.75px_-3.75px_rgba(0,0,0,0.10),0_6px_7.5px_-4.5px_rgba(0,0,0,0.10)] flex flex-col items-center`}
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
