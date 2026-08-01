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

const TermsAndConditionsModal = ({ open, onOpenChange, onAccept }) => {
  const { data, isLoading, isError } = usePage("terms_and_conditions", {
    enabled: open,
  });

  const pageData = Array.isArray(data?.data)
    ? data.data.find((p) => p.type === "terms_and_conditions") || data.data[0]
    : data?.data;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl w-[95vw] max-h-[85vh] flex flex-col p-4 sm:p-6 rounded-2xl bg-white shadow-xl border border-[#EFE6FD]">
        <DialogHeader className="border-b border-gray-100 pb-3">
          <div className="flex items-center gap-2 text-[#9654F4]">
            <FileText className="w-5 h-5" />
            <DialogTitle className="text-lg sm:text-xl font-bold text-gray-900">
              {pageData?.title || "Terms & Conditions"}
            </DialogTitle>
          </div>
          <DialogDescription className="text-xs text-gray-500 mt-1">
            Please review our terms and conditions below.
          </DialogDescription>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto my-3 pr-2 space-y-4 text-sm text-gray-700 leading-relaxed max-h-[55vh]">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-16 gap-3 text-gray-400">
              <Loader2 className="w-8 h-8 animate-spin text-[#9654F4]" />
              <p className="text-sm">Loading Terms & Conditions...</p>
            </div>
          ) : isError || !pageData ? (
            <div className="text-center py-12 text-gray-500">
              <p className="text-base font-medium text-red-500">
                Unable to load Terms & Conditions.
              </p>
              <p className="text-xs mt-1">Please try again later.</p>
            </div>
          ) : (
            <div className="prose prose-slate max-w-none text-sm leading-relaxed">
              {pageData.content ? (
                pageData.content.includes("<") ? (
                  <div
                    dangerouslySetInnerHTML={{ __html: pageData.content }}
                    className="space-y-3"
                  />
                ) : (
                  pageData.content.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="whitespace-pre-line mb-3">
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
