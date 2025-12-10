import { linksMockData } from "@/lib/DashboardMockData";
import React from "react";
import { InfoIconSVG } from "../SVG/DashboardLayoutSVG";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TooltipProvider } from "@radix-ui/react-tooltip";

const MonthlyLimitationHistory = () => {
  return (
    <div className="flex-1 flex flex-col p-4 bg-white rounded-2xl">
      {/* Header with tooltip */}
      <div className="bg-[#F2F5F7] rounded-[12px] text-center text-lg font-semibold py-3 flex items-center justify-center gap-2">
        <span>Monthly Limit Reached</span>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button className="focus:outline-none">
                <InfoIconSVG className="w-4 h-4 cursor-pointer" />
              </button>
            </TooltipTrigger>
            <TooltipContent
              side="top"
              align="center"
              className={"bg-blue-400 text-white"}
            >
              <p>30/30 Pending links will continue automatically next month</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      {/* Links */}
      <div className="mt-4 flex-1 overflow-y-auto rounded-[12px]">
        {linksMockData.map((link, idx) => (
          <p
            key={idx}
            className={`px-3 py-2 first:rounded-t-[12px] last:rounded-b-[12px] ${
              idx % 2 === 0 ? "bg-[#FFFAFE]" : "bg-[#FFEDFC99]"
            }`}
          >
            {link}
          </p>
        ))}
      </div>
    </div>
  );
};

export default MonthlyLimitationHistory;
