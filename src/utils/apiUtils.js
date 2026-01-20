import { toast } from "react-hot-toast";

export const handleApiError = (error) => {
  toast.error(error?.response?.data?.message || "Something went wrong!");
};
