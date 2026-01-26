import { useFetch } from "./useApi";

export const useGetAgencyMemberList = () => {
  return useFetch(["agency-member-list"], "/agency-member-list/");
};
