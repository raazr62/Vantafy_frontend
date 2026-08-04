import { SuccessIconSVG } from "@/components/SVG/AuthLayoutSVG";
import { Button } from "@/components/ui/button";
import StartarBanner from "@/shared/AuthShared/StartarBanner";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

const AuthSuccess = () => {
  const location = useLocation();
  const fromPage = location.state?.from;
  const navigate = useNavigate();

  if (fromPage !== "/auth/reset-password" && fromPage !== "/auth/signup") {
    useEffect(() => {
      navigate("/auth/signin");
    }, []);
  }
  useEffect(() => {
    if (fromPage === "/auth/signup") {
      const timer = setTimeout(() => {
        navigate("/select-niches");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [fromPage, navigate]);

  return (
    <div className="h-screen flex">
      <StartarBanner />
      <div className="flex-[55%] flex flex-col items-center justify-center w-full px-4 xl:px-0">
        <div className="space-y-3">
          <SuccessIconSVG className={"mx-auto lg:mx-0"} />
          {fromPage === "/auth/signup" && (
            <>
              <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center lg:text-left">
                Your Account
                <br />
                Successfully Created
              </p>
              <p className="text-[#425583] text-sm md:text-base text-center lg:text-left">
                Let’s start your journey
              </p>{" "}
            </>
          )}

          {fromPage === "/auth/reset-password" && (
            <>
              <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center lg:text-left">
                Your Password
                <br />
                Successfully Changed
              </p>
              <p className="text-[#425583] text-sm md:text-base text-center lg:text-left">
                Sign in to your account with your new password
              </p>

              <Button
                onClick={() => navigate("/auth/signin")}
                variant={"formSubmit"}
                className={"py-3 sm:py-5 mt-2 sm:mt-6"}
              >
                Sign in
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthSuccess;
