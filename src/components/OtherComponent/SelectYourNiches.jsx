import { nichesMockData } from "@/lib/DashboardMockData";
import React, { useState } from "react";

const SelectYourNiches = () => {
  const [selectedNiches, setSelectedNiches] = useState({});

  const toggleNiche = (index) => {
    setSelectedNiches((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="p-6 overflow-y-auto rounded-[12px] border flex flex-col border-[#EFE6FD]">
      <p className="text-xl font-medium mb-4">Select Your Niches</p>
      <div className="flex flex-wrap gap-5 overflow-y-auto grow py-2">
        {/* grid md:grid-cols-3 xl:grid-cols-4 */}
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
    </div>
  );
};

export default SelectYourNiches;
