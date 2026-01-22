import { usePublicFetch } from "./useApi";

export const useSubscriptionPckagesGet = (packageName, is_recommend) => {
  const { data, isLoading, isError } = usePublicFetch(
    ["/subscription-packages/", packageName, is_recommend],
    `/subscription-packages/?type=${packageName}${is_recommend ? "&is_recommend=true" : ""}`,
  );
  return { data: data?.data, isLoading, isError };
};
