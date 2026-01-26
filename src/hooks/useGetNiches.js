import { useFetch } from "./useApi";

export const useGetNiches = () => {
  return useFetch(["get-my-niches"], "/get-niches/");
};
