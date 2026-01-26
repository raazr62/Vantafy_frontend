import { useFetch } from "./useApi";

export const useGetUserStageNames = () => {
  return useFetch(["my-stage-names"], "/my-stage-names/");
};
