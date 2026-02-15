import { requestRemovalInfoMockData } from "@/lib/DashboardMockData";
import React, { useState } from "react";
import { SendIconSVG } from "../SVG/DashboardLayoutSVG";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const RequestRemovalForm = ({
  // setLinksData,
  // linksData,
  selectedMemberID,
  setSelectedMemberId,
  memberData,
  user,
}) => {
  const [urlsText, setUrlsText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const linksArray = urlsText.split("\n").map((url) => url.trim());

    // setLinksData((prev) => [...linksArray, ...prev]);
    setUrlsText("");
  };

  return (
    <div className="bg-white p-3 sm:p-6 rounded-2xl lg:min-h-0 grow flex flex-col-reverse lg:flex-col gap-5">
      {/* Info And Feature */}
      <div
        className="border-[0.952px] border-[rgba(0,0,0,0)]
        bg-[linear-gradient(180deg,rgba(78,120,253,0.08)_0%,rgba(255,27,228,0.08)_100%)] flex flex-wrap items-center justify-evenly py-5 rounded-[12px] gap-5"
      >
        {requestRemovalInfoMockData.map((data, index) => (
          <div
            key={index}
            className="flex flex-col gap-0.5 sm:gap-1.5 items-center text-center"
          >
            <div className={`p-2 sm:p-3 rounded-[10px] ${data.bg}`}>
              {data.icon}
            </div>
            <p className="text-sm sm:text-base font-semibold">{data.title}</p>
            <p className="text-xs sm:text-sm text-[#4A4A4A]">
              {data.description}
            </p>
          </div>
        ))}
      </div>

      {/* View Submitted Links */}

      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        {/* Select User */}
        {user.role === "agency" && (
          <Select
            value={selectedMemberID?.toString()}
            onValueChange={(value) => setSelectedMemberId(value)}
          >
            <SelectTrigger className="py-2 sm:py-5.5 px-3.5 rounded-[10px] w-full min-w-80 max-w-[250px] sm:w-auto bg-white text-xs sm:text-sm">
              <SelectValue placeholder="Select Creator Name" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Select Creator Name</SelectLabel>
                {memberData?.data?.map((member) => (
                  <SelectItem key={member.id} value={member.id.toString()}>
                    {member.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        )}

        {/* <Dialog className="flex-1"> */}
        {/* Remaining Request */}
        <div className="bg-[linear-gradient(180deg,rgba(78,120,253,0.08)_0%,rgba(255,27,228,0.08)_100%)] border-[0.952px] border-[#4E78FD33] py-2 sm:py-3.5 px-3.5 rounded-[10px] text-xs sm:text-sm text-[#333333] flex flex-col md:flex-row items-center gap-2 md:gap-5 w-full">
          <p>
            You have <span className="text-[#4E78FD] font-bold">45 links</span>{" "}
            remaining for removal requests this month under your{" "}
            <span className="font-semibold">Premium</span> plan.{" "}
          </p>
          {/* {linksData.length > 0 && (
              <DialogTrigger asChild>
                <button
                  type="button"
                  className="bg-linear-to-bl from-primary to-sky-500 border-[#4E78FD33] py-1.5 text-xs sm:text-sm rounded-[10px] text-white font-medium px-5 hover:underline cursor-pointer"
                >
                  View Submitted Links ({linksData.length})
                </button>
              </DialogTrigger>
            )} */}
        </div>

        {/* <DialogContent className="sm:max-w-5xl max-h-[85vh] sm:max-h-[90vh] flex flex-col overflow-hidden">
            <DialogHeader>
              <DialogTitle>Submitted Links</DialogTitle>
            </DialogHeader>

            <div className="flex-1 min-h-0 flex flex-col">
              <SubmittedLinksStatus
                linksData={linksData}
                setLinksData={setLinksData}
              />
            </div>
          </DialogContent>
        </Dialog> */}
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="grow lg:min-h-0 flex flex-col">
        <textarea
          name="urls"
          rows={6}
          value={urlsText}
          onChange={(e) => setUrlsText(e.target.value.replace(/%0A/g, "\n"))}
          className="w-full border border-[#EEEDF0] rounded-[12px] focus:border-primary outline-0 px-3 sm:px-5 py-2 sm:py-4 grow min-h-0"
          placeholder="Paste the URLs of the leaked content here (one link per line)..."
        ></textarea>
        <p className="text-[10px] sm:text-xs text-[#4A4A4A] my-3">
          💡 Tip: You can paste multiple URLs at once. Each URL should be on a
          new line. You have 45 links remaining.
        </p>
        <button
          type="submit"
          className="w-full rounded-[10px] py-1.5 sm:py-3 bg-[linear-gradient(90deg,#35A9FF_0%,#FF5CE1_100.02%)] text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer"
        >
          <SendIconSVG /> Submit Priority Request
        </button>
      </form>
    </div>
  );
};

export default RequestRemovalForm;
