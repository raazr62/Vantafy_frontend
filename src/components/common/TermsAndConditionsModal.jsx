import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { usePage } from "@/hooks/usePage";
import { Loader2, FileText, CheckCircle } from "lucide-react";

const TermsAndConditionsModal = ({
  open,
  onOpenChange,
  onAccept,
  pageType = "terms_and_conditions",
  title,
}) => {
  const { data, isLoading, isError } = usePage(pageType, {
    enabled: open,
  });

  const pageData = Array.isArray(data?.data)
    ? data.data.find((p) => p.type === pageType) || data.data[0]
    : data?.data;

  const defaultTitle =
    pageType === "privacy_policy" ? "Privacy Policy" : "Terms & Conditions";

  const displayTitle = pageData?.title || title || defaultTitle;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-5xl md:max-w-6xl w-[95vw] max-h-[92vh] flex flex-col p-5 sm:p-8 rounded-2xl bg-white shadow-2xl border border-[#EFE6FD] z-[100]">
        <DialogHeader className="border-b border-gray-100 pb-4">
          <div className="flex items-center gap-2.5 text-[#9654F4]">
            <FileText className="w-6 h-6" />
            <DialogTitle className="text-xl sm:text-2xl font-bold text-gray-900">
              {displayTitle}
            </DialogTitle>
          </div>
          <DialogDescription className="text-xs sm:text-sm text-gray-500 mt-1">
            Please review our {displayTitle.toLowerCase()} below.
          </DialogDescription>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto my-4 pr-3 space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed max-h-[72vh] custom-scrollbar">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-20 gap-3 text-gray-400">
              <Loader2 className="w-9 h-9 animate-spin text-[#9654F4]" />
              <p className="text-base font-medium">Loading {displayTitle}...</p>
            </div>
          ) : isError || !pageData ? (
            <div className="text-center py-16 text-gray-500">
              <p className="text-lg font-medium text-red-500">
                Unable to load {displayTitle}.
              </p>
              <p className="text-sm mt-1">Please try again later.</p>
            </div>
          ) : (
            <div className="prose prose-slate max-w-none text-sm sm:text-base leading-relaxed text-gray-800">
              {pageData.content ? (
                pageData.content.includes("<") ? (
                  <div
                    dangerouslySetInnerHTML={{ __html: pageData.content }}
                    className="space-y-4"
                  />
                ) : (
                  pageData.content.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="whitespace-pre-line mb-4">
                      {paragraph}
                    </p>
                  ))
                )
              ) : (
                <p className="text-gray-500 italic">No content available.</p>
              )}
            </div>
          )}
        </div>

        <DialogFooter className="border-t border-gray-100 pt-3 flex flex-row items-center justify-end gap-2 sm:gap-3">
          <Button
            type="button"
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="px-4 py-2 text-xs sm:text-sm rounded-lg border-gray-200 hover:bg-gray-50"
          >
            Close
          </Button>
          {onAccept && (
            <Button
              type="button"
              onClick={() => {
                onAccept();
                onOpenChange(false);
              }}
              className="bg-[#9654F4] hover:bg-[#8133F1] text-white px-4 py-2 text-xs sm:text-sm rounded-lg flex items-center gap-1.5"
            >
              <CheckCircle className="w-4 h-4" />
              I Agree & Accept
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TermsAndConditionsModal;
