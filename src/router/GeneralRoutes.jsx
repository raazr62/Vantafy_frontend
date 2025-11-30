import { lazy } from "react";

const NotFound = lazy(() => import("@/pages/NotFound/NotFound"));
const Home = lazy(() => import("@/pages/LandingPages/Home"));

export const generalRoutes = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
