import { useFetch } from "./useApi";

export const useGetMemberLimits = () => {
  return useFetch(["get-member-limits"], "/member-limits/");
};
