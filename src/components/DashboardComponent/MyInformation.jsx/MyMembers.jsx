import React, { useEffect, useState } from "react";
import MyMembersAdd from "./MyMembersAdd";
import MyMembersInfo from "./MyMembersInfo";
import { useGetAgencyMemberList } from "@/hooks/useGetAgencyMemberList";

const MyMembers = () => {
  const [whichMember, setWhichMember] = useState(1);
  const { data, isLoading, isError } = useGetAgencyMemberList();

  useEffect(() => {
    if (data?.data) {
      setWhichMember(data?.data[0]?.id);
    }
  }, [data]);

  return (
    <div className="flex flex-col lg:flex-row gap-4 grow min-h-0">
      <MyMembersAdd
        whichMember={whichMember}
        setWhichMember={setWhichMember}
        membersData={data?.data}
        isLoading={isLoading}
        isError={isError}
      />
      <MyMembersInfo
        whichMember={whichMember}
        membersData={data?.data}
        isLoading={isLoading}
        isError={isError}
      />
    </div>
  );
};

export default MyMembers;
