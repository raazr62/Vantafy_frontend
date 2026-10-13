import React from "react";
import AccountOverviewStatsSkeleton from "./AccountOverviewStatsSkeleton";

const AccountOverviewStats = ({ dashboardData, isLoading, isError }) => {
  // Show skeleton during loading
  if (isLoading) {
    return <AccountOverviewStatsSkeleton />;
  }

  // Show error message
  if (isError) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-center">
        <div className="flex flex-col items-center gap-2">
          <svg
            className="w-10 h-10 text-red-400"
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
          <p className="text-red-600 font-medium text-sm">
            Failed to load statistics
          </p>
          <p className="text-red-500 text-xs">
            Please try refreshing the page.
          </p>
        </div>
      </div>
    );
  }

  const formatPotentialRevenue = (revenue) => {
    if (revenue === undefined || revenue === null || revenue === "") {
      return "$0.00";
    }
    const cleanNum =
      typeof revenue === "string" ? revenue.replace(/[^0-9.-]+/g, "") : revenue;
    const num = Number(cleanNum);
    if (isNaN(num)) {
      return "$0.00";
    }
    return `$${num.toFixed(2)}`;
  };

  const accountStatsData = [
    {
      id: 1,
      info: "Potential Revenue",
      quantity: formatPotentialRevenue(dashboardData?.potential_revenue),
    },
    {
      id: 2,
      info: "Infringing Sites",
      quantity: dashboardData?.infringing_sites || 0,
    },
    {
      id: 3,
      info: "Images Found",
      quantity: dashboardData?.total_photo || 0,
    },
    {
      id: 4,
      info: "Videos Found",
      quantity: dashboardData?.total_video || 0,
    },
    {
      id: 5,
      info: "Delisted",
      quantity: dashboardData?.number_of_delivered_site || 0,
    },
    {
      id: 6,
      info: "Full Deletion",
      quantity: dashboardData?.number_of_full_deleted_site || 0,
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-2 sm:gap-4">
      {accountStatsData.map((data) => (
        <div
          key={data.id}
          className="bg-[linear-gradient(90deg,rgba(78,120,253,0.04)_0%,rgba(255,27,228,0.04)_100%)]
 p-3 sm:p-4 rounded-xl text-center space-y-1 md:space-y-2"
        >
          <p className="text-[#212B36] text-sm sm:text-base font-medium">
            {data.info}
          </p>
          <p className="text-[#212B36] font-semibold text-xl sm:text-2xl">
            {data.quantity}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AccountOverviewStats;
