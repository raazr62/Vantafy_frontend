import React, { useEffect, useRef, useState } from "react";
import ChatHeader from "./ChatHeader";
import MessageItem from "./MessageItem";
import FullscreenImageViewer from "./FullscreenImageViewer";
import FilePreviewSection from "./FilePreviewSection";
import ChatInput from "./ChatInput";
import TypingIndicator from "./TypingIndicator";
import { getFileType, fileToBase64 } from "./utils/fileUtils";
import { allUserMessagesMockData } from "@/lib/DashboardMockData";

const ChatArea = ({ setCurrentUserId, currentUserId }) => {
  const filterMessages = allUserMessagesMockData.find(
    (user) => user.id === currentUserId
  );

  const [messages, setMessages] = useState(filterMessages?.conversation ?? []);

  useEffect(() => {
    setMessages(filterMessages?.conversation ?? []);
  }, [currentUserId]);

  const [openClearBtn, setOpenClearBtn] = useState(false);
  const [input, setInput] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [expandedImages, setExpandedImages] = useState({});
  const [typingIndicator, setTypingIndicator] = useState(false);
  const [showMessageMenu, setShowMessageMenu] = useState(null);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        showMessageMenu !== null &&
        !event.target.closest(".message-menu-trigger")
      ) {
        setShowMessageMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showMessageMenu]);

  // Scroll to bottom when messages change
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

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (!input.trim() && selectedFiles.length === 0) return;

    // Create message files with proper structure
    const messageFiles = await Promise.all(
      selectedFiles.map(async (file) => {
        const originalFileData = await fileToBase64(file.file);

        return {
          id: file.id,
          name: file.name,
          type: file.type,
          size: file.size,
          url: file.preview || "#",
          mimeType: file.mimeType,
          thumbnail: file.type === "image" ? file.preview : null,
          originalFileData: originalFileData,
        };
      })
    );

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
        file,
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
  };

  const removeFile = (fileId) => {
    const file = selectedFiles.find((f) => f.id === fileId);
    if (file?.preview) {
      URL.revokeObjectURL(file.preview);
    }
    setSelectedFiles(selectedFiles.filter((file) => file.id !== fileId));
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

  return (
    <>
      {fullscreenImage && (
        <FullscreenImageViewer
          imageUrl={fullscreenImage}
          onClose={closeFullscreenImage}
        />
      )}

      {filterMessages ? (
        <section
          className={`flex flex-col overflow-hidden flex-2/5 lg:flex-3/5 xl:flex-3/5 2xl:flex-4/5 relative max-h-[calc(100vh-68px)] lg:max-h-full`}
        >
          {/* Header */}
          <ChatHeader
            filterMessages={filterMessages}
            setCurrentUserId={setCurrentUserId}
            openClearBtn={openClearBtn}
            setOpenClearBtn={setOpenClearBtn}
            onClearChat={handleClearChat}
          />

          {/* Messages */}
          <div className="grow overflow-y-auto p-6 space-y-6 min-h-0 sm:max-h-full">
            {messages.map((msg) => (
              <MessageItem
                key={msg.id}
                msg={msg}
                expandedImages={expandedImages}
                toggleImageExpand={toggleImageExpand}
                onOpenFullscreen={openFullscreenImage}
                showMessageMenu={showMessageMenu}
                onShowMessageMenu={setShowMessageMenu}
                onDeleteMessage={deleteMessage}
                onCopyMessage={copyMessage}
              />
            ))}

            {/* Typing Indicator */}
            {typingIndicator && <TypingIndicator />}

            <div ref={messagesEndRef} />
          </div>

          {/* File Preview Section */}
          <FilePreviewSection
            selectedFiles={selectedFiles}
            onRemoveFile={removeFile}
            onOpenFullscreen={openFullscreenImage}
          />

          {/* Input Area */}
          <ChatInput
            input={input}
            onInputChange={setInput}
            onSendMessage={handleSendMessage}
            selectedFiles={selectedFiles}
            fileInputRef={fileInputRef}
            onFileSelect={handleFileSelect}
          />
        </section>
      ) : (
        <div
          className={`flex items-center justify-center overflow-hidden flex-2/5 lg:flex-3/5 xl:flex-3/5 2xl:flex-4/5 ${
            !!currentUserId ? "flex" : "hidden sm:flex"
          }`}
        >
          <p className="text-2xl">Open a conversation</p>
        </div>
      )}
    </>
  );
};

export default ChatArea;
