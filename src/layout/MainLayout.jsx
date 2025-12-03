import React from "react";
import { Outlet } from "react-router";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export default function MainLayout() {
  return (
    <div>
      <section className="bg-primary/1">
        <Navbar />
      </section>
      <Outlet />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
