import {
  FileText,
  File,
  FileSpreadsheet,
  Music,
  Video,
  FileArchive,
  FileCode,
} from "lucide-react";

export const getFileIcon = (fileType) => {
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
