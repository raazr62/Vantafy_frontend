import { LocalImages } from "@/components/AllPhotos/HomeLocalImages";
import { cn } from "@/lib/utils";
import React from "react";
import { useNavigate } from "react-router";

const Logo = ({ className, variant = "whiteFull" }) => {
  const navigate = useNavigate();
  const logoSrc =
    variant === "whiteFull"
      ? LocalImages.VantafyWhiteFulltextLogo
      : variant === "grayFull"
        ? LocalImages.VantafyGrayFulltextLogo
        : variant === "white"
          ? LocalImages.VantafyWhiteLogo
          : variant === "gray"
            ? LocalImages.VantafyGrayLogo
            : "";
  const handleClick = () => {
    navigate("/");
  };

  return (
    <img
      onClick={handleClick}
      className={cn("w-25 sm:w-30 lg:w-35 cursor-pointer", className)}
      src={logoSrc}
      alt="Vantafy"
    />
  );
};

export default Logo;
