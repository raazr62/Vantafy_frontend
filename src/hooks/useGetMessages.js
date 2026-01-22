import { useFetch } from "./useApi";

export const useGetMessages = () => {
  return useFetch(
    ["get-messages"],
    "/get-messages/",
    {},
    {
      refetchInterval: 5000, // Refetch every 5 seconds to get new messages
      staleTime: 1000, // Consider data stale after 1 second
    },
  );
};
