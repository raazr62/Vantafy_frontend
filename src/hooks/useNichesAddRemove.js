import { useQueryClient } from "@tanstack/react-query";
import { usePost } from "./useApi";
import { handleApiError } from "@/utils/apiUtils";

const useNichesAddRemove = () => {
  const queryClient = useQueryClient();

  return usePost({
    endpoint: `/create-or-delete-niches/`,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["my-niches"],
      });
    },
    onError: handleApiError,
  });
};

export default useNichesAddRemove;
