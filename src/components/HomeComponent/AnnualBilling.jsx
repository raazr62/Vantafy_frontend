import React from "react";
import { Button } from "../ui/button";
import { useSubscriptionPckagesGet } from "@/hooks/useSubscriptionPckagesGet";
import BillingSkeleton from "./BillingSkeleton";
import { useSubscriptionStripeCheckout } from "@/hooks/useSubscriptionStripeCheckout";
import { selectIsAuthenticated } from "@/Redux/slices/authSlice";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import PlansPriceCard from "../OtherComponent/PlansPriceCard";

const AnnualBilling = ({ fromAuthPage }) => {
  const { mutate: checkout } = useSubscriptionStripeCheckout();
  const { data, isLoading, isError } = useSubscriptionPckagesGet("year");
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const navigate = useNavigate();

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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-2 sm:mt-4 mx-auto">
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

export default AnnualBilling;
