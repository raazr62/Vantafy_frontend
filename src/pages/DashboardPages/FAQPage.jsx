import React from "react";
import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/LandingShared/accordion";
import { useLandingPage } from "@/hooks/useLandingPage";
import { FAQMockData } from "@/lib/HomeMockData";
import FAQSkeleton from "@/components/HomeComponent/FAQSkeleton";
import SectionError from "@/components/HomeComponent/SectionError";

export default function FAQPage() {
  const { data, isLoading, isError } = useLandingPage();
  const apiFaqs = data?.data?.faqs;
  const faqs = apiFaqs && apiFaqs.length > 0 ? apiFaqs : FAQMockData;

  const formatNumber = (num) => (num < 9 ? `0${num + 1}` : `${num + 1}`);

  return (
    <div className="w-full h-full overflow-y-auto bg-white rounded-2xl p-3 sm:p-5">
      {isLoading ? (
        <FAQSkeleton />
      ) : isError && (!faqs || faqs.length === 0) ? (
        <SectionError message="Failed to load FAQs." />
      ) : (
        <Accordion
          type="single"
          collapsible
          className="space-y-2 sm:space-y-2.5 w-full"
          defaultValue={faqs[0]?.id?.toString()}
        >
          {faqs.map((faq, idx) => (
            <AccordionItem
              key={faq.id || idx}
              value={faq.id?.toString() || idx.toString()}
              className="border border-purple-100/80 rounded-xl px-3.5 sm:px-4 transition-all duration-200 bg-white hover:border-purple-300 shadow-2xs"
            >
              <AccordionTrigger className="hover:no-underline py-2.5 sm:py-3">
                <p className="flex items-center gap-2.5 sm:gap-3 text-[#440054] font-semibold text-sm sm:text-base text-left">
                  <span className="text-[#e600a1] font-bold text-base sm:text-lg">
                    {formatNumber(idx)}
                  </span>
                  <span>{faq.question}</span>
                </p>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-xs sm:text-sm leading-relaxed pb-3 pt-0.5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}
    </div>
  );
}
