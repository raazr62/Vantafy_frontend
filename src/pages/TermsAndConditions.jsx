import React from "react";
import CommonContainer from "@/shared/LandingShared/CommonContainer";
import CommonTitle from "@/shared/LandingShared/CommonTitle";
import { usePage } from "@/hooks/usePage";
import { Loader2 } from "lucide-react";

const TermsAndConditions = () => {
  const { data, isLoading, isError } = usePage("terms_and_conditions");

  const pageData = Array.isArray(data?.data)
    ? data.data.find((p) => p.type === "terms_and_conditions") || data.data[0]
    : data?.data;

  return (
    <CommonContainer className="py-12 sm:py-16 min-h-[70vh]">
      <CommonTitle title={pageData?.title || "Terms & Conditions"} />

      <div className="mt-8 max-w-4xl mx-auto bg-white/80 backdrop-blur-md rounded-2xl p-6 sm:p-10 border border-[#EFE6FD] shadow-sm">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-16 gap-3 text-muted-foreground">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
            <p className="text-sm">Loading Terms & Conditions...</p>
          </div>
        ) : isError || !pageData ? (
          <div className="text-center py-12 text-gray-500">
            <p className="text-lg font-medium text-red-500">
              Unable to load Terms & Conditions.
            </p>
            <p className="text-sm mt-1">Please try again later.</p>
          </div>
        ) : (
          <div className="prose prose-slate max-w-none space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
            {pageData.content ? (
              pageData.content.includes("<") ? (
                <div
                  dangerouslySetInnerHTML={{ __html: pageData.content }}
                  className="space-y-4"
                />
              ) : (
                pageData.content.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="whitespace-pre-line">
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
    </CommonContainer>
  );
};

export default TermsAndConditions;
