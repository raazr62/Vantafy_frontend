import React from "react";
import { X, Download } from "lucide-react";

const FullscreenImageViewer = ({ imageUrl, onClose }) => {
  const handleDownload = (e) => {
    e.stopPropagation();
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = "image.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative max-w-full max-h-full">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="absolute top-4 left-4 z-10 flex gap-2">
          <button
            onClick={handleDownload}
            className="p-2 bg-black/50 text-white rounded-lg hover:bg-black/70 cursor-pointer flex items-center gap-2"
          >
            <Download className="w-4 h-4" /> Download
          </button>
        </div>
        <img
          src={imageUrl}
          alt="Fullscreen preview"
          className="max-w-full max-h-[90vh] object-contain rounded-lg"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
};

export default FullscreenImageViewer;
