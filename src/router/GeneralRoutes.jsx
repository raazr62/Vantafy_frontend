import { lazy } from "react";

const NotFound = lazy(() => import("@/pages/NotFound/NotFound"));
const Home = lazy(() => import("@/pages/LandingPages/Home"));
const TermsAndConditions = lazy(() => import("@/pages/TermsAndConditions"));

export const generalRoutes = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: "terms-and-conditions",
    element: <TermsAndConditions />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
