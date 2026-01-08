import { useNavigate } from "react-router";
import { usePost } from "./useApi";
import { toast } from "react-hot-toast";

export const useSendOtp = () => {
  const navigate = useNavigate();
  return usePost({
    endpoint: "/send-otp/",
    invalidateQueries: ["send-otp"],
    onSuccess: ({ data }) => {
      toast.success(
        "We've emailed you a verification code to reset your password."
      );
      localStorage.setItem("email", data.email);
      localStorage.setItem("purpose", "password_reset");
      navigate("/auth/otp-verify", { state: { from: "/auth/reset-password" } });
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message || "Something went wrong!");
    },
  });
};
