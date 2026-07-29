import React from "react";
import { CrownIconSVG } from "../SVG/DashboardLayoutSVG";
import { useGetCurrentSubscriptionPlan } from "@/hooks/useGetCurrentSubscriptionPlan";

const PlanStatus = () => {
  const { data, isLoading, isError } = useGetCurrentSubscriptionPlan();

  // Format ISO date to readable format
  const formatDate = (isoDate) => {
    if (!isoDate) return "";
    const date = new Date(isoDate);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };
  // Loading State
  if (isLoading) {
    return (
      <div className="p-4 bg-white rounded-[18px] border border-gray-200 flex flex-col sm:flex-row items-center justify-between animate-pulse">
        <div className="flex items-center flex-col sm:flex-row gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-300/20 rounded-[12px]"></div>
            <div className="h-8 w-16 bg-gray-300/20 rounded sm:hidden"></div>
          </div>
          <div className="space-y-2">
            <div className="h-6 w-40 bg-gray-300/20 rounded"></div>
            <div className="h-4 w-56 bg-gray-300/20 rounded"></div>
          </div>
        </div>
        <div className="h-8 w-20 bg-gray-300/20 rounded hidden sm:block"></div>
      </div>
    );
  }

  // Error State
  if (isError) {
    return (
      <div className="p-4 bg-red-50 rounded-[18px] border border-red-200 flex items-center justify-center">
        <p className="text-red-600 text-sm">
          Failed to load subscription plan. Please try again later.
        </p>
      </div>
    );
  }

  // Success State
  return (
    <div className="p-4 bg-white rounded-[18px] border border-primary flex flex-col sm:flex-row items-center justify-between">
      <div className="flex items-center flex-col sm:flex-row gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 sm:p-3.5 bg-linear-to-b from-[#4E78FD] to-[#FF1BE4] w-fit rounded-[12px]">
            <CrownIconSVG />
          </div>
          <p className="text-xl sm:text-2xl lg:text-[32px] font-bold sm:hidden">
            ${data?.data?.package?.price}
            <span className="text-[#9A9A9A] text-base font-normal">
              {data?.data?.package?.type === "agency"
                ? "/mo"
                : data?.data?.package?.type === "monthly"
                  ? "/mo"
                  : "/yr"}
            </span>
          </p>
        </div>
        <div>
          <p className="text-base sm:text-lg lg:text-xl font-bold flex items-center gap-2">
            {data?.data?.package.name} Plan Active
            <span className="bg-linear-to-b from-[#4E78FD] to-[#FF1BE4] rounded-[6px] p-1 sm:p-2 text-xs font-bold text-white">
              Active
            </span>
          </p>
          <p className="text-[#9A9A9A] text-sm">
            Your subscription renews on {formatDate(data?.data?.end_date)}
          </p>
        </div>
      </div>
      <p className="text-xl sm:text-2xl lg:text-[32px] font-bold hidden sm:block">
        ${data?.data?.package?.price}
        <span className="text-[#9A9A9A] text-base font-normal">
          {data?.data?.package?.type === "agency"
            ? "/mo"
            : data?.data?.package?.type === "monthly"
              ? "/mo"
              : "/yr"}
        </span>
      </p>
    </div>
  );
};

export default PlanStatus;
