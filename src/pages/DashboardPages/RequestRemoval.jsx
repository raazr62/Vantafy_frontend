import RequestRemovalForm from "@/components/DashboardComponent/RequestRemovalForm";
import RequestRemovalStats from "@/components/DashboardComponent/RequestRemovalStats";
import { useGetAgencyMemberList } from "@/hooks/useGetAgencyMemberList";
import { selectUser } from "@/Redux/slices/authSlice";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const RequestRemoval = () => {
  // const [linksData, setLinksData] = useState([]);
  const [selectedMemberID, setSelectedMemberId] = useState(null);
  const { data: memberData, isLoading, isError } = useGetAgencyMemberList();
  const user = useSelector(selectUser);

  useEffect(() => {
    if (
      user.role === "agency" &&
      !isLoading &&
      !isError &&
      memberData?.data?.length > 0
    ) {
      setSelectedMemberId(memberData.data[0]?.id);
    }
  }, [memberData, isLoading, isError, user.role]);

  return (
    <div className="flex flex-col-reverse lg:flex-col gap-4 lg:h-full pb-4 lg:pb-0">
      <RequestRemovalStats />
      <RequestRemovalForm
        // setLinksData={setLinksData}
        // linksData={linksData}
        selectedMemberID={selectedMemberID}
        setSelectedMemberId={setSelectedMemberId}
        memberData={memberData}
        user={user}
      />
    </div>
  );
};

export default RequestRemoval;
