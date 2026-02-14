import { useFetch } from "./useApi";

export const useGetFinalScanResult = (selectedMemberID) => {
  const endpoint = selectedMemberID
    ? `/scan-results/?agency_member_id=${selectedMemberID}`
    : "/scan-results/";
  return useFetch([endpoint], endpoint);
};
