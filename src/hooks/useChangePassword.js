import { usePost } from "./useApi";
import { toast } from "react-hot-toast";
import { handleApiError } from "../utils/apiUtils";

export const useChangePassword = (reset) => {
  return usePost({
    endpoint: "/change-password/",
    onSuccess: () => {
      toast.success("Password updated successfully!");
      reset();
    },
    onError: handleApiError,
  });
};
