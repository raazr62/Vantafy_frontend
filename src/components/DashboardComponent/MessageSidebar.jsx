import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { ClockIconSVG, SupportIconSVG } from "../SVG/DashboardLayoutSVG";
import { allUserMessagesMockData } from "@/lib/DashboardMockData";
const MessageSidebar = ({ setCurrentUserId, currentUserId }) => {
  const [chatList, setChatList] = useState(allUserMessagesMockData);

  useEffect(() => {
    setChatList((prev) =>
      prev.map((chat, index) =>
        index === 0 ? { ...chat, messageStatus: 0 } : chat
      )
    );
  }, []);

  return (
    <aside
      className={`${
        !!currentUserId ? "hidden sm:flex" : "flex"
      } border-r flex-col flex-1/5`}
    >
      <div className="px-5 py-3 font-semibold text-base sm:text-lg border-b border-b-[#AFB8CF]">
        Messages
      </div>

      {/* Search */}
      <div className="px-2 sm:px-5 py-3">
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
        {chatList.map((chat) => (
          <div
            key={chat.id}
            onClick={() => setCurrentUserId(chat.id)}
            className={`px-2 sm:px-4 py-2 sm:py-3 border-t border-gray-200 last:border-b cursor-pointer ${
              currentUserId === chat.id
                ? "bg-[linear-gradient(90deg,#EC70DA14_0%,#51AEFA14_100%)]"
                : ""
            }`}
          >
            <div className="flex items-start gap-2 sm:gap-3">
              {chat.person === "Support" ? (
                <div className="p-2 rounded-xl bg-linear-to-l from-[#EC70DA] to-[#51AEFA] flex items-center justify-center text-white font-semibold">
                  <SupportIconSVG />
                </div>
              ) : (
                <img
                  src={chat.avatar}
                  alt={`${chat.person} avatar`}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full"
                />
              )}
              <div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <p className="text-sm sm:text-base font-medium">
                      {chat.person}
                    </p>
                    {chat.messageStatus > 0 && (
                      <span className="min-w-5 h-5 px-1 text-xs bg-pink-500 text-white flex items-center justify-center rounded-full">
                        {chat.messageStatus > 99 ? "99+" : chat.messageStatus}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#636363] line-clamp-1">
                    {chat.lastMessage}
                  </p>
                </div>
                <div className="flex items-center gap-1 mt-2">
                  <div>
                    <ClockIconSVG />
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-gray-400">
                    {chat.time}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default MessageSidebar;
