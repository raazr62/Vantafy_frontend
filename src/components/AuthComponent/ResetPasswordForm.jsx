import React from "react";
import { Link, useNavigate } from "react-router";
import { EmailIconSVG, GoBackArrowSVG } from "../SVG/AuthLayoutSVG";
import CommonInputField from "@/shared/AuthShared/CommonInputField";
import { Button } from "../ui/button";
import toast from "react-hot-toast";

const ResetPasswordForm = () => {
  const navigate = useNavigate();
  const handleResetPassword = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    if (!email) {
      toast.error("Please enter your email.");
      return;
    }
    // Reset Password Logic
    else {
      toast.success(
        "If an account with that email exists, a password reset link has been sent."
      );
      e.target.reset();
      navigate("/auth/otp-verify");
    }
  };
  return (
    <div className="flex-[55%] flex flex-col items-center justify-center w-full relative">
      <Link
        to="/auth/signin"
        className="left-12 top-12 absolute text-slate-500 hover:text-red-500"
      >
        <GoBackArrowSVG />
      </Link>

      <div className="max-w-2xl mx-auto w-full">
        <p className="p-3.5 bg-[#EFE6FD] rounded-full w-fit">
          <EmailIconSVG className={"text-[#9654F4] w-8 h-8"} />
        </p>
        <p className="text-[32px] font-bold mt-2">Forgot Password?</p>
        <p className="text-sm text-[#425583] mt-2 mb-10">
          Enter your email to reset your password
        </p>
        <form
          onSubmit={handleResetPassword}
          className="w-full flex flex-col gap-4 mt-4 "
        >
          {/* Email */}
          <CommonInputField
            label="Email"
            type="email"
            name="email"
            placeholder="example@gmail.com"
            icon={EmailIconSVG}
          />

          <Button
            type={"submit"}
            className={"py-6 my-4"}
            variant={"formSubmit"}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
