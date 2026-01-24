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

      // Force delete cookies from browser (in case backend doesn't)
      // This is a fallback - backend should ideally handle this
      document.cookie =
        "access_token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
      document.cookie =
        "refresh_token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";

      toast.success("Logged out successfully");
      navigate("/auth/signin");
    },
    onError: handleApiError,
  });
};
