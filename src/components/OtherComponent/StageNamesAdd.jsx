import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaRegTrashAlt } from "react-icons/fa";

const StageNamesAdd = () => {
  const [stageNames, setStageNames] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const stageName = e.target.stageName.value;
    if (!stageName) {
      toast.error("Please Select a stage name");
    } else {
      setStageNames([...stageNames, stageName]);
      e.target.reset();
    }
  };

  const handleRemoveStageName = (index) => {
    const removedStageName = stageNames[index];
    const currentStageNames = stageNames.filter(
      (name) => removedStageName !== name
    );
    setStageNames([...currentStageNames]);
  };

  return (
    <div className="px-6 py-3 rounded-[12px] border border-[#EFE6FD] grow h-full max-h-[220px] overflow-y-auto">
      <p className="text-xl font-medium">Stage Names to Protect</p>
      <form
        onSubmit={handleSubmit}
        className="space-y-3 mt-2"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex gap-4">
          <input
            type="text"
            name="stageName"
            placeholder="Enter Stage Name"
            className="bg-gray-100 w-full py-2.5 px-4 rounded-xl outline-none border border-transparent focus:border-sky-500"
          />
          <input
            type="text"
            name="description"
            placeholder="Enter description"
            className="bg-gray-100 w-full py-2.5 px-4 rounded-xl outline-none border border-transparent focus:border-sky-500"
          />
        </div>
        <br />
        <button
          type="submit"
          className="bg-sky-500 text-white rounded-xl px-9.5 py-3 cursor-pointer font-semibold"
        >
          Add
        </button>
      </form>
      <div className="flex flex-wrap items-center gap-3 mt-2">
        {stageNames.map((name, idx) => (
          <p
            key={idx}
            className="flex items-center gap-2 px-6 py-3 bg-[#D9E4E8] text-xs font-medium w-fit rounded-xl"
          >
            {name}{" "}
            <FaRegTrashAlt
              onClick={() => handleRemoveStageName(idx)}
              size={16}
              className="text-red-500 cursor-pointer"
            />
          </p>
        ))}
      </div>
    </div>
  );
};

export default StageNamesAdd;
