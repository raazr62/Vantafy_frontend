import { linksMockData } from "@/lib/DashboardMockData";
import React from "react";

const DeletedLinksHistory = () => {
  return (
    <div className="flex-1 flex flex-col p-4 bg-white rounded-2xl">
      <p className="bg-[#F2F5F7] rounded-[12px] text-center text-lg font-semibold py-3">
        Completely Deleted Links
      </p>

      <div className="mt-4 flex-1 overflow-y-auto rounded-[12px]">
        {linksMockData.map((link, idx) => (
          <p
            key={idx}
            className={`px-3 py-2 first:rounded-t-[12px] last:rounded-b-[12px] ${
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
