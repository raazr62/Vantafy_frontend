import { lazy } from "react";
import { Navigate } from "react-router";

const NotFound = lazy(() => import("@/pages/NotFound/NotFound"));
const Overview = lazy(() => import("@/pages/DashboardPages/Overview"));
const MyAccount = lazy(() => import("@/pages/DashboardPages/MyAccount"));
const RequestRemoval = lazy(() =>
  import("@/pages/DashboardPages/RequestRemoval")
);

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
    path: "my-account",
    element: <MyAccount />,
  },
  {
    path: "request-removal",
    element: <RequestRemoval />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
