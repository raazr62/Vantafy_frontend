import React from "react";
import { socialMediaAccountsMockData } from "@/lib/DashboardMockData";
import AccountToConnect from "./AccountToConnect";

const ConnectAccountsNiches = () => {
  return (
    <div className="p-6 rounded-[12px] border border-[#EFE6FD] flex-1 overflow-y-auto">
      <p className="text-2xl font-medium">Connect Your Accounts</p>
      <p className="text-[#90A1B9] text-justify mt-1">
        Add your social media platforms and paysite accounts to protect your
        content. We'll scan for unauthorized use and help keep your work secure.
      </p>
      <div className="space-y-4 mt-6">
        {socialMediaAccountsMockData.map((account) => (
          <AccountToConnect account={account} />
        ))}
      </div>
    </div>
  );
};

export default ConnectAccountsNiches;
