import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { IoIosClose } from "react-icons/io";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";

import {
  EmailIconSVG,
  GoogleAuthSVG,
  LockIconSVG,
  ProfileIconSVG,
} from "../SVG/AuthLayoutSVG";
import CommonInputField from "@/shared/AuthShared/CommonInputField";
import { Button } from "../ui/button";
import toast from "react-hot-toast";

const SignUpForm = () => {
  const [checked, setChecked] = useState(false);
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    if (event.target.checked) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Sign In Logic Here
    toast.success("Signed up successfully!");
    navigate("/auth/otp-verify", { state: { from: "/auth/signup" } });
  };

  const handleGoogleLogin = () => {
    toast.success("Signed up successfully with Google!");
    navigate("/");
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
        <p className="text-[32px] font-bold">Get Started Now</p>
        <p className="text-sm text-[#425583] mt-2 mb-10">
          Let’s create your account
        </p>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-4 mt-4 "
        >
          {/* Select Role */}
          <div className="flex items-center justify-between w-full gap-3.5">
            {/* Agency Owner */}
            <div
              onClick={() => setRole("Agency Owner")}
              className="border border-sky-500 rounded-xl py-4 w-full flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <div className="w-4 h-4 rounded-full border border-sky-500 flex items-center justify-center">
                {role === "Agency Owner" && (
                  <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                )}
              </div>
              <label htmlFor="agency-owner" className="text-sm">
                Agency Owner
              </label>
            </div>

            {/* Customer */}
            <div
              onClick={() => setRole("Customer")}
              className="border border-sky-500 rounded-xl py-4 w-full flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <div className="w-4 h-4 rounded-full border border-sky-500 flex items-center justify-center">
                {role === "Customer" && (
                  <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                )}
              </div>
              <label htmlFor="agency-owner" className="text-sm">
                Customer
              </label>
            </div>
          </div>

          {/* Email */}
          <CommonInputField
            label="Full Name"
            type="text"
            name="fullName"
            placeholder="Enter your full name."
            icon={ProfileIconSVG}
            required
          />

          {/* Email */}
          <CommonInputField
            label="Email"
            type="email"
            name="email"
            placeholder="example@gmail.com"
            icon={EmailIconSVG}
            required
          />

          {/* Password */}
          <CommonInputField
            label="Password"
            type="password"
            name="password"
            placeholder="Set your password"
            icon={LockIconSVG}
            required
          />

          {/* Confirm Password */}
          <CommonInputField
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            icon={LockIconSVG}
            required
          />

          {/* Remember & Forgot Pass */}
          <label className="flex items-center gap-2.5 cursor-pointer">
            <input
              type="checkbox"
              className="sr-only"
              checked={checked}
              onChange={handleInputChange}
              required
            />
            {checked ? (
              <ImCheckboxChecked size={16} className="text-sky-500" />
            ) : (
              <ImCheckboxUnchecked size={16} className="text-sky-500" />
            )}
            <span className="text-sm">
              I agree to <span className="text-sky-500">Term & Condition</span>
            </span>
          </label>

          <Button
            type={"submit"}
            className={"py-6 my-4"}
            variant={"formSubmit"}
          >
            Sign up
          </Button>
        </form>
        <div className="flex items-center gap-2.5">
          <hr className="border-[#EFE6FD] w-full" />
          <span className="font-medium text-[#425583]">or</span>
          <hr className="border-[#EFE6FD] w-full" />
        </div>

        <button
          onClick={handleGoogleLogin}
          className="w-full mt-4 mb-8 py-4 border border-purple-500 rounded-xl cursor-pointer text-sm font-medium flex items-center pl-5"
        >
          <GoogleAuthSVG className={"w-4.5 h-4.5"} />{" "}
          <span className="w-full text-center">Sign up with Google</span>
        </button>

        <p className="text-center text-[#425583] text-sm">
          Already have an account?{" "}
          <Link className="text-[#9654F4] font-medium" to={"/auth/signin"}>
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
