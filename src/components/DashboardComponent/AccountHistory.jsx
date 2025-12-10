// AccountHistory.jsx
import React from "react";
import DeletedLinksHistory from "./DeletedLinksHistory";
import MonthlyLimitationHistory from "./MonthlyLimitationHistory";

const AccountHistory = () => {
  return (
    <div className="flex flex-col gap-3 min-h-0 h-full">
      <DeletedLinksHistory />
      <MonthlyLimitationHistory />
    </div>
  );
};

export default AccountHistory;
