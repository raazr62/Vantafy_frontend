import React, { useState } from "react";
import { socialMediaAccountsMockData } from "@/lib/DashboardMockData";
import AccountToConnect from "./AccountToConnect";

const ConnectAccountsNiches = () => {
  const [openAccountId, setOpenAccountId] = useState(null);

  return (
    <div className="p-6 rounded-[12px] border border-[#EFE6FD] flex-1 overflow-y-auto">
      <p className="text-2xl font-medium">Connect Your Accounts</p>
      <p className="text-[#90A1B9] text-justify mt-1">
        Add your social media platforms and paysite accounts to protect your
        content. We'll scan for unauthorized use and help keep your work secure.
      </p>
      <div className="space-y-4 mt-6">
        {socialMediaAccountsMockData.map((account) => (
          <AccountToConnect
            key={account.id}
            account={account}
            isOpen={openAccountId === account.id}
            onOpen={() => setOpenAccountId(account.id)}
            onClose={() => setOpenAccountId(null)}
          />
        ))}
      </div>
      <p className="text-sky-500 text-sm p-4 border border-[#EFE6FD] rounded-[12px] mt-4 text-center">
        You can connect multiple accounts. We'll monitor all of them for leaks.
      </p>
    </div>
  );
};

export default ConnectAccountsNiches;
