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

  return (
    <div className="xl:p-4 bg-[#F2F5F7] lg:h-screen h-svh overflow-hidden flex flex-col xl:flex-row gap-4">
      <div className="hidden xl:block h-full">
        <Sidebar />
      </div>

      {/* mobile sidebar */}
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <div className="flex items-center justify-between bg-white border-b border-gray-200 py-2 px-4 shadow-xs xl:hidden fixed top-0 w-full z-50">
          <Link
            to={"/dashboard"}
            className="p-1 bg-linear-to-br from-[#971DFE] to-[#C289E8] border border-purple-500 rounded-full flex items-center justify-center cursor-pointer"
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
                  className={`w-8 h-[3px] rounded-full transition-all duration-300 bg-gray-800 ${
                    sheetOpen ? "rotate-45 translate-y-2" : "group-hover:w-6"
                  }`}
                ></span>
                <span
                  className={`w-8 h-[3px] rounded-full transition-all duration-300 bg-gray-800 ${
                    sheetOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`w-8 h-[3px] rounded-full transition-all duration-300 bg-gray-800 ${
                    sheetOpen ? "-rotate-45 -translate-y-2.5" : "group-hover:w-4"
                  }`}
                ></span>
              </div>
            </button>
          </SheetTrigger>
        </div>

        <SheetContent side="left" className="p-0 w-64 border-none bg-transparent">
          <Sidebar
            setSheetOpen={setSheetOpen}
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
