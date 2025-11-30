import { lazy } from "react";
import { Navigate } from "react-router";

const NotFound = lazy(() => import("@/pages/NotFound/NotFound"));
const Overview = lazy(() => import("@/pages/DashboardPages/Overview"));

export const dashboardRoutes = [
  {
    index: true,
    element: <Navigate to="overview" replace />,
  },
  {
    path: "overview",
    element: <Overview />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
