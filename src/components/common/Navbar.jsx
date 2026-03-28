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

const NavSkeleton = ({ className }) => (
  <div 
    className={`animate-pulse bg-white/20 rounded-md ${className}`} 
    style={{ 
      background: "linear-gradient(90deg, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.1) 75%)",
      backgroundSize: '200% 100%'
    }}
  />
);

const Navbar = ({ systemData, isSystemDataLoading, isSystemDataError }) => {
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const user = useSelector(selectUser);
  const { mutate: logout } = useLogout();

  // Handle Scroll Spy for Active State
  useEffect(() => {
    const handleScroll = () => {
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

  const smoothScroll = (el) => {
    const yOffset = -100;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <nav className="flex justify-between items-center py-2 sm:py-3 lg:py-4 px-4 sm:px-0 mx-auto container">
      {/* Logo Section */}
      <HashLink
        smooth
        scroll={smoothScroll}
        to={"/#"}
        className="font-bold text-3xl text-white"
      >
        {isSystemDataLoading ? (
          <NavSkeleton className="h-8 w-32 sm:h-10 sm:w-36" />
        ) : isSystemDataError ? (
          <Logo />
        ) : (
          <img
            className="w-25 sm:w-30 lg:w-35 cursor-pointer"
            src={import.meta.env.VITE_IMAGE_URL + systemData?.about_system?.logo}
            alt="Vantafy"
          />
        )}
      </HashLink>

      {/* Desktop NavLinks */}
      <ul className="hidden lg:flex items-center gap-8">
        {isSystemDataLoading 
          ? [1, 2, 3, 4].map((i) => <NavSkeleton key={i} className="h-5 w-20" />)
          : NavlinksItems.map((nav) => (
              <li key={nav.id}>
                <HashLink
                  smooth
                  to={nav.link}
                  scroll={smoothScroll}
                  className={`text-white px-2 pb-0.5 border-b-2 transition-all duration-300 ${
                    active === nav.link.replace("#", "")
                      ? "font-semibold border-white"
                      : "font-medium border-transparent hover:border-white/50"
                  }`}
                >
                  {nav.name}
                </HashLink>
              </li>
            ))
        }
      </ul>

      {/* Mobile Nav */}
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

      {/* Auth Buttons Section */}
      <div className="hidden lg:flex gap-5.5 items-center">
        {isSystemDataLoading ? (
          <div className="flex gap-4">
             <NavSkeleton className="h-10 w-24 rounded-xl" />
             <NavSkeleton className="h-10 w-32 rounded-4xl" />
          </div>
        ) : isAuthenticated ? (
          <>
            <Button
              onClick={() => navigate("/dashboard")}
              variant="outline"
              className="bg-purple-800 text-white rounded-4xl font-medium border-sky-500 border-2 hover:bg-purple-700 hover:text-white"
            >
              Dashboard
            </Button>
            <Button
              onClick={() => logout()}
              variant={"ghost"}
              className="text-white hover:text-white hover:border-white border border-transparent rounded-xl transition-all duration-500"
            >
              <LogoutIconSVG className="mr-2" /> Logout
            </Button>
          </>
        ) : (
          <>
            <Button
              onClick={() => navigate("/auth/signin")}
              variant="ghost"
              className="text-white hover:text-white"
            >
              <SignInSVG className="mr-2" /> Login
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