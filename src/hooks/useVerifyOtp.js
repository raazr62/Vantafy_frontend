import { usePost } from "./useApi";
import { toast } from "react-hot-toast";
import { handleApiError } from "../utils/apiUtils";
import { useNavigate } from "react-router";

export const useVerifyOtp = (fromPageArg) => {
  const fromPage =
    typeof fromPageArg === "object" ? fromPageArg?.fromPage : fromPageArg;
  const navigate = useNavigate();
  return usePost({
    endpoint: "/verify-otp/",
    invalidateQueries: ["verify-otp"],
    onSuccess: (data) => {
      toast.success("OTP Verified Successfully.");
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
        navigate("/auth/success", { state: { from: "/auth/signup" } });
      }
    },
    onError: handleApiError,
  });
};
