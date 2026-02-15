import { selectUser } from "@/Redux/slices/authSlice";
import { useFetch } from "./useApi";
import { useSelector } from "react-redux";

export const useGetDashboardData = (selectedMemberID) => {
  const user = useSelector(selectUser);
  const endpoint =
    user.role === "agency"
      ? `/dashboard-data/?agency_member_id=${selectedMemberID}`
      : `/dashboard-data/`;
  return useFetch(["dashboard-data", selectedMemberID], endpoint);
};
