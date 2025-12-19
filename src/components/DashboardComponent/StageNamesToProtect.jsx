import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaRegTrashAlt } from "react-icons/fa";
import { AlertIconSVG } from "../SVG/DashboardLayoutSVG";

const StageNamesToProtect = () => {
  const [stageNames, setStageNames] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const stageName = e.target.stageName.value;

    if (!stageName) {
      toast.error("Stage name required");
      return;
    }

    const isCommonName = Math.random() < 0.3;

    setStageNames([
      {
        id: stageNames.length + 1,
        stageName,
        status: "Active",
        isCommonName,
      },
      ...stageNames,
    ]);
    e.target.reset();
  };

  const handleDelete = (id) => {
    const filterData = stageNames.filter((stageName) => stageName.id !== id);
    setStageNames(filterData);
  };

  return (
    <div className="bg-white p-2 sm:p-6 space-y-2 sm:space-y-4 min-h-0 flex flex-col rounded-b-[12px]">
      {/* Stage Names */}
      <form
        onSubmit={handleSubmit}
        className="p-2 sm:p-6 border border-[#BCC6C9] rounded-xl space-y-2"
        onClick={(e) => e.stopPropagation()}
      >
        <input
          type="text"
          name="stageName"
          placeholder="Enter Stage Name"
          className="bg-gray-100 w-full py-2 sm:py-2.5 px-4 rounded-xl outline-none border border-transparent focus:border-sky-500 text-sm sm:text-base"
        />
        <br />
        <button
          type="submit"
          className="bg-sky-500 text-white rounded-xl px-6 sm:px-9.5 py-1.5 sm:py-3 cursor-pointer text-sm sm:text-base font-semibold"
        >
          Add
        </button>
      </form>

      {/* Added Stage names */}
      {stageNames.length > 0 && (
        <div className="p-2 sm:p-6 border border-[#BCC6C9] rounded-xl space-y-2 grow min-h-0 overflow-y-auto">
          {/* Details */}
          {stageNames.map((stageNameData, idx) => (
            <div
              key={idx}
              className=" bg-[#F9F9F9] py-3 sm:py-4.5 px-4 border border-[#A8B2B5] rounded-xl"
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3 text-xs sm:text-sm">
                  <p className="font-semibold">{stageNameData.stageName}</p>{" "}
                  <span
                    className={`rounded-full px-2.5 py-1 font-medium ${
                      stageNameData.status === "Active"
                        ? "bg-[linear-gradient(90deg,#E27CE9_0%,#B099F3_52.4%,#33B1FE_100%)] text-white"
                        : "bg-[#E9EEF0]"
                    }`}
                  >
                    {stageNameData.status}
                  </span>
                </div>
                <FaRegTrashAlt
                  onClick={() => handleDelete(stageNameData.id)}
                  color="red"
                  className="cursor-pointer"
                  size={18}
                />
              </div>

              {stageNameData.isCommonName && (
                <p className="py-1 px-2 bg-[#E6F4FF] rounded-lg text-xs text-[#0293FF] flex items-center gap-2 mt-2">
                  <AlertIconSVG className="w-4 h-4 text-[#0293FF]" /> This name
                  seems quite general
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StageNamesToProtect;
