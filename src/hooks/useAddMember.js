import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UploadFile } from "@/api";
import { toast } from "react-hot-toast";
import { handleApiError } from "../utils/apiUtils";

/**
 * Hook to add a new agency member
 * Sends FormData with name and image to backend
 */
export const useAddMember = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData) => UploadFile("/add-agency-member/", formData),
    onSuccess: (data) => {
      // Invalidate members list to refetch updated data
      queryClient.invalidateQueries({ queryKey: ["agency-members"] });
      toast.success(data?.message || "Member added successfully!");
    },
    onError: handleApiError,
  });
};
