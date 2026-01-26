import { useFetch } from "./useApi";

export const useGetUserNiches = () => {
  return useFetch(["my-niches"], "/my-niches/");
};
