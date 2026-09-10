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
    <div className="bg-[linear-gradient(90deg,rgba(78,120,253,0.12)_0%,rgba(255,27,228,0.12)_100%)] h-full px-3 py-6 max-w-[260px] w-full lg:rounded-2xl flex flex-col justify-between">
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
              user.role !== "agency" && (link.name === "My Information" || link.name === "Add Email");
            if (isSkipped) return null;
            return (
              <li key={link.id} onClick={() => setSheetOpen?.(false)}>
                <NavLink
                  className={({ isActive }) =>
                    `py-1.5 sm:py-3 px-4 flex items-center gap- rounded-xl text-xs sm:text-sm font-medium sm:font-semibold
              ${isActive ? "bg-primary text-white" : "text-[#4A4A4A]"}`
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
      <div className="max-w-[230px]">
        <button
          onClick={() => {
            logout();
            setSheetOpen?.(false);
          }}
          className="flex items-center ml-5 gap-2 text-[#FF4ECF] text-sm md:text-base font-medium px-2 cursor-pointer hover:opacity-80 transition-opacity"
        >
          <LogoutIconSVG /> Logout
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
