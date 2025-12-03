import React, { useState } from "react";
import { Link } from "react-router";
import { IoIosClose } from "react-icons/io";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";

import { EmailIconSVG, GoogleAuthSVG, LockIconSVG } from "../SVG/AuthLayoutSVG";
import CommonInputField from "@/shared/AuthShared/CommonInputField";
import { Button } from "../ui/button";

const SignInForm = () => {
  const [checked, setChecked] = useState(false);

  const handleInputChange = (event) => {
    if (event.target.checked) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  };

  return (
    <div className="flex-[55%] flex flex-col items-center justify-center w-full">
      <Link
        to="/"
        className="right-12 top-12 absolute text-slate-500 hover:text-red-500"
      >
        <IoIosClose size={36} />
      </Link>

      <div className="max-w-2xl mx-auto w-full">
        <p className="text-[32px] font-bold">Welcome Back</p>
        <p className="text-sm text-[#425583] mt-2 mb-10">
          Sign in to your account
        </p>
        <form className="w-full flex flex-col gap-4 mt-4 ">
          {/* Email */}
          <CommonInputField
            label="Email"
            type="email"
            name="email"
            placeholder="example@gmail.com"
            icon={EmailIconSVG}
          />

          {/* Password */}
          <CommonInputField
            label="Password"
            type="password"
            name="password"
            placeholder="Enter your password"
            icon={LockIconSVG}
          />

          {/* Remember & Forgot Pass */}
          <div className="flex justify-between items-center">
            <label className="flex items-center gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                className="hidden"
                onChange={handleInputChange}
              />
              {checked ? (
                <ImCheckboxChecked size={16} className="text-sky-500" />
              ) : (
                <ImCheckboxUnchecked size={16} className="text-sky-500" />
              )}

              <span className="text-sm text-sky-500">Remember me</span>
            </label>

            <Link
              to={"/auth/reset-password"}
              className="text-sm font-medium text-sky-500 hover:underline"
            >
              Forgot Password
            </Link>
          </div>

          <Button
            type={"submit"}
            className={"py-6 my-4"}
            variant={"formSubmit"}
          >
            Sign in
          </Button>
        </form>
        <div className="flex items-center gap-2.5">
          <hr className="border-[#EFE6FD] w-full" />
          <span className="font-medium text-[#425583]">or</span>
          <hr className="border-[#EFE6FD] w-full" />
        </div>

        <button className="w-full mt-4 mb-8 py-4 border border-purple-500 rounded-xl cursor-pointer text-sm font-medium flex items-center pl-5">
          <GoogleAuthSVG className={"w-4.5 h-4.5"} />{" "}
          <span className="w-full text-center">Sign in with Google</span>
        </button>

        <p className="text-center text-[#425583] text-sm">
          Don't have an account?{" "}
          <Link className="text-[#9654F4] font-medium" to={"/auth/signup"}>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInForm;
