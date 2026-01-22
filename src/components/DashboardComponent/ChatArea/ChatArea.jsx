import React, { useEffect, useRef, useState } from "react";
import ChatHeader from "./ChatHeader";
import MessageItem from "./MessageItem";
import FullscreenImageViewer from "./FullscreenImageViewer";
import FilePreviewSection from "./FilePreviewSection";
import ChatInput from "./ChatInput";
import { getFileType } from "./utils/fileUtils";
import { useSendMessage } from "@/hooks/useSendMessage";
import { useGetMessages } from "@/hooks/useGetMessages";
import toast from "react-hot-toast";

const ChatArea = ({ setCurrentUserId, currentUserId }) => {
  // const [openClearBtn, setOpenClearBtn] = useState(false);
  const [input, setInput] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [expandedImages, setExpandedImages] = useState({});
  const [showMessageMenu, setShowMessageMenu] = useState(null);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);

  // Fetch messages from API
  const { data: messagesData, isLoading, error } = useGetMessages();
  const { mutate: sendMessage, isPending: isSending } = useSendMessage();

  const messages = messagesData?.data || [];

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
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [messages.length]);

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (!input.trim() && selectedFiles.length === 0) return;

    // Create FormData for file upload
    const formData = new FormData();

    // Add text message
    if (input.trim()) {
      formData.append("txt", input.trim());
    }

    // Add files based on their type
    if (selectedFiles.length > 0) {
      selectedFiles.forEach((fileObj) => {
        const file = fileObj.file;

        // Determine the field name based on file type
        if (fileObj.type === "image") {
          formData.append("image", file);
        } else if (
          fileObj.mimeType?.includes("pdf") ||
          fileObj.mimeType?.includes("document")
        ) {
          formData.append("document", file);
        } else {
          formData.append("file", file);
        }
      });
    }

    // Send message
    sendMessage(formData, {
      onSuccess: () => {
        setInput("");
        setSelectedFiles([]);
      },
      onError: (error) => {
        console.error("Error sending message:", error);
      },
    });
  };

  // const handleClearChat = () => {
  //   // Clear chat logic - you may want to add an API call here
  //   setOpenClearBtn(false);
  //   toast.success("Chat cleared");
  // };

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
    toast.success("Message copied to clipboard!");
  };

  const deleteMessage = (messageId) => {
    // You may want to add an API call here to delete from backend
    toast.success("Message deleted");
    setShowMessageMenu(null);
  };

  const openFullscreenImage = (imageUrl) => {
    setFullscreenImage(imageUrl);
  };

  const closeFullscreenImage = () => {
    setFullscreenImage(null);
  };

  if (error) {
    return (
      <div className="flex items-center justify-center overflow-hidden flex-2/5 lg:flex-3/5 xl:flex-3/5 2xl:flex-4/5 h-full">
        <p className="text-red-500">
          Error loading messages. Please try again.
        </p>
      </div>
    );
  }

  return (
    <>
      {fullscreenImage && (
        <FullscreenImageViewer
          imageUrl={fullscreenImage}
          onClose={closeFullscreenImage}
        />
      )}

      <section
        className={`${currentUserId === 1 ? "flex" : "hidden"} sm:flex flex-col overflow-hidden flex-2/5 lg:flex-3/5 xl:flex-3/5 2xl:flex-4/5 h-full`}
      >
        {/* Header */}
        <ChatHeader
          filterMessages={{ person: "Support Team" }}
          setCurrentUserId={setCurrentUserId}
        />

        {/* Messages */}
        <div className="grow overflow-y-auto p-6 space-y-6 min-h-0 sm:max-h-full">
          {isLoading ? (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-400">Loading messages...</p>
            </div>
          ) : messages.length === 0 ? (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-400">
                No messages yet. Start a conversation!
              </p>
            </div>
          ) : (
            messages.map((msg) => (
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
            ))
          )}

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
          isLoading={isSending}
        />
      </section>
    </>
  );
};

export default ChatArea;
