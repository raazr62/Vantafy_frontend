import React from "react";
import { Link } from "react-router";
import { LocalImages } from "../AllPhotos/HomeLocalImages";

const Footer = () => {
  return (
    <div className="relative bg-[#1E2833] py-18 overflow-hidden ">
      {/* <div className="absolute bg-[#8133F18F] z-10 h-full w-80 rounded-full -left-25 blur-3xl"></div>
      <div className="absolute bg-[#8133F18F] z-10 h-full w-80 rounded-full -right-25 blur-3xl"></div> */}
      <div className="absolute bg-[#8133F18F] h-50 w-50 rounded-full right-0 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bg-[#8133F18F] h-50 w-50 rounded-full left-0 -translate-x-1/2 blur-3xl"></div>

      <div className="flex flex-col items-center justify-center gap-8">
        <p className="text-[#9654F4] text-[32px] font-bold">Vantafy</p>

        {/* Links */}
        <ul className="flex items-center gap-6 text-white">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/#features"}>Features</Link>
          </li>
          <li>
            <Link to={"/#how-it-works"}>How it works</Link>
          </li>
          <li>
            <Link to={"/#pricing"}>Pricing</Link>
          </li>
          <li>
            <Link to={"/#faqs"}>FAQs</Link>
          </li>
        </ul>

        {/* Social Links */}
        <div className="flex items-center gap-6">
          <Link target="_blank" to={"https://facebook.com/"}>
            <img src={LocalImages.Facebook} alt="Facebook Logo" />
          </Link>
          <Link target="_blank" to={"https://x.com/"}>
            <img src={LocalImages.Twitter} alt="X Logo" />
          </Link>
          <Link target="_blank" to={"https://www.instagram.com/"}>
            <img src={LocalImages.Instagram} alt="Instagram Logo" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
