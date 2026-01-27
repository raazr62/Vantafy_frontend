import React, { useRef } from "react";
import {
  Download,
  Maximize2,
  Minimize2,
  MoreVertical,
  Trash2,
  Copy,
  Share2,
  User,
} from "lucide-react";
import { getFileIcon } from "./utils/iconUtils.jsx";
import { SupportIconSVG } from "@/components/SVG/DashboardLayoutSVG";

// Helper function to format ISO date string to readable time
const formatTime = (isoString) => {
  if (!isoString) return "";
  const date = new Date(isoString);
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
};

// Helper function to get current user data from localStorage
const getCurrentUser = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) {
    try {
      return JSON.parse(userStr);
    } catch (e) {
      return null;
    }
  }
  return null;
};

const MessageItem = ({
  msg,
  expandedImages,
  toggleImageExpand,
  onOpenFullscreen,
}) => {
  const messageMenuRef = useRef(null);

  // Get current user for avatar display
  const currentUser = getCurrentUser();

  // API Structure clarification:
  // - Main messages ALWAYS have sender (user) and recipient (support)
  // - Sender is ALWAYS the current logged-in user
  // - So main messages should ALWAYS appear on RIGHT side
  // - Only replies (from support) appear on LEFT side

  // For main messages: isSupport is always FALSE (user message on RIGHT)
  const isSupport = false;

  // Display name for user messages
  const displayName = msg.sender?.email?.split("@")[0] || "You";

  // Prepare files array from API response
  const files = [];

  if (msg.image_url) {
    files.push({
      id: `img-${msg.id}`,
      name: msg.image || "Image",
      type: "image",
      url: msg.image_url,
      thumbnail: msg.image_url,
      mimeType: "image/*",
      size: 0,
    });
  }

  if (msg.file_url) {
    files.push({
      id: `file-${msg.id}`,
      name: msg.file || "File",
      type: "document",
      url: msg.file_url,
      mimeType: "application/octet-stream",
      size: 0,
    });
  }

  if (msg.document_url) {
    files.push({
      id: `doc-${msg.id}`,
      name: msg.document || "Document",
      type: "document",
      url: msg.document_url,
      mimeType: "application/pdf",
      size: 0,
    });
  }

  // Avatar component
  const Avatar = () => {
    // User avatar - use profile picture or fallback icon
    const profilePicture = currentUser?.profile_picture || currentUser?.avatar;

    if (profilePicture) {
      return (
        <img
          src={profilePicture}
          alt="User"
          className="w-10 h-10 rounded-full object-cover shrink-0"
        />
      );
    } else {
      return (
        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 shrink-0">
          <User className="w-5 h-5" />
        </div>
      );
    }
  };

  return (
    <div className="space-y-3">
      {/* Main Message - ALWAYS user message on RIGHT */}
      <div className="flex gap-3 justify-end">
        <div className="relative group max-w-[70%]">
          {/* Sender Name */}
          <div className="mb-1 text-right">
            <span className="text-xs font-medium text-gray-500">
              {displayName}
            </span>
          </div>

          {/* Files Section */}
          {files.length > 0 && (
            <div className="mb-2 flex flex-wrap gap-3 justify-end">
              {files.map((file) => (
                <div
                  key={file.id}
                  className="relative rounded-xl overflow-hidden border border-blue-100"
                >
                  {file.type === "image" ? (
                    <div className="relative">
                      <div className="relative group/image">
                        <img
                          src={file.url}
                          alt={file.name}
                          className={`cursor-pointer transition-all duration-300 hover:opacity-95 ${
                            expandedImages[`${msg.id}-${file.id}`]
                              ? "max-w-2xl"
                              : "max-w-xs"
                          }`}
                          onClick={() => onOpenFullscreen(file.url)}
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/5 transition-all duration-300" />
                        <div className="absolute top-2 right-2 lg:opacity-0 lg:group-hover/image:opacity-100 transition-opacity flex gap-1">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onOpenFullscreen(file.url);
                            }}
                            className="p-1.5 bg-black/60 text-white rounded hover:bg-black/80 cursor-pointer"
                            title="View fullscreen"
                          >
                            <Maximize2 className="w-3 h-3" />
                          </button>
                          <a
                            href={file.url}
                            download={file.name}
                            onClick={(e) => e.stopPropagation()}
                            className="p-1.5 bg-black/60 text-white rounded hover:bg-black/80 cursor-pointer"
                            title="Download"
                          >
                            <Download className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 flex gap-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleImageExpand(msg.id, file.id);
                          }}
                          className="p-1.5 bg-black/50 text-white rounded-lg hover:bg-black/70 cursor-pointer"
                          title={
                            expandedImages[`${msg.id}-${file.id}`]
                              ? "Collapse"
                              : "Expand"
                          }
                        >
                          {expandedImages[`${msg.id}-${file.id}`] ? (
                            <Minimize2 className="w-4 h-4" />
                          ) : (
                            <Maximize2 className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                      <div className="absolute bottom-2 left-2 px-2 py-1 bg-black/50 text-white text-xs rounded">
                        {file.name}
                      </div>
                    </div>
                  ) : (
                    <div className="p-4 bg-gray-50">
                      <div className="flex items-center gap-3">
                        {getFileIcon(file.type)}
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-sm truncate">
                            {file.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {file.mimeType?.split("/")[1]?.toUpperCase() ||
                              "FILE"}
                          </p>
                        </div>
                        <a
                          href={file.url}
                          download={file.name}
                          className="p-2 hover:bg-gray-200 rounded-lg cursor-pointer"
                          title="Download"
                        >
                          <Download className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Message Text */}
          {msg.txt && (
            <div className="relative">
              <div className="max-w-full px-4 sm:px-5 py-2.5 sm:py-3.5 rounded-2xl text-sm sm:text-base leading-relaxed whitespace-pre-line shadow-sm bg-[#0084FF] text-white rounded-br-md">
                {msg.txt}
              </div>
              <div className="flex items-center justify-between mt-1">
                <p className="text-[10px] sm:text-[11px] text-gray-400 text-right ml-auto">
                  {formatTime(msg.sent_at)}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* User Avatar on right */}
        <Avatar />
      </div>

      {/* Replies Section - Support messages on LEFT */}
      {msg.replies && msg.replies.length > 0 && (
        <div className="flex justify-start">
          <div className="flex gap-3 max-w-[75%]">
            {/* Support Avatar on left */}
            <div className="w-10 h-10 rounded-full bg-linear-to-r from-[#EC70DA] to-[#51AEFA] flex items-center justify-center text-white shrink-0">
              <SupportIconSVG />
            </div>

            <div className="flex-1">
              <div className="text-xs text-gray-500 mb-2">
                {msg.reply_count} {msg.reply_count === 1 ? "Reply" : "Replies"}
              </div>
              <div className="space-y-2">
                {msg.replies.map((reply) => (
                  <div
                    key={reply.id}
                    className="bg-gray-100 rounded-2xl rounded-bl-md px-4 py-3 shadow-sm"
                  >
                    <div className="flex items-center justify-between gap-4 mb-1">
                      <span className="text-xs font-medium text-gray-700">
                        Support
                      </span>
                      <span className="text-[10px] text-gray-400">
                        {formatTime(reply.replied_at)}
                      </span>
                    </div>
                    <p className="text-sm text-gray-900 whitespace-pre-line">
                      {reply.reply_txt}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessageItem;
