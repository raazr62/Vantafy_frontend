import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PutData } from "@/api";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setUser } from "@/Redux/slices/authSlice";

const useUpdateProfile = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: (data) => PutData("/profile-update/", data),

    onSuccess: (response) => {
      toast.success(response?.message || "Profile updated successfully");
      if (response?.data) {
        dispatch(setUser(response.data));
      }
      queryClient.invalidateQueries(["my-profile"]);
      queryClient.invalidateQueries(["verify-token"]);
    },

    onError: (error) => {
      const errorMsg =
        error?.response?.data?.message ||
        error?.response?.data?.detail ||
        "Failed to update profile";
      toast.error(errorMsg);
    },
  });
};

export default useUpdateProfile;
