import { useQuery } from "@tanstack/react-query";
import { PostData } from "@/api";
import { useSelector } from "react-redux";
import { selectUser } from "@/Redux/slices/authSlice";

/**
 * Hook to verify if the user is authenticated
 * This will automatically send the HttpOnly cookies to the backend
 * @returns {UseQueryResult} Query result with user data
 */
export const useVerifyAuth = () => {
  // Don't verify auth on auth pages to prevent unnecessary calls
  // Use window.location since this hook may be used outside Router context
  const isAuthPage =
    typeof window !== "undefined" &&
    window.location.pathname.startsWith("/auth/");

  //   const isLandingPage =
  // typeof window !== "undefined" &&
  // window.location.pathname === "/";

  const user = useSelector(selectUser);

  return useQuery({
    queryKey: ["verify-token"],
    queryFn: () => PostData("/token/verify/"),
    retry: false, // Don't retry on 401
    enabled: !isAuthPage , // Only run if NOT on auth page
    staleTime: 5 * 60 * 1000, // Consider data fresh for 5 minutes
    gcTime: 10 * 60 * 1000, // Keep in cache for 10 minutes
  });
};
