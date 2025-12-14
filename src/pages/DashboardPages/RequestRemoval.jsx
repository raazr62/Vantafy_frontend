import RequestRemovalForm from "@/components/DashboardComponent/RequestRemovalForm";
import RequestRemovalStats from "@/components/DashboardComponent/RequestRemovalStats";
import SubmittedLinksStatus from "@/components/DashboardComponent/SubmittedLinksStatus";
import React from "react";

const RequestRemoval = () => {
  return (
    <div className="flex flex-col gap-4 h-full">
      <RequestRemovalStats />
      <RequestRemovalForm />
      <SubmittedLinksStatus />
    </div>
  );
};

export default RequestRemoval;
