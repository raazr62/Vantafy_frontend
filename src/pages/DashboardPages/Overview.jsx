// Overview.jsx
import AccountHistory from "@/components/DashboardComponent/AccountHistory";
import AccountOverview from "@/components/DashboardComponent/AccountOverview";
import LimitationStatus from "@/components/DashboardComponent/LimitationStatus";
import { overviewScanStatsMockData } from "@/lib/DashboardMockData";
import React from "react";

export default function Overview() {
  return (
    <div className="flex flex-col h-full gap-3">
      <LimitationStatus />

      {/* middle area: must be able to shrink so internal lists can scroll */}
      <div className="grow flex gap-3 min-h-0">
        {/* left: overview (adjust flex ratios as you prefer) */}
        <div className="min-h-0 flex-2/5">
          <AccountOverview />
        </div>

        {/* right: account history (scrolling children inside) */}
        <div className="min-h-0 w-full flex-3/5">
          <AccountHistory />
        </div>
      </div>

      {/* Buttons / stats - this stays at bottom */}
      <div className="bg-white flex justify-between gap-5 items-center p-5 rounded-2xl mt-3">
        {overviewScanStatsMockData.map((stat) => (
          <div
            key={stat.id}
            className="rounded-lg border border-gray-200 bg-white shadow-sm flex items-center gap-2 py-3 px-5 flex-1"
          >
            {stat.icon} {stat.title}
          </div>
        ))}
      </div>
    </div>
  );
}
