import ChangePasswordForm from "@/components/AuthComponent/ChangePasswordForm";
import LockBanner from "@/shared/AuthShared/LockBanner";
import React from "react";

const ChangePassword = () => {
  return (
    <div className="h-screen flex">
      <LockBanner />
      <ChangePasswordForm />
    </div>
  );
};

export default ChangePassword;
