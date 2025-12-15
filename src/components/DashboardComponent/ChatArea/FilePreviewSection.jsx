import React from "react";
import { Eye } from "lucide-react";
import { getFileIcon } from "./utils/iconUtils.jsx";
import { formatFileSize, downloadFile } from "./utils/fileUtils";

const FilePreviewSection = ({
  selectedFiles,
  onRemoveFile,
  onOpenFullscreen,
}) => {
  if (selectedFiles.length === 0) return null;

  const handleClearAll = () => {
    selectedFiles.forEach((file) => {
      if (file.preview) URL.revokeObjectURL(file.preview);
    });
  };

  return (
    <div className="px-6 py-3 bg-gray-50 border-t">
      <div className="flex items-center justify-between mb-3">
        <p className="text-sm font-medium text-gray-700">
          {selectedFiles.length} file{selectedFiles.length > 1 ? "s" : ""} ready
          to send
        </p>
        <button
          onClick={handleClearAll}
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
                  onClick={() => onOpenFullscreen(file.preview)}
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
                <p className="font-medium text-sm truncate">{file.name}</p>
                <p className="text-xs text-gray-500">
                  {formatFileSize(file.size)} •{" "}
                  {file.mimeType?.split("/")[1]?.toUpperCase() || "FILE"}
                </p>
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => onRemoveFile(file.id)}
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
                      onClick={() => onOpenFullscreen(file.preview)}
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
  );
};

export default FilePreviewSection;
