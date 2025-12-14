import React from "react";
import { Search } from "lucide-react";
import { ClockIconSVG, SupportIconSVG } from "../SVG/DashboardLayoutSVG";
const MessageSidebar = () => {
  return (
    <aside className="border-r flex flex-col flex-1/5">
      <div className="px-5 py-3 font-semibold text-lg border-b border-b-[#AFB8CF]">
        Messages
      </div>

      {/* Search */}
      <div className="px-5 py-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search or start a new chat"
            className="w-full pl-9 pr-3 py-2 text-sm rounded-lg bg-white border focus:outline-none focus:ring-1 focus:ring-blue-400"
          />
        </div>
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto">
        <div className="px-4 py-3 bg-purple-50">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-linear-to-l from-[#EC70DA] to-[#51AEFA] flex items-center justify-center text-white font-semibold">
              <SupportIconSVG />
            </div>
            <div>
              <div className="flex-1">
                <p className="font-medium">Support</p>
                <p className="text-xs text-[#636363] truncate">
                  Hey! Did you finish the Hi-Fi wireframes...
                </p>
              </div>
              <div className="flex items-center gap-1 mt-2">
                <div>
                  <ClockIconSVG />
                </div>
                <p className="text-[11px] text-gray-400">Today | 05:30 PM</p>
              </div>
            </div>
            <span className="text-xs bg-pink-500 text-white px-2 py-0.5 rounded-full">
              1
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default MessageSidebar;
