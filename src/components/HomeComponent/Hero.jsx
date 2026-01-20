import React from "react";
import { Button } from "../ui/button";
import Radar from "./Radar";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "@/Redux/slices/authSlice";
import { useNavigate } from "react-router";

const Hero = ({ hero_section, hero_radar_icons }) => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const handleGetProtected = () => {
    isAuthenticated ? navigate("/dashboard") : navigate("/auth/signup");
  };
  return (
    <section className="container mx-auto flex flex-col-reverse items-center justify-center lg:justify-between lg:flex-row sm:gap-10 overflow-hidden lg:items-start sm:pt-6 md:pt-8 lg:pt-10 px-4 xl:px-0">
      {/* Hero Description */}
      <div className="absolute top-90 sm:static flex flex-col items-center gap-2 lg:gap-4 text-center lg:items-start sm:text-left max-w-2xl lg:pt-5">
        <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl/tight text-center lg:text-left">
          {hero_section?.title}
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-lightText/60 text-center lg:text-left">
          {hero_section?.subtitle}
        </p>
        <Button
          onClick={handleGetProtected}
          className="font-semibold px-8 py-4 lg:mt-2 place-content-center"
        >
          Get Protected
        </Button>
      </div>

      {/* Radar */}
      <div className="w-full flex justify-center lg:justify-end">
        <Radar hero_radar_icons={hero_radar_icons} />
      </div>
    </section>
  );
};

export default Hero;
