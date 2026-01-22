import { usePost } from "./useApi";
import { toast } from "react-hot-toast";
import { handleApiError } from "../utils/apiUtils";
import { useNavigate } from "react-router";

export const useAddNichesAndNtageNames = () => {
  const navigate = useNavigate();
  return usePost({
    endpoint: "/add-niches-and-stage-names/",
    invalidateQueries: ["add-niches-and-stage-names"],
    onSuccess: () => {
      toast.success("Successfully saved your niches and stage names");
      navigate("/connect-accounts");
    },
    onError: handleApiError,
  });
};
