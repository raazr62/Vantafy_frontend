import { usePost } from "./useApi";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { clearUser } from "@/Redux/slices/authSlice";
import { handleApiError } from "@/utils/apiUtils";

export const useLogout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return usePost({
    endpoint: "/signout/",
    invalidateQueries: ["verify-token"], // Invalidate auth verification query
    onSuccess: () => {
      // Clear user data from Redux
      dispatch(clearUser());
      toast.success("Logged out successfully");
      navigate("/auth/signin");
    },
    onError: handleApiError,
  });
};
