import Sidebar from "@/components/DashboardComponent/Sidebar";
import React, { useState, useEffect, Suspense } from "react";
import { Link, Navigate, Outlet } from "react-router";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Logo from "@/shared/LandingShared/Logo";
import { selectUser } from "@/Redux/slices/authSlice";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

export default function DashboardLayout() {
  const [sheetOpen, setSheetOpen] = useState(false);
  const user = useSelector(selectUser);

  const hasSubscription = Boolean(
    user?.has_subscription ?? user?.user?.has_subscription
  );

  useEffect(() => {
    if (user && !hasSubscription) {
      toast.error("Please purchase a plan to access this page");
    }
  }, [user, hasSubscription]);

  if (user && !hasSubscription) {
    return <Navigate to="/pricing-plan" />;
  }

  return (
    <div className="xl:p-4 bg-[#2b0033] lg:h-screen h-svh overflow-hidden flex flex-col xl:flex-row gap-4">
      <div className="hidden xl:block h-full">
        <Sidebar />
      </div>

      {/* mobile sidebar */}
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <div className="flex items-center justify-between bg-[#3c0048] border-b border-purple-900/50 py-2 px-4 backdrop-blur-sm xl:hidden fixed top-0 w-full z-50">
          <Link
            to={"/dashboard"}
            className="flex items-center justify-center cursor-pointer"
          >
            <Logo variant="whiteFull" />
          </Link>

          <SheetTrigger asChild>
            <button
              type="button"
              className="inline-flex items-center p-2 w-8 h-8 justify-center text-sm group cursor-pointer"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col items-center justify-center w-10 h-10 space-y-1.5">
                <span
                  className={`w-8 h-[3px] rounded-full transition-all duration-300 bg-white ${
                    sheetOpen ? "rotate-45 translate-y-2" : "group-hover:w-6"
                  }`}
                ></span>
                <span
                  className={`w-8 h-[3px] rounded-full transition-all duration-300 bg-white ${
                    sheetOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`w-8 h-[3px] rounded-full transition-all duration-300 bg-white ${
                    sheetOpen ? "-rotate-45 -translate-y-2.5" : "group-hover:w-4"
                  }`}
                ></span>
              </div>
            </button>
          </SheetTrigger>
        </div>

        <SheetContent side="left" className="p-0 w-60 md:pt-10 border-none bg-[#3c0048]">
          <Sidebar
            setSheetOpen={setSheetOpen}
            closeSheet={() => setSheetOpen(false)}
          />
        </SheetContent>
      </Sheet>

      <div className="px-2 lg:px-5 w-full flex-1 flex flex-col min-h-0 lg:max-h-[calc(100vh-80px)] xl:max-h-full mt-14 xl:mt-0 overflow-y-auto xl:overflow-visible">
        <Suspense
          fallback={
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}
