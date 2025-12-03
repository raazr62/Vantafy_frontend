import React from "react";
import ResetPasswordForm from "@/components/AuthComponent/ResetPasswordForm";
import LockBanner from "@/shared/AuthShared/LockBanner";

const ResetPassword = () => {
  return (
    <div className="h-screen flex">
      <LockBanner />
      <ResetPasswordForm />
    </div>
  );
};

export default ResetPassword;
