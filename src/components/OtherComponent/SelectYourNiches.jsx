import { useGetNiches } from "@/hooks/useGetNiches";
import React from "react";

const SelectYourNiches = ({ setFormData, formData }) => {
  const { data, isLoading, isError } = useGetNiches();
  const nichesData = data?.data;

  const toggleNiche = (index) => {
    if (!nichesData || !nichesData[index]) return;

    const selectedNicheName = nichesData[index];
    setFormData((prev) => {
      const isCurrentlySelected = prev.niches.includes(selectedNicheName);
      if (isCurrentlySelected) {
        // Remove the niche if it's already selected
        return {
          ...prev,
          niches: prev.niches.filter((niche) => niche !== selectedNicheName),
        };
      } else {
        // Add the niche if it's not selected
        return {
          ...prev,
          niches: [...prev.niches, selectedNicheName],
        };
      }
    });
  };

  return (
    <div className="overflow-y-auto rounded-[12px] border flex flex-col border-[#EFE6FD]">
      <p className="text-lg sm:text-xl font-medium mb-2 sm:mb-4 pt-6 px-6">
        Select Your Niches
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-5 overflow-y-auto grow p-2">
        {/* grid md:grid-cols-3 xl:grid-cols-4 */}
        {isLoading ? (
          <p>Loading...</p>
        ) : isError ? (
          <p>Error</p>
        ) : (
          nichesData?.map((niche, idx) => {
            const isSelected = formData.niches.includes(niche);
            return (
              <p
                key={idx}
                onClick={() => toggleNiche(idx)}
                className={`text-sm sm:text-base font-medium rounded-full text-center py-2 sm:py-3.5 cursor-pointer ${
                  isSelected
                    ? "bg-primary text-white"
                    : "bg-[#E9EEF0] text-black"
                }`}
              >
                {niche}
              </p>
            );
          })
        )}
      </div>
    </div>
  );
};

export default SelectYourNiches;

// import { nichesMockData } from "@/lib/DashboardMockData";
// import React, { useState } from "react";

// const SelectYourNiches = () => {
//   const [selectedNiches, setSelectedNiches] = useState({});

//   const toggleNiche = (index) => {
//     setSelectedNiches((prev) => ({
//       ...prev,
//       [index]: !prev[index],
//     }));
//   };

//   return (
//     <div className="overflow-y-auto rounded-[12px] border flex flex-col border-[#EFE6FD]">
//       <p className="text-lg sm:text-xl font-medium mb-2 sm:mb-4 pt-6 px-6">
//         Select Your Niches
//       </p>
//       <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-5 overflow-y-auto grow p-2">
//         {/* grid md:grid-cols-3 xl:grid-cols-4 */}
//         {nichesMockData.map((niche, idx) => {
//           const isSelected = selectedNiches[idx] || false;
//           return (
//             <p
//               key={idx}
//               onClick={() => toggleNiche(idx)}
//               className={`text-sm sm:text-base font-medium rounded-full text-center py-2 sm:py-3.5 cursor-pointer ${
//                 isSelected ? "bg-primary text-white" : "bg-[#E9EEF0] text-black"
//               }`}
//             >
//               {niche}
//             </p>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default SelectYourNiches;
