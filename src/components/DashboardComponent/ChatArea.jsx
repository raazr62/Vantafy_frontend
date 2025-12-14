import React, { useState } from "react";
import { MoreVertical, Smile, Send, Plus } from "lucide-react";

const messages = [
  {
    id: 1,
    text: "Oh, hello! All perfectly.\nI will check it and get back to you soon",
    time: "04:45 PM",
    sender: "support",
  },
  {
    id: 2,
    text: "Oh, hello! All perfectly.\nI will check it and get back to you soon",
    time: "04:45 PM",
    sender: "me",
  },
  {
    id: 3,
    text: "Oh, hello! All perfectly.\nI will check it and get back to you soon",
    time: "04:45 PM",
    sender: "support",
  },
  {
    id: 4,
    text: "Oh, hello! All perfectly.\nI will check it and get back to you soon",
    time: "04:45 PM",
    sender: "me",
  },
];

const ChatArea = () => {
  const [input, setInput] = useState("");
  return (
    <section className="flex flex-col flex-4/5">
      {/* Header */}
      <header className="h-16 border-b flex items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-semibold">
            S
          </div>
          <p className="font-medium">Support</p>
        </div>
        <MoreVertical className="w-5 h-5 text-gray-500 cursor-pointer" />
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.sender === "me" ? "justify-end" : "justify-start"
            }`}
          >
            <div>
              <div
                className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-line
                    ${
                      msg.sender === "me"
                        ? "bg-blue-500 text-white rounded-br-sm"
                        : "bg-sky-100 text-sky-700 rounded-bl-sm"
                    }`}
              >
                {msg.text}
              </div>
              <p
                className={`text-[11px] mt-1 text-gray-400 ${
                  msg.sender === "me" ? "text-right" : "text-left"
                }`}
              >
                {msg.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <footer className="h-20 border-t px-6 flex items-center gap-4 bg-pink-50">
        <button className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center">
          <Plus className="w-5 h-5 text-blue-500" />
        </button>

        <div className="flex-1 relative">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message here..."
            className="w-full py-3 px-4 rounded-full border focus:outline-none focus:ring-1 focus:ring-blue-400 text-sm"
          />
          <Smile className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 cursor-pointer" />
        </div>

        <button className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white shadow">
          <Send className="w-5 h-5" />
        </button>
      </footer>
    </section>
  );
};

export default ChatArea;
