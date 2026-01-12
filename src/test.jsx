import React from "react";
import { FcGoogle } from "react-icons/fc";

import { toast } from "sonner";
import { useNavigate } from "react-router";
import { useGoogleLogin } from "@react-oauth/google";

export default function GoogleSignInBtn() {
  const navigate = useNavigate();

  const googleLogin = useGoogleLogin({
    flow: "implicit",

    onSuccess: async (tokenResponse) => {
      try {
        const res = await axiosPublic.post("/google-auth/", {
          access_token: tokenResponse.access_token,
        });

        toast.success(res.data.message || "Sign In Successful!");
        navigate("/dashboard");
      } catch (error) {
        toast.error("Google login failed");
      }
    },

    onError: () => {
      toast.error("Google popup closed or failed");
    },
  });

  return (
    <div className="mt-4">
      <button
        onClick={googleLogin}
        className="cursor-pointer border rounded-xl hover:bg-primary/10 text-center flex justify-center items-center duration-300 py-4 w-full"
      >
        <div className="flex items-center gap-2">
          <span className="font-semibold">Create account with Google</span>
          <FcGoogle size={24} />
        </div>
      </button>
    </div>
  );
}
