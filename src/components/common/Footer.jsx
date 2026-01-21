import React from "react";
import { Link, useNavigate } from "react-router";
import { HashLink } from "react-router-hash-link";
import Logo from "@/shared/LandingShared/Logo";

const Footer = ({ systemData, isSystemDataLoading, isSystemDataError }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="relative bg-[#1E2833] py-14  md:py-18 overflow-hidden px-4 sm:px-0">
      <div className="absolute bg-[#8133F18F] h-50 w-50 rounded-full right-0 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bg-[#8133F18F] h-50 w-50 rounded-full left-0 -translate-x-1/2 blur-3xl"></div>

      <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 lg:gap-8">
        {isSystemDataLoading ? (
          <p>Loading...</p>
        ) : isSystemDataError ? (
          <Logo className={"w-30 sm:w-35 lg:w-40 cursor-pointer"} />
        ) : (
          <img
            onClick={handleClick}
            className="w-30 sm:w-35 lg:w-40 cursor-pointer"
            src={
              import.meta.env.VITE_IMAGE_URL + systemData?.about_system?.logo
            }
            alt="Vantafy"
          />
        )}

        {/* Links */}
        <ul className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-white text-sm sm:text-base">
          <li>
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
          <li>
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
              What we do
            </HashLink>
          </li>
          <li>
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
              How it works
            </HashLink>
          </li>
          <li>
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
          <li>
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
                    src={import.meta.env.VITE_IMAGE_URL + social.icon}
                    alt={social.name}
                    className="w-6 h-6 hover:scale-110 transition-all duration-300"
                  />
                </Link>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Footer;
