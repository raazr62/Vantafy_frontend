import { useFetch } from "./useApi";

export const useGetMemberNiches = (id) => {
  return useFetch(["agency-member-niches", id], `/agency-member-niches/${id}/`);
};
