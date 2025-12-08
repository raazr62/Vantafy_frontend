import ConnectAccountsNiches from "@/components/OtherComponent/ConnectAccountsNiches";
import SelectYourNiches from "@/components/OtherComponent/SelectYourNiches";
import StageNamesAdd from "@/components/OtherComponent/StageNamesAdd";
import React from "react";

const SelectNiches = () => {
  return (
    <div className="h-screen flex flex-col p-5 gap-5">
      <div className="grow flex gap-6 overflow-y-auto">
        <ConnectAccountsNiches />
        <div className="flex-1 flex flex-col gap-3">
          <SelectYourNiches />
          <StageNamesAdd />
        </div>
      </div>
      <button className="bg-sky-500 text-xl font-semibold rounded-full w-full text-white py-3">
        Save
      </button>
    </div>
  );
};

export default SelectNiches;
