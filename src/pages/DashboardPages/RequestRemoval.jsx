import RequestRemovalForm from "@/components/DashboardComponent/RequestRemovalForm";
import RequestRemovalStats from "@/components/DashboardComponent/RequestRemovalStats";
import { useGetAgencyMemberList } from "@/hooks/useGetAgencyMemberList";
import React, { useState } from "react";

const RequestRemoval = () => {
  // const [linksData, setLinksData] = useState([]);
  const [selectedMemberID, setSelectedMemberId] = useState(null);
  const { data: memberData, isLoading, isError } = useGetAgencyMemberList();

  return (
    <div className="flex flex-col-reverse lg:flex-col gap-4 lg:h-full pb-4 lg:pb-0">
      <RequestRemovalStats />
      <RequestRemovalForm
        // setLinksData={setLinksData}
        // linksData={linksData}
        selectedMemberID={selectedMemberID}
        setSelectedMemberId={setSelectedMemberId}
        memberData={memberData}
        isLoading={isLoading}
        isError={isError}
      />
    </div>
  );
};

export default RequestRemoval;
