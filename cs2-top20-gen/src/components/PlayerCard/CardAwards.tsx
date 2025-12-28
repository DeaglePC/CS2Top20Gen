import { Award } from "@/types/player";
import { SectionBox } from "./SectionBox";

interface CardAwardsProps {
  mvpAwards: Award[];
  evpAwards: Award[];
}

export function CardAwards({ mvpAwards, evpAwards }: CardAwardsProps) {
  return (
    <div className="flex gap-4">
      <div className="w-[131px] shrink-0">
        <SectionBox title="MVP AWARDS">
          <div className="flex flex-wrap gap-x-2 gap-y-1 items-center min-h-[20px]">
            {mvpAwards.map((award, index) => (
              <div
                key={index}
                className="text-[11px] text-[#A7A6A1] flex items-center font-medium"
              >
                <span 
                  className="w-0.5 h-2.5 bg-[#A7A6A1]/50 mr-1.5" 
                />
                {award.event}
              </div>
            ))}
            {mvpAwards.length === 0 && (
              <span className="text-[11px] text-gray-500">-</span>
            )}
          </div>
        </SectionBox>
      </div>

      <div className="w-[300px] shrink-0">
        <SectionBox title="EVP AWARDS">
          <div className="flex flex-wrap gap-x-3 gap-y-1 items-center min-h-[20px]">
            {evpAwards.map((award, index) => (
              <div
                key={index}
                className="text-[11px] text-[#A7A6A1] flex items-center font-medium"
              >
                <span 
                  className="w-0.5 h-2.5 bg-[#A7A6A1]/50 mr-1.5" 
                />
                {award.event}
              </div>
            ))}
            {evpAwards.length === 0 && (
              <span className="text-[11px] text-gray-500">-</span>
            )}
          </div>
        </SectionBox>
      </div>
    </div>
  );
}
