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
    if (!avatar) return "https://i.pravatar.cc/150?img=33";

    // If it's already a blob URL (from file upload preview)
    if (avatar.startsWith("blob:")) return avatar;

    // If it's already an absolute http/https URL
    if (avatar.startsWith("http://") || avatar.startsWith("https://")) {
      return avatar;
    }

    // Otherwise prepend the base URL
    let baseUrl = import.meta.env.VITE_IMAGE_URL || "http://127.0.0.1:8000";
    if (typeof window !== "undefined" && (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1")) {
      baseUrl = "http://127.0.0.1:8000";
    }
    const cleanBaseUrl = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
    const cleanAvatar = avatar.startsWith("/") ? avatar : `/${avatar}`;
    return `${cleanBaseUrl}${cleanAvatar}`;
  };

  return (
    <div className="p-2.5 sm:p-3 bg-[#F2F5F7] rounded-[12px] flex items-center gap-3">
      {/* Profile picture */}
      <div>
        <div
          className="w-14 h-14 sm:w-16 sm:h-16 relative cursor-pointer shrink-0"
          onClick={triggerFileInput}
        >
          <img
            src={getImageUrl()}
            alt="Profile"
            className="w-full h-full object-cover rounded-xl"
            onError={(e) => {
              e.currentTarget.src = "https://i.pravatar.cc/150?img=33";
            }}
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity rounded-xl">
            <Camera size={24} className="text-white" />
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
      <div className="space-y-0.5">
        <p className="text-[#212B36] text-xs sm:text-sm font-semibold">Profile Photo</p>
        <p className="text-[#90A1B9] text-xs">
          JPG, PNG. Max size 5MB.
        </p>

        <button
          className="rounded-lg px-2 sm:px-2.5 py-1 bg-[#35A9FF] text-white text-xs font-medium cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed mt-1"
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
