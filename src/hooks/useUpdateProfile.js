import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PutData } from "@/api";
import toast from "react-hot-toast";

const useUpdateProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) => PutData("/profile-update/", data),

    onSuccess: (response) => {
      toast.success(response?.message || "Profile updated successfully");
      queryClient.invalidateQueries(["my-profile"]);
    },

    onError: (error) => {
      toast.error(error?.response?.data?.message || "Failed to update profile");
    },
  });
};

export default useUpdateProfile;
