import React from "react";
import { Link, useNavigate } from "react-router";
import { GoBackArrowSVG, LockIconSVG } from "../SVG/AuthLayoutSVG";
import CommonInputField from "@/shared/AuthShared/CommonInputField";
import { Button } from "../ui/button";
import toast from "react-hot-toast";

const ChangePasswordForm = () => {
  const navigate = useNavigate();

  // Handle Change Password
  const handleChangePassword = (e) => {
    e.preventDefault();
    const newPassword = e.target.newPassword.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match. Please try again.");
      return;
    }

    // Password change logic
    toast.success("Your password has been successfully updated!");
    e.target.reset();
    navigate("/auth/signin");
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
        <p className="p-3.5 bg-[#EAF7FF] rounded-full w-fit">
          <LockIconSVG className={"w-8 h-8"} />
        </p>
        <p className="text-[32px] font-bold mt-2">Set New Password</p>
        <p className="text-sm text-[#425583] mt-2 mb-10">
          Enter your new password to complete the reset process
        </p>
        <form
          onSubmit={handleChangePassword}
          className="w-full flex flex-col gap-4 mt-4 "
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
          {/*  Confirm New Password */}
          <CommonInputField
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            placeholder="Re-enter your new password"
            icon={LockIconSVG}
            required
          />
          <Button
            type={"submit"}
            className={"py-6 my-4"}
            variant={"formSubmit"}
          >
            Submit
          </Button>
        </form>

        <p className="text-sm text-center">
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
