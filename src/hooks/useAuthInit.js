import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser, clearUser, setAuthLoading, selectIsAuthenticated } from "@/Redux/slices/authSlice";
import { useVerifyAuth } from "./useVerifyAuth";

/**
 * Hook to initialize authentication state on app load
 * This should be called once when the app mounts
 */
export const useAuthInit = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const { data, isLoading, isError } = useVerifyAuth();

  useEffect(() => {
    if (isLoading) {
      dispatch(setAuthLoading(true));
      return;
    }

    if (isError) {
      // User is not authenticated or token is invalid
      dispatch(clearUser());
      return;
    }

    // User is authenticated, store user data
    if (data?.success && data?.data) {
      dispatch(setUser(data.data));
    } else if (!isAuthenticated && !data) {
      dispatch(clearUser());
    } else {
      dispatch(setAuthLoading(false));
    }
  }, [data, isLoading, isError, isAuthenticated, dispatch]);

  return { isLoading };
};
