import React, { useState } from "react";
import MyMembersAdd from "./MyMembersAdd";
import MyMembersInfo from "./MyMembersInfo";

const MyMembers = () => {
  const [whichMember, setWhichMember] = useState(1);

  return (
    <div className="flex gap-4 grow min-h-0">
      <MyMembersAdd whichMember={whichMember} setWhichMember={setWhichMember} />
      <MyMembersInfo whichMember={whichMember} />
    </div>
  );
};

export default MyMembers;
