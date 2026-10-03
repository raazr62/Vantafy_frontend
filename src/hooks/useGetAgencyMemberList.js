import { selectUser } from "@/Redux/slices/authSlice";
import { useSelector } from "react-redux";
import { useFetch } from "./useApi";

export const useGetAgencyMemberList = (options = {}) => {
  const user = useSelector(selectUser);
  return useFetch(
    ["agency-member-list"],
    "/agency-member-list/",
    {},
    {
      staleTime: 1000 * 60 * 10, // 10 minutes fresh data
      gcTime: 1000 * 60 * 30, // 30 minutes memory cache
      refetchOnWindowFocus: false,
      enabled: user?.role === "agency",
      ...options,
    }
  );
};
