import React, { useState } from "react";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { CopyAllIconSVG } from "../SVG/DashboardLayoutSVG";
import { linksMockData } from "@/lib/DashboardMockData";
import { Check } from "lucide-react";

const ScanResult = ({ activeDialog }) => {
  const isSingleResult = activeDialog === "Scan Result Single";
  const [copiedAll, setCopiedAll] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);

  const copyAllLinks = async () => {
    try {
      const allLinks = linksMockData.join("\n");
      await navigator.clipboard.writeText(allLinks);
      setCopiedAll(true);

      // Reset the copied state after 2 seconds
      setTimeout(() => {
        setCopiedAll(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const copySingleLink = async (link, index) => {
    try {
      await navigator.clipboard.writeText(link);
      setCopiedIndex(index);

      // Reset the copied state after 1.5 seconds
      setTimeout(() => {
        setCopiedIndex(null);
      }, 1500);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Scan Results</DialogTitle>
      </DialogHeader>

      {/* Stats Card */}
      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-[12px] bg-linear-to-b from-[rgba(78,120,253,0.04)] to-[rgba(255,27,228,0.04)] flex flex-col items-center justify-center py-5 space-y-1">
          <p className="text-[#707070] text-xs sm:text-sm font-medium">
            Total Scanned
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#212B36]">
            2,450
          </p>
        </div>

        <div className="rounded-[12px] bg-linear-to-b from-[rgba(78,120,253,0.04)] to-[rgba(255,27,228,0.04)] flex flex-col items-center justify-center py-5 space-y-1">
          <p className="text-[#707070] text-xs sm:text-sm font-medium">
            Matches Found
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#FF4ECF]">
            76
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600">
          Total: {linksMockData.length} links
        </p>
        <Button
          onClick={copyAllLinks}
          className="text-xs gap-2"
          variant="outline"
          size="sm"
        >
          {copiedAll ? (
            <>
              <Check className="w-4 h-4" />
              Copied
            </>
          ) : (
            <>
              <CopyAllIconSVG className="w-4 h-4" />
              Copy All
            </>
          )}
        </Button>
      </div>

      <div className="max-h-[50svh] rounded-[12px] border border-[#E5E7EB] overflow-y-auto">
        {linksMockData.map((link, idx) => (
          <div
            key={idx}
            className={`py-2 sm:py-3 px-2 sm:px-4 first:rounded-t-[12px] last:rounded-b-[12px] flex items-center justify-between border-b border-b-white last:border-b-0 ${
              idx % 2 === 0 ? "bg-[#F6FCFF]" : "bg-[#FFEDFC99]"
            }`}
          >
            <span className="text-xs sm:text-sm truncate mr-2">{link}</span>
            <button
              onClick={() => copySingleLink(link, idx)}
              className="p-1.5 rounded-md hover:bg-gray-100 transition-colors"
              title="Copy link"
            >
              {copiedIndex === idx ? (
                <Check className="w-4 h-4 text-green-600" />
              ) : (
                <CopyAllIconSVG className="w-4 h-4 text-gray-500 cursor-pointer" />
              )}
            </button>
          </div>
        ))}
      </div>
    </DialogContent>
  );
};

export default ScanResult;
