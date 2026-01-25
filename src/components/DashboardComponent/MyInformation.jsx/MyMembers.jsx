import React, { useState } from "react";
import MyMembersAdd from "./MyMembersAdd";
import MyMembersInfo from "./MyMembersInfo";
import { useGetAgencyMemberList } from "@/hooks/useGetAgencyMemberList";

const MyMembers = () => {
  const [whichMember, setWhichMember] = useState(1);
  const { data, isLoading, isError } = useGetAgencyMemberList();
  console.log(data, isLoading, isError);

  return (
    <div className="flex flex-col lg:flex-row gap-4 grow min-h-0">
      <MyMembersAdd whichMember={whichMember} setWhichMember={setWhichMember} />
      <MyMembersInfo whichMember={whichMember} />
    </div>
  );
};

export default MyMembers;
