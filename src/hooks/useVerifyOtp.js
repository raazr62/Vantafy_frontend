import { usePost } from "./useApi";
import { toast } from "react-hot-toast";
import { handleApiError } from "../utils/apiUtils";
import { useNavigate } from "react-router";

export const useVerifyOtp = ({ fromPage }) => {
  console.log(fromPage);
  const navigate = useNavigate();
  return usePost({
    endpoint: "/verify-otp/",
    invalidateQueries: ["verify-otp"],
    onSuccess: () => {
      toast.success("OTP Verified Successfully.");
      fromPage === "/auth/reset-password"
        ? navigate("/auth/change-password")
        : navigate("/auth/success", { state: { from: "/auth/signup" } });
    },
    onError: handleApiError,
  });
};
