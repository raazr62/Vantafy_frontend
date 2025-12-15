import { memberMockData } from "@/lib/DashboardMockData";
import React from "react";
import MemberNiches from "./MemberNiches";
import MemberStageNames from "./MemberStageNames";
import AuthorizedSocialMedia from "./AuthorizedSocialMedia";

const MyMembersInfo = ({ whichMember }) => {
  const memberData = memberMockData.find((member) => member.id === whichMember);

  return (
    <div className="space-y-4 flex flex-col min-h-0 grow flex-1">
      <MemberNiches memberData={memberData} />
      <MemberStageNames memberData={memberData} />
      <AuthorizedSocialMedia memberData={memberData} />
    </div>
  );
};

export default MyMembersInfo;
