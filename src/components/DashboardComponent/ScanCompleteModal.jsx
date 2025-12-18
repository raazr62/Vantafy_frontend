import React from "react";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScanCompleteIconSVG } from "../SVG/DashboardLayoutSVG";
import { scanCompleteOverviewMockData } from "@/lib/DashboardMockData";

const ScanCompleteModal = ({ setActiveDialog }) => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Your Scan Complete</DialogTitle>
      </DialogHeader>

      {/* Icon */}
      <div className="p-4 w-fit mx-auto rounded-full bg-linear-to-t from-[#10B981] to-[#059669]">
        <ScanCompleteIconSVG />
      </div>

      {/* Description */}
      <div className="space-y-1">
        <p className="text-lg sm:text-xl md:text-2xl font-medium text-center">
          Scan Complete!
        </p>
        <p className="text-[#707070] text-center text-sm sm:text-base">
          We found 100 potential matches across 200 sites
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {scanCompleteOverviewMockData.map((scanData) => (
          <div
            key={scanData.id}
            className="py-5 rounded-[12px] flex flex-col items-center justify-center bg-[#F7FCFF] gap-2"
          >
            <p className="text-[#707070] text-xs sm:text-sm font-medium">
              {scanData.title}
            </p>
            <p
              className={`font-semibold text-xl sm:text-2xl md:text-3xl ${
                scanData.title === "Matches Found"
                  ? "text-primary"
                  : "text-[#212B36]"
              }`}
            >
              {scanData.count}
            </p>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={() => setActiveDialog("Scan Result Single")}
          className={
            "bg-[#3AB8FF] py-2 text-white text-xs sm:text-sm font-semibold w-full rounded-xl cursor-pointer"
          }
        >
          View Results
        </button>
        <button
          onClick={() => setActiveDialog("Start Scan")}
          className={
            "py-2 text-xs sm:text-sm font-semibold w-full rounded-xl border border-[#0000001A] cursor-pointer"
          }
        >
          Start New Scan
        </button>
      </div>
    </DialogContent>
  );
};

export default ScanCompleteModal;
