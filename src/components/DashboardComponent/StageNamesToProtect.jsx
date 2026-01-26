import React from "react";
import toast from "react-hot-toast";
import { FaRegTrashAlt } from "react-icons/fa";
import { useGetUserStageNames } from "@/hooks/useGetUserStageNames";
import useAddStageName from "@/hooks/useAddStageName";
import useDeleteUserStageName from "@/hooks/useDeleteUserStageName";
import Swal from "sweetalert2";

const StageNamesToProtect = () => {
  const { data } = useGetUserStageNames();
  const { mutate: deleteStageName } = useDeleteUserStageName();
  const { mutate: addStageName } = useAddStageName();

  const handleSubmit = (e) => {
    e.preventDefault();
    const stageName = e.target.stageName.value;

    if (!stageName) {
      toast.error("Stage name required");
      return;
    }

    addStageName({ name: stageName });
    e.target.reset();
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This stage name will be removed permanently.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, remove",
      cancelButtonText: "No, cancel",
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#6b7280",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteStageName(id);
      }
    });
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
          className="bg-gray-100 w-full py-2 sm:py-2.5 px-4 rounded-xl outline-none border border-transparent focus:border-sky-500"
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
      {data?.data && data.data.length > 0 && (
        <div className="p-2 sm:p-6 border border-[#BCC6C9] rounded-xl space-y-2 grow min-h-0 overflow-y-auto">
          {/* Details */}
          {data.data.map((stageNameData) => (
            <div
              key={stageNameData.id}
              className="bg-[#F9F9F9] py-3 sm:py-4.5 px-4 border border-[#A8B2B5] rounded-xl"
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3 text-xs sm:text-sm">
                  <p className="font-semibold">
                    {stageNameData.name}{" "}
                    <span className="rounded-full px-2.5 py-1 font-medium bg-[linear-gradient(90deg,#E27CE9_0%,#B099F3_52.4%,#33B1FE_100%)] text-white">
                      Active
                    </span>
                  </p>
                </div>
                <FaRegTrashAlt
                  onClick={() => handleDelete(stageNameData.id)}
                  color="red"
                  className="cursor-pointer"
                  size={18}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StageNamesToProtect;
