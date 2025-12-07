import ConnectAccountsNiches from "@/components/OtherComponent/ConnectAccountsNiches";
import SelectYourNiches from "@/components/OtherComponent/SelectYourNiches";
import React from "react";

const SelectNiches = () => {
  return (
    <div className="flex w-[95%] gap-6 h-[calc(100svh-40px)] mx-auto my-5">
      <ConnectAccountsNiches />
      <SelectYourNiches />
    </div>
  );
};

export default SelectNiches;
