import { handleApiError } from "@/utils/apiUtils";
import { useUpload } from "./useApi";
import { toast } from "react-hot-toast";

export const useUpdateAvatar = () => {
  return useUpload({
    endpoint: "/avatar-update/",
    invalidateQueries: ["user-profile"],
    onSuccess: (data) => {
      toast.success(data?.message || "Profile photo updated successfully");
    },
    onError: handleApiError,
  });
};
