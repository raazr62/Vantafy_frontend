import { usePublicFetch } from "./useApi";

/**
 * Hook to fetch FAQ data by type (e.g. 'dashboard' or 'landing_page')
 * @param {string} type - FAQ type filter (optional, e.g. 'dashboard')
 * @param {Object} options - react-query options
 * @returns {UseQueryResult}
 */
export const useFaq = (type, options = {}) => {
  return usePublicFetch(
    ["faqs", type],
    "/faqs/",
    type ? { type } : {},
    {
      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 10,
      refetchOnWindowFocus: true,
      ...options,
    }
  );
};
