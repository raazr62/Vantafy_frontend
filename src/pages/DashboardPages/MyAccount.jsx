import AccountNiches from "@/components/DashboardComponent/AccountNiches";
import AuthorizedSites from "@/components/DashboardComponent/AuthorizedSites";
import ChangePassword from "@/components/DashboardComponent/ChangePassword";
import ProfileDetails from "@/components/DashboardComponent/ProfileDetails";
import StageNamesToProtect from "@/components/DashboardComponent/StageNamesToProtect";
import { selectUser } from "@/Redux/slices/authSlice";
import { useState } from "react";
import { useSelector } from "react-redux";

const MyAccount = () => {
  const [activeTab, setActiveTab] = useState("Profile");
  const user = useSelector(selectUser);
  const tabTiggerList = [
    "Profile",
    "Niches",
    "Stage Names to Protect",
    "Authorized Sites",
  ];
  return (
    <div className="grow h-full flex flex-col min-h-0 bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
      {/* Tab header (fixed height) */}
      {user?.role !== "agency" && (
        <div className="bg-slate-50 border-b border-slate-200 shrink-0">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 w-full p-2 sm:p-3">
            {tabTiggerList.map((tab, idx) => {
              const active = tab === activeTab;
              return (
                <p
                  key={idx}
                  onClick={() => setActiveTab(tab)}
                  className={`${
                    active
                      ? "font-medium sm:font-semibold border border-[#FF5CE1] bg-[linear-gradient(90deg,rgba(236,112,218,0.10)_0%,rgba(81,174,250,0.10)_100%)]"
                      : "text-[#212B36] bg-white border border-slate-200"
                  } text-center py-2.5 sm:py-3 rounded-xl cursor-pointer text-xs sm:text-sm`}
                >
                  {tab}
                </p>
              );
            })}
          </div>
        </div>
      )}

      {/* Content area */}
      <div className="grow flex flex-col overflow-y-auto min-h-0 p-3 sm:p-5">
        {activeTab === "Profile" && (
          <div className="space-y-3 sm:space-y-4 grow flex flex-col">
            <ProfileDetails />
            {!user?.is_google_login && <ChangePassword />}
          </div>
        )}

        {activeTab === "Niches" && <AccountNiches />}
        {activeTab === "Stage Names to Protect" && <StageNamesToProtect />}
        {activeTab === "Authorized Sites" && <AuthorizedSites />}
      </div>
    </div>
  );
};

export default MyAccount;
