import React from "react";
import { Link, useNavigate } from "react-router";
import { GoBackArrowSVG, LockIconSVG } from "../SVG/AuthLayoutSVG";
import CommonInputField from "@/shared/AuthShared/CommonInputField";
import { Button } from "../ui/button";
import toast from "react-hot-toast";

import { usePost } from "@/hooks/useApi";
import { handleApiError } from "@/utils/apiUtils";

const ChangePasswordForm = () => {
  const navigate = useNavigate();

  const { mutate: resetPassword, isPending } = usePost({
    endpoint: "/reset-password/",
    onSuccess: () => {
      toast.success("Your password has been successfully updated!");
      localStorage.removeItem("email");
      localStorage.removeItem("purpose");
      localStorage.removeItem("otp");
      localStorage.removeItem("reset_token");
      navigate("/auth/success", { state: { from: "/auth/reset-password" } });
    },
    onError: handleApiError,
  });

  // Handle Change Password
  const handleChangePassword = (e) => {
    e.preventDefault();
    const newPassword = e.target.newPassword.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match. Please try again.");
      return;
    }

    const email = localStorage.getItem("email");
    const otp = localStorage.getItem("otp");
    const resetToken = localStorage.getItem("reset_token");
    const purpose = localStorage.getItem("purpose") || "password_reset";

    const payload = {
      email,
      purpose,
      new_password: newPassword,
      confirm_password: confirmPassword,
      password: newPassword,
    };
    if (otp) payload.otp = otp;
    if (resetToken) payload.reset_token = resetToken;

    resetPassword(payload);
  };

  return (
    <div className="flex-[55%] flex flex-col items-center justify-center w-full relative px-4 xl:px-0">
      <Link
        to="/auth/otp-verify"
        className="left-5 top-5 lg:left-12 lg:top-12 absolute text-slate-500 hover:text-red-500"
      >
        <GoBackArrowSVG />
      </Link>

      <div className="max-w-2xl mx-auto w-full">
        <p className="p-3 sm:p-3.5 bg-[#EAF7FF] rounded-full w-fit">
          <LockIconSVG className={"w-6 h-6 sm:w-8 sm:h-8"} />
        </p>
        <p className="text-xl sm:text-2xl lg:text-3xl xl:text-[32px] font-bold mt-2">
          Set New Password
        </p>
        <p className="text-xs sm:text-sm text-[#425583] mt-1 sm:mt-2 mb-6 sm:mb-8 md:mb-10">
          Enter your new password to complete the reset process
        </p>
        <form
          onSubmit={handleChangePassword}
          className="w-full flex flex-col gap-2 sm:gap-4"
        >
          {/* New Password */}
          <CommonInputField
            label="New Password"
            type="password"
            name="newPassword"
            placeholder="Create a strong password"
            icon={LockIconSVG}
            required
          />
          {/* Confirm New Password */}
          <CommonInputField
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            placeholder="Re-enter your new password"
            icon={LockIconSVG}
            preventPaste={true}
            required
          />
          <Button
            type={"submit"}
            className={"sm:py-6 my-2 sm:my-4 text-sm sm:text-base"}
            variant={"formSubmit"}
          >
            Submit
          </Button>
        </form>

        <p className="text-xs sm:text-sm text-center">
          Remember old password?{" "}
          <Link to={"/auth/signin"} className="text-blue-500 hover:underline">
            Signin
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ChangePasswordForm;
