import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { PutFile } from "@/api";

const useUpdateMemberPhoto = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, file }) => {
      const formData = new FormData();
      formData.append("profile_image", file);
      return PutFile(`/update-agency-member-data/${id}/`, formData);
    },

    onSuccess: () => {
      toast.success("Photo uploaded successfully");
      queryClient.invalidateQueries(["agency-member-list"]);
    },

    onError: (error) => {
      toast.error(error?.response?.data?.message || "Failed to upload photo");
    },
  });
};

export default useUpdateMemberPhoto;
