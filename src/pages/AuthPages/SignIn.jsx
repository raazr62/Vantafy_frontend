import SignInForm from "@/components/AuthComponent/SignInForm";
import StartarBanner from "@/shared/AuthShared/StartarBanner";
import React from "react";

export default function SignIn() {
  return (
    <div className="h-screen flex overflow-hidden">
      <StartarBanner />
      <SignInForm />
    </div>
  );
}
