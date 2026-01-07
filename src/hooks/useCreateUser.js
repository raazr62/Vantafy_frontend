import { usePost } from "./useApi";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router";

export const useCreateUser = () => {
  const navigate = useNavigate();
  return usePost({
    endpoint: "/signup/",
    invalidateQueries: ["register-user"],
    onSuccess: ({ data }) => {
      localStorage.setItem("email", data.email);
      localStorage.setItem("purpose", "create-account");
      toast.success("Signed up successfully!");
      navigate("/auth/otp-verify", { state: { from: "/auth/signup" } });
    },
    onError: () => {
      toast.error("Something went wrong!");
    },
  });
};
