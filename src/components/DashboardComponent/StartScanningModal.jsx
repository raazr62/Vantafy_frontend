import React, { useEffect, useState } from "react";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import toast from "react-hot-toast";
import { motion } from "motion/react";
import { useGetScanRunTimeResult } from "@/hooks/useGetScanRunTimeResult";
import { selectUser } from "@/Redux/slices/authSlice";
import { useSelector } from "react-redux";

const StartScanningModal = ({ setActiveDialog, selectedMemberID }) => {
  const user = useSelector(selectUser);

  // Validate agency role selection
  useEffect(() => {
    if (user?.role === "agency" && !selectedMemberID) {
      toast.error("Please select a member");
      setActiveDialog(null);
      return;
    }
  }, [user, selectedMemberID, setActiveDialog]);

  // Fetch scan runtime results from API
  const { data: scanData } = useGetScanRunTimeResult(selectedMemberID);

  const scanResults = scanData?.data || null;
  const progress = scanResults?.progress_percentage || 0;
  const status = scanResults?.status || "running";

  // Trigger completion when scan is complete
  useEffect(() => {
    if (status === "completed" || progress === 100) {
      toast.success("Scan Successful! Your results are ready.");
      setActiveDialog("Scan Complete");
    }
  }, [status, progress, setActiveDialog]);

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="text-lg sm:text-xl font-semibold text-gray-800">
          Start New Scan
        </DialogTitle>
        <DialogDescription className="text-gray-600 text-sm sm:text-base">
          Please wait while we search for your content
        </DialogDescription>
      </DialogHeader>

      {/* Loader */}
      <div className="p-4 w-fit mx-auto rounded-full bg-linear-to-b from-[#3AB8FF] to-[#FF4ECF]">
        <motion.div
          className="border-[6px] border-white border-t-transparent w-16 h-16 rounded-full"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: "linear",
          }}
        />
      </div>

      {/* Progress area */}
      <div>
        <p className="text-xs sm:text-sm font-medium mb-1">
          Overall Progress{" "}
          <span className="float-right text-primary">{progress}%</span>
        </p>

        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-3 bg-linear-to-r from-[#3AB8FF] to-[#FF4ECF] rounded-full transition-all duration-200"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Stats boxes */}
      <div className="grid grid-cols-2 gap-3 mt-3">
        <div className="rounded-[12px] border border-[rgba(58,184,255,0.20)] bg-linear-to-b from-[rgba(58,184,255,0.10)] to-[rgba(58,184,255,0.05)] text-center shadow-sm flex flex-col items-center justify-center py-4">
          <p className="text-xs sm:text-sm text-gray-600">Sites Scanned</p>
          <p className="text-xl sm:text-2xl md:text-[28px] font-bold text-[#3AB8FF]">
            {scanResults?.total_scanned || 0}
          </p>
        </div>

        <div className="rounded-[12px] border border-[rgba(255,78,207,0.2)] bg-linear-to-b from-[rgba(255,78,207,0.1)] to-[rgba(255,78,207,0.05)] text-center shadow-sm flex flex-col items-center justify-center py-4">
          <p className="text-xs sm:text-sm text-gray-600">Matches Found</p>
          <p className="text-xl sm:text-2xl md:text-[28px] font-bold text-[#FF4ECF]">
            {scanResults?.total_matched || 0}
          </p>
        </div>

        <div className="rounded-[12px] border border-[rgba(78,120,253,0.2)] bg-linear-to-r from-[rgba(236,112,218,0.1)] to-[rgba(81,174,250,0.1)] text-center shadow-sm flex flex-col items-center justify-center py-4">
          <p className="text-xs sm:text-sm text-gray-600">Images Checked</p>
          <p className="text-xl sm:text-2xl md:text-[28px] font-bold text-[#4E78FD]">
            {scanResults?.total_image || 0}
          </p>
        </div>

        <div className="rounded-[12px] border border-[rgba(255,27,228,0.2)] bg-linear-to-b from-[rgba(255,27,228,0.1)] to-[rgba(255,27,228,0.05)] text-center shadow-sm flex flex-col items-center justify-center py-4">
          <p className="text-xs sm:text-sm text-gray-600">Videos Checked</p>
          <p className="text-xl sm:text-2xl md:text-[28px] font-bold text-[#FF1BE4]">
            {scanResults?.total_videos || 0}
          </p>
        </div>
      </div>

      {/* Log list */}
      <div className="mt-3 p-4 bg-gray-100 rounded-xl space-y-2 text-sm text-gray-600">
        <p className="text-sm sm:text-base flex items-center gap-1">
          <span className="text-sky-400 text-2xl font-bold">•</span> Scanning
          social media platforms…
        </p>
        <p className="text-sm sm:text-base flex items-center gap-1">
          <span className="text-pink-400 text-2xl font-bold">•</span> Checking
          image hosting sites…
        </p>
        <p className="text-sm sm:text-base flex items-center gap-1">
          <span className="text-indigo-500 text-2xl font-bold">•</span>{" "}
          Analyzing video platforms…
        </p>
        <p className="text-sm sm:text-base flex items-center gap-1">
          <span className="text-primary text-2xl font-bold">•</span> Verifying
          content matches…
        </p>
      </div>
    </DialogContent>
  );
};

export default StartScanningModal;
