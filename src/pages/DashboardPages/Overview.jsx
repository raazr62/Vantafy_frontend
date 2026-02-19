import AccountHistory from "@/components/DashboardComponent/AccountHistory";
import AccountOverview from "@/components/DashboardComponent/AccountOverview";
import { overviewScanStatsMockData } from "@/lib/DashboardMockData";
import React, { useEffect, useState } from "react";
import { Dialog } from "@/components/ui/dialog";
import ListOfDelistedLinksModal from "@/components/DashboardComponent/ListOfDelistedLinksModal";
import StartScanModal from "@/components/DashboardComponent/StartScanModal";
import StartScanningModal from "@/components/DashboardComponent/StartScanningModal";
import ScanCompleteModal from "@/components/DashboardComponent/ScanCompleteModal";
import ScanResult from "@/components/DashboardComponent/ScanResult";
import { selectUser } from "@/Redux/slices/authSlice";
import { useSelector } from "react-redux";
import { useGetAgencyMemberList } from "@/hooks/useGetAgencyMemberList";
import { useGetDashboardData } from "@/hooks/useGetDashboardData";

export default function Overview() {
  const [activeDialog, setActiveDialog] = useState(null);
  const [selectedMemberID, setSelectedMemberId] = useState(null);
  const user = useSelector(selectUser);
  const {
    data,
    isLoading: dashboardLoading,
    isError: dashboardIsError,
  } = useGetDashboardData(selectedMemberID);

  const { data: memberData, isLoading, isError } = useGetAgencyMemberList();

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

  // Show error message for member data fetching errors (agency users only)
  if (isError && user.role === "agency") {
    return (
      <div className="flex flex-col h-full gap-3 pb-4 lg:pb-0">
        <div className="bg-red-50 border border-red-200 rounded-2xl p-8 text-center">
          <div className="flex flex-col items-center gap-3">
            <svg
              className="w-16 h-16 text-red-400"
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
            <p className="text-red-600 font-semibold text-xl">
              Failed to Load Member Data
            </p>
            <p className="text-red-500 text-sm max-w-md">
              Unable to retrieve agency member information. Please try
              refreshing the page or contact support if the issue persists.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Show "Add First Member" message for agency users without members
  if (user.role === "agency" && !isLoading && memberData?.data?.length < 1) {
    return (
      <div className="flex flex-col h-full gap-3 pb-4 lg:pb-0">
        <div className="bg-white rounded-2xl p-8 sm:p-12 text-center shadow-sm">
          <div className="flex flex-col items-center gap-4 max-w-md mx-auto">
            <div className="text-blue-500">
              <svg
                className="w-20 h-20"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">No Members Yet</h2>
            <p className="text-gray-600 text-base">
              To view your dashboard overview, you need to add at least one team
              member first.
            </p>
            <a
              href="/dashboard/my-information"
              className="bg-[#3AB8FF] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#2da3e8] transition-colors mt-2 inline-flex items-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Add Your First Member
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Show dashboard error for individual users or general dashboard errors
  if (dashboardIsError) {
    return (
      <div className="flex flex-col h-full gap-3 pb-4 lg:pb-0">
        <div className="bg-red-50 border border-red-200 rounded-2xl p-8 text-center">
          <div className="flex flex-col items-center gap-3">
            <svg
              className="w-16 h-16 text-red-400"
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
            <p className="text-red-600 font-semibold text-xl">
              Failed to Load Dashboard
            </p>
            <p className="text-red-500 text-sm max-w-md">
              Unable to retrieve your dashboard data. Please try refreshing the
              page or contact support if the issue persists.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full gap-3 pb-4 lg:pb-0">
      {/* {user.role === "customer" && <LimitationStatus />} */}

      {/* Middle layout */}
      <div className="grow flex flex-col lg:flex-row gap-3 lg:min-h-0">
        <div className="lg:min-h-0 lg:flex-2/5">
          <AccountOverview
            setSelectedMemberId={setSelectedMemberId}
            memberData={memberData}
            selectedMemberID={selectedMemberID}
            user={user}
            dashboardData={dashboardData}
            isLoading={dashboardLoading}
            isError={dashboardIsError}
          />
        </div>

        <div className="min-h-0 w-full lg:flex-3/5">
          <AccountHistory />
        </div>
      </div>

      {/* Buttons / Stats */}
      <div className="bg-white flex flex-col sm:flex-row justify-between gap-2 md:gap-5 items-center p-5 rounded-2xl mt-3">
        {overviewScanStatsMockData.map((stat) => (
          <button
            key={stat.id}
            onClick={() => setActiveDialog(stat.title)}
            className="rounded-lg border border-gray-200 bg-white shadow-sm flex items-center gap-2 py-2 md:py-3 px-2 md:px-5 flex-1 text-left cursor-pointer w-full text-sm"
          >
            {stat.icon} {stat.title}
          </button>
        ))}
      </div>

      {/* Modal */}
      <Dialog open={!!activeDialog} onOpenChange={() => setActiveDialog(null)}>
        {activeDialog === "List of Delisted links" && (
          <ListOfDelistedLinksModal selectedMemberID={selectedMemberID} />
        )}
        {activeDialog === "Initial Scan" && (
          <StartScanModal
            setActiveDialog={setActiveDialog}
            selectedMemberID={selectedMemberID}
          />
        )}
        {activeDialog === "Start Scanning" && (
          <StartScanningModal
            setActiveDialog={setActiveDialog}
            selectedMemberID={selectedMemberID}
          />
        )}
        {activeDialog === "Scan Complete" && (
          <ScanCompleteModal
            selectedMemberID={selectedMemberID}
            setActiveDialog={setActiveDialog}
          />
        )}
        {activeDialog === "Scan Result Single" && (
          <ScanResult selectedMemberID={selectedMemberID} />
        )}
        {activeDialog === "Scan Result" && (
          <ScanResult selectedMemberID={selectedMemberID} />
        )}
      </Dialog>
    </div>
  );
}
