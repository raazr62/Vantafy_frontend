import Sidebar from "@/components/DashboardComponent/Sidebar";
import React from "react";
import { Outlet } from "react-router";

export default function DashboardLayout() {
  return (
    <div className="p-4 bg-[#F2F5F7] h-screen flex">
      <Sidebar />
      <div className="px-5 w-full flex-1 flex flex-col min-h-0">
        <Outlet />
      </div>
    </div>
  );
}
