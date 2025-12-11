import React, { useState } from "react";
import { socialMediaAccountsMockData } from "@/lib/DashboardMockData";
import { AiFillThunderbolt } from "react-icons/ai";
import AccountToConnect from "@/components/OtherComponent/AccountToConnect";
import { useNavigate } from "react-router";

const ConnectAccounts = () => {
  const [openAccountId, setOpenAccountId] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="max-w-2xl mx-auto flex items-center justify-center h-svh py-5">
      <div className="p-6 rounded-[12px] border border-[#EFE6FD] flex flex-col h-full overflow-hidden">
        <p className="text-2xl font-medium">Connect Your Accounts</p>
        <p className="text-[#90A1B9] text-justify mt-1">
          Add your social media platforms and paysite accounts to protect your
          content. We'll scan for unauthorized use and help keep your work
          secure.
        </p>

        {/* Your Platforms */}
        <p className="text-lg font-medium mt-6">Your Platforms</p>
        <p className="text-[#90A1B9] text-justify">
          Select the platforms where you create and share content
        </p>

        <div className="space-y-3 mt-4 grow overflow-y-auto">
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
          You can connect multiple accounts. We'll monitor all of them for
          leaks.
        </p>
        <button
          onClick={() => {
            navigate("/recommend-plan");
          }}
          className="flex items-center gap-2.5 w-full justify-center py-3 bg-primary text-white text-lg my-4 rounded-xl font-medium cursor-pointer"
        >
          <AiFillThunderbolt />
          Run Scan To Recommend Plan
        </button>
        <button
          onClick={() => {
            navigate("/pricing-plan");
          }}
          className="w-full py-3 text-lg rounded-xl bg-[#F5F5F5] font-medium border border-[#E5E5E5] cursor-pointer"
        >
          Skip Scan & Choose Plan
        </button>
      </div>
    </div>
  );
};

export default ConnectAccounts;
