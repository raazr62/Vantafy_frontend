import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import CommonInputField from "@/shared/AuthShared/CommonInputField";
import { Camera } from "lucide-react";
import { Button } from "../ui/button";
import { useRef, useState } from "react";
import useUpdateMemberPhoto from "@/hooks/useUpdateMemberPhoto";

const EditProfileModal = ({ memberData, setActiveDialog }) => {
  const { mutate: updateMemberPhoto, isPending } = useUpdateMemberPhoto();
  const fileInputRef = useRef(null);

  // Store the preview and selected file
  const [avatar, setAvatar] = useState(
    import.meta.env.VITE_IMAGE_URL + memberData.profile_image,
  );
  const [selectedFile, setSelectedFile] = useState(null);

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Create preview
    const previewURL = URL.createObjectURL(file);
    setAvatar(previewURL);

    // Store the file for later upload
    setSelectedFile(file);

    // Reset input to allow uploading same file again
    fileInputRef.current.value = "";
  };

  const handleSaveChanges = () => {
    if (selectedFile) {
      // Upload the photo
      updateMemberPhoto(
        { id: memberData.id, file: selectedFile },
        {
          onSuccess: () => {
            setActiveDialog("");
          },
        },
      );
    } else {
      // No changes, just close
      setActiveDialog("");
    }
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
                <Camera className="text-primary text-base sm:text-xl" />
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
              className="rounded-xl text-sm sm:text-base font-medium cursor-pointer flex items-center gap-2 text-primary py-2 sm:py-3 px-2 sm:px-6 border-2 border-primary"
              onClick={triggerFileInput}
              disabled={isPending}
            >
              <Camera className="text-primary text-base sm:text-xl" /> Upload
              New Photo
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

          <p className="text-xs text-[#475569]">
            Links Attributed:{" "}
            <span className="text-primary font-bold">
              {memberData.links || 0}
            </span>
          </p>

          <div className="flex items-center sm:justify-end gap-3">
            <Button
              onClick={() => setActiveDialog("")}
              variant={"outline"}
              className={"flex-1 sm:grow-0"}
              disabled={isPending}
            >
              Cancel
            </Button>
            <Button
              onClick={handleSaveChanges}
              variant={"formSubmit"}
              className={"flex-1 sm:grow-0"}
              disabled={isPending}
            >
              {isPending ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Saving...
                </>
              ) : (
                "Save Changes"
              )}
            </Button>
          </div>
        </div>
      </div>
    </DialogContent>
  );
};

export default EditProfileModal;
