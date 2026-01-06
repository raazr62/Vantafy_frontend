import { usePost } from "./useApi";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router";

export const useSignIn = () => {
  const navigate = useNavigate();
  return usePost({
    endpoint: "/signin/",
    invalidateQueries: ["sign-in-user"],
    onSuccess: () => {
      toast.success("Signed in successfully!");
      navigate("/select-niches");
    },
    onError: () => {
      toast.error("Something went wrong!");
    },
  });
};
