// DeletedLinksHistory.jsx
import React from "react";
import { linksMockData } from "@/lib/DashboardMockData";

const DeletedLinksHistory = () => {
  return (
    <div className="flex-1 flex flex-col p-4 bg-white rounded-2xl min-h-0">
      {/* Header (not scrollable) */}
      <div className="bg-[#F2F5F7] rounded-[12px] text-center text-sm sm:text-lg font-semibold py-2 sm:py-3">
        Deleted Links
      </div>

      {/* Scrollable list area */}
      <div className="mt-4 flex-1 overflow-y-auto rounded-[12px] max-h-80 lg:max-h-full">
        {linksMockData.map((link, idx) => (
          <p
            key={idx}
            className={`px-3 py-2 first:rounded-t-[12px] last:rounded-b-[12px] truncate text-sm sm:text-base ${
              idx % 2 === 0 ? "bg-[#FFFAFE]" : "bg-[#FFEDFC99]"
            }`}
          >
            {link}
          </p>
        ))}
      </div>
    </div>
  );
};

export default DeletedLinksHistory;
