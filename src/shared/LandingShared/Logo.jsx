import { LocalImages } from "@/components/AllPhotos/HomeLocalImages";
import { cn } from "@/lib/utils";
import React from "react";

const Logo = ({ className }) => {
  return (
    <img
      className={cn("w-35", className)}
      src={LocalImages.vantafyWhiteFulltextLogo}
      alt="Vantafy"
    />
  );
};

export default Logo;
