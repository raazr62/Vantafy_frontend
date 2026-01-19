import { usePublicFetch } from "./useApi";

/**
 * Hook to fetch landing page data
 * Uses usePublicFetch since this is a public endpoint that doesn't require authentication
 * @returns {UseQueryResult} Query result with landing page data
 */
export const useLandingPage = () => {
  return usePublicFetch(
    ["landing-page"],
    "/landing-page-all-section-one-by-one/",
  );
};
