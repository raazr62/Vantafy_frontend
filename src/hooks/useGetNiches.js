import { useFetch } from "./useApi";

export const useGetNiches = () => {
  return useFetch(["get-niches"], "/get-niches/");
};
