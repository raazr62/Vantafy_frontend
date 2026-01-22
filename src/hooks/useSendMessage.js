import { useUpload } from "./useApi";
import { toast } from "react-hot-toast";
import { handleApiError } from "../utils/apiUtils";

export const useSendMessage = () => {
  return useUpload({
    endpoint: "/send-message/",
    invalidateQueries: ["get-messages"],
    onSuccess: ({ data }) => {
      toast.success("Message sent successfully!");
    },
    onError: handleApiError,
  });
};
