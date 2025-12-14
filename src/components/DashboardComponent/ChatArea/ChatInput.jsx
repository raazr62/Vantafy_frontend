import React, { useRef, useState } from "react";
import { Send, Smile } from "lucide-react";
import EmojiPicker from "emoji-picker-react";
import UploadMenu from "./UploadMenu";

const ChatInput = ({
  input,
  onInputChange,
  onSendMessage,
  selectedFiles,
  fileInputRef,
  onFileSelect,
  isLoading,
}) => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [isUploadMenuOpen, setIsUploadMenuOpen] = useState(false);
  const emojiPickerRef = useRef(null);
  const uploadMenuRef = useRef(null);

  // Close emoji picker and upload menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        emojiPickerRef.current &&
        !emojiPickerRef.current.contains(event.target)
      ) {
        setShowEmojiPicker(false);
      }
      if (
        uploadMenuRef.current &&
        !uploadMenuRef.current.contains(event.target)
      ) {
        setIsUploadMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleEmojiClick = (emojiObject) => {
    onInputChange(input + emojiObject.emoji);
  };

  const handleFileSelect = (e) => {
    onFileSelect(e);
    setIsUploadMenuOpen(false);
  };

  const isDisabled = !input.trim() && selectedFiles.length === 0;

  return (
    <form
      onSubmit={onSendMessage}
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
      <div ref={uploadMenuRef}>
        <UploadMenu
          isOpen={isUploadMenuOpen}
          onToggle={() => setIsUploadMenuOpen(!isUploadMenuOpen)}
          fileInputRef={fileInputRef}
          onFileSelect={() => setIsUploadMenuOpen(false)}
        />
      </div>

      <div className="flex-1 relative">
        <input
          value={input}
          onChange={(e) => onInputChange(e.target.value)}
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
        disabled={isDisabled || isLoading}
        className={`p-3 rounded-full flex items-center justify-center text-white shadow transition-colors ${
          isDisabled || isLoading
            ? "bg-blue-300 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600 cursor-pointer"
        }`}
      >
        <Send className="w-5 h-5" />
      </button>
    </form>
  );
};

export default ChatInput;
