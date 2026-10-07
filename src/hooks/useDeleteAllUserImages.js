import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DeleteData } from "@/api";
import toast from "react-hot-toast";

export const useDeleteAllUserImages = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => DeleteData("/delete-all-images/"),

    onSuccess: (response) => {
      toast.success(
        response?.message || "All user images deleted from server successfully"
      );
      queryClient.invalidateQueries(["my-profile"]);
      queryClient.invalidateQueries(["customer-scans"]);
      queryClient.invalidateQueries(["agency-member-scans"]);
    },

    onError: (error) => {
      const errorMsg =
        error?.response?.data?.message ||
        error?.response?.data?.detail ||
        "Failed to delete images from server";
      toast.error(errorMsg);
    },
  });
};

export default useDeleteAllUserImages;
