import { FAQMockData } from "@/lib/HomeMockData";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/LandingShared/accordion";
import CommonContainer from "@/shared/LandingShared/CommonContainer";
import CommonTitle from "@/shared/LandingShared/CommonTitle";
import React from "react";

const FAQ = () => {
  const formatNumber = (num) => (num < 9 ? `0${num + 1}` : `${num + 1}`);
  return (
    <CommonContainer>
      <CommonTitle title={"FAQ"} />
      {/* FAQS */}
      <Accordion
        type="single"
        collapsible
        className="w-full mt-8"
        defaultValue={FAQMockData[0].id.toString()}
      >
        {FAQMockData.map((faq, idx) => {
          return (
            <AccordionItem key={faq.id} value={faq.id.toString()}>
              <AccordionTrigger>
                <p className="flex items-start gap-3">
                  <span className="text-[#454F5B] text-3xl font-bold">
                    {formatNumber(idx)}
                  </span>{" "}
                  {faq.question}
                </p>
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </CommonContainer>
  );
};

export default FAQ;
