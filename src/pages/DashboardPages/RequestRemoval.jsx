import RequestRemovalForm from "@/components/DashboardComponent/RequestRemovalForm";
import RequestRemovalStats from "@/components/DashboardComponent/RequestRemovalStats";
import React, { useState } from "react";

const RequestRemoval = () => {
  const [linksData, setLinksData] = useState([]);

  return (
    <div className="flex flex-col-reverse lg:flex-col gap-4 lg:h-full pb-4 lg:pb-0">
      <RequestRemovalStats />
      <RequestRemovalForm setLinksData={setLinksData} linksData={linksData} />
    </div>
  );
};

export default RequestRemoval;
