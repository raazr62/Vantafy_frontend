import { useNavigate } from "react-router";
import { useGoogleLogin } from "@react-oauth/google";
import { usePost } from "./useApi";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setUser } from "@/Redux/slices/authSlice";
import { handleApiError } from "@/utils/apiUtils";
import { useState } from "react";

/**
 * Custom hook for Google OAuth login
 * @param {string} role - Optional initial role ("agency" or "individual")
 * @returns {Object} Google login function, modal state, and handlers
 */
export const useGoogleLoginHook = (role) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // State for role selection modal
  const [showRoleModal, setShowRoleModal] = useState(false);
  const [pendingAccessToken, setPendingAccessToken] = useState(null);

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

      // Close modal if it was open
      setShowRoleModal(false);
      setPendingAccessToken(null);

      navigate("/dashboard");
    },
    onError: (error) => {
      if (error?.response?.data?.message === "Invalid role specified") {
        // Show role selection modal
        setShowRoleModal(true);
        // Note: pendingAccessToken is already set in googleLogin's onSuccess
      } else {
        toast.error(error?.response?.data?.message || "Something went wrong!");
      }
    },
  });

  // Setup Google OAuth login
  const googleLogin = useGoogleLogin({
    flow: "implicit",
    onSuccess: (tokenResponse) => {
      // Store the access token for potential retry
      setPendingAccessToken(tokenResponse.access_token);

      // Send the access token to your backend
      sendGoogleToken({
        access_token: tokenResponse.access_token,
        role: role,
      });
    },
    onError: handleApiError,
  });

  // Handler for role selection from modal
  const handleRoleSelect = (selectedRole) => {
    if (pendingAccessToken) {
      sendGoogleToken({
        access_token: pendingAccessToken,
        role: selectedRole,
      });
    }
  };

  return {
    googleLogin,
    isPending,
    showRoleModal,
    setShowRoleModal,
    handleRoleSelect,
  };
};
