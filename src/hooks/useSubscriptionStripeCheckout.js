import { usePost } from "./useApi";
import { toast } from "react-hot-toast";

export const useSubscriptionStripeCheckout = () => {
  return usePost({
    endpoint: "/stripe-checkout/",
    invalidateQueries: ["stripe-checkout"],
    onSuccess: ({ data }) => {
      localStorage.setItem("stripe-checkout", "true");
      toast.success("Checkout session created successfully!");
      window.location.href = data;
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message || "Something went wrong!");
    },
  });
};
