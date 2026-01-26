import { useQueryClient } from "@tanstack/react-query";
import { usePost } from "./useApi";
import { handleApiError } from "@/utils/apiUtils";
import toast from "react-hot-toast";

const useAddStageName = () => {
  const queryClient = useQueryClient();

  return usePost({
    endpoint: `/add-stage-name/`,
    invalidateQueries: ["add-stage-name"],
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["my-stage-names"],
      });
      toast.success("Stage Name Successfully added");
    },
    onError: handleApiError,
  });
};

export default useAddStageName;
