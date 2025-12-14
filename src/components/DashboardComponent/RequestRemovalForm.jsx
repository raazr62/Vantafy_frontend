import { requestRemovalInfoMockData } from "@/lib/DashboardMockData";
import React from "react";
import { SendIconSVG } from "../SVG/DashboardLayoutSVG";

const RequestRemovalForm = () => {
  return (
    <div className="bg-white p-6 rounded-2xl">
      {/* Info And Feature */}
      <div
        className="border-[0.952px] border-[rgba(0,0,0,0)]
bg-[linear-gradient(180deg,rgba(78,120,253,0.08)_0%,rgba(255,27,228,0.08)_100%)] flex items-center justify-evenly py-5 rounded-[12px]"
      >
        {requestRemovalInfoMockData.map((data) => (
          <div className="flex flex-col gap-1.5 items-center text-center">
            <div className={`p-3 rounded-[10px] ${data.bg}`}>{data.icon}</div>
            <p className="font-semibold">{data.title}</p>
            <p className="text-sm text-[#4A4A4A]">{data.description}</p>
          </div>
        ))}
      </div>

      {/* Remaining Request */}
      <p className="bg-[linear-gradient(180deg,rgba(78,120,253,0.08)_0%,rgba(255,27,228,0.08)_100%)] border-[0.952px] border-[#4E78FD33] py-3.5 px-3.5 rounded-[10px] mt-7.5 mb-3.5 text-sm text-[#333333]">
        You have <span className="text-[#4E78FD] font-bold">45 links</span>{" "}
        remaining for removal requests this month under your{" "}
        <span className="font-semibold">Premium</span> plan.
      </p>

      {/* Form */}
      <form>
        <textarea
          name="urls"
          rows="4"
          className="w-full border border-[#EEEDF0] rounded-[12px] focus:border-primary outline-0 px-5 py-4"
          placeholder="Paste the URLs of the leaked content here (one link per line)..."
        ></textarea>
        <p className="text-xs text-[#4A4A4A] my-3">
          💡 Tip: You can paste multiple URLs at once. Each URL should be on a
          new line. You have 45 links remaining.
        </p>
        <button className="w-full rounded-[10px] py-3 bg-[linear-gradient(90deg,#35A9FF_0%,#FF5CE1_100.02%)] text-white font-semibold text-sm flex items-center justify-center gap-2">
          <SendIconSVG /> Submit Priority Request
        </button>
      </form>
    </div>
  );
};

export default RequestRemovalForm;
