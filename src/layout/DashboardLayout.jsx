import Sidebar from "@/components/DashboardComponent/Sidebar";
import React from "react";
import { Outlet } from "react-router";

export default function DashboardLayout() {
  return (
    <div className="p-4 bg-[#F2F5F7] h-svh flex">
      <Sidebar />
      <div className="px-5">
        <Outlet />
      </div>
    </div>
  );
}
