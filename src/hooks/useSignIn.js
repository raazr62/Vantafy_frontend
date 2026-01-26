import { usePost } from "./useApi";
import { toast } from "react-hot-toast";
import { handleApiError } from "../utils/apiUtils";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setUser } from "@/Redux/slices/authSlice";

export const useSignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return usePost({
    endpoint: "/signin/",
    invalidateQueries: ["verify-token"], // Invalidate the verify token query
    onSuccess: (data) => {
      // Store user data in Redux
      // Backend returns: { success: true, message: "...", data: { id, email, role } }
      if (data.success && data.data) {
        dispatch(setUser(data.data));
      }
      toast.success(data.message || "Signed in successfully!");
      if (!!data.data.user.has_subscription) {
        navigate("/dashboard");
      } else {
        navigate("/select-niches");
      }
    },
    onError: handleApiError,
  });
};
