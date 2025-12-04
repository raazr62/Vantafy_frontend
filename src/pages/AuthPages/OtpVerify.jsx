import OtpVerifyForm from "@/components/AuthComponent/OtpVerifyForm";
import LockBanner from "@/shared/AuthShared/LockBanner";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

const OtpVerify = () => {
  const location = useLocation();
  const fromPage = location.state?.from;
  const navigate = useNavigate();

  if (fromPage !== "/auth/reset-password" && fromPage !== "/auth/signup") {
    useEffect(() => {
      navigate("/auth/signin");
    }, []);
  }

  return (
    <div className="h-screen flex">
      <LockBanner />
      <OtpVerifyForm fromPage={fromPage || "Unknown"} />
    </div>
  );
};

export default OtpVerify;
