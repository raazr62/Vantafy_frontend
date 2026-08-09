import React, { Suspense } from "react";
import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <div>
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div></div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
