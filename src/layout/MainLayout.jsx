import React from "react";
import { Outlet } from "react-router";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export default function MainLayout() {
  return (
    <div>
      <section className="fixed left-1/2 -translate-x-1/2 bg-white/5 backdrop-blur-lg top-0 z-50 items-center w-full border-b border-primary/10">
        <Navbar />
      </section>
      <Outlet />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
