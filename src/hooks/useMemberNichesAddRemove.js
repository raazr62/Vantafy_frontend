import { useQueryClient } from "@tanstack/react-query";
import { usePost } from "./useApi";
import { handleApiError } from "@/utils/apiUtils";

const useMemberNichesAddRemove = (id) => {
  const queryClient = useQueryClient();

  return usePost({
    endpoint: `/create-or-update-agency-member-niches/${id}/`,
    invalidateQueries: ["create-or-update-agency-member-niches"],
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["agency-member-list"],
      });
    },
    onError: handleApiError,
  });
};

export default useMemberNichesAddRemove;
