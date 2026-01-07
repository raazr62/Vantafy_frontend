import { usePost } from "./useApi";
import { toast } from "react-hot-toast";

export const useResendOtp = () => {
  return usePost({
    endpoint: "/resend-otp/",
    invalidateQueries: ["resend-otp"],
    onSuccess: () => {
      toast.success("OTP resent successfully!");
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message || "Something went wrong!");
    },
  });
};
