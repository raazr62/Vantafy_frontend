import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HowItWorksMockData } from "@/lib/HomeMockData";

const HowItWorksAccordion = () => {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue={HowItWorksMockData[0].id.toString()}
    >
      {HowItWorksMockData.map((faq, idx) => (
        <AccordionItem key={faq.id} value={faq.id.toString()}>
          <AccordionTrigger>
            {idx + 1}. {faq.question}
          </AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default HowItWorksAccordion;
