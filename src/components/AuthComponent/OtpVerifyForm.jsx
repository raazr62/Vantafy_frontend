import React, { useState } from "react";
import { Link } from "react-router";
import { EmailIconSVG, GoBackArrowSVG } from "../SVG/AuthLayoutSVG";
import { Button } from "../ui/button";
import toast from "react-hot-toast";
import OtpInput from "@/shared/AuthShared/OtpInput";
import { useResendOtp } from "@/hooks/useResendOtp";
import { useVerifyOtp } from "@/hooks/useVerifyOtp";

const OtpVerifyForm = ({ fromPage }) => {
  const [otp, setOtp] = useState(null);
  const [timeLeft, setTimeLeft] = useState(180);
  const [canResend, setCanResend] = useState(false);
  const { mutate: resendOtp } = useResendOtp();
  const { mutate: verifyOtp } = useVerifyOtp(fromPage);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins < 10 ? `0${mins}` : mins}:${secs < 10 ? `0${secs}` : secs}`;
  };

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

    setTimeLeft(180);
    setCanResend(false);

    const resendData = {
      email: localStorage.getItem("email"),
      purpose: localStorage.getItem("purpose"),
    };

    resendOtp(resendData);
  };

  const handleOtpVerify = (e) => {
    e.preventDefault();

    if (!otp || otp.length !== 6) {
      toast.error("Please enter the 6-digit OTP.");
      return;
    }
    const verifyOtpData = {
      email: localStorage.getItem("email"),
      purpose: localStorage.getItem("purpose"),
      otp: otp.toString(),
    };

    verifyOtp(verifyOtpData);
  };

  return (
    <div className="flex-[55%] flex flex-col items-center justify-center w-full relative px-4 xl:px-0">
      <Link
        to={fromPage}
        className="left-5 top-5 lg:left-12 lg:top-12 absolute text-slate-500 hover:text-red-500"
      >
        <GoBackArrowSVG />
      </Link>

      <div className="max-w-2xl mx-auto w-full">
        <p className="p-3 sm:p-3.5 bg-[#EFE6FD] rounded-full w-fit">
          <EmailIconSVG className={"text-[#9654F4] w-6 h-6 sm:w-8 sm:h-8"} />
        </p>
        <p className="text-xl sm:text-2xl lg:text-3xl xl:text-[32px] font-bold mt-2">
          OTP Verification
        </p>
        <p className="text-xs sm:text-sm text-[#425583] mt-1 sm:mt-2 mb-6 sm:mb-8 md:mb-10">
          Check your email to see the verification code
        </p>
        <form
          onSubmit={handleOtpVerify}
          className="w-full flex flex-col gap-2 sm:gap-4"
        >
          {/* OTP */}
          <OtpInput length={6} onChange={(value) => setOtp(value)} />

          <Button
            type={"submit"}
            className={"sm:py-6 my-2 sm:my-4 text-sm sm:text-base"}
            variant={"formSubmit"}
          >
            Verify
          </Button>
        </form>
        <div className="mt-2 text-center text-sm sm:text-base">
          {!canResend ? (
            <p>
              Resend code in{" "}
              <span className="text-xs sm:text-sm text-blue-500 font-mono">
                {formatTime(timeLeft)}
              </span>
            </p>
          ) : (
            <p>
              Didn't receive the code?{" "}
              <button
                onClick={handleResend}
                className="text-xs sm:text-sm text-blue-500 hover:underline cursor-pointer"
              >
                Resend code
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default OtpVerifyForm;
