import {
  AddMemberIconSVG,
  EditIconSVG,
  EmailIconSVG,
} from "@/components/SVG/DashboardLayoutSVG";
import { Button } from "@/components/ui/button";
import { memberMockData } from "@/lib/DashboardMockData";
import CommonInputField from "@/shared/AuthShared/CommonInputField";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { IoMdClose } from "react-icons/io";
import Swal from "sweetalert2";
import { Dialog } from "@/components/ui/dialog";
import EditProfileModal from "../EditProfileModal";

const MyMembersAdd = ({ setWhichMember, whichMember }) => {
  const [activeDialog, setActiveDialog] = useState(null);
  // All Members List
  const [membersData, setMembersData] = useState(memberMockData);

  // State for Input filed Toggle
  const [openAddMemberInput, setOpenAddMemberInput] = useState(false);

  // Add Member
  const handleAddMember = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    // Basic email validation
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }

    toast.success(
      "Email has been sent to your member. Please ask them to check their inbox and follow the provided link to join the agency."
    );
    setOpenAddMemberInput(false);
  };

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
        const filterdMembers = membersData.filter((member) => member.id !== id);
        setMembersData(filterdMembers);
        Swal.fire("Removed!", "Member has been removed.", "success");
      }
    });
  };

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

      {openAddMemberInput && (
        <form onSubmit={handleAddMember}>
          <CommonInputField
            type="email"
            name="email"
            placeholder={"Enter Email Address"}
            icon={EmailIconSVG}
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
      )}

      {/* All the member List */}
      <div className="flex flex-col grow min-h-0 max-h-90 lg:max-h-full">
        {/* Sub Header */}
        <div className="bg-[#F8FAFC] grid grid-cols-8 border-b border-b-[#E2E8F0] py-3.5 px-5">
          <p className="col-span-5 text-xs font-bold">Member</p>
          <p className="text-xs font-bold">Links</p>
        </div>

        {/* Member Lists */}
        <div className="space-y-2 mt-2 grow min-h-0 overflow-y-auto">
          {membersData.map((memberData) => {
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
                      src={memberData.image}
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
                  {memberData.links}
                </p>

                {/* Delete Member */}
                <button
                  onClick={() => handleRemoveMember(memberData.id)}
                  className="w-6 h-6 sm:w-8 sm:h-8 bg-[#FF2B2B1A] flex items-center justify-center rounded-full cursor-pointer"
                >
                  <IoMdClose color="red" className="text-sm sm:text-xl" />
                </button>

                {/* Edit Icon */}
                {isActive && (
                  <>
                    <button
                      onClick={() => setActiveDialog("Edit Profile")}
                      className="w-6 h-6 sm:w-8 sm:h-8 self-center rounded-lg bg-[#FFD4F7] flex items-center justify-center cursor-pointer"
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
          })}
        </div>
      </div>
    </div>
  );
};

export default MyMembersAdd;
