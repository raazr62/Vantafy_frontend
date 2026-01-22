import { usePost } from "./useApi";
import { toast } from "react-hot-toast";
import { handleApiError } from "../utils/apiUtils";

export const useAddSocialAccounts = (setIsConnected, onClose) => {
  return usePost({
    endpoint: "/add-social-accounts/",
    invalidateQueries: ["add-social-accounts"],
    onSuccess: () => {
      toast.success(`Your account connected successfully`);
      setIsConnected(true);
      onClose();
    },
    onError: handleApiError,
  });
};
