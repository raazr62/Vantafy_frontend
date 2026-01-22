import { usePost } from "./useApi";
import { toast } from "react-hot-toast";
import { handleApiError } from "../utils/apiUtils";

export const useAddSocialAccounts = (setIsConnected, onClose) => {
  return usePost({
    endpoint: "/add-social-accounts/",
    invalidateQueries: ["add-social-accounts"],
    onSuccess: (data) => {
      toast.success(`Your account connected ${e.target.name.value}`);
      setIsConnected(true);
      onClose();
      return data;
    },
    onError: handleApiError,
  });
};
