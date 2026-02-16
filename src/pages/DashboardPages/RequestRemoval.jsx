import RequestRemovalForm from "@/components/DashboardComponent/RequestRemovalForm";
import RequestRemovalStats from "@/components/DashboardComponent/RequestRemovalStats";
import { useGetAgencyMemberList } from "@/hooks/useGetAgencyMemberList";
import { useGetDashboardData } from "@/hooks/useGetDashboardData";
import { selectUser } from "@/Redux/slices/authSlice";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const RequestRemoval = () => {
  // const [linksData, setLinksData] = useState([]);
  const [selectedMemberID, setSelectedMemberId] = useState(null);
  const { data: memberData, isLoading, isError } = useGetAgencyMemberList();
  const user = useSelector(selectUser);
  const {
    data,
    isLoading: dashboardLoading,
    isError: dashboardIsError,
  } = useGetDashboardData(selectedMemberID);

  const dashboardData = data?.data;
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

  // Show error message for member data fetching errors
  if (isError && user.role === "agency") {
    return (
      <div className="flex flex-col gap-4 lg:h-full pb-4 lg:pb-0">
        <div className="bg-red-50 border border-red-200 rounded-2xl p-6 text-center">
          <div className="flex flex-col items-center gap-2">
            <svg
              className="w-12 h-12 text-red-400"
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
            <p className="text-red-600 font-medium text-lg">
              Failed to load member data
            </p>
            <p className="text-red-500 text-sm">
              Unable to retrieve agency member information. Please try
              refreshing the page or contact support if the issue persists.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col-reverse lg:flex-col gap-4 lg:h-full pb-4 lg:pb-0">
      <RequestRemovalStats
        dashboardData={dashboardData}
        isLoading={dashboardLoading}
        isError={dashboardIsError}
      />
      <RequestRemovalForm
        // setLinksData={setLinksData}
        // linksData={linksData}
        selectedMemberID={selectedMemberID}
        setSelectedMemberId={setSelectedMemberId}
        memberData={memberData}
        user={user}
        isLoading={isLoading}
        isError={isError}
      />
    </div>
  );
};

export default RequestRemoval;
