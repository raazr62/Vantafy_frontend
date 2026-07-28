import CommonTitle from "@/shared/LandingShared/CommonTitle";
import React from "react";
import AmongOurCustomerCarousel from "./AmongOurCustomerCarousel";
import CommonContainer from "@/shared/LandingShared/CommonContainer";
import AmongOurCustomerSkeleton from "./AmongOurCustomerSkeleton";
import SectionError from "./SectionError";

const AmongOurCustomer = ({ customers, isLoading, isError }) => {
  return (
    <CommonContainer className={"w-full"}>
      <CommonTitle className="border-[#8133F1]" title={"Among Our Customers"} />
      {isLoading ? (
        <AmongOurCustomerSkeleton />
      ) : isError ? (
        <SectionError message="Failed to load customers." />
      ) : (
        <AmongOurCustomerCarousel customers={customers} />
      )}
    </CommonContainer>
  );
};

export default AmongOurCustomer;
