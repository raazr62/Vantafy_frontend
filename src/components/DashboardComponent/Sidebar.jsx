import { sidebarLinks } from "@/lib/DashboardMockData";
import Logo from "@/shared/LandingShared/Logo";
import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import { HashLink } from "react-router-hash-link";
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
    <div className="bg-[#440054] h-full px-3 py-6 max-w-[250px] w-full rounded-[24px] border border-purple-800/30 flex flex-col justify-between shadow-lg overflow-y-auto">
      {/* Top Bar */}
      <div>
        <Link
          to={"/dashboard"}
          onClick={() => setSheetOpen?.(false)}
          className="px-4 py-2 flex items-center justify-center cursor-pointer w-full"
        >
          <Logo variant="whiteFull" />
        </Link>

        {/* Navigation Link */}
        <ul className="mt-6 space-y-2">
          {sidebarLinks.map((link) => {
            const isSkipped =
              user?.role !== "agency" && (link.name === "My Information" || link.name === "Add Email");
            if (isSkipped) return null;
            return (
              <li key={link.id} onClick={() => setSheetOpen?.(false)}>
                <NavLink
                  className={({ isActive }) =>
                    `py-2.5 px-4 flex items-center gap-3 text-sm font-medium transition-all duration-200
              ${
                isActive
                  ? "bg-gradient-to-r from-[#d926d4] to-[#e600a1] text-white font-semibold rounded-full shadow-md"
                  : "text-white/90 hover:text-white"
              }`
                  }
                  to={link.to}
                >
                  {link.icon} {link.name}
                </NavLink>
              </li>
            );
          })}

          {/* FAQ Link */}
          <li>
            <HashLink
              smooth
              to="/#faq"
              onClick={() => setSheetOpen?.(false)}
              className="py-2.5 px-4 flex items-center gap-3 text-sm font-medium text-white/90 hover:text-white transition-all duration-200"
            >
              <HelpCircle className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5" /> FAQ
            </HashLink>
          </li>

          {/* Privacy Policy */}
          <li>
            <button
              type="button"
              onClick={() => {
                openLegalModal("privacy_policy");
                setSheetOpen?.(false);
              }}
              className="w-full py-2.5 px-4 flex items-center gap-3 text-sm font-medium text-white/90 hover:text-white transition-all duration-200 text-left cursor-pointer"
            >
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5" /> Privacy Policy
            </button>
          </li>

          {/* Terms of Services */}
          <li>
            <button
              type="button"
              onClick={() => {
                openLegalModal("terms_and_conditions");
                setSheetOpen?.(false);
              }}
              className="w-full py-2.5 px-4 flex items-center gap-3 text-sm font-medium text-white/90 hover:text-white transition-all duration-200 text-left cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5" /> Terms of Services
            </button>
          </li>
        </ul>
      </div>

      {/* Bottom Part*/}
      <div className="w-full flex justify-center mt-6">
        <button
          onClick={() => {
            logout();
            setSheetOpen?.(false);
          }}
          className="flex items-center justify-center gap-2.5 text-[#e024d2] hover:text-pink-300 text-sm font-medium px-4 py-2.5 rounded-xl hover:bg-white/10 cursor-pointer transition-colors w-full"
        >
          <LogoutIconSVG className="text-[#e024d2] w-5 h-5 shrink-0" />
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
