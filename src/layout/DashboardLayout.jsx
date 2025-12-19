import Sidebar from "@/components/DashboardComponent/Sidebar";
import React, { useState } from "react";
import { Link, Outlet } from "react-router";
import { IoMenu } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Logo from "@/shared/LandingShared/Logo";

export default function DashboardLayout() {
  const [sheetOpen, setSheetOpen] = useState(false);
  return (
    <div className="xl:p-4 bg-[#F2F5F7] lg:h-screen min-h-svh flex flex-col xl:flex-row">
      <div className="hidden xl:block">
        <Sidebar />
      </div>

      {/* mobile sidebar */}
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <div className="flex items-center bg-primary/50 py-2 px-4 backdrop-blur-sm xl:hidden fixed top-0 w-full z-50">
          <SheetTrigger asChild>
            <Button className="xl:hidden rounded-lg py-1.5! px-2.5!">
              <IoMenu className="sm:size-8! size-6" size={24} />
            </Button>
          </SheetTrigger>
          <Link
            to={"/"}
            className="px-2 flex items-center justify-center cursor-pointer"
          >
            <Logo variant="whiteFull" />
          </Link>
        </div>

        <SheetContent side="left" className="p-0 w-60 md:pt-10 border-none">
          <Sidebar closeSheet={() => setSheetOpen(false)} />
        </SheetContent>
      </Sheet>

      <div className="px-2 lg:px-5 w-full flex-1 flex flex-col min-h-0 lg:max-h-[calc(100vh-80px)] xl:max-h-full mt-17 xl:mt-0">
        <Outlet />
      </div>
    </div>
  );
}
