import React from "react";
import MemberNiches from "./MemberNiches";
import MemberStageNames from "./MemberStageNames";
import AuthorizedSocialMedia from "./AuthorizedSocialMedia";

const MyMembersInfo = ({ whichMember, membersData, isLoading, isError }) => {
  const memberData = membersData?.find((member) => member.id === whichMember);

  if (isLoading) {
    return (
      <div className="flex flex-col gap-4 min-h-0 grow flex-1">
        {/* Loading Skeleton */}
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="bg-white rounded-2xl p-4 shadow-[0_0.785px_2.355px_0_rgba(0,0,0,0.10)] border border-[#E2E8F0] animate-pulse"
          >
            <div className="h-6 w-32 bg-gray-300/20 rounded mb-4"></div>
            <div className="space-y-2">
              <div className="h-4 w-full bg-gray-300/20 rounded"></div>
              <div className="h-4 w-3/4 bg-gray-300/20 rounded"></div>
              <div className="h-4 w-5/6 bg-gray-300/20 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col gap-4 min-h-0 grow flex-1">
        <div className="bg-white rounded-2xl p-8 shadow-[0_0.785px_2.355px_0_rgba(0,0,0,0.10)] border border-[#E2E8F0] flex flex-col items-center justify-center">
          <div className="text-red-500 mb-3">
            <svg
              className="w-16 h-16"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <p className="text-lg font-semibold text-gray-800 mb-2">
            Failed to Load Member Information
          </p>
          <p className="text-sm text-gray-500 text-center">
            Unable to fetch member data. Please try again later.
          </p>
        </div>
      </div>
    );
  }

  if (!membersData || membersData.length === 0) {
    return (
      <div className="flex flex-col gap-4 min-h-0 grow flex-1">
        <div className="bg-white rounded-2xl p-8 shadow-[0_0.785px_2.355px_0_rgba(0,0,0,0.10)] border border-[#E2E8F0] flex flex-col items-center justify-center">
          <div className="text-gray-400 mb-4">
            <svg
              className="w-16 h-16"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <p className="text-lg font-semibold text-gray-800 mb-2">
            No Member Data
          </p>
          <p className="text-sm text-gray-500 text-center">
            Add a member to view their information here.
          </p>
        </div>
      </div>
    );
  }

  if (!whichMember || !memberData) {
    return (
      <div className="flex flex-col gap-4 min-h-0 grow flex-1">
        <div className="bg-white rounded-2xl p-8 shadow-[0_0.785px_2.355px_0_rgba(0,0,0,0.10)] border border-[#E2E8F0] flex flex-col items-center justify-center">
          <div className="text-gray-400 mb-4">
            <svg
              className="w-16 h-16"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <p className="text-lg font-semibold text-gray-800 mb-2">
            No Member Selected
          </p>
          <p className="text-sm text-gray-500 text-center">
            Select a member from the list to view their details.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 min-h-0 grow flex-1">
      <MemberNiches memberData={memberData} />
      <MemberStageNames memberData={memberData} />
      <AuthorizedSocialMedia memberData={memberData} />
    </div>
  );
};

export default MyMembersInfo;
