import {
  AddMemberIconSVG,
  EditIconSVG,
} from "@/components/SVG/DashboardLayoutSVG";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import Swal from "sweetalert2";
import { Dialog } from "@/components/ui/dialog";
import EditProfileModal from "../EditProfileModal";
import AddMemberModal from "../AddMemberModal";
import useDeleteMember from "@/hooks/useDeleteMember";

const MyMembersAdd = ({
  setWhichMember,
  whichMember,
  membersData,
  isLoading,
  isError,
}) => {
  const { mutate: deleteMember, isPending } = useDeleteMember();
  const [activeDialog, setActiveDialog] = useState(null);

  // State for Input filed Toggle
  const [openAddMemberInput, setOpenAddMemberInput] = useState(false);

  const handleRemoveMember = (id) => {
    if (!id) {
      Swal.fire("Error", "Something went wrong", "error");
      return;
    }

    Swal.fire({
      title: "Are you sure?",
      text: "This member will be removed permanently.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, remove",
      cancelButtonText: "No, cancel",
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#6b7280",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteMember(id);
      }
    });
  };
  console.log(membersData);
  return (
    <div className="bg-white rounded-2xl p-4 w-full shadow-[0_0.785px_2.355px_0_rgba(0,0,0,0.10),0_0.785px_1.57px_-0.785px_rgba(0,0,0,0.10)] space-y-4 border border-[#E2E8F0] flex flex-col grow flex-1">
      {/* Header */}
      <div className="flex items-center justify-between w-full">
        <p className="text-lg sm:text-xl font-semibold">Members</p>
        <button
          onClick={() => setOpenAddMemberInput(true)}
          className="bg-[#3AB8FF] text-white p-1 px-2 sm:p-2 rounded-[6px] flex items-center gap-1 cursor-pointer text-sm sm:text-base"
        >
          <AddMemberIconSVG /> Add Member
        </button>
      </div>

      <Dialog
        open={!!openAddMemberInput}
        onOpenChange={() => setOpenAddMemberInput(false)}
      >
        <AddMemberModal
          setActiveDialog={setOpenAddMemberInput}
          isAddMember={true}
        />
      </Dialog>

      {/* {openAddMemberInput && (
        <form onSubmit={handleAddMember}>
          <CommonInputField
            type="text"
            name="name"
            placeholder={"Enter Name"}
            icon={AddMemberBlueIconSVG}
          />
          <div className="flex items-center gap-5 mt-2">
            <Button
              type={"button"}
              onClick={() => setOpenAddMemberInput(false)}
              variant={"outline"}
              className={"flex-1"}
            >
              Cancel
            </Button>
            <Button type={"submit"} variant={"secondary"} className={"flex-1"}>
              Submit
            </Button>
          </div>
        </form>
      )} */}

      {/* All the member List */}
      <div className="flex flex-col grow min-h-0 max-h-90 lg:max-h-full">
        {/* Sub Header */}
        <div className="bg-[#F8FAFC] grid grid-cols-8 border-b border-b-[#E2E8F0] py-3.5 px-5">
          <p className="col-span-5 text-xs font-bold">Member</p>
          <p className="text-xs font-bold">Links</p>
        </div>

        {/* Member Lists */}
        <div className="space-y-2 mt-2 grow min-h-0 overflow-y-auto">
          {isLoading ? (
            // Skeleton Loading State
            <>
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="py-2.5 sm:py-5 px-2 sm:px-4 border border-[#D9DADA] rounded-lg grid grid-cols-8 items-center animate-pulse"
                >
                  <div className="col-span-5 flex items-center gap-2">
                    <div className="w-7.5 h-7.5 sm:w-10.5 sm:h-10.5 rounded-full bg-gray-300/20"></div>
                    <div className="space-y-1">
                      <div className="h-4 w-24 bg-gray-300/20 rounded"></div>
                    </div>
                  </div>
                  <div className="h-4 w-8 bg-gray-300/20 rounded"></div>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-300/20 rounded-full"></div>
                </div>
              ))}
            </>
          ) : isError ? (
            // Error State
            <div className="flex flex-col items-center justify-center py-12 px-4">
              <div className="text-red-500 mb-3">
                <svg
                  className="w-16 h-16"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p className="text-lg font-semibold text-gray-800 mb-2">
                Failed to Load Members
              </p>
              <p className="text-sm text-gray-500 text-center">
                Unable to fetch member data. Please try again later.
              </p>
            </div>
          ) : !membersData || membersData.length < 1 ? (
            // Empty State
            <div className="flex flex-col items-center justify-center py-12 px-4">
              <div className="text-gray-400 mb-4">
                <svg
                  className="w-20 h-20"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <p className="text-lg font-semibold text-gray-800 mb-2">
                No Members Yet
              </p>
              <p className="text-sm text-gray-500 text-center mb-4">
                Get started by adding your first team member.
              </p>
              <button
                onClick={() => setOpenAddMemberInput(true)}
                className="bg-[#3AB8FF] text-white py-2 px-4 rounded-lg flex items-center gap-2 hover:bg-[#2da3e8] transition-colors"
              >
                <AddMemberIconSVG />
                Add Your First Member
              </button>
            </div>
          ) : (
            // Member List
            membersData?.map((memberData) => {
              const isActive = memberData.id === whichMember;
              return (
                <div
                  key={memberData.id}
                  onClick={() => setWhichMember(memberData.id)}
                  className={`py-2.5 sm:py-5 px-2 sm:px-4 border rounded-lg grid grid-cols-8 cursor-pointer items-center ${
                    isActive
                      ? "border-[#FFA9EF] shadow-[0_0_9px_0_rgba(255,92,225,0.30)]"
                      : "border-[#D9DADA]"
                  }`}
                >
                  {/* Image Name and Email */}
                  <div className="col-span-5 flex items-center gap-2">
                    {/* Image */}
                    <div className="relative w-fit">
                      <img
                        src={
                          import.meta.env.VITE_IMAGE_URL +
                          memberData.profile_image
                        }
                        alt={memberData.name}
                        className="w-7.5 h-7.5 sm:w-10.5 sm:h-10.5 rounded-full border sm:border-2 border-gray-300"
                      />
                      <p className="absolute w-3 h-3 rounded-full bg-green-500 right-0 bottom-0"></p>
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium sm:font-semibold text-xs sm:text-sm">
                        {memberData.name}
                      </p>
                    </div>
                  </div>

                  {/* Links */}
                  <p className="text-sm sm:text-base font-semibold sm:font-bold text-primary">
                    {memberData.links || 0}
                  </p>

                  {/* Delete Member */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemoveMember(memberData.id);
                    }}
                    disabled={isPending}
                    className={`w-6 h-6 sm:w-8 sm:h-8 bg-[#FF2B2B1A] flex items-center justify-center rounded-full ${
                      isPending
                        ? "opacity-50 cursor-not-allowed"
                        : "cursor-pointer hover:bg-[#FF2B2B30]"
                    } transition-all`}
                  >
                    {isPending ? (
                      <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-red-500 border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <IoMdClose color="red" className="text-sm sm:text-xl" />
                    )}
                  </button>

                  {/* Edit Icon */}
                  {isActive && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveDialog("Edit Profile");
                        }}
                        className="w-6 h-6 sm:w-8 sm:h-8 self-center rounded-lg bg-[#FFD4F7] flex items-center justify-center cursor-pointer hover:bg-[#FFB8F0] transition-colors"
                      >
                        <EditIconSVG className="text-sm sm:text-xl" />
                      </button>
                      <Dialog
                        open={!!activeDialog}
                        onOpenChange={() => setActiveDialog(null)}
                      >
                        {activeDialog === "Edit Profile" && (
                          <EditProfileModal
                            setActiveDialog={setActiveDialog}
                            memberData={memberData}
                          />
                        )}
                      </Dialog>
                    </>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default MyMembersAdd;
