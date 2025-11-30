import React from "react";
import { Outlet } from "react-router";
import Navbar from "@/components/common/Navbar";

export default function MainLayout() {
  return (
    <div>
      <section className="bg-primary/1">
        <Navbar />
      </section>
      <Outlet />
    </div>
  );
}
