import React from "react";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { usePostScanNow } from "@/hooks/usePostScanNow";
import { selectUser } from "@/Redux/slices/authSlice";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

import { useNavigate } from "react-router";

const StartScanModal = ({ setActiveDialog, selectedMemberID }) => {
  const { mutate: postScanNow } = usePostScanNow(setActiveDialog);
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  const hasSubscription = Boolean(
    user?.has_subscription ?? user?.user?.has_subscription
  );

  const handleInitialScan = () => {
    if (!hasSubscription) {
      toast.error("Subscription required to run scans. Please choose a plan.");
      if (setActiveDialog) setActiveDialog(false);
      navigate("/dashboard/plans");
      return;
    }

    if (user?.role === "agency" && !selectedMemberID) {
      toast.error("Please select a member");
      return;
    }

    const data =
      user?.role === "agency" ? { agency_member_id: selectedMemberID } : {};

    postScanNow(data);
  };

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Start New Scan</DialogTitle>
        <DialogDescription>
          Start a new scan to find unauthorized use of your content across the
          web.
        </DialogDescription>
      </DialogHeader>

      <div className="rounded-[12px] bg-[linear-gradient(180deg,#4e78fd0a_0%,#ff1be40a_100%)] p-6 text-center space-y-1 sm:space-y-3 my-1 sm:my-4">
        <p className="text-base sm:text-lg font-medium">
          Ready to scan your content?
        </p>
        <p className="text-[#707070] text-xs sm:text-sm">
          This process may take several minutes depending on the amount of
          content.
        </p>
      </div>
      <Button onClick={handleInitialScan}>Start Scanning</Button>
    </DialogContent>
  );
};

export default StartScanModal;
