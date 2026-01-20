import { useNavigate } from "react-router";
import { useGoogleLogin } from "@react-oauth/google";
import { usePost } from "./useApi";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setUser } from "@/Redux/slices/authSlice";
import { handleApiError } from "@/utils/apiUtils";

/**
 * Custom hook for Google OAuth login
 * @returns {Function} Google login function to trigger the OAuth flow
 */
export const useGoogleLoginHook = (role) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Setup the mutation for sending the access token to the backend
  const { mutate: sendGoogleToken, isPending } = usePost({
    endpoint: "/google-auth/",
    onSuccess: (data) => {
      // Store user data in Redux
      // Backend returns: { success: true, message: "...", data: { id, email, role } }
      if (data.success && data.data) {
        dispatch(setUser(data.data));
      }
      toast.success(data?.message || "Sign In Successful!");
      navigate("/dashboard");
    },
    onError: handleApiError,
  });

  // Setup Google OAuth login
  const googleLogin = useGoogleLogin({
    flow: "implicit",
    onSuccess: (tokenResponse) => {
      // Send the access token to your backend
      sendGoogleToken({
        access_token: tokenResponse.access_token,
        role: role,
      });
    },
    onError: handleApiError,
  });

  return { googleLogin, isPending };
};
