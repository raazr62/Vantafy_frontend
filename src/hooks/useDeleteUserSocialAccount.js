import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DeleteData } from "@/api";
import Swal from "sweetalert2";

const useDeleteUserSocialAccount = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => DeleteData(`/delete-social-account/${id}/`),

    onSuccess: () => {
      Swal.fire("Removed!", "Social account has been removed.", "success");
      queryClient.invalidateQueries(["get-social-accounts"]);
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

export default useDeleteUserSocialAccount;
