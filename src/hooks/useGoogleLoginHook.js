import { useNavigate } from "react-router";
import { useGoogleLogin } from "@react-oauth/google";
import { usePost } from "./useApi";
import toast from "react-hot-toast";

/**
 * Custom hook for Google OAuth login
 * @returns {Function} Google login function to trigger the OAuth flow
 */
export const useGoogleLoginHook = (role) => {
  const navigate = useNavigate();

  // Setup the mutation for sending the access token to the backend
  const { mutate: sendGoogleToken, isPending } = usePost({
    endpoint: "/google-auth/",
    onSuccess: (data) => {
      toast.success(data?.message || "Sign In Successful!");
      navigate("/dashboard");
    },
    onError: (error) => {
      console.error("Google login API error:", error);
      toast.error(
        error?.response?.data?.message ||
          "Google login failed. Please try again."
      );
    },
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
    onError: (error) => {
      console.error("Google OAuth error:", error);
      toast.error("Google authentication failed. Please try again.");
    },
  });

  return { googleLogin, isPending };
};
