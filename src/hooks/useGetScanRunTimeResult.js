import { useFetch } from "./useApi";

export const useGetScanRunTimeResult = (selectedMemberID) => {
  // Build the endpoint URL with query parameter if selectedMemberID is provided
  const endpoint = selectedMemberID
    ? `/scan-run-time-result/?agency_member_id=${selectedMemberID}`
    : "/scan-run-time-result/";

  return useFetch(
    ["scan-run-time-result", selectedMemberID],
    endpoint,
    {},
    {
      refetchInterval: 5000, // Refetch every 5 seconds to get real-time scan data
      staleTime: 1000, // Consider data stale after 1 second
    },
  );
};
