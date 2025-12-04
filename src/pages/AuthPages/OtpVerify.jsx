import OtpVerifyForm from "@/components/AuthComponent/OtpVerifyForm";
import LockBanner from "@/shared/AuthShared/LockBanner";
import React from "react";

const OtpVerify = () => {
  return (
    <div className="h-screen flex">
      <LockBanner />
      <OtpVerifyForm />
    </div>
  );
};

export default OtpVerify;
