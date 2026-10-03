import { handleApiError } from "@/utils/apiUtils";
import { useUpload } from "./useApi";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setUser, selectUser } from "@/Redux/slices/authSlice";
import { useQueryClient } from "@tanstack/react-query";

export const useUpdateAvatar = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectUser);
  const queryClient = useQueryClient();

  return useUpload({
    endpoint: "/avatar-update/",
    invalidateQueries: ["my-profile", "dashboard-data", "verify-token"],
    onSuccess: (response) => {
      toast.success(response?.message || "Profile photo updated successfully");
      const newAvatar = response?.data?.avatar || response?.avatar;
      if (newAvatar && currentUser) {
        dispatch(setUser({ ...currentUser, avatar: newAvatar }));
      }
      queryClient.invalidateQueries(["my-profile"]);
      queryClient.invalidateQueries(["dashboard-data"]);
      queryClient.invalidateQueries(["verify-token"]);
    },
    onError: handleApiError,
  });
};
