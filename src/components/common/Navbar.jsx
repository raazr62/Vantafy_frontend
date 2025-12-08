import { NavlinksItems } from "@/lib/HomeMockData";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { SignInSVG } from "../SVG/HomeLayoutSVG";
import { HashLink } from "react-router-hash-link";
import { useNavigate } from "react-router";

const Navbar = () => {
  const [active, setActive] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.scrollY + 200;

      let current = "";
      sections.forEach((section) => {
        if (scrollY >= section.offsetTop) current = section.id;
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="flex justify-between py-6 mx-auto container">
      {/* Logo */}
      <HashLink
        smooth
        scroll={(el) => {
          const yOffset = -100;
          const y =
            el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }}
        to={"/#"}
        className="font-bold text-3xl text-white"
      >
        Vantafy
      </HashLink>

      {/* NavLinks */}
      <ul className="flex items-center gap-8">
        {NavlinksItems.map((nav) => (
          <li key={nav.id}>
            <HashLink
              smooth
              to={nav.link}
              scroll={(el) => {
                const yOffset = -100;
                const y =
                  el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
              }}
              className={`text-white px-2 pb-0.5 border-b-2 transition-all duration-300 ${
                active === nav.link.replace("#", "")
                  ? "font-semibold border-white"
                  : "font-medium border-transparent hover:textPrimary"
              }`}
            >
              {nav.name}
            </HashLink>
          </li>
        ))}
      </ul>

      {/* Auth Buttons */}
      <div className="flex gap-5.5 items-center">
        <Button
          onClick={() => navigate("/auth/signin")}
          variant={"ghost"}
          className={"text-white hover:text-white"}
        >
          <SignInSVG className={"text-white"} /> Login
        </Button>
        <Button
          onClick={() => navigate("/auth/signup")}
          variant="outline"
          className="bg-purple-800 text-white rounded-4xl font-medium border-sky-500 border-2 hover:bg-purple-700 hover:text-white"
        >
          Get Protected
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
