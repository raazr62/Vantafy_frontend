import {
  SemiTitleLeftArrow,
  SemiTitleRightArrow,
} from "@/components/SVG/HomeLayoutSVG";
import { cn } from "@/lib/utils";
import React from "react";

const CommonTitle = ({ title, className = "border-primary" }) => {
  return (
    <div className="flex items-center gap-4 cursor-default">
      <SemiTitleLeftArrow />
      <div
        className={cn(
          "text-lg font-bold py-2.5 px-4.5 border  rounded-[70px] text-center",
          className
        )}
      >
        {title}
      </div>
      <SemiTitleRightArrow />
    </div>
  );
};

export default CommonTitle;
