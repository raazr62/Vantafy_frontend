import React from "react";
import AccountOverviewDetails from "./AccountOverviewDetails";
import AccountOverviewStats from "./AccountOverviewStats";

const AccountOverview = ({
  setSelectedMemberId,
  memberData,
  selectedMemberID,
  user,
  dashboardData,
  isLoading,
  isError,
}) => {
  return (
    <div className="p-3 lg:p-4 bg-white rounded-2xl space-y-4 lg:h-full lg:overflow-y-auto">
      <AccountOverviewDetails
        memberData={memberData}
        setSelectedMemberId={setSelectedMemberId}
        selectedMemberID={selectedMemberID}
        user={user}
        dashboardData={dashboardData}
      />
      <AccountOverviewStats
        dashboardData={dashboardData}
        isLoading={isLoading}
        isError={isError}
      />
    </div>
  );
};

export default AccountOverview;
