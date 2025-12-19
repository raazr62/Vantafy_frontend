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
    <div className="py-4 rounded-b-[12px] border border-[#EFE6FD] bg-white flex flex-col min-h-0">
      {/* Scrollable list section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-5 grow overflow-y-auto min-h-0 p-2 sm:p-6">
        {nichesMockData.map((niche, idx) => {
          const isSelected = selectedNiches[idx] || false;
          return (
            <p
              key={idx}
              onClick={() => toggleNiche(idx)}
              className={`text-sm sm:text-base font-medium rounded-full text-center py-2 sm:py-3.5 cursor-pointer ${
                isSelected ? "bg-primary text-white" : "bg-[#E9EEF0] text-black"
              }`}
            >
              {niche}
            </p>
          );
        })}
        {/* Save button stays fixed at bottom */}
        <Button
          variant="secondary"
          className="mt-4 col-span-2 sm:col-span-3 lg:col-span-4"
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default AccountNiches;
