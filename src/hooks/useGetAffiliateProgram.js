import { useFetch } from "./useApi";

export const useGetAffiliateProgram = () => {
  return useFetch(["affiliate-program"], "/affiliate-program/");
};
