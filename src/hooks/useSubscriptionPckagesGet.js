import { usePublicFetch } from "./useApi";

export const useSubscriptionPckagesGet = (packageName) => {
  const { data, isLoading, isError } = usePublicFetch(
    ["/subscription-packages/"],
    `/subscription-packages/?type=${packageName}`,
  );
  return { data: data?.data, isLoading, isError };
};
