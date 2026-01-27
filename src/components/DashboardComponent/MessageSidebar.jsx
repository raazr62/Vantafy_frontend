import React, { useMemo } from "react";
import { Search } from "lucide-react";
import { ClockIconSVG, SupportIconSVG } from "../SVG/DashboardLayoutSVG";
import { useGetMessages } from "@/hooks/useGetMessages";

// Helper to format time
const formatTime = (isoString) => {
  if (!isoString) return "";
  const date = new Date(isoString);
  const now = new Date();
  const diffMs = now - date;
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return "Just now";
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays === 1) return "Yesterday";
  if (diffDays < 7) return `${diffDays}d ago`;

  return date.toLocaleDateString([], { month: "short", day: "numeric" });
};

const MessageSidebar = ({ setCurrentUserId, currentUserId }) => {
  // Fetch messages from API
  const { data: messagesData, isLoading } = useGetMessages();
  const messages = messagesData?.data || [];

  // Process messages to get the last message info
  const chatData = useMemo(() => {
    if (messages.length === 0) return null;

    // Get the last message in the array
    const lastMsg = messages[messages.length - 1];

    // Determine last message text
    let lastMessageText = "";
    let lastMessageTime = "";

    if (lastMsg.replies && lastMsg.replies.length > 0) {
      // If there are replies, show the last reply
      const lastReply = lastMsg.replies[lastMsg.replies.length - 1];
      lastMessageText = lastReply.reply_txt;
      lastMessageTime = lastReply.replied_at;
    } else {
      // Otherwise show the user's message
      lastMessageText = lastMsg.txt || "Media file";
      lastMessageTime = lastMsg.sent_at;
    }

    return {
      id: 1,
      person: "Support",
      lastMessage: lastMessageText,
      time: formatTime(lastMessageTime),
      messageStatus: lastMsg.reply_count || 0,
    };
  }, [messages]);

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
        {isLoading ? (
          <div className="px-4 py-8 text-center text-gray-400 text-sm">
            Loading messages...
          </div>
        ) : chatData ? (
          <div
            onClick={() => setCurrentUserId(chatData.id)}
            className={`px-2 sm:px-4 py-2 sm:py-3 border-t border-gray-200 last:border-b cursor-pointer ${
              currentUserId === chatData.id
                ? "bg-[linear-gradient(90deg,#EC70DA14_0%,#51AEFA14_100%)]"
                : ""
            }`}
          >
            <div className="flex items-start gap-2 sm:gap-3">
              <div className="p-2 rounded-xl bg-linear-to-l from-[#EC70DA] to-[#51AEFA] flex items-center justify-center text-white font-semibold">
                <SupportIconSVG />
              </div>
              <div className="flex-1">
                <div className="flex-1">
                  <div className="flex justify-between gap-4 items-center">
                    <p className="text-sm sm:text-base font-medium">
                      {chatData.person}
                    </p>
                    {chatData.messageStatus > 0 && (
                      <span className="min-w-5 h-5 px-1 text-xs bg-pink-500 text-white flex items-center justify-center rounded-full">
                        {chatData.messageStatus > 99
                          ? "99+"
                          : chatData.messageStatus}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#636363] line-clamp-1">
                    {chatData.lastMessage}
                  </p>
                </div>
                <div className="flex items-center gap-1 mt-2">
                  <div>
                    <ClockIconSVG />
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-gray-400">
                    {chatData.time}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div
            onClick={() => setCurrentUserId(1)}
            className={`px-2 sm:px-4 py-2 sm:py-3 border-t border-gray-200 last:border-b cursor-pointer bg-[linear-gradient(90deg,#EC70DA14_0%,#51AEFA14_100%)]`}
          >
            <div className="flex items-start gap-2 sm:gap-3">
              <div className="p-2 rounded-xl bg-linear-to-l from-[#EC70DA] to-[#51AEFA] flex items-center justify-center text-white font-semibold">
                <SupportIconSVG />
              </div>
              <div className="flex-1">
                <div className="flex-1">
                  <div className="flex justify-between gap-4 items-center">
                    <p className="text-sm sm:text-base font-medium">Support</p>
                  </div>
                  <p className="text-xs text-[#636363] line-clamp-1">
                    No messages yet
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};

export default MessageSidebar;
