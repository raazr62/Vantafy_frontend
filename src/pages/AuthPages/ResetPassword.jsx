import React from "react";
import StartarBanner from "@/shared/AuthShared/StartarBanner";
import ResetPasswordForm from "@/components/AuthComponent/ResetPasswordForm";

const ResetPassword = () => {
  return (
    <div className="h-screen flex">
      <StartarBanner />
      <ResetPasswordForm />
    </div>
  );
};

export default ResetPassword;
