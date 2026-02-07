import { useFetch } from "./useApi";

export const useGetCurrentSubscriptionPlan = () => {
  return useFetch(
    ["get-current-subscription-plan"],
    "/current-subscription-plan/",
  );
};
