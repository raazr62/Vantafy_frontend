import { useQueryClient } from "@tanstack/react-query";
import { usePost } from "./useApi";
import { handleApiError } from "@/utils/apiUtils";
import toast from "react-hot-toast";

const useAddMemberStageName = (id, setIsAddActive) => {
  const queryClient = useQueryClient();

  return usePost({
    endpoint: `/add-agency-member-stage-names/${id}/`,
    invalidateQueries: ["add-agency-member-stage-names", id],
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["get-agency-member-stage-names", id],
      });
      setIsAddActive(false);
      toast.success("Stage Name Successfully added");
    },
    onError: handleApiError,
  });
};

export default useAddMemberStageName;
