import { useAuthInit } from "@/hooks/useAuthInit";

/**
 * AuthProvider component that initializes authentication state
 * This should wrap the entire app to ensure auth is verified on mount
 */
const AuthProvider = ({ children }) => {
  useAuthInit();
  return children;
};

export default AuthProvider;
