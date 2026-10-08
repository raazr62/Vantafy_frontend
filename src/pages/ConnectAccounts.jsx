import React, { useState } from "react";
import { socialMediaAccountsMockData } from "@/lib/DashboardMockData";
import { AiFillThunderbolt } from "react-icons/ai";
import AccountToConnect from "@/components/OtherComponent/AccountToConnect";
import { useNavigate } from "react-router";
import Logo from "@/shared/LandingShared/Logo";

const ConnectAccounts = () => {
  const [openAccountId, setOpenAccountId] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="max-w-3xl mx-auto flex flex-col items-center justify-center sm:h-svh py-5">
      <div className="bg-white/70 backdrop-blur-xs mb-3 shrink-0 sticky top-0 w-full">
        <Logo variant="grayFull" className={"mx-auto"} />
      </div>
      <div className="p-4 sm:p-6 rounded-[12px] border border-[#EFE6FD] flex flex-col h-full overflow-hidden mx-4 lg:mx-0">
        <p className="text-lg sm:text-xl lg:text-2xl font-medium">
          Connect Your Accounts
        </p>
        <p className="text-sm sm:text-base text-[#90A1B9] text-justify mt-1">
          Add your social media platforms and paysite accounts to protect your
          content. We'll scan for unauthorized use and help keep your work
          secure.
        </p>

        {/* Your Platforms */}
        <p className="text-base sm:text-lg font-medium mt-4 sm:mt-6">
          Your Platforms
        </p>
        <p className="text-sm sm:text-base text-[#90A1B9] text-justify">
          Select the platforms where you create and share content
        </p>

        <div className="space-y-2 sm:space-y-3 mt-2 sm:mt-4 grow overflow-y-auto">
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
        <p className="text-sky-500 text-xs sm:text-sm p-2 sm:p-4 border border-[#EFE6FD] rounded-[12px] mt-2 sm:mt-4 text-center">
          You can connect multiple accounts. We'll monitor all of them for
          leaks.
        </p>
        <button
          onClick={() => {
            navigate("/recommend-plan");
          }}
          className="flex items-center gap-2.5 w-full justify-center py-2 sm:py-3 bg-primary text-white my-2 sm:my-4 rounded-xl font-medium cursor-pointer text-sm sm:text-base lg:text-lg"
        >
          <AiFillThunderbolt />
           Basic Scan to Find Your Plan
        </button>
        <button
          onClick={() => {
            navigate("/dashboard");
          }}
          className="w-full py-2 sm:py-3 rounded-xl bg-[#F5F5F5] font-medium border border-[#E5E5E5] cursor-pointer text-sm sm:text-base lg:text-lg"
        >
          Skip Scan
        </button>
      </div>
    </div>
  );
};

export default ConnectAccounts;
