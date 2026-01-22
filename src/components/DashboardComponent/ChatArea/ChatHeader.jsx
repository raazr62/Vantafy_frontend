import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { SupportIconSVG } from "../../SVG/DashboardLayoutSVG";

const ChatHeader = ({ setCurrentUserId }) => {
  return (
    <header className="py-4 border-b flex items-center justify-between px-6">
      <div className="flex items-center gap-3">
        <button onClick={() => setCurrentUserId()} className="text-primary">
          <FaArrowLeft />
        </button>
        <div className="p-2 rounded-full bg-linear-to-r from-[#EC70DA] to-[#51AEFA] flex items-center justify-center text-white">
          <SupportIconSVG />
        </div>
        <div>
          <p className="font-semibold text-sm">Support Team</p>
        </div>
      </div>
    </header>
  );
};

export default ChatHeader;
