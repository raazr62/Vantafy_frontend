import { lazy } from "react";
import { Navigate } from "react-router";

const SignIn = lazy(() => import("@/pages/AuthPages/SignIn"));
const ResetPassword = lazy(() => import("@/pages/AuthPages/ResetPassword"));
const OtpVerify = lazy(() => import("@/pages/AuthPages/OtpVerify"));
const ChangePassword = lazy(() => import("@/pages/AuthPages/ChangePassword"));
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
    path: "reset-password",
    element: <ResetPassword />,
  },
  {
    path: "otp-verify",
    element: <OtpVerify />,
  },
  {
    path: "change-password",
    element: <ChangePassword />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
