import { usePublicFetch } from "./useApi";

/**
 * Hook to fetch CMS Page data (e.g. terms_and_conditions, privacy_policy)
 * @param {string} type - Page type filter (optional, e.g. 'terms_and_conditions')
 * @param {Object} options - react-query options
 * @returns {UseQueryResult}
 */
export const usePage = (type, options = {}) => {
  return usePublicFetch(
    ["page", type],
    "/pages/",
    type ? { type } : {},
    {
      staleTime: 1000 * 10, // 10 seconds staleTime for quick updates
      gcTime: 1000 * 60 * 5,
      refetchOnWindowFocus: true,
      ...options,
    }
  );
};
