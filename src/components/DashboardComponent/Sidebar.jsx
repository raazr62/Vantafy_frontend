import { sidebarLinks } from "@/lib/DashboardMockData";
import Logo from "@/shared/LandingShared/Logo";
import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import { LogoutIconSVG } from "../SVG/DashboardLayoutSVG";
import { useLogout } from "@/hooks/useLogout";
import { selectUser } from "@/Redux/slices/authSlice";
import { useSelector } from "react-redux";
import TermsAndConditionsModal from "../common/TermsAndConditionsModal";
import { HelpCircle, FileText, ShieldCheck } from "lucide-react";

const Sidebar = ({ setSheetOpen }) => {
  const { mutate: logout } = useLogout();
  const user = useSelector(selectUser);
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState("terms_and_conditions");

  const openLegalModal = (type) => {
    setLegalModalType(type);
    setLegalModalOpen(true);
  };

  return (
    <div className="bg-[linear-gradient(90deg,rgba(78,120,253,0.12)_0%,rgba(255,27,228,0.12)_100%)] h-full px-3 py-6 max-w-[260px] w-full lg:rounded-2xl flex flex-col justify-between shadow-xs overflow-y-auto">
      {/* Top Bar */}
      <div className="mt-2">
        <Link
          to={"/dashboard"}
          onClick={() => setSheetOpen?.(false)}
          className="p-1 bg-linear-to-br from-[#971DFE] to-[#C289E8] border border-purple-500 rounded-full flex items-center justify-center cursor-pointer"
        >
          <Logo variant="whiteFull" />
        </Link>

        {/* Navigation Link */}
        <ul className="mt-3 lg:mt-8 space-y-1">
          {sidebarLinks.map((link) => {
            const isSkipped =
              user?.role !== "agency" && (link.name === "My Information" || link.name === "Add Email");
            if (isSkipped) return null;

            const isSubscriptions =
              link.name === "Subscriptions" || link.name === "Subscription";

            if (isSubscriptions) {
              return (
                <li key={link.id} onClick={() => setSheetOpen?.(false)}>
                  <div className="clean-animated-border w-full cursor-pointer group rounded-full">
                    <NavLink
                      className={({ isActive }) =>
                        `relative z-10 w-full py-2 sm:py-2.5 px-4 flex items-center gap-3 text-xs sm:text-sm font-semibold transition-all duration-200 rounded-full ${
                          isActive
                            ? "bg-primary text-white shadow-md"
                            : "bg-[linear-gradient(90deg,#dee6f8_0%,#f4dbf5_100%)] text-[#4A4A4A] hover:text-black"
                        }`
                      }
                      to={link.to}
                    >
                      {link.icon} {link.name}
                    </NavLink>
                  </div>
                </li>
              );
            }

            return (
              <li key={link.id} onClick={() => setSheetOpen?.(false)}>
                <NavLink
                  className={({ isActive }) =>
                    `py-1.5 sm:py-3 px-4 flex items-center gap-3 rounded-full text-xs sm:text-sm font-medium sm:font-semibold transition-all duration-200
              ${isActive ? "bg-primary text-white" : "text-[#4A4A4A] hover:text-black hover:bg-white/40"}`
                  }
                  to={link.to}
                >
                  {link.icon} {link.name}
                </NavLink>
              </li>
            );
          })}

          {/* Terms of Services */}
          <li>
            <button
              type="button"
              onClick={() => {
                openLegalModal("terms_and_conditions");
                setSheetOpen?.(false);
              }}
              className="w-full py-1.5 sm:py-3 px-4 flex items-center gap-3 rounded-full text-xs sm:text-sm font-medium sm:font-semibold text-[#4A4A4A] hover:text-black hover:bg-white/40 transition-all duration-200 text-left cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5" /> Terms of Services
            </button>
          </li>

          {/* Privacy Policy */}
          <li>
            <button
              type="button"
              onClick={() => {
                openLegalModal("privacy_policy");
                setSheetOpen?.(false);
              }}
              className="w-full py-1.5 sm:py-3 px-4 flex items-center gap-3 rounded-full text-xs sm:text-sm font-medium sm:font-semibold text-[#4A4A4A] hover:text-black hover:bg-white/40 transition-all duration-200 text-left cursor-pointer"
            >
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5" /> Privacy Policy
            </button>
          </li>

          {/* FAQ Link */}
          <li>
            <NavLink
              to="/dashboard/faq"
              onClick={() => setSheetOpen?.(false)}
              className={({ isActive }) =>
                `py-1.5 sm:py-3 px-4 flex items-center gap-3 rounded-full text-xs sm:text-sm font-medium sm:font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-primary text-white"
                    : "text-[#4A4A4A] hover:text-black hover:bg-white/40"
                }`
              }
            >
              <HelpCircle className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5" /> FAQ
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Bottom Part*/}
      <div className="w-full mt-6 flex justify-center items-center">
        <button
          onClick={() => {
            logout();
            setSheetOpen?.(false);
          }}
          className="flex items-center justify-center gap-2 text-red-600 text-sm md:text-base font-semibold px-4 py-2 rounded-full cursor-pointer hover:bg-white/40 hover:opacity-80 transition-all"
        >
          <LogoutIconSVG className="text-red-600 w-5 h-5 shrink-0" />
          <span>Logout</span>
        </button>
      </div>

      <TermsAndConditionsModal
        open={legalModalOpen}
        onOpenChange={setLegalModalOpen}
        pageType={legalModalType}
      />
    </div>
  );
};

export default Sidebar;

{
  /* <div className="bg-[linear-gradient(90deg,rgba(78,120,253,0.12)_0%,rgba(255,27,228,0.12)_100%)] p-4 rounded-2xl flex flex-col items-center gap-3">
          <p className="text-center text-sm md:text-base">
            24/7 Access to Your Personal Dashboard
          </p>
          <div className="flex gap-1.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar size={20} key={i} />
            ))}
          </div>

          <Link
            to={"/dashboard/plans"}
            onClick={() => setSheetOpen?.(false)}
            className="bg-[linear-gradient(90deg,#E27CE9_0%,#B099F3_52.4%,#33B1FE_100%)] text-sm font-semibold text-white w-full py-2 rounded-[12px] text-center"
          >
            Get Premium
          </Link>
        </div> */
}
