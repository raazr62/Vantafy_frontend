import React from "react";

const TypingIndicator = () => {
  return (
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
  );
};

export default TypingIndicator;
