import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DeleteData } from "@/api";
import Swal from "sweetalert2";

const useDeleteMember = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => DeleteData(`/delete-agency-member/${id}/`),

    onSuccess: () => {
      Swal.fire("Removed!", "Member has been removed.", "success");
      queryClient.invalidateQueries(["agency-member-list"]);
    },

    onError: (error) => {
      Swal.fire(
        "Error",
        error?.response?.data?.message || "Failed to remove member",
        "error",
      );
    },
  });
};

export default useDeleteMember;
