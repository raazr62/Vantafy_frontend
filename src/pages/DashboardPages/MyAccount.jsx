import ChangePassword from "@/components/DashboardComponent/ChangePassword";
import ProfileDetails from "@/components/DashboardComponent/ProfileDetails";
import React, { useState } from "react";

const MyAccount = () => {
  const [activeTab, setActiveTab] = useState("Profile");
  const tabTiggerList = [
    "Profile",
    "Niches",
    "Stage names to protect",
    "Authorized Sites",
  ];

  return (
    <div className="overflow-y-auto">
      {/* Top Part */}
      <div className="bg-white rounded-t-[12px]">
        <div className="grid grid-cols-4 gap-2 w-full py-4 bg-slate-50 px-4 border border-slate-200 rounded-t-[12px]">
          {tabTiggerList.map((tab, idx) => {
            const active = tab === activeTab;
            return (
              <p
                key={idx}
                onClick={() => setActiveTab(tab)}
                className={`${
                  active
                    ? "font-semibold border border-[#FF5CE1] bg-[linear-gradient(90deg,rgba(236,112,218,0.10)_0%,rgba(81,174,250,0.10)_100%)]"
                    : "text-[#212B36] bg-white border border-slate-200"
                } text-center py-4 rounded-xl cursor-pointer text-sm`}
              >
                {tab}
              </p>
            );
          })}
        </div>
      </div>
      {/* Profile */}
      {activeTab === "Profile" && (
        <div className="space-y-6">
          <ProfileDetails />

          {/* Profile Bottom Part */}
          <ChangePassword />
        </div>
      )}
    </div>
  );
};

export default MyAccount;
