import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import {
  selectIsAuthenticated,
  selectAuthLoading,
} from "@/Redux/slices/authSlice";

/**
 * ProtectedRoute component that guards routes requiring authentication
 * Redirects to sign-in page if user is not authenticated
 */
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const isLoading = useSelector(selectAuthLoading);

  // Show loading while checking authentication
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Redirect to sign-in if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/auth/signin" replace />;
  }

  // User is authenticated, render the protected content
  return children;
};

export default ProtectedRoute;
