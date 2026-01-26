import { useQueryClient } from "@tanstack/react-query";
import { usePost } from "./useApi";
import { handleApiError } from "@/utils/apiUtils";
import toast from "react-hot-toast";

const useAddMemberSocialAccount = (id, setIsAddActive) => {
  const queryClient = useQueryClient();

  return usePost({
    endpoint: `/add-agency-member-social-accounts/${id}/`,
    invalidateQueries: ["add-agency-member-social-accounts", id],
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["get-agency-member-social-accounts", id],
      });
      setIsAddActive(false);
      toast.success("Social account successfully added");
    },
    onError: handleApiError,
  });
};

export default useAddMemberSocialAccount;
