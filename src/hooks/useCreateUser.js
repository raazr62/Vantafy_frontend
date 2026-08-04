import { usePost } from "./useApi";
import { toast } from "react-hot-toast";
import { handleApiError } from "../utils/apiUtils";
import { useNavigate } from "react-router";

export const useCreateUser = () => {
  const navigate = useNavigate();
  return usePost({
    endpoint: "/signup/",
    invalidateQueries: ["register-user"],
    onSuccess: (data, variables) => {
      const email = data?.user?.email || data?.data?.user?.email || variables?.email;
      if (email) {
        localStorage.setItem("email", email);
      }
      localStorage.setItem("purpose", "account_create");
      toast.success("Signed up successfully!");
      navigate("/auth/otp-verify", { state: { from: "/auth/signup" } });
    },
    onError: handleApiError,
  });
};
