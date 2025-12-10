import React from "react";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";

const StartScanModal = ({ setActiveDialog }) => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Start New Scan</DialogTitle>
        <DialogDescription>
          Start a new scan to find unauthorized use of your content across the
          web.
        </DialogDescription>
      </DialogHeader>

      <div className="rounded-[12px] bg-[linear-gradient(180deg,#4e78fd0a_0%,#ff1be40a_100%)] p-6 text-center space-y-3 my-4">
        
        <p className="text-lg font-medium">Ready to scan your content?</p>
        <p className="text-[#707070] text-sm">
          This process may take several minutes depending on the amount of
          content.
        </p>
      </div>
      <Button onClick={() => setActiveDialog("Start Scanning")}>
        Start Scanning
      </Button>
    </DialogContent>
  );
};

export default StartScanModal;
