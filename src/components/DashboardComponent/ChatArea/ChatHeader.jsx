import React from "react";
import { Download, Info, MoreVertical } from "lucide-react";
import { FaRegTrashAlt } from "react-icons/fa";
import { SupportIconSVG } from "../../SVG/DashboardLayoutSVG";

const ChatHeader = ({
  typingIndicator,
  openClearBtn,
  setOpenClearBtn,
  onClearChat,
}) => {
  return (
    <header className="py-4 border-b flex items-center justify-between px-6">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-xl bg-linear-to-l from-[#EC70DA] to-[#51AEFA] flex items-center justify-center text-white">
          <SupportIconSVG />
        </div>
        <div>
          <p className="font-semibold text-sm">Support Team</p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <p className="text-xs text-gray-500">
              Online • {typingIndicator && "Typing..."}
            </p>
          </div>
        </div>
      </div>

      <div className="relative">
        <button
          onClick={() => setOpenClearBtn((prev) => !prev)}
          className="p-2 rounded-xl border border-gray-100 hover:bg-gray-50 transition cursor-pointer"
        >
          <MoreVertical className="w-5 h-5 text-gray-800" />
        </button>

        {openClearBtn && (
          <div className="absolute right-0 mt-1 w-48 rounded-xl bg-white shadow-lg border border-gray-100 overflow-hidden z-50">
            <button
              onClick={onClearChat}
              className="w-full text-left px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50 transition flex items-center gap-2 cursor-pointer border-t"
            >
              <FaRegTrashAlt /> Clear Chat
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default ChatHeader;
