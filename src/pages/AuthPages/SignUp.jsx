import SignUpForm from "@/components/AuthComponent/SignUpForm";
import StartarBanner from "@/shared/AuthShared/StartarBanner";
import React from "react";

export default function SignUp() {
  return (
    <div className="h-screen flex overflow-hidden">
      <StartarBanner />
      <SignUpForm />
    </div>
  );
}
