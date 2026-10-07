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
    <div className="w-full h-full overflow-y-auto bg-white rounded-2xl p-4 sm:p-6 lg:p-8">
      {isLoading ? (
        <FAQSkeleton />
      ) : isError && (!faqs || faqs.length === 0) ? (
        <SectionError message="Failed to load FAQs." />
      ) : (
        <Accordion
          type="single"
          collapsible
          className="space-y-3 w-full"
          defaultValue={faqs[0]?.id?.toString()}
        >
          {faqs.map((faq, idx) => (
            <AccordionItem
              key={faq.id || idx}
              value={faq.id?.toString() || idx.toString()}
              className="border border-purple-100/80 rounded-2xl px-4 sm:px-6 transition-all duration-200 bg-white hover:border-purple-300 shadow-xs"
            >
              <AccordionTrigger className="hover:no-underline py-4">
                <p className="flex items-center gap-3 text-[#440054] font-semibold text-base sm:text-lg text-left">
                  <span className="text-[#e600a1] font-bold text-lg sm:text-xl">
                    {formatNumber(idx)}
                  </span>
                  <span>{faq.question}</span>
                </p>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-sm sm:text-base leading-relaxed pb-4 pt-1">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}
    </div>
  );
}
