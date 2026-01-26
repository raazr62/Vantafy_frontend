import { useFetch } from "./useApi";

export const useGetProfileData = () => {
  return useFetch(["my-profile"], "/my-profile/");
};
