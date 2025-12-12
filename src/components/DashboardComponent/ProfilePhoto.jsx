import { Camera } from "lucide-react";
import React, { useRef, useState } from "react";

const ProfilePhoto = () => {
  const fileInputRef = useRef(null);

  // Store the preview
  const [avatar, setAvatar] = useState("https://i.pravatar.cc/");

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
            src={avatar}
            alt="Profile"
            className="w-full h-full object-cover rounded-xl"
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
        />
      </div>

      {/* Info + Upload button */}
      <div className="space-y-1">
        <p className="text-[#212B36]">Profile Photo</p>
        <p className="text-[#90A1B9]">JPG, PNG. Max size 5MB.</p>

        <button
          className="rounded-xl px-2.5 py-2 bg-[#35A9FF] text-white text-sm font-semibold cursor-pointer"
          onClick={triggerFileInput}
        >
          Upload New Photo
        </button>
      </div>
    </div>
  );
};

export default ProfilePhoto;
