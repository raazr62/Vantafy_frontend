import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const HowItWorksAccordion = ({ how_it_works }) => {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full px-4 sm:px-6"
      defaultValue={how_it_works[0].id.toString()}
    >
      {how_it_works.map((faq, idx) => (
        <AccordionItem key={faq.id} value={faq.id.toString()}>
          <AccordionTrigger className={"text-lg sm:text-xl lg:text-2xl text-[#8400a4]"}>
            {idx + 1}. {faq.question}
          </AccordionTrigger>
          <AccordionContent className={"text-sm lg:text-base"}>
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default HowItWorksAccordion;
