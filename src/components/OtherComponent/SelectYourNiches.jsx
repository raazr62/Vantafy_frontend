import { nichesMockData } from "@/lib/DashboardMockData";
import React, { useState } from "react";

const SelectYourNiches = () => {
  return (
    <div className="p-6 rounded-[12px] border border-[#EFE6FD]">
      <p className="text-xl font-medium mb-4">Select Your Niches</p>
      <div className="grid grid-cols-4 gap-5">
        {nichesMockData.map((niche, idx) => {
          const [isSelected, setIsSelected] = useState(false);
          return (
            <p
              key={idx}
              onClick={() => setIsSelected(!isSelected)}
              className={`font-medium rounded-full text-center py-3.5 cursor-pointer ${
                isSelected ? "bg-primary text-white" : "bg-[#E9EEF0] text-black"
              }`}
            >
              {niche}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default SelectYourNiches;
