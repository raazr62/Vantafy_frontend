import React from "react";

const AccountOverviewStats = ({ dashboardData }) => {
  const accountStatsData = [
    {
      id: 1,
      info: "Potential Revenue",
      quantity: dashboardData?.potential_revenue,
    },
    {
      id: 2,
      info: "Infringing Site",
      quantity: dashboardData?.infringing_sites,
    },
    {
      id: 3,
      info: "Image Found",
      quantity: dashboardData?.total_photo,
    },
    {
      id: 4,
      info: "Video Found",
      quantity: dashboardData?.total_video,
    },
    {
      id: 5,
      info: "Delisted",
      quantity: dashboardData?.number_of_delivered_site,
    },
    {
      id: 6,
      info: "Full Deletion",
      quantity: dashboardData?.number_of_full_deleted_site,
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
