import { useUpload } from "./useApi";
import { toast } from "react-hot-toast";

export const useUpdateAvatar = () => {
  return useUpload({
    endpoint: "/avatar-update/",
    invalidateQueries: ["user-profile"],
    onSuccess: (data) => {
      toast.success(data?.message || "Profile photo updated successfully");
    },
    onError: (error) => {
      console.error("Avatar upload error:", error);
      toast.error(
        error?.response?.data?.message || "Failed to update profile photo"
      );
    },
  });
};
