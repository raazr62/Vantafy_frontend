import React from "react";
import { Link } from "react-router";
import { LocalImages } from "../AllPhotos/HomeLocalImages";
import { HashLink } from "react-router-hash-link";
import Logo from "@/shared/LandingShared/Logo";

const Footer = () => {
  return (
    <div className="relative bg-[#1E2833] py-14  md:py-18 overflow-hidden px-4 sm:px-0">
      <div className="absolute bg-[#8133F18F] h-50 w-50 rounded-full right-0 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bg-[#8133F18F] h-50 w-50 rounded-full left-0 -translate-x-1/2 blur-3xl"></div>

      <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 lg:gap-8">
        <Logo className={"w-30 sm:w-35 lg:w-40"} />

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
          <Link target="_blank" to={"https://www.facebook.com/"}>
            <img src={LocalImages.Facebook} alt="Facebook Logo" />
          </Link>
          <Link target="_blank" to={"https://www.x.com/"}>
            <img src={LocalImages.Twitter} alt="X Logo" />
          </Link>
          <Link target="_blank" to={"https://www.instagram.com/"}>
            <img
              src={LocalImages.InstagramIcon}
              alt="Instagram Logo"
              className="w-6"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
