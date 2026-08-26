import { usePost } from "./useApi";
import { toast } from "react-hot-toast";
import { handleApiError } from "../utils/apiUtils";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setUser } from "@/Redux/slices/authSlice";

export const useVerifyOtp = (fromPageArg) => {
  const fromPage =
    typeof fromPageArg === "object" ? fromPageArg?.fromPage : fromPageArg;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return usePost({
    endpoint: "/verify-otp/",
    invalidateQueries: ["verify-otp", "verify-token"],
    onSuccess: (data) => {
      toast.success("OTP Verified Successfully.");
      if (data?.success && data?.data) {
        dispatch(setUser(data.data));
      } else if (data?.user || data?.data?.user) {
        dispatch(setUser(data?.data?.user ? data.data : { user: data.user }));
      } else {
        dispatch(setUser({ email: localStorage.getItem("email") }));
      }

      const resetToken =
        data?.reset_token ||
        data?.data?.reset_token ||
        data?.token ||
        data?.data?.token;
      if (resetToken) {
        localStorage.setItem("reset_token", resetToken);
      }
      if (fromPage === "/auth/reset-password") {
        navigate("/auth/change-password");
      } else {
        navigate("/select-niches");
      }
    },
    onError: handleApiError,
  });
};
