import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { selectIsAuthenticated, selectUser } from "@/Redux/slices/authSlice";
import { useSubscriptionPckagesGet } from "@/hooks/useSubscriptionPckagesGet";
import BillingSkeleton from "../HomeComponent/BillingSkeleton";
import PlansPriceCard from "./PlansPriceCard";
import { useSubscriptionStripeCheckout } from "@/hooks/useSubscriptionStripeCheckout";

const RecommendedPackages = () => {
  const user = useSelector(selectUser);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const navigate = useNavigate();
  const { mutate: checkout } = useSubscriptionStripeCheckout();
  const { data, isLoading, isError } = useSubscriptionPckagesGet(
    user.role === "agency" ? "agency" : "month",
    true,
  );

  if (isLoading) {
    return <BillingSkeleton />;
  }

  if (isError) {
    return (
      <div className="w-full h-[400px] flex items-center justify-center text-red-500 font-semibold text-lg">
        Something went wrong. Please try again later.
      </div>
    );
  }

  const handleSubscription = (id, type) => {
    if (!isAuthenticated) {
      toast.error("Please login to subscribe");
      navigate("/auth/signin", { state: { from: "/" } });
      return;
    }
    const payload = {
      price_id: id,
      success_url: `${import.meta.env.VITE_APP_FRONTEND_URL}/payment-success`,
      cancel_url: `${import.meta.env.VITE_APP_FRONTEND_URL}/payment-cancel`,
      type: type,
    };
    checkout(payload);
  };

  return (
    <div className="flex flex-wrap justify-center items-center gap-3 mt-4">
      {data.map((plan, i) => (
        <PlansPriceCard
          key={plan.id}
          i={i}
          plan={plan}
          handleSubscription={handleSubscription}
        />
      ))}
    </div>
  );
};

export default RecommendedPackages;
