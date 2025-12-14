import React, { useEffect, useRef, useState } from "react";
import {
  MoreVertical,
  Send,
  Plus,
  File,
  FileText,
  Image as ImageIcon,
  Download,
  Smile,
  Video,
  Music,
  FileArchive,
  FileCode,
  FileSpreadsheet,
  Eye,
  Trash2,
  Copy,
  Share2,
  Info,
  ChevronDown,
  ChevronUp,
  Camera,
  X,
  Maximize2,
  Minimize2,
} from "lucide-react";
import { SupportIconSVG } from "../SVG/DashboardLayoutSVG";
import { FaRegTrashAlt } from "react-icons/fa";
import EmojiPicker from "emoji-picker-react";

const ChatArea = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! How can I help you today?",
      time: "04:45 PM",
      sender: "support",
      files: [
        {
          id: "file1",
          name: "product-guide.pdf",
          type: "document",
          size: 2457600,
          url: "#",
          mimeType: "application/pdf",
          thumbnail: null,
        },
      ],
    },
    {
      id: 2,
      text: "I need help with uploading files",
      time: "04:46 PM",
      sender: "me",
    },
    {
      id: 3,
      text: "Sure! I'll send you an example image",
      time: "04:47 PM",
      sender: "support",
      files: [
        {
          id: "file2",
          name: "screenshot.png",
          type: "image",
          size: 1024000,
          url: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
          mimeType: "image/png",
          thumbnail:
            "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=40",
        },
      ],
    },
    {
      id: 4,
      text: "Thanks! Here's my document",
      time: "04:48 PM",
      sender: "me",
      files: [
        {
          id: "file3",
          name: "requirements.docx",
          type: "document",
          size: 204800,
          url: "#",
          mimeType:
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          thumbnail: null,
        },
      ],
    },
  ]);

  const [openClearBtn, setOpenClearBtn] = useState(false);
  const [input, setInput] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isUploadMenuOpen, setIsUploadMenuOpen] = useState(false);
  const [expandedImages, setExpandedImages] = useState({});
  const [typingIndicator, setTypingIndicator] = useState(false);
  const [showMessageMenu, setShowMessageMenu] = useState(null);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);
  const emojiPickerRef = useRef(null);
  const messageMenuRef = useRef(null);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        emojiPickerRef.current &&
        !emojiPickerRef.current.contains(event.target)
      ) {
        setShowEmojiPicker(false);
      }
      if (isUploadMenuOpen && !event.target.closest(".upload-menu-container")) {
        setIsUploadMenuOpen(false);
      }
      if (
        showMessageMenu !== null &&
        messageMenuRef.current &&
        !messageMenuRef.current.contains(event.target)
      ) {
        setShowMessageMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isUploadMenuOpen, showMessageMenu]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Typing indicator simulation
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        setTypingIndicator(true);
        setTimeout(() => setTypingIndicator(false), 2000);
      }
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleSendMessage = (e) => {
    e.preventDefault();

    if (!input.trim() && selectedFiles.length === 0) return;

    // Create message files with proper structure
    const messageFiles = selectedFiles.map((file) => ({
      id: file.id,
      name: file.name,
      type: file.type,
      size: file.size,
      url: file.preview || "#",
      mimeType: file.mimeType,
      thumbnail: file.type === "image" ? file.preview : null,
    }));

    const newMessage = {
      id: messages.length + 1,
      text: input,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      sender: "me",
      files: messageFiles.length > 0 ? messageFiles : null,
    };

    setMessages([...messages, newMessage]);
    setInput("");
    setSelectedFiles([]);
    setShowEmojiPicker(false);

    // Simulate response after 1 second
    setTimeout(() => {
      const response = {
        id: messages.length + 2,
        text: "Thanks for sharing! I've received your files.",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        sender: "support",
      };
      setMessages((prev) => [...prev, response]);
    }, 1000);
  };

  const handleClearChat = () => {
    setMessages([]);
    setOpenClearBtn(false);
  };

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);

    const newFiles = files.map((file) => {
      const fileType = file.type.split("/")[0];
      const mimeType = file.type;
      const isImage = fileType === "image";
      const preview = isImage ? URL.createObjectURL(file) : null;

      return {
        file, // Keep the actual File object for downloading
        name: file.name,
        type: isImage ? "image" : getFileType(mimeType),
        size: file.size,
        preview,
        mimeType,
        thumbnail: isImage ? preview : null,
        id: Date.now() + Math.random().toString(36).substr(2, 9),
      };
    });

    setSelectedFiles([...selectedFiles, ...newFiles]);
    setIsUploadMenuOpen(false);
  };

  const getFileIcon = (fileType) => {
    switch (fileType) {
      case "pdf":
        return <FileText className="w-5 h-5 text-red-500" />;
      case "word":
        return <FileText className="w-5 h-5 text-blue-500" />;
      case "excel":
        return <FileSpreadsheet className="w-5 h-5 text-green-500" />;
      case "audio":
        return <Music className="w-5 h-5 text-purple-500" />;
      case "video":
        return <Video className="w-5 h-5 text-yellow-500" />;
      case "archive":
        return <FileArchive className="w-5 h-5 text-orange-500" />;
      case "code":
        return <FileCode className="w-5 h-5 text-pink-500" />;
      default:
        return <File className="w-5 h-5 text-gray-500" />;
    }
  };

  const getFileType = (mimeType) => {
    if (mimeType.startsWith("image/")) return "image";
    if (mimeType === "application/pdf") return "pdf";
    if (mimeType.includes("word") || mimeType.includes("document"))
      return "word";
    if (mimeType.includes("excel") || mimeType.includes("spreadsheet"))
      return "excel";
    if (mimeType.startsWith("audio/")) return "audio";
    if (mimeType.startsWith("video/")) return "video";
    if (
      mimeType.includes("zip") ||
      mimeType.includes("rar") ||
      mimeType.includes("tar")
    )
      return "archive";
    if (
      mimeType.includes("text/") ||
      mimeType.includes("javascript") ||
      mimeType.includes("json")
    )
      return "code";
    return "document";
  };

  const removeFile = (fileId) => {
    const file = selectedFiles.find((f) => f.id === fileId);
    if (file?.preview) {
      URL.revokeObjectURL(file.preview);
    }
    setSelectedFiles(selectedFiles.filter((file) => file.id !== fileId));
  };

  const handleEmojiClick = (emojiObject) => {
    setInput((prevInput) => prevInput + emojiObject.emoji);
  };

  const handleCameraClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.accept = "image/*";
      fileInputRef.current.capture = "environment";
      fileInputRef.current.click();
    }
    setIsUploadMenuOpen(false);
  };

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    if (bytes < 1024 * 1024 * 1024)
      return (bytes / (1024 * 1024)).toFixed(1) + " MB";
    return (bytes / (1024 * 1024 * 1024)).toFixed(1) + " GB";
  };

  const downloadFile = (file) => {
    try {
      // If it's a File object (from selected files)
      if (file.file && file.file instanceof File) {
        const url = URL.createObjectURL(file.file);
        const link = document.createElement("a");
        link.href = url;
        link.download = file.name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }
      // If it's a remote URL (example images)
      else if (file.url && file.url.startsWith("http")) {
        const link = document.createElement("a");
        link.href = file.url;
        link.download = file.name || "download";
        link.target = "_blank";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
      // For demo purposes - create a dummy download
      else {
        const blob = new Blob(
          ["This is a demo file content for: " + file.name],
          {
            type: file.mimeType || "text/plain",
          }
        );
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = file.name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }
    } catch (error) {
      console.error("Download error:", error);
      // Fallback: open in new tab if download fails
      if (file.url && file.url.startsWith("http")) {
        window.open(file.url, "_blank");
      }
    }
  };

  const toggleImageExpand = (messageId, fileId) => {
    setExpandedImages((prev) => ({
      ...prev,
      [`${messageId}-${fileId}`]: !prev[`${messageId}-${fileId}`],
    }));
  };

  const copyMessage = (text) => {
    navigator.clipboard.writeText(text);
    alert("Message copied to clipboard!");
  };

  const deleteMessage = (messageId) => {
    setMessages(messages.filter((msg) => msg.id !== messageId));
    setShowMessageMenu(null);
  };

  const openFullscreenImage = (imageUrl) => {
    setFullscreenImage(imageUrl);
  };

  const closeFullscreenImage = () => {
    setFullscreenImage(null);
  };

  // Fullscreen Image Viewer Component
  const FullscreenImageViewer = () => (
    <div
      className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4"
      onClick={closeFullscreenImage}
    >
      <div className="relative max-w-full max-h-full">
        <button
          onClick={closeFullscreenImage}
          className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="absolute top-4 left-4 z-10 flex gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              const link = document.createElement("a");
              link.href = fullscreenImage;
              link.download = "image.jpg";
              link.target = "_blank";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            className="p-2 bg-black/50 text-white rounded-lg hover:bg-black/70 cursor-pointer flex items-center gap-2"
          >
            <Download className="w-4 h-4" /> Download
          </button>
        </div>
        <img
          src={fullscreenImage}
          alt="Fullscreen preview"
          className="max-w-full max-h-[90vh] object-contain rounded-lg"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );

  return (
    <>
      {fullscreenImage && <FullscreenImageViewer />}

      <section className="flex flex-col flex-4/5 relative">
        {/* Header */}
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
                  onClick={() => {
                    /* View info */
                  }}
                  className="w-full text-left px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition flex items-center gap-2 cursor-pointer"
                >
                  <Info className="w-4 h-4" /> Chat Info
                </button>
                <button
                  onClick={() => {
                    /* Export chat */
                  }}
                  className="w-full text-left px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition flex items-center gap-2 cursor-pointer"
                >
                  <Download className="w-4 h-4" /> Export Chat
                </button>
                <button
                  onClick={handleClearChat}
                  className="w-full text-left px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50 transition flex items-center gap-2 cursor-pointer border-t"
                >
                  <FaRegTrashAlt /> Clear Chat
                </button>
              </div>
            )}
          </div>
        </header>

        {/* Messages */}
        <div className="grow overflow-y-auto p-6 space-y-6">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${
                msg.sender === "me" ? "justify-end" : "justify-start"
              }`}
            >
              <div className="relative group max-w-[80%]">
                {msg.files && msg.files.length > 0 && (
                  <div className="mb-2 flex flex-wrap gap-3">
                    {msg.files.map((file) => (
                      <div
                        key={file.id}
                        className={`relative rounded-xl overflow-hidden border ${
                          msg.sender === "me"
                            ? "border-blue-100"
                            : "border-gray-100"
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
                                  openFullscreenImage(
                                    file.url || file.thumbnail
                                  )
                                }
                              />
                              <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/5 transition-all duration-300" />
                              <div className="absolute top-2 right-2 opacity-0 group-hover/image:opacity-100 transition-opacity flex gap-1">
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    openFullscreenImage(
                                      file.url || file.thumbnail
                                    );
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
                                  {file.mimeType
                                    ?.split("/")[1]
                                    ?.toUpperCase() || "FILE"}
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

                {msg.text && (
                  <div className="relative">
                    <div
                      className={`max-w-full px-6 py-4 rounded-4xl text-sm leading-relaxed whitespace-pre-line
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
                          setShowMessageMenu(
                            showMessageMenu === msg.id ? null : msg.id
                          )
                        }
                        className="opacity-0 group-hover:opacity-100 p-1 hover:bg-gray-100 rounded-lg transition-opacity cursor-pointer"
                      >
                        <MoreVertical className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                )}

                {showMessageMenu === msg.id && (
                  <div
                    ref={messageMenuRef}
                    className="absolute right-0 mt-1 w-36 bg-white rounded-lg shadow-lg border z-50"
                  >
                    <button
                      onClick={() => copyMessage(msg.text)}
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
                      onClick={() => deleteMessage(msg.id)}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2 cursor-pointer border-t"
                    >
                      <Trash2 className="w-4 h-4" /> Delete
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {typingIndicator && (
            <div className="flex justify-start">
              <div className="bg-[#BCEDFB] text-[#0168B5] rounded-4xl rounded-bl-none px-6 py-4">
                <div className="flex gap-1">
                  <div
                    className="w-2 h-2 bg-current rounded-full animate-bounce"
                    style={{ animationDelay: "0ms" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-current rounded-full animate-bounce"
                    style={{ animationDelay: "150ms" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-current rounded-full animate-bounce"
                    style={{ animationDelay: "300ms" }}
                  ></div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Selected Files Preview Section */}
        {selectedFiles.length > 0 && (
          <div className="px-6 py-3 bg-gray-50 border-t">
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm font-medium text-gray-700">
                {selectedFiles.length} file{selectedFiles.length > 1 ? "s" : ""}{" "}
                ready to send
              </p>
              <button
                onClick={() => {
                  selectedFiles.forEach((file) => {
                    if (file.preview) URL.revokeObjectURL(file.preview);
                  });
                  setSelectedFiles([]);
                }}
                className="text-xs text-red-500 hover:text-red-700 cursor-pointer"
              >
                Clear all
              </button>
            </div>
            <div className="flex flex-wrap gap-3">
              {selectedFiles.map((file) => (
                <div
                  key={file.id}
                  className="relative group bg-white rounded-lg border p-3 min-w-[200px] hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-3">
                    {file.type === "image" ? (
                      <div
                        className="w-16 h-16 rounded-lg overflow-hidden cursor-pointer relative group/image-thumb"
                        onClick={() => openFullscreenImage(file.preview)}
                      >
                        <img
                          src={file.preview}
                          alt={file.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover/image-thumb:bg-black/20 transition-all duration-300 flex items-center justify-center">
                          <Eye className="w-5 h-5 text-white opacity-0 group-hover/image-thumb:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    ) : (
                      <div className="p-2 bg-gray-100 rounded">
                        {getFileIcon(file.type)}
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm truncate">
                        {file.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {formatFileSize(file.size)} •{" "}
                        {file.mimeType?.split("/")[1]?.toUpperCase() || "FILE"}
                      </p>
                      <div className="flex gap-2 mt-2">
                        <button
                          onClick={() => removeFile(file.id)}
                          className="text-xs text-red-500 hover:text-red-700 cursor-pointer"
                        >
                          Remove
                        </button>
                        <button
                          onClick={() => downloadFile(file)}
                          className="text-xs text-blue-500 hover:text-blue-700 cursor-pointer"
                        >
                          Download
                        </button>
                        {file.type === "image" && (
                          <button
                            onClick={() => openFullscreenImage(file.preview)}
                            className="text-xs text-green-500 hover:text-green-700 cursor-pointer"
                          >
                            Preview
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Input Area */}
        <form
          onSubmit={handleSendMessage}
          className="py-4 px-6 flex items-center gap-3 bg-[#FFF5FDE0] relative border-t"
        >
          {/* Hidden file input */}
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileSelect}
            multiple
            accept="image/*,.pdf,.doc,.docx,.txt,.xlsx,.xls,.ppt,.pptx,.zip,.rar,.mp3,.mp4"
          />

          {/* Upload Menu */}
          <div className="relative upload-menu-container">
            <button
              type="button"
              onClick={() => setIsUploadMenuOpen(!isUploadMenuOpen)}
              className="p-3 rounded-full bg-blue-500 shadow flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer"
            >
              <Plus className="w-5 h-5 text-white" />
            </button>

            {isUploadMenuOpen && (
              <div className="absolute bottom-full left-0 mb-2 w-64 bg-white rounded-xl shadow-xl border z-50 overflow-hidden">
                <div className="p-2">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full px-4 py-3 text-left hover:bg-gray-50 rounded-lg flex items-center gap-3 cursor-pointer"
                  >
                    <ImageIcon className="w-5 h-5 text-blue-500" />
                    <div>
                      <p className="font-medium text-sm">Photos & Videos</p>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, GIF, MP4
                      </p>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={handleCameraClick}
                    className="w-full px-4 py-3 text-left hover:bg-gray-50 rounded-lg flex items-center gap-3 cursor-pointer"
                  >
                    <Camera className="w-5 h-5 text-green-500" />
                    <div>
                      <p className="font-medium text-sm">Camera</p>
                      <p className="text-xs text-gray-500">
                        Take photo or video
                      </p>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      if (fileInputRef.current) {
                        fileInputRef.current.accept =
                          ".pdf,.doc,.docx,.txt,.xlsx,.xls";
                        fileInputRef.current.click();
                      }
                    }}
                    className="w-full px-4 py-3 text-left hover:bg-gray-50 rounded-lg flex items-center gap-3 cursor-pointer"
                  >
                    <FileText className="w-5 h-5 text-purple-500" />
                    <div>
                      <p className="font-medium text-sm">Document</p>
                      <p className="text-xs text-gray-500">
                        PDF, Word, Excel, Text
                      </p>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      if (fileInputRef.current) {
                        fileInputRef.current.accept = "audio/*,video/*";
                        fileInputRef.current.click();
                      }
                    }}
                    className="w-full px-4 py-3 text-left hover:bg-gray-50 rounded-lg flex items-center gap-3 cursor-pointer"
                  >
                    <Music className="w-5 h-5 text-yellow-500" />
                    <div>
                      <p className="font-medium text-sm">Audio & Video</p>
                      <p className="text-xs text-gray-500">
                        MP3, WAV, MP4, AVI
                      </p>
                    </div>
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="flex-1 relative">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="w-full py-3 px-4 pr-12 rounded-full border focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm bg-white"
            />

            {/* Emoji Picker */}
            <div
              className="absolute right-2 top-1/2 -translate-y-1/2"
              ref={emojiPickerRef}
            >
              <button
                type="button"
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer"
              >
                <Smile className="w-5 h-5 text-gray-400" />
              </button>

              {showEmojiPicker && (
                <div className="absolute bottom-full right-0 mb-2 z-50">
                  <EmojiPicker
                    onEmojiClick={handleEmojiClick}
                    width={320}
                    height={400}
                    skinTonesDisabled
                    previewConfig={{ showPreview: false }}
                    searchDisabled={false}
                  />
                </div>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={!input.trim() && selectedFiles.length === 0}
            className={`p-3 rounded-full flex items-center justify-center text-white shadow transition-colors ${
              !input.trim() && selectedFiles.length === 0
                ? "bg-blue-300 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600 cursor-pointer"
            }`}
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
      </section>
    </>
  );
};

export default ChatArea;
