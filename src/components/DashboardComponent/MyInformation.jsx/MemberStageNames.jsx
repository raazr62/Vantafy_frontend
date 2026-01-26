import { Button } from "@/components/ui/button";
import CommonInputField from "@/shared/AuthShared/CommonInputField";
import { PlusIcon } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";

const MemberStageNames = ({ memberData }) => {
  const [isAddActive, setIsAddActive] = useState(false);

  // Add Social Media
  const handleAddStageName = (e) => {
    e.preventDefault();
    const stageName = e.target.stageName.value;
    if (!stageName) {
      toast.error("Please provide a Stage Name");
      return;
    }
    toast.success("Stage Name Successfully added");
    setIsAddActive(false);
    e.target.reset();
  };
  return (
    <div className="bg-white rounded-2xl p-4 w-full border border-[#E2E8F0] shadow-[0_0.785px_2.355px_rgba(0,0,0,0.10)] flex flex-col min-h-60 lg:min-h-0 grow flex-1">
      <p className="font-semibold text-center">Stage Names To Protect</p>

      <button
        onClick={() => setIsAddActive(true)}
        className="text-xs font-medium text-center bg-[#E6ECEF] rounded-[6px] py-2 flex items-center justify-center my-2 w-full gap-1 cursor-pointer"
      >
        <PlusIcon size={14} /> Add Stage Name
      </button>
      {isAddActive && (
        <form onSubmit={handleAddStageName} className="mb-2">
          <CommonInputField
            type="text"
            name="stageName"
            placeholder={"Enter Stage Name"}
            className={"px-2 sm:px-4 sm:py-1.5 text-xs"}
          />
          <div className="flex items-center gap-5 mt-2">
            <Button
              type={"button"}
              onClick={() => setIsAddActive(false)}
              variant={"outline"}
              className={"flex-1 text-xs"}
            >
              Cancel
            </Button>
            <Button
              type={"submit"}
              variant={"secondary"}
              className={"flex-1 text-xs py-0.5"}
            >
              Submit
            </Button>
          </div>
        </form>
      )}

      <div className="space-y-2 grow overflow-y-auto px-2 max-h-80 lg:max-h-full">
        {memberData?.stageNames?.map((stageName, idx) => (
          <p
            key={idx}
            className="py-2 px-3 text-xs font-medium text-white bg-primary rounded-[6px] text-center"
          >
            {stageName}
          </p>
        ))}
      </div>
    </div>
  );
};

export default MemberStageNames;
