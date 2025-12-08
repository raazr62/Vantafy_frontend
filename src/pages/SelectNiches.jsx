import ConnectAccountsNiches from "@/components/OtherComponent/ConnectAccountsNiches";
import SelectYourNiches from "@/components/OtherComponent/SelectYourNiches";
import StageNamesAdd from "@/components/OtherComponent/StageNamesAdd";
import React from "react";

const SelectNiches = () => {
  return (
    <div className="flex w-[95%] gap-6 h-[calc(100svh-40px)] mx-auto my-5">
      <ConnectAccountsNiches />
      <div className="flex-1 space-y-3">
        <SelectYourNiches />
        <StageNamesAdd />
      </div>
    </div>
  );
};

export default SelectNiches;
