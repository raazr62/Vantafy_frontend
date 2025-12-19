import React from "react";
import AccountOverviewDetails from "./AccountOverviewDetails";
import AccountOverviewStats from "./AccountOverviewStats";

const AccountOverview = () => {
  return (
    <div className="p-3 lg:p-4 bg-white rounded-2xl space-y-4 lg:h-full lg:overflow-y-auto">
      <AccountOverviewDetails />
      <AccountOverviewStats />
    </div>
  );
};

export default AccountOverview;
