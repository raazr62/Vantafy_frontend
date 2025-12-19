import {
  CrownIconSVG,
  WarningAgencyIconSVG,
} from "@/components/SVG/DashboardLayoutSVG";
import { Button } from "@/components/ui/button";
import React from "react";
import { useNavigate } from "react-router";

const MyInfoHead = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white rounded-2xl px-4 py-2 md:p-4 w-full shadow-[0_0.785px_2.355px_0_rgba(0,0,0,0.10),0_0.785px_1.57px_-0.785px_rgba(0,0,0,0.10)] flex flex-wrap sm:flex-row items-center justify-center sm:justify-between gap-2 sm:gap-4">
      <div>
        <p className="text-xl sm:text-2xl font font-semibold">Agency Roster</p>
        <p className="text-xs sm:text-sm text-[#475569]">
          Manage your team members
        </p>
      </div>

      {/* Left Part */}
      <div className="flex flex-wrap justify-center sm:flex-row items-center gap-2 sm:gap-4">
        {/* Member Usage */}
        <div className="p-4 bg-[#F8FAFC] rounded-[12px] border-2 border-[#E2E8F0]">
          <p className="text-sm sm:text-base">
            Member usage <span>9/10</span>
          </p>
          <progress
            value={9}
            max={10}
            className="progress-bar w-full h-3 rounded-2xl overflow-hidden"
          />
          <p className="text-xs text-primary flex items-center gap-1">
            <WarningAgencyIconSVG /> Approaching member limit
          </p>
        </div>

        <Button
          onClick={() => navigate("/dashboard/plans")}
          className={"rounded-[12px] md:p-6!"}
        >
          <CrownIconSVG /> Upgrade Tier
        </Button>
      </div>
    </div>
  );
};

export default MyInfoHead;
