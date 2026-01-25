import { usePost } from "./useApi";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { clearUser } from "@/Redux/slices/authSlice";
import { handleApiError } from "@/utils/apiUtils";
import { useQueryClient } from "@tanstack/react-query";

export const useLogout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  return usePost({
    endpoint: "/signout/",
    onSuccess: () => {
      // Clear user data from Redux
      dispatch(clearUser());

      // Clear all React Query cache to ensure fresh start
      queryClient.clear();

      toast.success("Logged out successfully");
      navigate("/auth/signin");
    },
    onError: handleApiError,
  });
};
