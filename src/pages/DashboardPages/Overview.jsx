import AccountHistory from "@/components/DashboardComponent/AccountHistory";
import AccountOverview from "@/components/DashboardComponent/AccountOverview";
import LimitationStatus from "@/components/DashboardComponent/LimitationStatus";
import { overviewScanStatsMockData } from "@/lib/DashboardMockData";
import React, { useState } from "react";
import { Dialog } from "@/components/ui/dialog";
import ListOfDelistedLinksModal from "@/components/DashboardComponent/ListOfDelistedLinksModal";
import StartScanModal from "@/components/DashboardComponent/StartScanModal";
import StartScanningModal from "@/components/DashboardComponent/StartScanningModal";
import ScanCompleteModal from "@/components/DashboardComponent/ScanCompleteModal";
import ScanResult from "@/components/DashboardComponent/ScanResult";

export default function Overview() {
  const [activeDialog, setActiveDialog] = useState(null);

  return (
    <div className="flex flex-col h-full gap-3 pb-4 lg:pb-0">
      <LimitationStatus />

      {/* Middle layout */}
      <div className="grow flex flex-col lg:flex-row gap-3 lg:min-h-0">
        <div className="lg:min-h-0 lg:flex-2/5">
          <AccountOverview />
        </div>

        <div className="min-h-0 w-full lg:flex-3/5">
          <AccountHistory />
        </div>
      </div>

      {/* Buttons / Stats */}
      <div className="bg-white flex flex-col sm:flex-row justify-between gap-2 md:gap-5 items-center p-5 rounded-2xl mt-3">
        {overviewScanStatsMockData.map((stat) => (
          <button
            key={stat.id}
            onClick={() => setActiveDialog(stat.title)}
            className="rounded-lg border border-gray-200 bg-white shadow-sm flex items-center gap-2 py-2 md:py-3 px-2 md:px-5 flex-1 text-left cursor-pointer w-full text-sm"
          >
            {stat.icon} {stat.title}
          </button>
        ))}
      </div>

      {/* Modal */}
      <Dialog open={!!activeDialog} onOpenChange={() => setActiveDialog(null)}>
        {activeDialog === "List of Delisted links" && (
          <ListOfDelistedLinksModal />
        )}
        {activeDialog === "Initial Scan" && (
          <StartScanModal setActiveDialog={setActiveDialog} />
        )}
        {activeDialog === "Start Scanning" && (
          <StartScanningModal setActiveDialog={setActiveDialog} />
        )}
        {activeDialog === "Scan Complete" && (
          <ScanCompleteModal setActiveDialog={setActiveDialog} />
        )}
        {activeDialog === "Scan Result Single" && (
          <ScanResult activeDialog={activeDialog} />
        )}
        {activeDialog === "Scan Result" && (
          <ScanResult activeDialog={activeDialog} />
        )}
      </Dialog>
    </div>
  );
}
