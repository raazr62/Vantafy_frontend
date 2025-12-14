import { nichesMockData } from "@/lib/DashboardMockData";
import React, { useState } from "react";
import { Button } from "../ui/button";

const AccountNiches = () => {
  const [selectedNiches, setSelectedNiches] = useState({});

  const toggleNiche = (index) => {
    setSelectedNiches((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="pr-0 p-6 rounded-b-[12px] border border-[#EFE6FD] bg-white flex flex-col min-h-0">
      {/* Scrollable list section */}
      <div className="flex flex-wrap gap-5 py-2 grow overflow-y-auto min-h-0">
        {nichesMockData.map((niche, idx) => {
          const isSelected = selectedNiches[idx] || false;
          return (
            <p
              key={idx}
              onClick={() => toggleNiche(idx)}
              className={`font-medium rounded-full text-center py-3.5 px-8 cursor-pointer ${
                isSelected ? "bg-primary text-white" : "bg-[#E9EEF0] text-black"
              }`}
            >
              {niche}
            </p>
          );
        })}
      </div>

      {/* Save button stays fixed at bottom */}
      <Button variant="secondary" className="mt-4 ">
        Save
      </Button>
    </div>
  );
};

export default AccountNiches;
