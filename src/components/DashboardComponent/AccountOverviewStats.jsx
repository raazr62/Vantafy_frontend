import { accountStatsMockData } from "@/lib/DashboardMockData";
import React from "react";

const AccountOverviewStats = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {accountStatsMockData.map((data) => (
        <div
          key={data.id}
          className="bg-[linear-gradient(90deg,rgba(78,120,253,0.04)_0%,rgba(255,27,228,0.04)_100%)]
 p-4 rounded-xl text-center space-y-2"
        >
          <p className="text-[#212B36] font-medium">{data.info}</p>
          <p className="text-[#212B36] font-semibold text-2xl">
            {data.quantity}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AccountOverviewStats;
