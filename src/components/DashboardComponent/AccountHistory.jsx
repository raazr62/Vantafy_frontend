import React from "react";
import DeletedLinksHistory from "./DeletedLinksHistory";
import MonthlyLimitationHistory from "./MonthlyLimitationHistory";

const AccountHistory = () => {
  return (
    <div className="flex-5 flex flex-col gap-3">
      <DeletedLinksHistory />
      <MonthlyLimitationHistory />
    </div>
  );
};

export default AccountHistory;
