import { usePublicFetch } from "./useApi";

/**
 * Hook to fetch landing page data
 * Uses usePublicFetch since this is a public endpoint that doesn't require authentication
 * @returns {UseQueryResult} Query result with landing page data
 */
export const useLandingPage = (options = {}) => {
  return usePublicFetch(
    ["landing-page"],
    "/landing-page-all-section-one-by-one/",
    {},
    {
      staleTime: 1000 * 60 * 1, // 1 minute fresh data
      gcTime: 1000 * 60 * 10,   // 10 minutes cache
      refetchOnWindowFocus: true, // Refetch when switching back to tab
      ...options,
    }
  );
};
