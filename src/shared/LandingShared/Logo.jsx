import { LocalImages } from "@/components/AllPhotos/HomeLocalImages";
import { cn } from "@/lib/utils";
import React from "react";

const Logo = ({ className, variant = "whiteFull" }) => {
  const logoSrc =
    variant === "whiteFull"
      ? LocalImages.vantafyWhiteFulltextLogo
      : variant === "grayFull"
      ? LocalImages.vantafyGrayFulltextLogo
      : variant === "white"
      ? LocalImages.VantafyWhiteLogo
      : variant === "gray" && LocalImages.vantafyGrayLogo;

  return <img className={cn("w-35", className)} src={logoSrc} alt="Vantafy" />;
};

export default Logo;
