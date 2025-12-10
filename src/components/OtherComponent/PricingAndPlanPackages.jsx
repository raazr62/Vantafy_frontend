import { MonthlyPricingPlansMockData } from "@/lib/HomeMockData";
import { Button } from "../ui/button";
import React from "react";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

const PricingAndPlanPackages = () => {
  const navigate = useNavigate();
  const handleSubscription = (planName) => {
    toast.success(
      `Subscription confirmed! Thanks for choosing the ${planName} plan.`
    );
    navigate("/dashboard");
  };
  return (
    <div className="flex gap-3 mt-4">
      {MonthlyPricingPlansMockData.map((plan) => {
        const backroundColor =
          plan.planName === "Silver"
            ? "bg-[linear-gradient(135deg,#4A5565_0%,#364153_50%,#101828_100%)]"
            : plan.planName === "Gold"
            ? "bg-[linear-gradient(135deg,#D08700_0%,#A65F00_50%,#733E0A_100%)]"
            : plan.planName === "Platinum"
            ? "bg-[linear-gradient(135deg,#D1D5DC_0%,#99A1AF_50%,#6A7282_100%)]"
            : plan.planName === "Diamond"
            ? "bg-[linear-gradient(135deg,#53EAFD_0%,#00D3F2_50%,#00B8DB_100%)]"
            : "";
        return (
          <div
            key={plan.id}
            className={`py-6 px-2.5 ${backroundColor} text-white rounded-[12px] shadow-[0_15px_18.75px_-3.75px_rgba(0,0,0,0.10),0_6px_7.5px_-4.5px_rgba(0,0,0,0.10)] flex flex-col items-center h-fit
  `}
          >
            <p className="text-[32px] font-semibold">{plan.planName}</p>
            <p className="text-xs font-semibold">Package</p>
            <p className="px-8 py-3 bg-white text-black text-3xl font-semibold rounded-[45px] mt-6 mb-3">
              {plan.price}
            </p>
            <div className="flex flex-col items-center mb-4 w-full">
              {plan.features.map((feature, index) => (
                <p
                  key={index}
                  className="py-2.5 border-b text-xs border-white border-dotted w-full text-center first:text-sm first:font-bold"
                >
                  {feature}
                </p>
              ))}
            </div>
            <Button
              onClick={() => handleSubscription(plan.planName)}
              className={
                "bg-[linear-gradient(90deg,#FF8904_0%,#FDC700_100%)] text-black text-xs font-bold"
              }
            >
              SUBSCRIBE
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default PricingAndPlanPackages;
