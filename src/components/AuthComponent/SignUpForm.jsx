import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { IoIosClose } from "react-icons/io";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { useForm } from "react-hook-form";

import {
  EmailIconSVG,
  GoBackArrowSVG,
  GoogleAuthSVG,
  LockIconSVG,
  ProfileIconSVG,
} from "../SVG/AuthLayoutSVG";
import CommonInputField from "@/shared/AuthShared/CommonInputField";
import { Button } from "../ui/button";
import toast from "react-hot-toast";

const SignUpForm = () => {
  const navigate = useNavigate();

  const [role, setRole] = useState("");
  const [checked, setChecked] = useState(false);
  const [roleError, setRoleError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const password = watch("password");

  const onSubmit = (data) => {
    if (!role) {
      setRoleError(true);
      toast.error("Please select your role");
      return;
    }

    if (!checked) {
      toast.error("You must agree to Terms & Condition");
      return;
    }

    toast.success("Signed up successfully!");
    navigate("/auth/otp-verify", { state: { from: "/auth/signup" } });
  };

  const handleGoogleLogin = () => {
    toast.success("Signed up successfully with Google!");
    navigate("/select-niches");
  };

  return (
    <div className="px-4 xl:px-0 flex-[55%] overflow-y-auto h-full">
      <div className="relative flex flex-col items-center justify-center min-h-full">
        <Link
          to="/auth/signin"
          className="top-1 left-0 xl:left-4 xl:top-4 absolute text-slate-500 hover:text-red-500"
        >
          <GoBackArrowSVG />
        </Link>

        <div className="max-w-2xl mx-auto w-full h-full py-10">
          <p className="text-xl sm:text-2xl lg:text-[32px] font-bold">
            Get Started Now
          </p>
          <p className="text-xs sm:text-sm text-[#425583] mt-1 sm:mt-2 mb-6 sm:mb-8 md:mb-10">
            Let’s create your account
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-3 sm:gap-4"
          >
            {/* Role Selection */}
            <div className="flex items-center justify-between w-full gap-2 sm:gap-3.5">
              {/* Agency Owner */}
              <div
                onClick={() => {
                  setRole("Agency Owner");
                  setRoleError(false);
                }}
                className="border border-sky-500 rounded-xl py-3 sm:py-4 w-full flex items-center justify-center gap-1.5 sm:gap-2.5 cursor-pointer"
              >
                <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border border-sky-500 flex items-center justify-center">
                  {role === "Agency Owner" && (
                    <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                  )}
                </div>
                <label className="text-xs sm:text-sm">Agency Owner</label>
              </div>

              {/* Customer */}
              <div
                onClick={() => {
                  setRole("Customer");
                  setRoleError(false);
                }}
                className="border border-sky-500 rounded-xl py-3 sm:py-4 w-full flex items-center justify-center gap-1.5 sm:gap-2.5 cursor-pointer"
              >
                <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border border-sky-500 flex items-center justify-center">
                  {role === "Customer" && (
                    <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                  )}
                </div>
                <label className="text-xs sm:text-sm">Customer</label>
              </div>
            </div>

            {roleError && (
              <p className="text-center text-red-500 text-xs sm:text-sm">
                Please select your role
              </p>
            )}

            {/* Full Name */}
            <CommonInputField
              label="Full Name"
              name="fullName"
              placeholder="Enter your full name"
              icon={ProfileIconSVG}
              register={register}
              rules={{ required: "Full name is required" }}
              error={errors.fullName}
            />

            {/* Email */}
            <CommonInputField
              label="Email"
              type="email"
              name="email"
              placeholder="example@gmail.com"
              icon={EmailIconSVG}
              register={register}
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email format",
                },
              }}
              error={errors.email}
            />

            {/* Password */}
            <CommonInputField
              label="Password"
              type="password"
              name="password"
              placeholder="Set your password"
              icon={LockIconSVG}
              register={register}
              rules={{
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              }}
              error={errors.password}
            />

            {/* Confirm Password */}
            <CommonInputField
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              icon={LockIconSVG}
              register={register}
              rules={{
                required: "Confirm your password",
                validate: (value) =>
                  value === password || "Passwords do not match",
              }}
              error={errors.confirmPassword}
            />

            {/* Terms Checkbox */}
            <label className="flex items-center gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                className="sr-only"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
              />
              {checked ? (
                <ImCheckboxChecked className="text-sky-500 text-sm sm:text-base" />
              ) : (
                <ImCheckboxUnchecked className="text-sky-500 text-sm sm:text-base" />
              )}
              <span className="text-xs sm:text-sm">
                I agree to{" "}
                <span className="text-sky-500">Term & Condition</span>
              </span>
            </label>

            <Button
              type="submit"
              className="sm:py-6 my-2 sm:my-4 text-sm sm:text-base"
              variant="formSubmit"
            >
              Sign up
            </Button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-2.5">
            <hr className="border-[#EFE6FD] w-full" />
            <span className="font-medium text-[#425583] text-sm sm:text-base">
              or
            </span>
            <hr className="border-[#EFE6FD] w-full" />
          </div>

          {/* Google Auth */}
          <button
            onClick={handleGoogleLogin}
            className="w-full mt-4 mb-8 py-4 border border-purple-500 rounded-xl cursor-pointer text-xs sm:text-sm font-medium flex items-center pl-5"
          >
            <GoogleAuthSVG className="w-4.5 h-4.5" />
            <span className="w-full text-center">Sign up with Google</span>
          </button>

          {/* Login Link */}
          <p className="text-center text-[#425583] text-xs sm:text-sm">
            Already have an account?{" "}
            <Link className="text-[#9654F4] font-medium" to="/auth/signin">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
