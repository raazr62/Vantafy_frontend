import React, { useRef } from "react";
import {
  Download,
  Maximize2,
  Minimize2,
  MoreVertical,
  Trash2,
  Copy,
  Share2,
} from "lucide-react";
import { getFileIcon } from "./utils/iconUtils.jsx";
import { formatFileSize, downloadFile } from "./utils/fileUtils";

const MessageItem = ({
  msg,
  expandedImages,
  toggleImageExpand,
  onOpenFullscreen,
  showMessageMenu,
  onShowMessageMenu,
  onDeleteMessage,
  onCopyMessage,
}) => {
  const messageMenuRef = useRef(null);

  return (
    <div
      className={`flex ${
        msg.sender === "me" ? "justify-end" : "justify-start"
      }`}
    >
      <div className="relative group max-w-[80%]">
        {/* Files Section */}
        {msg.files && msg.files.length > 0 && (
          <div className="mb-2 flex flex-wrap gap-3">
            {msg.files.map((file) => (
              <div
                key={file.id}
                className={`relative rounded-xl overflow-hidden border ${
                  msg.sender === "me" ? "border-blue-100" : "border-gray-100"
                }`}
              >
                {file.type === "image" ? (
                  <div className="relative">
                    <div className="relative group/image">
                      <img
                        src={file.url || file.thumbnail}
                        alt={file.name}
                        className={`cursor-pointer transition-all duration-300 hover:opacity-95 ${
                          expandedImages[`${msg.id}-${file.id}`]
                            ? "max-w-2xl"
                            : "max-w-xs"
                        }`}
                        onClick={() =>
                          onOpenFullscreen(file.url || file.thumbnail)
                        }
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/5 transition-all duration-300" />
                      <div className="absolute top-2 right-2 lg:opacity-0 lg:group-hover/image:opacity-100 transition-opacity flex gap-1">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onOpenFullscreen(file.url || file.thumbnail);
                          }}
                          className="p-1.5 bg-black/60 text-white rounded hover:bg-black/80 cursor-pointer"
                          title="View fullscreen"
                        >
                          <Maximize2 className="w-3 h-3" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            downloadFile(file);
                          }}
                          className="p-1.5 bg-black/60 text-white rounded hover:bg-black/80 cursor-pointer"
                          title="Download"
                        >
                          <Download className="w-3 h-3" />
                        </button>
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
                          {formatFileSize(file.size)} •{" "}
                          {file.mimeType?.split("/")[1]?.toUpperCase() ||
                            "FILE"}
                        </p>
                      </div>
                      <button
                        onClick={() => downloadFile(file)}
                        className="p-2 hover:bg-gray-200 rounded-lg cursor-pointer"
                        title="Download"
                      >
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Message Text */}
        {msg.text && (
          <div className="relative">
            <div
              className={`max-w-full px-3 sm:px-6 py-2 sm:py-4 rounded-2xl sm:rounded-3xl md:rounded-4xl text-sm leading-relaxed whitespace-pre-line
                ${
                  msg.sender === "me"
                    ? "bg-[#35A9FF] text-white rounded-br-none"
                    : "bg-[#BCEDFB] text-[#0168B5] rounded-bl-none"
                }`}
            >
              {msg.text}
            </div>
            <div className="flex items-center justify-between mt-1">
              <p
                className={`text-[11px] text-gray-400 ${
                  msg.sender === "me" ? "text-right" : "text-left"
                }`}
              >
                {msg.time}
              </p>
              <button
                onClick={() =>
                  onShowMessageMenu(showMessageMenu === msg.id ? null : msg.id)
                }
                className="opacity-0 group-hover:opacity-100 p-1 hover:bg-gray-100 rounded-lg transition-opacity cursor-pointer"
              >
                <MoreVertical className="w-3 h-3" />
              </button>
            </div>
          </div>
        )}

        {/* Message Menu */}
        {showMessageMenu === msg.id && (
          <div
            ref={messageMenuRef}
            className="absolute right-0 mt-1 w-36 bg-white rounded-lg shadow-lg border z-50"
          >
            <button
              onClick={() => onCopyMessage(msg.text)}
              className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 flex items-center gap-2 cursor-pointer"
            >
              <Copy className="w-4 h-4" /> Copy
            </button>
            <button
              onClick={() => {
                /* Forward message */
              }}
              className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 flex items-center gap-2 cursor-pointer"
            >
              <Share2 className="w-4 h-4" /> Forward
            </button>
            <button
              onClick={() => onDeleteMessage(msg.id)}
              className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2 cursor-pointer border-t"
            >
              <Trash2 className="w-4 h-4" /> Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageItem;
