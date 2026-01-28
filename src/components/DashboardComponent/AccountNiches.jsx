import React from "react";
import { useGetNiches } from "@/hooks/useGetNiches";
import { useGetUserNiches } from "@/hooks/useGetUserNiches";
import useNichesAddRemove from "@/hooks/useNichesAddRemove";

const AccountNiches = () => {
  const { data: nichesData } = useGetNiches();
  const { data: userNichesData } = useGetUserNiches();
  const { mutate: nichesAddRemove } = useNichesAddRemove();

  const selectedNiches = userNichesData?.data || [];

  const handleAddRemoveNiches = (niche) => {
    nichesAddRemove({ name: niche });
  };

  return (
    <div className="py-4 rounded-b-[12px] border border-[#EFE6FD] bg-white flex flex-col min-h-0">
      {/* Scrollable list section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-5 grow overflow-y-auto min-h-0 p-2 sm:p-6">
        {nichesData?.data?.map((niche, idx) => {
          const isActive = selectedNiches?.some(
            (selectedNiche) => selectedNiche.name === niche,
          );

          return (
            <p
              key={idx}
              onClick={() => handleAddRemoveNiches(niche)}
              className={`text-sm sm:text-base font-medium rounded-full text-center py-2 sm:py-3.5 cursor-pointer transition ${
                isActive ? "bg-primary text-white" : "bg-[#E9EEF0] text-black"
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

export default AccountNiches;
