import React, { useState, forwardRef } from "react";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { CopyAllIconSVG } from "../SVG/DashboardLayoutSVG";
import { Check } from "lucide-react";
import { useGetDelistedLinks } from "@/hooks/useGetDelistedLinks";

const ListOfDelistedLinksModal = forwardRef(({ selectedMemberID }, ref) => {
  const [copiedAll, setCopiedAll] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const { data, isLoading, isError } = useGetDelistedLinks(selectedMemberID);
  const delistedLinksData = data?.data;

  const copyAllLinks = async () => {
    if (!delistedLinksData || delistedLinksData.length === 0) return;

    try {
      const allLinks = delistedLinksData.map((item) => item.link).join("\n");
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
            Total: {isLoading ? "..." : delistedLinksData?.length || 0} links
          </DialogDescription>
          <Button
            onClick={copyAllLinks}
            className="text-xs gap-2"
            variant="outline"
            size="sm"
            disabled={
              isLoading || !delistedLinksData || delistedLinksData.length === 0
            }
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

      <div className="max-h-[50svh] rounded-[12px] border border-[#E5E7EB] overflow-y-auto">
        {isLoading ? (
          // Loading State
          <div className="space-y-2 p-2 animate-pulse">
            {[1, 2, 3, 4, 5].map((item) => (
              <div
                key={item}
                className="py-3 px-4 rounded-lg bg-gray-100 flex items-center justify-between"
              >
                <div className="h-4 w-3/4 bg-gray-300/50 rounded"></div>
                <div className="w-8 h-8 bg-gray-300/50 rounded"></div>
              </div>
            ))}
          </div>
        ) : isError ? (
          // Error State
          <div className="flex flex-col items-center justify-center py-12 px-4">
            <svg
              className="w-16 h-16 text-red-400 mb-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <p className="text-lg font-semibold text-gray-800 mb-2">
              Failed to Load Links
            </p>
            <p className="text-sm text-gray-500 text-center">
              Unable to retrieve delisted links. Please try again later.
            </p>
          </div>
        ) : !delistedLinksData || delistedLinksData.length === 0 ? (
          // Empty State
          <div className="flex flex-col items-center justify-center py-12 px-4">
            <svg
              className="w-16 h-16 text-gray-400 mb-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <p className="text-lg font-semibold text-gray-800 mb-2">
              No Delisted Links Yet
            </p>
            <p className="text-sm text-gray-500 text-center">
              You don't have any delisted links at the moment.
            </p>
          </div>
        ) : (
          // Links List
          delistedLinksData.map((data, idx) => (
            <div
              key={idx}
              className={`py-2 sm:py-3 px-2 sm:px-4 first:rounded-t-[12px] last:rounded-b-[12px] flex items-center justify-between border-b border-b-white last:border-b-0 ${
                idx % 2 === 0 ? "bg-[#F6FCFF]" : "bg-[#FFEDFC99]"
              }`}
            >
              <span className="text-xs sm:text-sm truncate mr-0.5 sm:mr-2">
                {data?.link}
              </span>
              <button
                onClick={() => copySingleLink(data?.link, idx)}
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
          ))
        )}
      </div>
    </DialogContent>
  );
});

export default ListOfDelistedLinksModal;
