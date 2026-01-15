import { useQuery } from "@tanstack/react-query";
import { PostData } from "@/api";

/**
 * Hook to verify if the user is authenticated
 * This will automatically send the HttpOnly cookies to the backend
 * @returns {UseQueryResult} Query result with user data
 */
export const useVerifyAuth = () => {
  return useQuery({
    queryKey: ["verify-token"],
    queryFn: () => PostData("/token/verify/"),
    retry: false, // Don't retry on 401
    staleTime: 5 * 60 * 1000, // Consider data fresh for 5 minutes
    gcTime: 10 * 60 * 1000, // Keep in cache for 10 minutes
  });
};
