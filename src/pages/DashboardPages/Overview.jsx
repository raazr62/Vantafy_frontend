import AccountHistory from "@/components/DashboardComponent/AccountHistory";
import AccountOverview from "@/components/DashboardComponent/AccountOverview";
import LimitationStatus from "@/components/DashboardComponent/LimitationStatus";
import React from "react";

export default function Overview() {
  return (
    <div className="flex flex-col h-full gap-3">
      <LimitationStatus />
      <div className="grow flex gap-3">
        <AccountOverview />
        <AccountHistory />
      </div>
    </div>
  );
}
