import { requestRemovalStatsMockData } from "@/lib/DashboardMockData";
import React from "react";
import {
  ImageIconSVG,
  VideoIconSVG,
  WarningIconSVG,
  WebIconSVG,
} from "../SVG/DashboardLayoutSVG";
import RequestRemovalStatsSkeleton from "./RequestRemovalStatsSkeleton";

const RequestRemovalStats = ({ dashboardData, isLoading, isError }) => {
  // Show skeleton during loading
  if (isLoading) {
    return <RequestRemovalStatsSkeleton />;
  }

  // Show error message
  if (isError) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
        <div className="col-span-full bg-red-50 border border-red-200 rounded-2xl p-6 text-center">
          <div className="flex flex-col items-center gap-2">
            <svg
              className="w-12 h-12 text-red-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <p className="text-red-600 font-medium">
              Failed to load statistics
            </p>
            <p className="text-red-500 text-sm">
              Please try refreshing the page or contact support if the issue
              persists.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const requestRemovalStats = [
    {
      id: 1,
      count: dashboardData?.total_photo || 0,
      description: "Images Detected",
      icon: <ImageIconSVG />,
      bg: "bg-[#4E78FD1A]",
    },
    {
      id: 2,
      count: dashboardData?.total_video || 0,
      description: "Videos Detected",
      icon: <VideoIconSVG />,
      bg: "bg-[#FF1BE41A]",
    },
    {
      id: 3,
      count: dashboardData?.number_of_full_deleted_site || 0,
      description: "Full Deletion",
      icon: <WebIconSVG />,
      bg: "bg-[#10B9811A]",
    },
    {
      id: 4,
      count: dashboardData?.remaining_links_to_removal || 0,
      description: "Request Remaining",
      icon: <WarningIconSVG />,
      bg: "bg-[#F59E0B1A]",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
      {requestRemovalStats.map((data) => (
        <div
          key={data.id}
          className="flex items-center gap-2 sm:gap-3 bg-white rounded-2xl p-4 w-full shadow-[0_0.785px_2.355px_0_rgba(0,0,0,0.10),0_0.785px_1.57px_-0.785px_rgba(0,0,0,0.10)]"
        >
          <div className={`p-2.5 rounded-[10px] ${data.bg}`}>{data.icon}</div>
          <div>
            <p className="text-lg sm:text-xl lg:text-2xl font-bold">
              {data.count}
            </p>
            <p className="text-[#4A4A4A] text-xs sm:font-medium">
              {data.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RequestRemovalStats;
