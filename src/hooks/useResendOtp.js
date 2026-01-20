import { usePost } from "./useApi";
import { toast } from "react-hot-toast";
import { handleApiError } from "../utils/apiUtils";

export const useResendOtp = () => {
  return usePost({
    endpoint: "/resend-otp/",
    invalidateQueries: ["resend-otp"],
    onSuccess: () => {
      toast.success("OTP resent successfully!");
    },
    onError: handleApiError,
  });
};
