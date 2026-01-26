import { useFetch } from "./useApi";

export const useGetMemberSocialAccounts = (id) => {
  return useFetch(
    ["get-agency-member-social-accounts", id],
    `/get-agency-member-social-accounts/${id}/`,
  );
};
