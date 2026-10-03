import { sidebarLinks } from "@/lib/DashboardMockData";
import Logo from "@/shared/LandingShared/Logo";
import React from "react";
import { Link, NavLink } from "react-router";
import { LogoutIconSVG } from "../SVG/DashboardLayoutSVG";
import { useLogout } from "@/hooks/useLogout";
import { selectUser } from "@/Redux/slices/authSlice";
import { useSelector } from "react-redux";

const Sidebar = ({ setSheetOpen }) => {
  const { mutate: logout } = useLogout();
  const user = useSelector(selectUser);
  return (
    <div className="bg-[#3c0048] h-full px-3 py-6 max-w-[260px] w-full lg:rounded-2xl flex flex-col justify-between">
      {/* Top Bar */}
      <div className="mt-2">
        <Link
          to={"/dashboard"}
          onClick={() => setSheetOpen?.(false)}
          className="p-1.5 flex items-center justify-start cursor-pointer"
        >
          <Logo variant="whiteFull" />
        </Link>

        {/* Navigation Link */}
        <ul className="mt-3 lg:mt-8 space-y-1.5">
          {sidebarLinks.map((link) => {
            const isSkipped =
              user?.role !== "agency" && (link.name === "My Information" || link.name === "Add Email");
            if (isSkipped) return null;
            return (
              <li key={link.id} onClick={() => setSheetOpen?.(false)}>
                <NavLink
                  className={({ isActive }) =>
                    `py-2 sm:py-2.5 px-4 flex items-center gap-3 rounded-xl text-xs sm:text-sm font-medium transition-colors
              ${isActive ? "bg-[#d926d4] text-white shadow-sm font-semibold" : "text-white/90 hover:text-white hover:bg-white/10"}`
                  }
                  to={link.to}
                >
                  {link.icon} {link.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Bottom Part*/}
      <div className="w-full">
        <button
          onClick={() => {
            logout();
            setSheetOpen?.(false);
          }}
          className="flex items-center justify-center gap-2.5 text-white/90 hover:text-white text-sm md:text-base font-medium px-4 py-2.5 rounded-xl hover:bg-white/10 cursor-pointer transition-colors w-full"
        >
          <LogoutIconSVG className="text-white w-5 h-5 shrink-0" />
          <span>Logout</span>
        </button>
      </div>
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
