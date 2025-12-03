import { NavlinksItems } from "@/lib/HomeMockData";
import React from "react";
import { Button } from "../ui/button";
import { SignInSVG } from "../SVG/HomeLayoutSVG";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="flex justify-between py-6 mx-auto container">
      {/* Logo */}
      <Link to={"/"} className="font-bold text-3xl text-primary">
        Vantafy
      </Link>

      {/* NavLinks */}
      <ul className="flex items-center gap-8">
        {NavlinksItems.map((navlink) => (
          <li key={navlink.id}>
            <HashLink
              smooth
              to={navlink.link}
              className={`${({ isActive }) =>
                isActive
                  ? "textPrimary font-semibold"
                  : "text-lightText hover:textPrimary transition"} border-b-2 hover:border-b-primary pb-0.5 border-b-transparent transition-all duration-300 px-1`}
            >
              {navlink.name}
            </HashLink>
          </li>
        ))}
      </ul>

      {/* Auth Buttons */}
      <div className="flex gap-5.5 items-center">
        <Button variant={"ghost"}>
          <SignInSVG /> Login
        </Button>
        <Button>Get Protected</Button>
      </div>
    </nav>
  );
};

export default Navbar;
