import { selectUser } from "@/Redux/slices/authSlice";
import { useFetch } from "./useApi";
import { useSelector } from "react-redux";

export const useGetDashboardData = (selectedMemberID, options = {}) => {
  const user = useSelector(selectUser);
  const endpoint =
    user?.role === "agency"
      ? `/dashboard-data/?agency_member_id=${selectedMemberID}`
      : `/dashboard-data/`;
  return useFetch(
    ["dashboard-data", user?.role, selectedMemberID],
    endpoint,
    {},
    {
      skipCache: true, // Don't use stale zero-data from localStorage
      enabled: user?.role === "agency" ? Boolean(selectedMemberID) : true,
      refetchOnWindowFocus: false,
      ...options,
    }
  );
};
