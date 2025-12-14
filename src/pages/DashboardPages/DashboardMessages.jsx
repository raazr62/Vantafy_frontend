import { useState } from "react";

import MessageSidebar from "@/components/DashboardComponent/MessageSidebar";
import ChatArea from "@/components/DashboardComponent/ChatArea";

export default function DashboardMessages() {
  return (
    <div className="grow bg-white rounded-2xl flex">
      {/* Sidebar */}
      <MessageSidebar />

      {/* Chat Area */}
      <ChatArea />
    </div>
  );
}
