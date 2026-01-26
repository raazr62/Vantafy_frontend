import React from "react";
import useMemberNichesAddRemove from "@/hooks/useMemberNichesAddRemove";
import { useGetMemberNiches } from "@/hooks/useGetMemberNiches";
import { useGetNiches } from "@/hooks/useGetNiches";

const MemberNiches = ({ memberData }) => {
  const { data } = useGetMemberNiches(memberData?.id);
  const { data: nichesData } = useGetNiches();
  const selectedNiches = data?.data || [];
  const { mutate: nichesAddRemove } = useMemberNichesAddRemove(memberData?.id);

  const handleAddRemoveNiches = (niche) => {
    nichesAddRemove({ name: niche });
  };

  return (
    <div className="bg-white rounded-2xl py-4 w-full border border-[#E2E8F0] shadow-[0_0.785px_2.355px_rgba(0,0,0,0.10)] gap-4 flex flex-col min-h-60 lg:min-h-0 grow flex-1">
      <p className="font-semibold text-center">Their Niches</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 grow overflow-y-auto max-h-90 lg:max-h-full px-4">
        {nichesData?.data?.map((niche) => {
          const isActive = selectedNiches?.some(
            (selectedNiche) => selectedNiche.name === niche.name,
          );

          return (
            <span
              key={niche.id}
              onClick={() => handleAddRemoveNiches(niche.name)}
              className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium flex items-center justify-center text-center border transition cursor-pointer
                ${
                  isActive
                    ? "bg-primary text-white border-transparent shadow-[0_0_6px_rgba(255,92,225,0.35)]"
                    : "bg-[#F8FAFC] text-[#475569] border-[#E2E8F0]"
                }`}
            >
              {niche?.name}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default MemberNiches;
