import React from "react";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { CopyAllIconSVG } from "../SVG/DashboardLayoutSVG";
import { linksMockData } from "@/lib/DashboardMockData";

const ListOfDelistedLinksModal = () => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>List Of Delisted Links</DialogTitle>
        <div className="flex items-center justify-between">
          <DialogDescription>Total: 8 links</DialogDescription>
          <Button className={"text-xs!"} variant={"outline"}>
            <CopyAllIconSVG /> Copy All
          </Button>
        </div>
      </DialogHeader>

      <div className="max-h-[50svh] rounded-[12px] border border-[#E5E7EB] overflow-y-auto">
        {linksMockData.map((link, idx) => (
          <p
            key={idx}
            className={`py-3 px-4 first:rounded-t-[12px] last:rounded-b-[12px] flex items-center border-b border-b-white last:border-b-0 ${
              idx % 2 === 0 ? "bg-[#F6FCFF]" : "bg-[#FFEDFC99]"
            }`}
          >
            {link} <CopyAllIconSVG className={"text-gray-500"} />
          </p>
        ))}
      </div>
    </DialogContent>
  );
};

export default ListOfDelistedLinksModal;
