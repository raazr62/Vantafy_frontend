import { usePost } from "./useApi";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { clearUser } from "@/Redux/slices/authSlice";

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
    onError: () => {
      toast.error("Logout failed");
    },
  });
};
