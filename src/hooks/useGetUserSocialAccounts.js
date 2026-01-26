import { useFetch } from "./useApi";

export const useGetUserSocialAccounts = () => {
  return useFetch(["get-social-accounts"], "/get-social-accounts/");
};
