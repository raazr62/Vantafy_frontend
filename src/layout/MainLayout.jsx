import React, { useEffect, Suspense } from "react";
import { Outlet, useLocation } from "react-router";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { useSystemInfo } from "@/hooks/useSystemInfo";

export default function MainLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Disable browser default scroll restoration on page reload
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    // Always start at top on page reload/refresh
    window.scrollTo(0, 0);

    // Clear any residual URL hash (e.g. #faq) on reload so it doesn't jump to FAQ
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, [pathname]);

  const {
    data,
    isLoading: isSystemDataLoading,
    isError: isSystemDataError,
  } = useSystemInfo();
  const systemData = data?.data;
  return (
    <>
      <section className="sticky top-0 left-0 bg-linear-to-b from-[#971DFE] to-[#C289E8] border-b-2 border-b-white z-50 items-center w-full">
        <Navbar
          systemData={systemData}
          isSystemDataLoading={isSystemDataLoading}
          isSystemDataError={isSystemDataError}
        />
      </section>
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div></div>}>
        <Outlet />
      </Suspense>
      <footer>
        <Footer
          systemData={systemData}
          isSystemDataLoading={isSystemDataLoading}
          isSystemDataError={isSystemDataError}
        />
      </footer>
    </>
  );
}
