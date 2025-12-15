import { nichesMockData } from "@/lib/DashboardMockData";
import React from "react";

const MemberNiches = ({ memberData }) => {
  const selectedNiches = new Set(memberData.niches);

  return (
    <div className="bg-white rounded-2xl p-4 w-full border border-[#E2E8F0] shadow-[0_0.785px_2.355px_rgba(0,0,0,0.10)] gap-4 flex flex-col min-h-0 grow flex-1">
      <p className="font-semibold text-center">Their Niches</p>

      <div className="flex flex-wrap gap-2 grow overflow-y-auto">
        {nichesMockData.map((niche, idx) => {
          const isActive = selectedNiches.has(niche);

          return (
            <span
              key={idx}
              className={`px-3 py-1 rounded-full text-xs font-medium border transition
                ${
                  isActive
                    ? "bg-primary text-white border-transparent shadow-[0_0_6px_rgba(255,92,225,0.35)]"
                    : "bg-[#F8FAFC] text-[#475569] border-[#E2E8F0]"
                }`}
            >
              {niche}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default MemberNiches;
