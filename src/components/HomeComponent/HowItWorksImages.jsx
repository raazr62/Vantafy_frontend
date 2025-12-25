import React from "react";
import { LocalImages } from "../AllPhotos/HomeLocalImages";

const HowItWorksImages = () => {
  return (
    <img
      className="lg:w-4/9 xl:w-7/9 hidden lg:block"
      src={LocalImages.howItWorks}
      alt="How It Works Image"
    />
  );
};

export default HowItWorksImages;
