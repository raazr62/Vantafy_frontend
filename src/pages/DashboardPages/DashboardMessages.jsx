import MessageSidebar from "@/components/DashboardComponent/MessageSidebar";
import ChatArea from "@/components/DashboardComponent/ChatArea";
import { useState } from "react";

export default function DashboardMessages() {
  const [currentUserId, setCurrentUserId] = useState(1);
  return (
    <div className="grow h-full bg-white rounded-2xl flex overflow-hidden">
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
