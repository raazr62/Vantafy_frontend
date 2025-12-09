import { createBrowserRouter, Navigate } from "react-router";
import MainLayout from "@/layout/MainLayout";
import AuthLayout from "@/layout/AuthLayout";
import DashboardLayout from "@/layout/DashboardLayout";
import { generalRoutes } from "./GeneralRoutes";
import { authRoutes } from "./AuthRoutes";
import Overview from "@/pages/DashboardPages/Overview";
import SelectNiches from "@/pages/SelectNiches";
import ConnectAccounts from "@/pages/ConnectAccounts";
import RecommendPlan from "@/pages/RecommendPlan";
import PricingPlan from "@/pages/PricingPlan";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [...generalRoutes],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="overview" replace />,
      },
      {
        path: "overview",
        element: <Overview />,
      },
    ],
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
]);

export default router;
