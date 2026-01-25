import { useFetch } from "./useApi";

export const useGetAgencyMemberList = () => {
  return useFetch(["get-agency-member-list"], "/get-agency-member-list/");
};
