import { usePost } from "./useApi";
import { toast } from "react-hot-toast";
import { handleApiError } from "../utils/apiUtils";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setUser } from "@/Redux/slices/authSlice";
import { useQueryClient } from "@tanstack/react-query";

export const useSignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  return usePost({
    endpoint: "/signin/",
    onSuccess: (data) => {
      if (data.success && data.data) {
        const userData = data.data.user || data.data;
        queryClient.setQueryData(["verify-token"], {
          success: true,
          message: data.message,
          data: userData,
        });
        dispatch(setUser(data.data));
      }
      toast.success(data.message || "Signed in successfully!");
      const hasSub = Boolean(
        data?.data?.user?.has_subscription ?? data?.data?.has_subscription
      );
      if (hasSub) {
        navigate("/dashboard");
      } else {
        navigate("/select-niches");
      }
    },
    onError: handleApiError,
  });
};
