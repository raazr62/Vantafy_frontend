import { FAQMockData } from "@/lib/HomeMockData";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/LandingShared/accordion";
import CommonContainer from "@/shared/LandingShared/CommonContainer";
import CommonTitle from "@/shared/LandingShared/CommonTitle";
import React from "react";
import { LocalImages } from "../AllPhotos/HomeLocalImages";

const FAQ = () => {
  const formatNumber = (num) => (num < 9 ? `0${num + 1}` : `${num + 1}`);
  return (
    <CommonContainer id={"faq"} className={"mb-10 sm:mb-20 lg:mb-30"}>
      <CommonTitle title={"FAQ"} />
      {/* FAQS */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 mt-8">
        <Accordion
          type="single"
          collapsible
          className="w-full flex-5/7"
          defaultValue={FAQMockData[0].id.toString()}
        >
          {FAQMockData.map((faq, idx) => {
            return (
              <AccordionItem key={faq.id} value={faq.id.toString()}>
                <AccordionTrigger>
                  <p className="flex items-start gap-3">
                    <span className="text-[#454F5B] text-xl sm:text-2xl lg:text-3xl font-bold">
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

        <div className="relative flex-2/7">
          <motion.img
            animate={{
              rotate: 360,
              transition: {
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            src={LocalImages.FaqSpinner}
            className="lg:max-w-full lg:max-h-full max-w-[300px] max-h-[300px]"
            alt="Faq Image Spinner"
          />
          <p className="text-xl sm:text-2xl lg:text-[28px] font-bold text-white bg-linear-to-l from-[#EC70DA] to-[#51AEFA] rounded-full w-18 h-18 sm:w-20 sm:h-20 lg:w-25 lg:h-25 flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            FAQ
          </p>
        </div>
      </div>
    </CommonContainer>
  );
};

export default FAQ;
