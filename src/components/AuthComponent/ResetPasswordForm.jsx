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
        "We've emailed you a verification code to reset your password."
      );
      e.target.reset();
      navigate("/auth/otp-verify", { state: { from: "/auth/reset-password" } });
    }
  };
  return (
    <div className="px-4 xl:px-0 flex-[55%] flex flex-col items-center justify-center w-full relative">
      <Link
        to="/auth/signin"
        className="left-5 top-5 lg:left-12 lg:top-12 absolute text-slate-500 hover:text-red-500"
      >
        <GoBackArrowSVG />
      </Link>

      <div className="max-w-2xl mx-auto w-full">
        <p className="p-3 sm:p-3.5 bg-[#EFE6FD] rounded-full w-fit">
          <EmailIconSVG className={"text-[#9654F4] w-6 h-6 sm:w-8 sm:h-8"} />
        </p>
        <p className="text-xl sm:text-2xl lg:text-3xl xl:text-[32px] font-bold mt-2">
          Forgot Password?
        </p>
        <p className="text-xs sm:text-sm text-[#425583] mt-1 sm:mt-2 mb-6 sm:mb-8 md:mb-10">
          Enter your email to reset your password
        </p>
        <form
          onSubmit={handleResetPassword}
          className="w-full flex flex-col gap-4"
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
            className={"sm:py-6 my-2 sm:my-4 text-sm sm:text-base mt-1 sm:mt-4"}
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
