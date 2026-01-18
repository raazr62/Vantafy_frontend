import { useFetch } from "./useApi";

/**
 * Hook to fetch landing page data
 * @returns {UseQueryResult} Query result with landing page data
 */
export const useLandingPage = () => {
  return useFetch(["landing-page"], "/landing-page-all-section-one-by-one/");
};
