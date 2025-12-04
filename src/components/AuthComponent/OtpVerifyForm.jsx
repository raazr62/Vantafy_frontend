import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { EmailIconSVG, GoBackArrowSVG } from "../SVG/AuthLayoutSVG";
import { Button } from "../ui/button";
import toast from "react-hot-toast";
import OtpInput from "@/shared/AuthShared/OTPInput";

const OtpVerifyForm = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(null);
  const [timeLeft, setTimeLeft] = useState(60);
  const [canResend, setCanResend] = useState(false);

  React.useEffect(() => {
    if (timeLeft <= 0) {
      setCanResend(true);
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleResend = () => {
    if (!canResend) return;

    setTimeLeft(60);
    setCanResend(false);

    // Resend API will be call here
    toast.success("OTP resent.");
  };

  const handleResetPassword = (e) => {
    e.preventDefault();

    if (!otp || otp.length !== 6) {
      toast.error("Please enter the 6-digit OTP.");
      return;
    }
    console.log(otp);
    toast.success("OTP Verified Successfully.");
    // navigate("/auth/signin");
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
        <p className="text-[32px] font-bold mt-2">OTP Verification</p>
        <p className="text-sm text-[#425583] mt-2 mb-10">
          Check your email to see the verification code
        </p>
        <form
          onSubmit={handleResetPassword}
          className="w-full flex flex-col gap-4 mt-4 "
        >
          {/* Email */}
          <OtpInput length={6} onChange={(value) => setOtp(value)} />

          <Button
            type={"submit"}
            className={"py-6 my-4"}
            variant={"formSubmit"}
          >
            Verify
          </Button>
        </form>
        <div className="mt-2 text-center">
          {!canResend ? (
            <p>
              Resend code in{" "}
              <span className="text-sm text-blue-500">
                00:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}
              </span>
            </p>
          ) : (
            <p>
              Didn't receive the code?{" "}
              <span
                onClick={handleResend}
                className="text-sm text-blue-500 hover:underline cursor-pointer"
              >
                Resend code
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default OtpVerifyForm;
