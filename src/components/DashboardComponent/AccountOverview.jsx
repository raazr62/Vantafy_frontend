import React from "react";
import AccountOverviewDetails from "./AccountOverviewDetails";
import AccountOverviewStats from "./AccountOverviewStats";

const AccountOverview = ({
  setSelectedMemberId,
  memberData,
  selectedMemberID,
}) => {
  return (
    <div className="p-3 lg:p-4 bg-white rounded-2xl space-y-4 lg:h-full lg:overflow-y-auto">
      <AccountOverviewDetails
        memberData={memberData}
        setSelectedMemberId={setSelectedMemberId}
        selectedMemberID={selectedMemberID}
      />
      <AccountOverviewStats />
    </div>
  );
};

export default AccountOverview;
