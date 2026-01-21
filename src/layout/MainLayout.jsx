import React from "react";
import { Outlet } from "react-router";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { useSystemInfo } from "@/hooks/useSystemInfo";

export default function MainLayout() {
  const {
    data: systemData,
    isLoading: isSystemDataLoading,
    isError: isSystemDataError,
  } = useSystemInfo();
  return (
    <>
      <section className="sticky top-0 left-0 bg-linear-to-b from-[#971DFE] to-[#C289E8] border-b-2 border-b-white z-50 items-center w-full">
        <Navbar
          systemData={systemData}
          isSystemDataLoading={isSystemDataLoading}
          isSystemDataError={isSystemDataError}
        />
      </section>
      <Outlet />
      <footer>
        <Footer
          systemData={systemData}
          isSystemDataLoading={isSystemDataLoading}
          isSystemDataError={isSystemDataError}
        />
      </footer>
    </>
  );
}
