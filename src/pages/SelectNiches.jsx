// import ConnectAccountsNiches from "@/components/OtherComponent/ConnectAccountsNiches";
import SelectYourNiches from "@/components/OtherComponent/SelectYourNiches";
import StageNamesAdd from "@/components/OtherComponent/StageNamesAdd";
import Logo from "@/shared/LandingShared/Logo";
import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const SelectNiches = () => {
  // const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    niches: [],
    stageNames: [],
  });
  const handleSaveNiches = (e) => {
    e.preventDefault();
    console.log(formData);
    toast.success("Successfully saved your niches");
    // navigate("/connect-accounts");
  };
  return (
    <form
      onSubmit={handleSaveNiches}
      className="h-screen flex flex-col p-5 gap-5 max-w-3xl mx-auto"
    >
      <div className="grow flex items-center flex-col gap-6 overflow-hidden">
        {/* <ConnectAccountsNiches /> */}
        <Logo variant="grayFull" className={"mx-auto shrink-0 sticky top-0"} />
        <div className="flex-1 flex flex-col gap-2 sm:gap-3 overflow-hidden w-full grow">
          <SelectYourNiches formData={formData} setFormData={setFormData} />
          <StageNamesAdd formData={formData} setFormData={setFormData} />
        </div>
      </div>

      <button
        type="submit"
        className="bg-sky-500 sm:text-lg lg:text-xl font-semibold rounded-full w-full text-white py-1.5 sm:py-2 lg:py-3 cursor-pointer"
      >
        Save
      </button>
    </form>
  );
};

export default SelectNiches;
