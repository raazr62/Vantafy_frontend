import { selectUser } from "@/Redux/slices/authSlice";
import { useFetch } from "./useApi";
import { useSelector } from "react-redux";

export const useGetDashboardData = (selectedMemberID, options = {}) => {
  const user = useSelector(selectUser);
  const endpoint =
    user.role === "agency"
      ? `/dashboard-data/?agency_member_id=${selectedMemberID}`
      : `/dashboard-data/`;
  return useFetch(
    ["dashboard-data", selectedMemberID],
    endpoint,
    {},
    {
      staleTime: 1000 * 60 * 5, // 5 minutes fresh data
      gcTime: 1000 * 60 * 30, // 30 minutes memory cache
      refetchOnWindowFocus: false,
      ...options,
    }
  );
};
