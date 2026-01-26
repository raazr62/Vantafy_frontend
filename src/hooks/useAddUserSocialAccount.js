import { useQueryClient } from "@tanstack/react-query";
import { usePost } from "./useApi";
import { handleApiError } from "@/utils/apiUtils";
import toast from "react-hot-toast";

const useAddUserSocialAccount = (setIsAddActive) => {
  const queryClient = useQueryClient();

  return usePost({
    endpoint: `/add-social-accounts/`,
    invalidateQueries: ["add-social-accounts"],
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["get-social-accounts"],
      });
      setIsAddActive(false);
      toast.success("Social account successfully added");
    },
    onError: handleApiError,
  });
};

export default useAddUserSocialAccount;
