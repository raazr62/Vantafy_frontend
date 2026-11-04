import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { HashLink } from "react-router-hash-link";
import Logo from "@/shared/LandingShared/Logo";
import TermsAndConditionsModal from "@/components/common/TermsAndConditionsModal";

const Footer = ({ systemData, isSystemDataLoading, isSystemDataError }) => {
  const navigate = useNavigate();
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState("terms_and_conditions");

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="relative bg-[#1E2833] py-14  md:py-18 overflow-hidden px-4 sm:px-6">
      <div className="absolute bg-[#8133F18F] h-50 w-50 rounded-full right-0 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bg-[#8133F18F] h-50 w-50 rounded-full left-0 -translate-x-1/2 blur-3xl"></div>

      <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 lg:gap-8">
        {systemData?.about_system?.logo ? (
          <img
            onClick={handleClick}
            className="w-30 sm:w-35 lg:w-40 cursor-pointer"
            loading="lazy"
            src={
              systemData.about_system.logo.startsWith("http")
                ? systemData.about_system.logo
                : import.meta.env.VITE_IMAGE_URL +
                systemData.about_system.logo
            }
            alt="Vantafy"
          />
        ) : (
          <Logo className={"w-30 sm:w-35 lg:w-40 cursor-pointer"} />
        )}

        {/* Links */}
        <ul className="flex flex-wrap justify-center items-center gap-x-4 sm:gap-x-6 gap-y-2.5 text-white text-xs sm:text-base max-w-2xl mx-auto px-2 text-center">
          <li className="shrink-0 whitespace-nowrap">
            <HashLink
              smooth
              scroll={(el) => {
                const yOffset = -100;
                const y =
                  el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
              }}
              to={"/#"}
            >
              Home
            </HashLink>
          </li>
          <li className="shrink-0 whitespace-nowrap">
            <HashLink
              smooth
              scroll={(el) => {
                const yOffset = -100;
                const y =
                  el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
              }}
              to={"#what-we-do"}
            >
              What We Do
            </HashLink>
          </li>
          <li className="shrink-0 whitespace-nowrap">
            <HashLink
              smooth
              scroll={(el) => {
                const yOffset = -100;
                const y =
                  el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
              }}
              to={"#how-it-works"}
            >
              How It Works
            </HashLink>
          </li>
          <li className="shrink-0 whitespace-nowrap">
            <HashLink
              smooth
              scroll={(el) => {
                const yOffset = -100;
                const y =
                  el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
              }}
              to={"#pricing"}
            >
              Pricing
            </HashLink>
          </li>
          <li className="shrink-0 whitespace-nowrap">
            <HashLink
              smooth
              scroll={(el) => {
                const yOffset = -100;
                const y =
                  el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
              }}
              to={"#faq"}
            >
              FAQs
            </HashLink>
          </li>
          <li className="shrink-0 whitespace-nowrap">
            <button
              type="button"
              onClick={() => {
                setLegalModalType("privacy_policy");
                setLegalModalOpen(true);
              }}
              className="hover:text-purple-300 transition-colors cursor-pointer bg-transparent border-none p-0 text-white text-xs sm:text-base font-normal whitespace-nowrap"
            >
              Privacy Policy
            </button>
          </li>
          <li className="shrink-0 whitespace-nowrap">
            <button
              type="button"
              onClick={() => {
                setLegalModalType("terms_and_conditions");
                setLegalModalOpen(true);
              }}
              className="hover:text-purple-300 transition-colors cursor-pointer bg-transparent border-none p-0 text-white text-xs sm:text-base font-normal whitespace-nowrap"
            >
              Terms of Service
            </button>
          </li>
        </ul>

        {/* Social Links */}
        <div className="flex items-center gap-4 sm:gap-6">
          {isSystemDataLoading ? (
            <p>Loading...</p>
          ) : isSystemDataError ? (
            <p>Error loading data</p>
          ) : (
            systemData?.social_media?.map((social) => {
              return (
                <Link key={social.id} target="_blank" to={social.url}>
                  <img
                    src={
                      social.icon?.startsWith("http")
                        ? social.icon
                        : import.meta.env.VITE_IMAGE_URL + social.icon
                    }
                    alt={social.name}
                    className="w-6 h-6 hover:scale-110 transition-all duration-300"
                  />
                </Link>
              );
            })
          )}
        </div>

        {/* Copyright Text */}
        <p className="text-gray-400 text-xs sm:text-sm text-center pt-2">
          {systemData?.about_system?.copyright
            ? systemData.about_system.copyright.toLowerCase().includes("all rights reserved")
              ? systemData.about_system.copyright
              : `${systemData.about_system.copyright}. All rights reserved.`
            : "©2027 Vantafy. All rights reserved."}
        </p>
      </div>

      {/* Legal Paper Modal */}
      <TermsAndConditionsModal
        open={legalModalOpen}
        onOpenChange={setLegalModalOpen}
        pageType={legalModalType}
      />
    </div>
  );
};

export default Footer;
