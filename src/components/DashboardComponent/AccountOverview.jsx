import React from "react";
import AccountOverviewDetails from "./AccountOverviewDetails";
import AccountOverviewStats from "./AccountOverviewStats";

const AccountOverview = () => {
  return (
    <div className="p-6 bg-white rounded-2xl space-y-4 flex-2/5">
      <AccountOverviewDetails />
      <AccountOverviewStats />
    </div>
  );
};

export default AccountOverview;
