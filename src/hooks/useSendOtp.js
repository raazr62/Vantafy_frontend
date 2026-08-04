import { useNavigate } from "react-router";
import { usePost } from "./useApi";
import { toast } from "react-hot-toast";
import { handleApiError } from "../utils/apiUtils";

export const useSendOtp = () => {
  const navigate = useNavigate();
  return usePost({
    endpoint: "/send-otp/",
    invalidateQueries: ["send-otp"],
    onSuccess: (data, variables) => {
      toast.success(
        "We've emailed you a verification code to reset your password.",
      );
      const email = variables?.email || data?.data?.email || data?.email;
      if (email) {
        localStorage.setItem("email", email);
      }
      localStorage.setItem("purpose", "password_reset");
      navigate("/auth/otp-verify", { state: { from: "/auth/reset-password" } });
    },
    onError: handleApiError,
  });
};
