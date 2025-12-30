import React from "react";
import { Outlet } from "react-router";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export default function MainLayout() {
  return (
    <>
      <section className="sticky top-0 left-0 bg-linear-to-b from-[#971DFE] to-[#C289E8] border-b-2 border-b-white z-50 items-center w-full">
        <Navbar />
      </section>
      <Outlet />
      <footer>
        <Footer />
      </footer>
    </>
  );
}
