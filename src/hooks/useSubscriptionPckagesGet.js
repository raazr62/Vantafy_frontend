import { usePublicFetch } from "./useApi";

export const useSubscriptionPckagesGet = (packageName, is_recommend) => {
  const { data, isLoading, isError } = usePublicFetch(
    ["/subscription-packages/"],
    `/subscription-packages/?type=${packageName}&is_recommend=${is_recommend}`,
  );
  return { data: data?.data, isLoading, isError };
};
