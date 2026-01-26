import { Camera } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";
import { useUpdateAvatar } from "@/hooks/useUpdateAvatar";

const ProfilePhoto = ({ profile_photo }) => {
  const fileInputRef = useRef(null);
  const { mutate: updateAvatar, isPending } = useUpdateAvatar();

  // Store the preview
  const [avatar, setAvatar] = useState(profile_photo || "");

  // Update avatar when profile_photo prop changes
  useEffect(() => {
    if (profile_photo) {
      setAvatar(profile_photo);
    }
  }, [profile_photo]);

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
    const formData = new FormData();
    formData.append("avatar", file);

    updateAvatar(formData, {
      onSuccess: () => {
        // Avatar will be updated via useEffect when profile data refreshes
      },
      onError: () => {
        // Revert to original avatar on error
        setAvatar(profile_photo || "");
      },
    });
  };

  // Generate image URL with fallback
  const getImageUrl = () => {
    if (!avatar) return "https://ui-avatars.com/api/?name=User&size=100";

    // If it's already a blob URL (from file upload preview)
    if (avatar.startsWith("blob:")) return avatar;

    // Otherwise prepend the base URL
    return import.meta.env.VITE_IMAGE_URL + avatar;
  };

  return (
    <div className="p-4 bg-[#F2F5F7] rounded-[12px] flex items-start gap-4">
      {/* Profile picture */}
      <div>
        <div
          className="w-[100px] h-[100px] relative cursor-pointer"
          onClick={triggerFileInput}
        >
          <img
            src={getImageUrl()}
            alt="Profile"
            className="w-full h-full object-cover rounded-xl"
            onError={(e) => {
              e.currentTarget.src =
                "https://ui-avatars.com/api/?name=User&size=100";
            }}
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity rounded-xl">
            <Camera size={40} className="text-white" />
          </div>
        </div>

        <input
          type="file"
          ref={fileInputRef}
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
          disabled={isPending}
        />
      </div>

      {/* Info + Upload button */}
      <div className="space-y-1">
        <p className="text-[#212B36] text-sm sm:text-base">Profile Photo</p>
        <p className="text-[#90A1B9] text-sm sm:text-base">
          JPG, PNG. Max size 5MB.
        </p>

        <button
          className="rounded-xl px-2 sm:px-2.5 py-1 sm:py-2 bg-[#35A9FF] text-white text-sm font-medium sm:font-semibold cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={triggerFileInput}
          disabled={isPending}
        >
          {isPending ? "Uploading..." : "Upload New Photo"}
        </button>
      </div>
    </div>
  );
};

export default ProfilePhoto;
