import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";

import {
  EmailIconSVG,
  GoBackArrowSVG,
  GoogleAuthSVG,
  LockIconSVG,
} from "../SVG/AuthLayoutSVG";
import CommonInputField from "@/shared/AuthShared/CommonInputField";
import { Button } from "../ui/button";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useSignIn } from "@/hooks/useSignIn";
import { useGoogleLoginHook } from "@/hooks/useGoogleLoginHook";

const SignInForm = () => {
  const [checked, setChecked] = useState(false);
  const { googleLogin, isPending: isGoogleLoading } = useGoogleLoginHook();
  const { mutate: signIn } = useSignIn();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    signIn(data);
  };

  const handleGoogleLogin = () => {
    googleLogin();
  };

  return (
    <div className="px-4 xl:px-0 flex-[55%] overflow-y-auto h-full">
      <div className="relative flex flex-col items-center justify-center min-h-full">
        <Link
          to="/"
          className="top-1 left-0 xl:left-4 xl:top-4 absolute text-slate-500 hover:text-red-500"
        >
          <GoBackArrowSVG />
        </Link>

        <div className="max-w-2xl mx-auto w-full h-full py-10">
          <p className="text-xl sm:text-2xl lg:text-[32px] font-bold">
            Welcome Back
          </p>
          <p className="text-xs sm:text-sm text-[#425583] mt-1 sm:mt-2 mb-6 sm:mb-8 md:mb-10">
            Sign in to your account
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-4"
          >
            {/* Email */}
            <CommonInputField
              label="Email"
              type="email"
              name="email"
              icon={EmailIconSVG}
              placeholder="example@gmail.com"
              register={register}
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Enter a valid email",
                },
              }}
              error={errors.email}
            />

            {/* Password */}
            <CommonInputField
              label="Password"
              type="password"
              name="password"
              icon={LockIconSVG}
              placeholder="Enter your password"
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

            {/* Remember me & Forgot password */}
            <div className="flex justify-between items-center">
              <label className="flex items-center gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  className="hidden"
                  onChange={(e) => setChecked(e.target.checked)}
                />

                {checked ? (
                  <ImCheckboxChecked className="text-sky-500 text-sm sm:text-base" />
                ) : (
                  <ImCheckboxUnchecked className="text-sky-500 text-sm sm:text-base" />
                )}

                <span className="text-xs sm:text-sm text-sky-500">
                  Remember me
                </span>
              </label>

              <Link
                to="/auth/reset-password"
                className="text-xs sm:text-sm font-medium text-sky-500 hover:underline"
              >
                Forgot Password
              </Link>
            </div>

            {/* Submit */}
            <Button
              type="submit"
              className="sm:py-6 my-2 sm:my-4 text-sm sm:text-base"
              variant="formSubmit"
            >
              Sign in
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

          {/* Google Login */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            disabled={isGoogleLoading}
            className="w-full mt-4 mb-8 py-4 border border-purple-500 rounded-xl cursor-pointer text-xs sm:text-sm font-medium flex items-center pl-5 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <GoogleAuthSVG className="w-4.5 h-4.5" />
            <span className="w-full text-center">
              {isGoogleLoading ? "Signing in..." : "Sign in with Google"}
            </span>
          </button>

          {/* Sign Up redirect */}
          <p className="text-center text-[#425583] text-xs sm:text-sm">
            Don't have an account?{" "}
            <Link className="text-[#9654F4] font-medium" to="/auth/signup">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
