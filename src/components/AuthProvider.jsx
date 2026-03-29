import { useAuthInit } from "@/hooks/useAuthInit";
import { useSelector } from "react-redux";
import { selectIsAuthenticated, selectUser } from "@/Redux/slices/authSlice";

/**
 * AuthProvider component that initializes authentication state
 * This should wrap the entire app to ensure auth is verified on mount
 */
const AuthProvider = ({ children }) => {
  const { isLoading } = useAuthInit();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const user = useSelector(selectUser);

  // Only show loading spinner if we're verifying AND user is not already authenticated
  // This prevents blocking navigation after sign-in
  if (isLoading && !isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-600">Verifying authentication...</p>
        </div>
      </div>
    );
  }

  return children;
};

export default AuthProvider;
