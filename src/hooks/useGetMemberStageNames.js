import { useFetch } from "./useApi";

export const useGetMemberStageNames = (id) => {
  return useFetch(
    ["get-agency-member-stage-names", id],
    `/get-agency-member-stage-names/${id}/`,
  );
};
