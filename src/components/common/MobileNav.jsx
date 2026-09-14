import React, { useState } from "react";
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
import { LogoutIconSVG } from "../SVG/DashboardLayoutSVG";
import TermsAndConditionsModal from "./TermsAndConditionsModal";

const MobileNav = ({
  toggleDrawer,
  isOpen,
  NavlinksItems,
  setIsOpen,
  setOpen,
  active,
  open,
  isAuthenticated,
  logout,
}) => {
  const navigate = useNavigate();
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState("terms_and_conditions");

  const openLegalModal = (type) => {
    setLegalModalType(type);
    setLegalModalOpen(true);
  };

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
          className="inline-flex items-center p-2 w-8 h-8 justify-center text-sm lg:hidden group"
          aria-controls="navbar-sticky"
          aria-expanded={isOpen}
        >
          <div className="flex flex-col items-center justify-center w-10 h-10 space-y-1.5">
            <span
              className={`w-8 h-[3px] rounded-full transition-all duration-300 bg-white ${
                isOpen ? "rotate-45 translate-y-2" : "group-hover:w-6"
              }`}
            ></span>
            <span
              className={`w-8 h-[3px] rounded-full transition-all duration-300 bg-white ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-8 h-[3px] rounded-full transition-all duration-300 bg-white ${
                isOpen ? "-rotate-45 -translate-y-2.5" : "group-hover:w-4"
              }`}
            ></span>
          </div>
        </button>
      </DrawerTrigger>

      {/* Modern Light Theme Drawer with Solid Decorative Shapes */}
      <DrawerContent className="w-4/6! max-w-[300px]! h-full rounded-r-3xl rounded-l-none border-r border-gray-100 bg-white shadow-2xl p-0 overflow-hidden">
        {/* Decorative Blobs (Solid, No Blur) */}
        {/* <div className="absolute -top-20 -left-20 w-64 h-64 bg-fuchsia-100 rounded-full pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-sky-100 rounded-full pointer-events-none" /> */}

        {/* Header with Close Button */}
        <DrawerHeader className="absolute top-4 right-4 z-50 p-0">
          <DrawerClose asChild>
            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-colors hover:bg-gray-200 hover:text-black">
              <X className="h-5 w-5" />
            </button>
          </DrawerClose>
        </DrawerHeader>

        <div className="relative z-10 flex h-full flex-col justify-between p-6 pt-20">
          {/* Nav Links */}
          <nav>
            <ul className="flex flex-col space-y-3">
              {NavlinksItems.map((nav) => {
                const isActive = active === nav.link.replace("#", "");
                return (
                  <li key={nav.id}>
                    <HashLink
                      smooth
                      to={nav.link}
                      scroll={(el) => {
                        const yOffset = -100;
                        const y =
                          el.getBoundingClientRect().top +
                          window.pageYOffset +
                          yOffset;
                        // Add delay to allow drawer to close and body scroll to unlock
                        setTimeout(() => {
                          window.scrollTo({ top: y, behavior: "smooth" });
                        }, 300);
                      }}
                      onClick={toggleDrawer}
                      className={`block w-full px-2 my-3 text-base font-medium transition-all duration-300 text-gray-600 ${
                        isActive
                          ? "border-l-3 border-primary"
                          : "hover:bg-gray-50 hover:text-black"
                      }`}
                    >
                      {nav.name}
                    </HashLink>
                  </li>
                );
              })}

              <li key="privacy-policy">
                <button
                  type="button"
                  onClick={() => openLegalModal("privacy_policy")}
                  className="block w-full text-left px-2 my-3 text-base font-medium transition-all duration-300 text-gray-600 hover:bg-gray-50 hover:text-black cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li key="terms-of-service">
                <button
                  type="button"
                  onClick={() => openLegalModal("terms_and_conditions")}
                  className="block w-full text-left px-2 my-3 text-base font-medium transition-all duration-300 text-gray-600 hover:bg-gray-50 hover:text-black cursor-pointer"
                >
                  Terms of Service
                </button>
              </li>
            </ul>
          </nav>

          {/* Footer / Auth Buttons */}
          <div className="flex flex-col gap-4">
            <div className="h-px w-full bg-fuchsia-100" />

            {isAuthenticated ? (
              <>
                <Button
                  className="w-full gap-3 rounded-xl border border-gray-200 bg-white py-6 text-base text-gray-700 hover:bg-gray-50 hover:text-black text-center"
                  onClick={() => navigate("/dashboard")}
                  variant="ghost"
                >
                  Dashboard
                </Button>

                <button
                  onClick={() => {
                    logout();
                  }}
                  className="group relative w-full overflow-hidden rounded-xl bg-linear-to-r from-primary to-purple-600 px-5 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:scale-[1.02] hover:shadow-primary/25 active:scale-[0.98] flex items-center gap-2"
                >
                  <LogoutIconSVG className={"text-white"} />
                  Logout
                </button>
              </>
            ) : (
              <>
                <Button
                  className="w-full justify-start gap-3 rounded-xl border border-gray-200 bg-white py-6 text-base text-gray-700 hover:bg-gray-50 hover:text-black"
                  onClick={() => navigate("/auth/signin")}
                  variant="ghost"
                >
                  <SignInSVG className="h-5 w-5 text-gray-500" />
                  <span>Login</span>
                </Button>

                <button
                  onClick={() => navigate("/auth/signup")}
                  className="group relative w-full overflow-hidden rounded-xl bg-linear-to-r from-primary to-purple-600 px-5 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:scale-[1.02] hover:shadow-primary/25 active:scale-[0.98]"
                >
                  <span className="relative flex items-center justify-center gap-2">
                    Get Protected
                  </span>
                </button>
              </>
            )}
          </div>
        </div>
      </DrawerContent>

      <TermsAndConditionsModal
        open={legalModalOpen}
        onOpenChange={setLegalModalOpen}
        pageType={legalModalType}
      />
    </Drawer>
  );
};

export default MobileNav;
