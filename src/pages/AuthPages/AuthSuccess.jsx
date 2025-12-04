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
        navigate("/auth/signin");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [fromPage, navigate]);

  return (
    <div className="h-screen flex">
      <StartarBanner />
      <div className="flex-[55%] flex flex-col items-center justify-center w-full">
        <div className="space-y-3">
          <SuccessIconSVG />
          {fromPage === "/auth/signup" && (
            <>
              <p className="text-5xl font-bold">
                Your Account
                <br />
                Successfully Created
              </p>
              <p className="text-[#425583]">Let’s start your journey</p>{" "}
            </>
          )}

          {fromPage === "/auth/reset-password" && (
            <>
              <p className="text-5xl font-bold">
                Your Password
                <br />
                Successfully Changed
              </p>
              <p className="text-[#425583]">
                Sign in to your account with your new password
              </p>

              <Button
                onClick={() => navigate("/auth/signin")}
                variant={"formSubmit"}
                className={"py-5 mt-6"}
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
