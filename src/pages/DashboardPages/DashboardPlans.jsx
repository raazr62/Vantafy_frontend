import DashboardPlansCard from "@/components/DashboardComponent/DashboardPlansCard";
import PlanStatus from "@/components/DashboardComponent/PlanStatus";
import React from "react";

const DashboardPlans = () => {
  return (
    <div className="h-full overflow-y-auto pb-4 lg:pb-0">
      {/* <p className="text-[32px] font-medium">Plans</p>
      <p className="text-[#4A5565] text-xl">
        Monitor and manage your content protection
      </p>
      <PlansBanner /> */}
      <PlanStatus />
      <DashboardPlansCard />
    </div>
  );
};

export default DashboardPlans;
