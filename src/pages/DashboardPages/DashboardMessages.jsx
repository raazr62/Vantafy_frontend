import MessageSidebar from "@/components/DashboardComponent/MessageSidebar";
import ChatArea from "@/components/DashboardComponent/ChatArea";
import { useState } from "react";

export default function DashboardMessages() {
  const [currentUserId, setCurrentUserId] = useState();
  return (
    <div className="grow min-h-0 bg-white rounded-2xl flex">
      {/* Sidebar */}
      <MessageSidebar
        currentUserId={currentUserId}
        setCurrentUserId={setCurrentUserId}
      />
      {/* Chat Area */}
      <ChatArea
        currentUserId={currentUserId}
        setCurrentUserId={setCurrentUserId}
      />
    </div>
  );
}
