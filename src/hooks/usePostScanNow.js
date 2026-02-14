import { usePost } from "./useApi";
import { toast } from "react-hot-toast";
import { handleApiError } from "../utils/apiUtils";

export const usePostScanNow = (setActiveDialog) => {
  return usePost({
    endpoint: "/scan-now/",
    invalidateQueries: ["scan-now"],
    onSuccess: (data) => {
      console.log(data);
      toast.success("Scan started successfully!");
      setActiveDialog("Start Scanning");
    },
    onError: handleApiError,
  });
};
