import { Camera } from "lucide-react";
import { DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import CommonInputField from "@/shared/AuthShared/CommonInputField";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { useAddMember } from "@/hooks/useAddMember";

const AddMemberModal = ({ setActiveDialog }) => {
  const { mutate: addMember, isPending } = useAddMember();
  const fileInputRef = useRef(null);
  const [avatar, setAvatar] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
    },
  });

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }

    // Validate file size (e.g., max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast.error("Image size should be less than 5MB");
      return;
    }

    // Create preview
    const previewURL = URL.createObjectURL(file);
    setAvatar(previewURL);
    setImageFile(file);

    // Reset input to allow uploading same file again
    fileInputRef.current.value = "";
  };

  const onSubmit = (data) => {
    // Validate image is selected
    if (!imageFile) {
      toast.error("Please upload a profile picture");
      return;
    }

    // Create FormData to send file and name
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("profile_image", imageFile); // Backend expects 'profile_image'

    // Call the API
    addMember(formData, {
      onSuccess: () => {
        // Reset form and clear states
        reset();
        setAvatar(null);
        setImageFile(null);
        setActiveDialog(false);
      },
    });
  };

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className={"border-b border-b-[#E5E7EB] pb-3"}>
          Add New Member
        </DialogTitle>
      </DialogHeader>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="max-h-[90svh] mt-3 rounded-[12px] overflow-y-auto">
          {/* Image Upload */}
          <div className="p-4 rounded-[12px] flex flex-col items-center justify-center gap-4">
            {/* Profile picture */}
            <div>
              <div
                className="w-[120px] h-[120px] relative cursor-pointer border-4 border-[E2E8F0] rounded-full overflow-hidden bg-gray-100"
                onClick={triggerFileInput}
              >
                {avatar ? (
                  <img
                    src={avatar}
                    alt="Profile Preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <Camera className="w-10 h-10" />
                  </div>
                )}
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <Camera className="text-white text-base sm:text-xl" />
                </div>
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
                type="button"
                className="rounded-xl text-sm sm:text-base font-medium cursor-pointer flex items-center gap-2 text-primary py-2 sm:py-3 px-2 sm:px-6 border-2 border-primary hover:bg-primary/5 transition-colors"
                onClick={triggerFileInput}
              >
                <Camera className="text-primary text-base sm:text-xl" />
                Upload New Photo
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <CommonInputField
              label={"Full Name"}
              labelClassName={"text-base"}
              className={"px-6 font-semibold"}
              placeholder="Enter member name"
              name="name"
              register={register}
              rules={{
                required: "Name is required",
                minLength: {
                  value: 2,
                  message: "Name must be at least 2 characters",
                },
              }}
              error={errors.name}
            />

            <div className="flex items-center sm:justify-end gap-3">
              <Button
                type="button"
                onClick={() => setActiveDialog(false)}
                variant={"outline"}
                className={"flex-1 sm:grow-0"}
                disabled={isPending}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant={"formSubmit"}
                className={"flex-1 sm:grow-0"}
                disabled={isPending}
              >
                {isPending ? "Saving..." : "Save"}
              </Button>
            </div>
          </div>
        </div>
      </form>
    </DialogContent>
  );
};

export default AddMemberModal;
