import { useFetch } from "./useApi";

export const useGetAgencyMemberList = (options = {}) => {
  return useFetch(
    ["agency-member-list"],
    "/agency-member-list/",
    {},
    {
      staleTime: 1000 * 60 * 10, // 10 minutes fresh data
      gcTime: 1000 * 60 * 30, // 30 minutes memory cache
      refetchOnWindowFocus: false,
      ...options,
    }
  );
};
