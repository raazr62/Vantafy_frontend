import React from "react";
import { ReferralProfileIconSVG } from "../SVG/DashboardLayoutSVG";
import { referralHistoryMockData } from "@/lib/DashboardMockData";

const ReferralHistory = () => {
  return (
    <div className="bg-white rounded-2xl p-4 w-full shadow-[0_0.785px_2.355px_0_rgba(0,0,0,0.10),0_0.785px_1.57px_-0.785px_rgba(0,0,0,0.10)] min-h-0  flex flex-col">
      <p className="text-xl font-medium">Referral History</p>
      <div className="grow min-h-0 flex flex-col">
        <div className="flex items-center justify-between px-5 py-3 border-b-2 border-b-[#eeedf0]">
          <p className="text-xs font-semibold text-[#4A4A4A]">Referred Name</p>
          <p className="text-xs font-semibold text-[#4A4A4A]">Join Date</p>
        </div>

        {/* Lists */}
        <div className="grow overflow-y-auto">
          {referralHistoryMockData.map((referralData) => (
            <div
              key={referralData.id}
              className="flex items-center justify-between px-5 py-3 border-b-2 border-b-[#eeedf0] last:border-none"
            >
              <p className="text-xs text-[#1B1B1B] flex items-center gap-2">
                <p className="p-1.5 rounded-[6px] bg-[linear-gradient(135deg,rgba(78,120,253,0.10)_0%,rgba(255,27,228,0.10)_100%)]">
                  <ReferralProfileIconSVG />
                </p>
                {referralData.name}
              </p>
              <p className="text-xs text-[#4A4A4A]">{referralData.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReferralHistory;
