import AuthLocalImages from "@/components/AllPhotos/AuthLocalImages";
import React from "react";

const StartarBanner = () => {
  return (
    <div className="hidden lg:block bg-[#FF8DF1] p-16 relative flex-[45%] overflow-hidden">
      <div className="absolute bg-[#7573FF52] w-220 h-220 rounded-full blur-3xl -top-100 -left-100"></div>
      <p className="sm:text-5xl lg:text-5xl xl:text-7xl xl:tracking-wider xl:leading-20 text-white font-bold z-10 relative">
        Start Your
        <br />
        Journey
        <br />
        with Us
      </p>

      <img
        src={AuthLocalImages.authLogo}
        className="w-full absolute -left-1/2 translate-x-1/2 z-0 -bottom-50"
        alt="AuthLogo"
      />
    </div>
  );
};

export default StartarBanner;
