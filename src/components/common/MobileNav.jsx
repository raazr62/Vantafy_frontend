import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "../ui/drawer";
import { X } from "lucide-react";
import { HashLink } from "react-router-hash-link";
import { Button } from "../ui/button";
import { SignInSVG } from "../SVG/HomeLayoutSVG";
import { useNavigate } from "react-router";

const MobileNav = ({
  toggleDrawer,
  isOpen,
  NavlinksItems,
  setIsOpen,
  setOpen,
  active,
  open,
}) => {
  const navigate = useNavigate();

  return (
    <Drawer
      open={open}
      onOpenChange={(val) => {
        setOpen(val);
        setIsOpen(val);
      }}
      direction="left"
    >
      <DrawerTrigger asChild>
        <button
          onClick={toggleDrawer}
          type="button"
          className="inline-flex items-center p-2 w-8 h-8 justify-center text-sm lg:hidden"
          aria-controls="navbar-sticky"
          aria-expanded={isOpen}
        >
          <div className="flex flex-col items-center justify-center w-10 h-10 space-y-1.5">
            <span
              className={`w-8 h-[3px] rounded transition-all bg-white duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`w-8 h-[3px] rounded transition-all bg-white duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-8 h-[3px] rounded transition-all bg-white duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2.5" : ""
              }`}
            ></span>
          </div>
        </button>
      </DrawerTrigger>

      <DrawerContent className="w-3/5! sm:w-1/2! bg-primary rounded-none">
        <DrawerHeader className="flex items-end justify-end">
          <DrawerClose asChild>
            <button className="text-white p-2">
              <X className="h-5 w-5" />
            </button>
          </DrawerClose>
        </DrawerHeader>

        {/* Nav Links */}
        <nav className="flex flex-col justify-between h-full">
          <ul className="flex flex-col p-5 pt-0 space-y-4">
            {NavlinksItems.map((nav) => (
              <li className="list-none" key={nav.id}>
                <HashLink
                  smooth
                  to={nav.link}
                  scroll={(el) => {
                    const yOffset = -100;
                    const y =
                      el.getBoundingClientRect().top +
                      window.pageYOffset +
                      yOffset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }}
                  onClick={toggleDrawer}
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
        </nav>

        {/* Auth Buttons */}
        <div className="flex flex-col gap-3 px-4 pb-4">
          <Button
            className={
              "bg-transparent text-white hover:bg-primary/80 hover:text-white"
            }
            onClick={() => navigate("/auth/signin")}
            variant={"outline"}
          >
            <SignInSVG className={"text-white"} /> Login
          </Button>

          <button
            onClick={() => navigate("/auth/signup")}
            className="rounded px-5 py-2.5 overflow-hidden group bg-purple-500 relative hover:bg-linear-to-r hover:from-purple-500 hover:to-purple-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-purple-400 transition-all ease-out duration-300 cursor-pointer"
          >
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative">Get Protected</span>
          </button>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileNav;
