import {
  CrownIconSVG,
  WarningAgencyIconSVG,
} from "@/components/SVG/DashboardLayoutSVG";
import { Button } from "@/components/ui/button";
import React from "react";

const MyInfoHead = () => {
  return (
    <div className="bg-white rounded-2xl p-4 w-full shadow-[0_0.785px_2.355px_0_rgba(0,0,0,0.10),0_0.785px_1.57px_-0.785px_rgba(0,0,0,0.10)] space-y-4 flex items-center justify-between">
      <div>
        <p className="text-2xl font font-semibold">Agency Roster</p>
        <p className="text-sm text-[#475569]">Manage your team members</p>
      </div>

      {/* Left Part */}
      <div className="flex items-center gap-4">
        {/* Member Usage */}
        <div className="p-4 bg-[#F8FAFC] rounded-[12px] border-2 border-[#E2E8F0]">
          <p>
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

        <Button className={"rounded-[12px] p-6!"}>
          <CrownIconSVG /> Upgrade Tier
        </Button>
      </div>
    </div>
  );
};

export default MyInfoHead;
