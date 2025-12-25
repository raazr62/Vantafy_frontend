import CommonTitle from "@/shared/LandingShared/CommonTitle";
import React from "react";
import AmongOurCustomerCarousel from "./AmongOurCustomerCarousel";
import CommonContainer from "@/shared/LandingShared/CommonContainer";

const AmongOurCustomer = () => {
  return (
    <CommonContainer className={"w-full"}>
      <CommonTitle className="border-[#8133F1]" title={"Among our customer"} />
      <AmongOurCustomerCarousel />
    </CommonContainer>
  );
};

export default AmongOurCustomer;
