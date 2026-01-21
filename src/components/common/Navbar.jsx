import { NavlinksItems } from "@/lib/HomeMockData";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { SignInSVG } from "../SVG/HomeLayoutSVG";
import { HashLink } from "react-router-hash-link";
import { useNavigate } from "react-router";
import Logo from "@/shared/LandingShared/Logo";
import MobileNav from "./MobileNav";
import { selectIsAuthenticated, selectUser } from "@/Redux/slices/authSlice";
import { useSelector } from "react-redux";
import { useLogout } from "@/hooks/useLogout";
import { LogoutIconSVG } from "../SVG/DashboardLayoutSVG";

const Navbar = ({ systemData, isSystemDataLoading, isSystemDataError }) => {
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const user = useSelector(selectUser);
  const { mutate: logout } = useLogout();

  console.log("isAuthenticated", isAuthenticated);
  console.log("user", user);

  useEffect(() => {
    const handleScroll = () => {
      // If drawer is open, don't update active state (prevents reset due to body lock)
      if (isOpen) return;

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
  }, [isOpen]);

  const toggleDrawer = () => {
    setOpen(!open);
    setIsOpen(!open);
  };

  return (
    <nav className="flex justify-between py-2 sm:py-3 lg:py-4 px-4 sm:px-0 mx-auto container">
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
        {isSystemDataLoading ? (
          <p>Loading...</p>
        ) : isSystemDataError ? (
          <Logo />
        ) : (
          <img
            className="w-25 sm:w-30 lg:w-35 cursor-pointer"
            src={
              import.meta.env.VITE_IMAGE_URL + systemData?.about_system?.logo
            }
            alt="Vantafy"
          />
        )}
      </HashLink>

      {/* Desktop NavLinks */}
      <ul className="hidden lg:flex items-center gap-8">
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

      <MobileNav
        toggleDrawer={toggleDrawer}
        isOpen={isOpen}
        NavlinksItems={NavlinksItems}
        setIsOpen={setIsOpen}
        setOpen={setOpen}
        active={active}
        open={open}
        isAuthenticated={isAuthenticated}
        logout={logout}
      />

      {/* Auth Buttons */}
      <div className="hidden lg:flex gap-5.5 items-center">
        {isAuthenticated ? (
          <>
            <Button
              onClick={() => navigate("/dashboard")}
              variant="outline"
              className="bg-purple-800 text-white rounded-4xl font-medium border-sky-500 border-2 hover:bg-purple-700 hover:text-white"
            >
              Dashboard
            </Button>
            <Button
              onClick={() => {
                logout();
              }}
              variant={"ghost"}
              className={
                "text-white hover:text-white hover:border hover:border-white border border-transparent rounded-xl transition-all duration-500"
              }
            >
              <LogoutIconSVG className={"text-white"} /> Logout
            </Button>
          </>
        ) : (
          <>
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
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
