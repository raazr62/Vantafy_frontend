import { usePost } from "./useApi";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router";

export const useCreateUser = () => {
  const navigate = useNavigate();
  return usePost({
    endpoint: "/signup/",
    invalidateQueries: ["register-user"],
    onSuccess: ({ data }) => {
      localStorage.setItem("email", data.user.email);
      localStorage.setItem("purpose", "account_create");
      toast.success("Signed up successfully!");
      navigate("/auth/otp-verify", { state: { from: "/auth/signup" } });
    },
    onError: () => {
      toast.error("Something went wrong!");
    },
  });
};
