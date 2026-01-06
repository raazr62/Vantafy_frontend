import { usePost } from "./useApi";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router";

export const useCreateUser = () => {
  const navigate = useNavigate();
  return usePost({
    endpoint: "/users/create",
    invalidateQueries: ["register-user"],
    onSuccess: () => {
      toast.success("Signed up successfully!");
      navigate("/auth/otp-verify", { state: { from: "/auth/signup" } });
    },
    onError: () => {
      toast.error("Something went wrong!");
    },
  });
};