import { lazy } from "react";

const NotFound = lazy(() => import("@/pages/NotFound/NotFound"));
const Home = lazy(() => import("@/pages/LandingPages/Home"));
const DesignsDemo = lazy(() => import("@/pages/LandingPages/DesignsDemo"));

export const generalRoutes = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: "designs-demo",
    element: <DesignsDemo />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
