import React from "react";
import { Plus, Camera, ImageIcon, FileText, Music } from "lucide-react";

const UploadMenu = ({
  isOpen,
  onToggle,
  onSelectPhotos,
  onSelectCamera,
  onSelectDocuments,
  onSelectAudio,
  fileInputRef,
}) => {
  const handlePhotosClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.accept = "image/*,.mp4,.avi,.mov,.wmv";
      fileInputRef.current.click();
    }
  };

  const handleCameraClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.accept = "image/*";
      fileInputRef.current.capture = "environment";
      fileInputRef.current.click();
    }
    onToggle();
  };

  const handleDocumentsClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.accept = ".pdf,.doc,.docx,.txt,.xlsx,.xls";
      fileInputRef.current.click();
    }
  };

  const handleAudioClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.accept = "audio/*,video/*";
      fileInputRef.current.click();
    }
  };

  return (
    <div className="relative upload-menu-container">
      <button
        type="button"
        onClick={() => onToggle()}
        className="p-3 rounded-full bg-blue-500 shadow flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer"
      >
        <Plus className="w-5 h-5 text-white" />
      </button>

      {isOpen && (
        <div className="absolute bottom-full left-0 mb-2 w-64 bg-white rounded-xl shadow-xl border z-50 overflow-hidden">
          <div className="p-2">
            <button
              type="button"
              onClick={handlePhotosClick}
              className="w-full px-4 py-3 text-left hover:bg-gray-50 rounded-lg flex items-center gap-3 cursor-pointer"
            >
              <ImageIcon className="w-5 h-5 text-blue-500" />
              <div>
                <p className="font-medium text-sm">Photos & Videos</p>
                <p className="text-xs text-gray-500">PNG, JPG, GIF, MP4</p>
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
                <p className="text-xs text-gray-500">Take photo or video</p>
              </div>
            </button>

            <button
              type="button"
              onClick={handleDocumentsClick}
              className="w-full px-4 py-3 text-left hover:bg-gray-50 rounded-lg flex items-center gap-3 cursor-pointer"
            >
              <FileText className="w-5 h-5 text-purple-500" />
              <div>
                <p className="font-medium text-sm">Document</p>
                <p className="text-xs text-gray-500">PDF, Word, Excel, Text</p>
              </div>
            </button>

            <button
              type="button"
              onClick={handleAudioClick}
              className="w-full px-4 py-3 text-left hover:bg-gray-50 rounded-lg flex items-center gap-3 cursor-pointer"
            >
              <Music className="w-5 h-5 text-yellow-500" />
              <div>
                <p className="font-medium text-sm">Audio & Video</p>
                <p className="text-xs text-gray-500">MP3, WAV, MP4, AVI</p>
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadMenu;
