import React from "react";
import { ReferralProfileIconSVG } from "../SVG/DashboardLayoutSVG";
import ReferralHistorySkeleton from "./ReferralHistorySkeleton";

const ReferralHistory = ({ affiliateProgramData, isLoading, isError }) => {
  // Show skeleton while loading
  if (isLoading) {
    return <ReferralHistorySkeleton />;
  }


  // Handle error state
  if (isError) {
    return (
      <div className="bg-white rounded-2xl p-4 w-full shadow-[0_0.785px_2.355px_0_rgba(0,0,0,0.10),0_0.785px_1.57px_-0.785px_rgba(0,0,0,0.10)] min-h-[300px] flex items-center justify-center">
        <div className="text-center space-y-2">
          <p className="text-red-600 font-medium">
            Failed to load referral history
          </p>
          <p className="text-sm text-gray-500">Please try again later</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-4 w-full shadow-[0_0.785px_2.355px_0_rgba(0,0,0,0.10),0_0.785px_1.57px_-0.785px_rgba(0,0,0,0.10)] min-h-0 flex flex-col">
      <p className="text-lg sm:text-xl font-medium mb-4">Referral History</p>

      {!affiliateProgramData?.all_user_refer_by_me ||
      affiliateProgramData?.all_user_refer_by_me.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 px-4">
          <div className="w-20 h-20 bg-linear-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mb-4">
            <svg
              className="w-10 h-10 text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <p className="text-lg font-medium text-gray-700 mb-1">
            No Referrals Yet
          </p>
          <p className="text-sm text-gray-500 text-center">
            Start sharing your referral link to earn rewards!
          </p>
        </div>
      ) : (
        <div className="grow min-h-0 flex flex-col">
          <div className="flex items-center justify-between px-5 py-3 border-b-2 border-b-[#eeedf0]">
            <p className="text-xs font-semibold text-[#4A4A4A]">
              Referred Name
            </p>
            <p className="text-xs font-semibold text-[#4A4A4A]">Join Date</p>
          </div>

          {/* Lists */}
          <div className="grow overflow-y-auto">
            {affiliateProgramData.all_user_refer_by_me.map((referralData) => (
              <div
                key={referralData.id}
                className="flex items-center justify-between px-5 py-3 border-b-2 border-b-[#eeedf0] last:border-none"
              >
                <p className="text-xs text-[#1B1B1B] flex items-center gap-2">
                  <p className="p-1.5 rounded-[6px] bg-[linear-gradient(135deg,rgba(78,120,253,0.10)_0%,rgba(255,27,228,0.10)_100%)]">
                    <ReferralProfileIconSVG />
                  </p>
                  {referralData.full_name}
                </p>
                <p className="text-xs text-[#4A4A4A]">  {new Date(referralData.joined_date).toLocaleDateString()}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ReferralHistory;
