import RequestRemovalForm from "@/components/DashboardComponent/RequestRemovalForm";
import RequestRemovalStats from "@/components/DashboardComponent/RequestRemovalStats";
import SubmittedLinksStatus from "@/components/DashboardComponent/SubmittedLinksStatus";
import React, { useState } from "react";

const RequestRemoval = () => {
  const [linksData, setLinksData] = useState([]);

  return (
    <div className="flex flex-col gap-4 h-full">
      <RequestRemovalStats />
      <RequestRemovalForm setLinksData={setLinksData} linksData={linksData} />
    </div>
  );
};

export default RequestRemoval;
