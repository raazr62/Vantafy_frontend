import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DeleteData } from "@/api";
import Swal from "sweetalert2";

const useDeleteSocialAccount = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) =>
      DeleteData(`/delete-agency-member-social-account/${id}/`),

    onSuccess: () => {
      Swal.fire("Removed!", "Social account has been removed.", "success");
      queryClient.invalidateQueries(["get-agency-member-social-accounts"]);
    },

    onError: (error) => {
      Swal.fire(
        "Error",
        error?.response?.data?.message || "Failed to remove social account",
        "error",
      );
    },
  });
};

export default useDeleteSocialAccount;
