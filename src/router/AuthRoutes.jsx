import { lazy } from "react";
import { Navigate } from "react-router";

const SignIn = lazy(() => import("@/pages/AuthPages/SignIn"));
const NotFound = lazy(() => import("@/pages/NotFound/NotFound"));

export const authRoutes = [
  {
    index: true,
    element: <Navigate to="signin" replace />,
  },
  {
    path: "signin",
    element: <SignIn />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
