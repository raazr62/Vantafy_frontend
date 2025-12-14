import DashboardPlansCard from "@/components/DashboardComponent/DashboardPlansCard";
import PlansBanner from "@/components/DashboardComponent/PlansBanner";
import PlanStatus from "@/components/DashboardComponent/PlanStatus";
import React from "react";

const DashboardPlans = () => {
  return (
    <div className="h-full overflow-y-auto no-scrollbar">
      <p className="text-[32px] font-medium">Plans</p>
      <p className="text-[#4A5565] text-xl">
        Monitor and manage your content protection
      </p>
      <PlansBanner />
      <PlanStatus />
      <DashboardPlansCard />
    </div>
  );
};

export default DashboardPlans;
