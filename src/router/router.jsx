import { createBrowserRouter, Navigate } from "react-router";
import MainLayout from "@/layout/MainLayout";
import AuthLayout from "@/layout/AuthLayout";
import DashboardLayout from "@/layout/DashboardLayout";
import { generalRoutes } from "./GeneralRoutes";
import { authRoutes } from "./AuthRoutes";
import SelectNiches from "@/pages/SelectNiches";
import ConnectAccounts from "@/pages/ConnectAccounts";
import RecommendPlan from "@/pages/RecommendPlan";
import PricingPlan from "@/pages/PricingPlan";
import { dashboardRoutes } from "./DashboardRoutes";
import AxiosInterceptor from "@/components/AxiosInterceptor";

const router = createBrowserRouter([
  {
    element: <AxiosInterceptor />,
    children: [
      {
        path: "/",
        element: <MainLayout />,
        children: [...generalRoutes],
      },
      {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [...dashboardRoutes],
      },
      {
        path: "/auth",
        element: <AuthLayout />,
        children: [...authRoutes],
      },
      {
        path: "/select-niches",
        element: <SelectNiches />,
      },
      {
        path: "/connect-accounts",
        element: <ConnectAccounts />,
      },
      {
        path: "/recommend-plan",
        element: <RecommendPlan />,
      },
      {
        path: "/pricing-plan",
        element: <PricingPlan />,
      },
    ],
  },
]);

export default router;
