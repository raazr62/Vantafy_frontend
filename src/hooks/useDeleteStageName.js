import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DeleteData } from "@/api";
import Swal from "sweetalert2";

const useDeleteStageName = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => DeleteData(`/delete-agency-member-stage-name/${id}/`),

    onSuccess: () => {
      Swal.fire("Removed!", "Stage Name has been removed.", "success");
      queryClient.invalidateQueries(["get-agency-member-stage-names"]);
    },

    onError: (error) => {
      Swal.fire(
        "Error",
        error?.response?.data?.message || "Failed to remove stage name",
        "error",
      );
    },
  });
};

export default useDeleteStageName;
