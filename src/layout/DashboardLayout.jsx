import Sidebar from "@/components/DashboardComponent/Sidebar";
import React, { useState } from "react";
import { Outlet } from "react-router";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoMenu } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function DashboardLayout() {
  const [sheetOpen, setSheetOpen] = useState(false);
  return (
    <div className="p-4 bg-[#F2F5F7] h-screen flex">
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* mobile sidebar */}
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetTrigger asChild>
          <Button className="xl:hidden rounded-lg">
            <IoMenu className="size-8!" size={24} />
          </Button>
        </SheetTrigger>

        <SheetContent side="left" className="p-0 w-60 md:pt-10 border-none">
          <Sidebar closeSheet={() => setSheetOpen(false)} />
        </SheetContent>
      </Sheet>

      <div className="px-5 w-full flex-1 flex flex-col min-h-0">
        <Outlet />
      </div>
    </div>
  );
}
