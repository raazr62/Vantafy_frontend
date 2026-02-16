import { selectUser } from "@/Redux/slices/authSlice";
import { useFetch } from "./useApi";
import { useSelector } from "react-redux";

export const useGetDelistedLinks = (selectedMemberID) => {
  const user = useSelector(selectUser);
  const endpoint =
    user.role === "agency"
      ? `/link-removal-request-list/?agency_member_id=${selectedMemberID}`
      : `/link-removal-request-list/`;
  return useFetch(["link-removal-request-list", selectedMemberID], endpoint);
};
