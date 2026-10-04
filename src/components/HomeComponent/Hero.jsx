import React from "react";
import { GoogleAuthSVG } from "../SVG/AuthLayoutSVG";
import { Button } from "../ui/button";
import Radar from "./Radar";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "@/Redux/slices/authSlice";
import { useNavigate } from "react-router";
import HeroSkeleton from "./HeroSkeleton";
import SectionError from "./SectionError";

const Hero = ({ hero_section, hero_radar_icons, isLoading, isError }) => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const handleGetProtected = () => {
    isAuthenticated ? navigate("/dashboard") : navigate("/auth/signup");
  };

  if (isLoading) return <HeroSkeleton />;


  if (isError)
    return <SectionError message="Failed to load the hero section." />;

  return (
    <section className="container mx-auto flex flex-col-reverse items-center justify-center lg:justify-between lg:flex-row sm:gap-10 overflow-hidden lg:items-start sm:pt-6 md:pt-8 lg:pt-10 px-4 sm:px-6">
      {/* Hero Description */}
      <div className="absolute top-90 sm:static flex flex-col items-center gap-2 lg:gap-4 text-center lg:items-start sm:text-left max-w-2xl lg:pt-5 px-5 sm:px-0">
        <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl/tight text-center lg:text-left">
          {hero_section?.title}
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-black text-center lg:text-left">
          {hero_section?.subtitle}
        </p>
        {/* Trust Badges: Google TCRP & Trustpilot + Centered CTA Button */}
        <div className="flex flex-col items-center gap-2.5 mt-2 lg:mt-3 w-full">
          {/* Row 1: Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {/* Google TCRP Partner Badge */}
            <div className="bg-white border border-[#00C0FF] rounded-full px-3 py-1 sm:px-3.5 sm:py-1.5 flex items-center gap-1.5 shadow-xs transition-all hover:border-[#0090FF]">
              <GoogleAuthSVG className="w-3.5 h-3.5 shrink-0" />
              <span className="text-[11px] sm:text-xs font-semibold text-gray-800 whitespace-nowrap">
                Google TCRP Partner
              </span>
            </div>

            {/* Trustpilot Badge */}
            <a
              href="https://www.trustpilot.com/review/vantafy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-[#00C0FF] rounded-full px-3 py-1 sm:px-3.5 sm:py-1.5 flex items-center gap-1.5 shadow-xs transition-all hover:border-[#0090FF] hover:shadow-sm cursor-pointer"
            >
              <div className="flex items-center gap-0.5 shrink-0">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-3.5 h-3.5 bg-[#00b67a] flex items-center justify-center rounded-[1px]">
                    <svg className="w-2 h-2 text-white fill-current" viewBox="0 0 24 24">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </div>
                ))}
                <div className="w-3.5 h-3.5 bg-[#00b67a] relative flex items-center justify-center rounded-[1px] overflow-hidden">
                  <div className="absolute right-0 top-0 w-1/2 h-full bg-[#dcdce6]" />
                  <svg className="w-2 h-2 text-white relative z-10 fill-current" viewBox="0 0 24 24">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
              </div>
              <span className="flex items-center gap-0.5 font-bold text-gray-900 text-[11px] sm:text-xs whitespace-nowrap">
                <svg className="w-3 h-3 text-[#00b67a] fill-current" viewBox="0 0 24 24">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                Trustpilot
              </span>
            </a>
          </div>

          {/* Row 2: Scan For Your Leaks CTA Button (Centered relative to the badges) */}
          <div className="w-full flex justify-center">
            <div className="clean-animated-border cursor-pointer group">
              <button
                onClick={handleGetProtected}
                className="relative z-10 bg-white hover:bg-gray-50 text-black font-semibold text-xs sm:text-sm px-6 py-2 sm:py-2.5 rounded-full transition-all duration-300 transform group-hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                Scan For Your Leaks
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Radar */}
      <div className="w-full flex justify-center lg:justify-end">
        <Radar hero_radar_icons={hero_radar_icons} />
      </div>
    </section>
  );
};

export default Hero;
