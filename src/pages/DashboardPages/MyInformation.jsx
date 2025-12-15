import MyInfoHead from "@/components/DashboardComponent/MyInformation.jsx/MyInfoHead";
import MyMembers from "@/components/DashboardComponent/MyInformation.jsx/MyMembers";
import React from "react";

const MyInformation = () => {
  return (
    <div className="space-y-4 flex flex-col h-full">
      <MyInfoHead />
      <MyMembers />
    </div>
  );
};

export default MyInformation;
