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
import PaymentSuccess from "@/pages/PaymentSuccess";
import PaymentCancel from "@/pages/PaymentCancel";
import { dashboardRoutes } from "./DashboardRoutes";
import AxiosInterceptor from "@/components/AxiosInterceptor";
import ProtectedRoute from "@/components/ProtectedRoute";

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
        element: (
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        ),
        children: [...dashboardRoutes],
      },
      {
        path: "/plans",
        element: <Navigate to="/dashboard/plans" replace />,
      },
      {
        path: "/auth",
        element: <AuthLayout />,
        children: [...authRoutes],
      },
      {
        path: "/select-niches",
        element: (
          <ProtectedRoute>
            <SelectNiches />
          </ProtectedRoute>
        ),
      },
      {
        path: "/connect-accounts",
        element: (
          <ProtectedRoute>
            <ConnectAccounts />
          </ProtectedRoute>
        ),
      },
      {
        path: "/recommend-plan",
        element: (
          <ProtectedRoute>
            <RecommendPlan />
          </ProtectedRoute>
        ),
      },
      {
        path: "/pricing-plan",
        element: (
          <ProtectedRoute>
            <PricingPlan />
          </ProtectedRoute>
        ),
      },
      {
        path: "/payment-success",
        element: (
          <ProtectedRoute>
            <PaymentSuccess />
          </ProtectedRoute>
        ),
      },
      {
        path: "/payment-cancel",
        element: (
          <ProtectedRoute>
            <PaymentCancel />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
