import React, { useState, forwardRef } from "react";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { CopyAllIconSVG } from "../SVG/DashboardLayoutSVG";
import { linksMockData } from "@/lib/DashboardMockData";
import { Check } from "lucide-react";

const ListOfDelistedLinksModal = forwardRef((ref) => {
  const [copiedAll, setCopiedAll] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);

  const copyAllLinks = async () => {
    try {
      const allLinks = linksMockData.join("\n");
      await navigator.clipboard.writeText(allLinks);
      setCopiedAll(true);
      setTimeout(() => setCopiedAll(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const copySingleLink = async (link, index) => {
    try {
      await navigator.clipboard.writeText(link);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 1500);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <DialogContent ref={ref}>
      <DialogHeader>
        <DialogTitle>List Of Delisted Links</DialogTitle>
        <div className="flex items-center justify-between mt-2">
          <DialogDescription>
            Total: {linksMockData.length} links
          </DialogDescription>
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
      </DialogHeader>

      <div className="max-h-[50svh] mt-3 rounded-[12px] border border-[#E5E7EB] overflow-y-auto">
        {linksMockData.map((link, idx) => (
          <div
            key={idx}
            className={`py-3 px-4 first:rounded-t-[12px] last:rounded-b-[12px] flex items-center justify-between border-b border-b-white last:border-b-0 ${
              idx % 2 === 0 ? "bg-[#F6FCFF]" : "bg-[#FFEDFC99]"
            }`}
          >
            <span className="text-sm truncate mr-2">{link}</span>
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
});

export default ListOfDelistedLinksModal;
