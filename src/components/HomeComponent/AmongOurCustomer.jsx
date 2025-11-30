import CommonTitle from "@/shared/LandingShared/CommonTitle";
import React from "react";
import AmongOurCustomerCarousel from "./AmongOurCustomerCarousel";

const AmongOurCustomer = () => {
  return (
    <div className="flex flex-col items-center mt-30 mb-20">
      <CommonTitle className="border-[#8133F1]" title={"Among our customer"} />
      <AmongOurCustomerCarousel />
    </div>
  );
};

export default AmongOurCustomer;
