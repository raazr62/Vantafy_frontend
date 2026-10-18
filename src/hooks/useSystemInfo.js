import { usePublicFetch } from "./useApi";

/**
 * Hook to fetch system info (logo, site title, etc.)
 * Uses localStorage persistence and React Query caching for instant logo rendering
 * without waiting for network response.
 */
export const useSystemInfo = (options = {}) => {
  return usePublicFetch(
    ["/about-system/"],
    "/about-system/",
    {},
    {
      staleTime: 1000 * 60 * 5, // 5 minutes fresh data
      gcTime: 1000 * 60 * 30,   // 30 minutes in memory
      refetchOnWindowFocus: false,
      ...options,
    }
  );
};

