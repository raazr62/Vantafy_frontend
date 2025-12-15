import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { ClockIconSVG, SupportIconSVG } from "../SVG/DashboardLayoutSVG";
const MessageSidebar = () => {
  const [chatList, setChatList] = useState([
    {
      id: 1,
      person: "Support",
      lastMessage:
        "Hey! Did you finish the Hi-FI wireframes for flora app design?",
      time: "Today | 05:30 PM",
      messageStatus: 2,
    },
  ]);

  useEffect(() => {
    setChatList((prev) =>
      prev.map((chat, index) =>
        index === 0 ? { ...chat, messageStatus: 0 } : chat
      )
    );
  }, []);

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
        {chatList.map((chat) => (
          <div
            key={chat.id}
            className="px-4 py-3 bg-[linear-gradient(90deg,#EC70DA14_0%,#51AEFA14_100%)]"
          >
            <div className="flex items-start gap-3">
              {chat.person === "Support" ? (
                <div className="p-2 rounded-xl bg-linear-to-l from-[#EC70DA] to-[#51AEFA] flex items-center justify-center text-white font-semibold">
                  <SupportIconSVG />
                </div>
              ) : (
                <img
                  src="https://i.pravatar.cc/"
                  alt={`${chat.person} avatar`}
                  className="w-9 h-9 rounded-full"
                />
              )}
              <div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <p className="font-medium">{chat.person}</p>
                    {chat.messageStatus > 0 && (
                      <span className="text-xs bg-pink-500 text-white px-2 py-0.5 rounded-full">
                        {chat.messageStatus}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#636363] truncate">
                    {chat.lastMessage}
                  </p>
                </div>
                <div className="flex items-center gap-1 mt-2">
                  <div>
                    <ClockIconSVG />
                  </div>
                  <p className="text-[11px] text-gray-400">{chat.time}</p>
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
