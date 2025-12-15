// import ConnectAccountsNiches from "@/components/OtherComponent/ConnectAccountsNiches";
import SelectYourNiches from "@/components/OtherComponent/SelectYourNiches";
import StageNamesAdd from "@/components/OtherComponent/StageNamesAdd";
import Logo from "@/shared/LandingShared/Logo";
import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const SelectNiches = () => {
  const navigate = useNavigate();
  const handleSaveNiches = () => {
    toast.success("Successfully saved your niches");
    navigate("/connect-accounts");
  };
  return (
    <div className="h-screen flex flex-col p-5 gap-5 max-w-3xl mx-auto">
      <div className="grow flex items-center flex-col gap-6 overflow-hidden">
        {/* <ConnectAccountsNiches /> */}
        <Logo variant="grayFull" className={"mx-auto shrink-0 sticky top-0"} />
        <div className="flex-1 flex flex-col gap-3 overflow-hidden">
          <SelectYourNiches />
          <StageNamesAdd />
        </div>
      </div>

      <button
        onClick={handleSaveNiches}
        className="bg-sky-500 text-xl font-semibold rounded-full w-full text-white py-3 cursor-pointer"
      >
        Save
      </button>
    </div>
  );
};

export default SelectNiches;
