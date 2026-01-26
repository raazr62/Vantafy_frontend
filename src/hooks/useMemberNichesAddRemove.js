import { useQueryClient } from "@tanstack/react-query";
import { usePost } from "./useApi";
import { handleApiError } from "@/utils/apiUtils";

const useMemberNichesAddRemove = (id) => {
  const queryClient = useQueryClient();

  return usePost({
    endpoint: `/create-or-update-agency-member-niches/${id}/`,
    invalidateQueries: ["create-or-update-agency-member-niches", id],
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["agency-member-niches", id],
      });
    },
    onError: handleApiError,
  });
};

export default useMemberNichesAddRemove;
