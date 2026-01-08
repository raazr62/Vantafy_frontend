import { usePost } from "./useApi";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router";

export const useLogout = () => {
  const navigate = useNavigate();

  return usePost({
    endpoint: "/signout/",
    onSuccess: () => {
      toast.success("Logged out successfully");
      navigate("/auth/signin");
    },
    onError: () => {
      toast.error("Logout failed");
    },
  });
};
