import { requestRemovalInfoMockData } from "@/lib/DashboardMockData";
import React, { useState } from "react";
import { SendIconSVG } from "../SVG/DashboardLayoutSVG";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import SubmittedLinksStatus from "./SubmittedLinksStatus";

const RequestRemovalForm = ({ setLinksData, linksData }) => {
  const [urlsText, setUrlsText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const statuses = ["Processing", "Removed", "Failed"];

    const linksArray = urlsText
      .split("\n")
      .map((url) => url.trim())
      .filter((url) => url.length > 0)
      .map((url, index) => {
        const platform = Math.random() < 0.5 ? "Image" : "Video";
        const status = statuses[Math.floor(Math.random() * statuses.length)];

        return {
          id: index + 1,
          link: url,
          platform,
          detectedItem: getRandomInt(5, 20),
          status,
          date: new Date().toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          }),
        };
      });

    setLinksData((prev) => [...linksArray, ...prev]);
  };

  return (
    <div className="bg-white p-6 rounded-2xl min-h-0 grow flex flex-col gap-5">
      {/* Info And Feature */}
      <div
        className="border-[0.952px] border-[rgba(0,0,0,0)]
        bg-[linear-gradient(180deg,rgba(78,120,253,0.08)_0%,rgba(255,27,228,0.08)_100%)] flex items-center justify-evenly py-5 rounded-[12px]"
      >
        {requestRemovalInfoMockData.map((data, index) => (
          <div
            key={index}
            className="flex flex-col gap-1.5 items-center text-center"
          >
            <div className={`p-3 rounded-[10px] ${data.bg}`}>{data.icon}</div>
            <p className="font-semibold">{data.title}</p>
            <p className="text-sm text-[#4A4A4A]">{data.description}</p>
          </div>
        ))}
      </div>

      {/* View Submitted Links */}

      <Dialog>
        {/* Remaining Request */}
        <div className="bg-[linear-gradient(180deg,rgba(78,120,253,0.08)_0%,rgba(255,27,228,0.08)_100%)] border-[0.952px] border-[#4E78FD33] py-3.5 px-3.5 rounded-[10px] text-sm text-[#333333] flex items-center gap-5">
          <p>
            You have <span className="text-[#4E78FD] font-bold">45 links</span>{" "}
            remaining for removal requests this month under your{" "}
            <span className="font-semibold">Premium</span> plan.{" "}
          </p>
          {linksData.length > 0 && (
            <DialogTrigger asChild>
              <button
                type="button"
                className="bg-linear-to-bl from-primary to-sky-500 border-[#4E78FD33] py-1.5 rounded-[10px] text-white font-medium px-5 hover:underline cursor-pointer"
              >
                View Submitted Links ({linksData.length})
              </button>
            </DialogTrigger>
          )}
        </div>

        <DialogContent className="sm:max-w-5xl h-[90vh] flex flex-col">
          <DialogHeader>
            <DialogTitle>Submitted Links</DialogTitle>
          </DialogHeader>

          <div className="flex-1 min-h-0">
            <SubmittedLinksStatus
              linksData={linksData}
              setLinksData={setLinksData}
            />
          </div>
        </DialogContent>
      </Dialog>

      {/* Form */}
      <form onSubmit={handleSubmit} className="grow min-h-0 flex flex-col">
        <textarea
          name="urls"
          rows={6}
          value={urlsText}
          onChange={(e) => setUrlsText(e.target.value)}
          className="w-full border border-[#EEEDF0] rounded-[12px] focus:border-primary outline-0 px-5 py-4 grow min-h-0"
          placeholder="Paste the URLs of the leaked content here (one link per line)..."
        ></textarea>
        <p className="text-xs text-[#4A4A4A] my-3">
          💡 Tip: You can paste multiple URLs at once. Each URL should be on a
          new line. You have 45 links remaining.
        </p>
        <button
          type="submit"
          className="w-full rounded-[10px] py-3 bg-[linear-gradient(90deg,#35A9FF_0%,#FF5CE1_100.02%)] text-white font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer"
        >
          <SendIconSVG /> Submit Priority Request
        </button>
      </form>
    </div>
  );
};

export default RequestRemovalForm;
