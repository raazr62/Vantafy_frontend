import { usePost } from "./useApi";
import { toast } from "react-hot-toast";
import { handleApiError } from "../utils/apiUtils";
import { useSelector } from "react-redux";
import { selectUser } from "@/Redux/slices/authSlice";

export const usePostLinkRemovalRequest = (selectedMemberID, setUrlsText) => {
  const user = useSelector(selectUser);
  const endpoint =
    user?.role === "agency"
      ? `/link-removal-request/?agency_member_id=${selectedMemberID}`
      : "/link-removal-request/";
  return usePost({
    endpoint,
    invalidateQueries: ["link-removal-request"],
    onSuccess: () => {
      setUrlsText("");
      toast.success("Link removal request submitted successfully!");
    },
    onError: handleApiError,
  });
};
