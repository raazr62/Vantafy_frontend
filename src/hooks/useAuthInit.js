import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser, clearUser, setAuthLoading } from "@/Redux/slices/authSlice";
import { useVerifyAuth } from "./useVerifyAuth";

/**
 * Hook to initialize authentication state on app load
 * This should be called once when the app mounts
 */
export const useAuthInit = () => {
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useVerifyAuth();

  useEffect(() => {
    if (isLoading) {
      dispatch(setAuthLoading(true));
      return;
    }

    if (isError || !data) {
      // User is not authenticated or token is invalid
      dispatch(clearUser());
      return;
    }

    // User is authenticated, store user data
    // Backend returns: { success: true, message: "...", data: { id, email, role } }
    if (data.success && data.data) {
      dispatch(setUser(data.data));
    } else {
      dispatch(clearUser());
    }
  }, [data, isLoading, isError, dispatch]);

  return { isLoading };
};
