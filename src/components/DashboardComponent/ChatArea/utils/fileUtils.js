// File type identification utilities
export const getFileType = (mimeType) => {
  if (mimeType.startsWith("image/")) return "image";
  if (mimeType === "application/pdf") return "pdf";
  if (mimeType.includes("word") || mimeType.includes("document")) return "word";
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

export const formatFileSize = (bytes) => {
  if (bytes < 1024) return bytes + " B";
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
  if (bytes < 1024 * 1024 * 1024)
    return (bytes / (1024 * 1024)).toFixed(1) + " MB";
  return (bytes / (1024 * 1024 * 1024)).toFixed(1) + " GB";
};

export const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

export const downloadFile = (file) => {
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
      window.open(file.url, "_blank");
    }
    // Files from sent messages should have `originalFileData`
    else if (file.originalFileData) {
      const link = document.createElement("a");
      link.href = file.originalFileData;
      link.download = file.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  } catch (error) {
    console.error("Download error:", error);
    alert(`Could not download the file. Please try again.`);
  }
};
