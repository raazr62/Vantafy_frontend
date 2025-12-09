import { sidebarLinks } from "@/lib/DashboardMockData";
import Logo from "@/shared/LandingShared/Logo";
import React from "react";
import { FaStar } from "react-icons/fa6";
import { NavLink } from "react-router";
import { LogoutIconSVG } from "../SVG/DashboardLayoutSVG";

const Sidebar = () => {
  return (
    <div className="bg-[linear-gradient(90deg,rgba(78,120,253,0.12)_0%,rgba(255,27,228,0.12)_100%)] h-full px-3 py-6 max-w-[260px] w-full rounded-2xl flex flex-col justify-between">
      {/* Top Bar */}
      <div>
        <div className="p-1 bg-linear-to-br from-[#971DFE] to-[#C289E8] border border-purple-500 rounded-full flex items-center justify-center">
          <Logo variant="whiteFull" />
        </div>

        {/* Navigation Link */}
        <ul className="mt-8 space-y-1">
          {sidebarLinks.map((link) => (
            <li>
              <NavLink
                key={link.id}
                className={({ isActive }) =>
                  `py-3 px-4 flex items-center gap-3 rounded-xl text-sm font-semibold
              ${isActive ? "bg-primary text-white" : "text-[#4A4A4A]"}`
                }
                to={link.to}
              >
                {link.icon} {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom Part*/}
      <div className="max-w-[230px]">
        <button className="flex items-center gap-2 text-red-600 font-medium mb-8 px-2 cursor-pointer">
          <LogoutIconSVG /> Logout
        </button>
        <div className="bg-[linear-gradient(90deg,rgba(78,120,253,0.12)_0%,rgba(255,27,228,0.12)_100%)] p-4 rounded-2xl flex flex-col items-center gap-3">
          <p className="text-center">24/7 Access to Your Personal Dashboard</p>
          <div className="flex gap-1.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar size={20} key={i} />
            ))}
          </div>

          <button className="bg-[linear-gradient(90deg,#E27CE9_0%,#B099F3_52.4%,#33B1FE_100%)] text-sm font-semibold text-white w-full py-2 rounded-[12px]">
            Get Premium
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
