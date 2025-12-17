import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import CommonInputField from "@/shared/AuthShared/CommonInputField";
import { Camera } from "lucide-react";
import { Button } from "../ui/button";
import { useRef, useState } from "react";
import toast from "react-hot-toast";

const EditProfileModal = ({ memberData, setActiveDialog }) => {
  const fileInputRef = useRef(null);

  // Store the preview
  const [avatar, setAvatar] = useState(memberData.image);

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Create preview
    const previewURL = URL.createObjectURL(file);
    setAvatar(previewURL);

    // Upload to server (your mutation)
    handleProfileUpload(file);

    // Reset input to allow uploading same file again
    fileInputRef.current.value = "";
  };

  const handleProfileUpload = (file) => {
    console.log("Uploading file:", file);
    // Your upload logic goes here...
    toast.success("Photo uploaded successfully");
  };

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className={"border-b border-b-[#E5E7EB] pb-3"}>
          Edit Member Details
        </DialogTitle>
      </DialogHeader>

      <div className="max-h-[90svh] mt-3 rounded-[12px] overflow-y-auto">
        {/* Image Upload */}
        <div className="p-4 rounded-[12px] flex flex-col items-center justify-center gap-4">
          {/* Profile picture */}
          <div>
            <div
              className="w-[120px] h-[120px] relative cursor-pointer border-4 border-[E2E8F0] rounded-full"
              onClick={triggerFileInput}
            >
              <img
                src={avatar}
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity rounded-full">
                <Camera size={40} className="text-white" />
              </div>
              <div className="w-6 h-6 bg-green-500 absolute bottom-0 right-0 rounded-full border-4 border-white"></div>
            </div>

            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>

          {/* Info + Upload button */}
          <div className="space-y-1">
            <button
              className="rounded-xl font-medium cursor-pointer flex items-center gap-2 text-primary py-3 px-6 border-2 border-primary"
              onClick={triggerFileInput}
            >
              <Camera size={20} className="text-primary" /> Upload New Photo
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <CommonInputField
            label={"Full Name"}
            labelClassName={"text-base"}
            value={memberData.name}
            className={"px-6 font-semibold"}
            readOnly
          />
          <CommonInputField
            label={"Email"}
            labelClassName={"text-base"}
            value={memberData.email}
            className={"px-6 font-semibold"}
            readOnly
          />

          <p className="text-xs text-[#475569]">
            Links Attributed:{" "}
            <span className="text-primary font-bold">{memberData.links}</span>
          </p>

          <div className="flex items-center justify-end gap-3">
            <Button onClick={() => setActiveDialog("")} variant={"outline"}>
              Cancel
            </Button>
            <Button
              onClick={() => setActiveDialog("")}
              variant={"formSubmit"}
              className={"w-auto"}
            >
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </DialogContent>
  );
};

export default EditProfileModal;
