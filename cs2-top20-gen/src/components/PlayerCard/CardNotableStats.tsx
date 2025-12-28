import { NotableStat } from "@/types/player";
import { SectionBox } from "./SectionBox";

interface CardNotableStatsProps {
  stats: NotableStat[];
}

export function CardNotableStats({ stats }: CardNotableStatsProps) {
  const midPoint = Math.ceil(stats.length / 2);
  const leftColumn = stats.slice(0, midPoint);
  const rightColumn = stats.slice(midPoint);

  return (
    <SectionBox title="NOTABLE STATS">
      <div className="grid grid-cols-2 gap-x-6 gap-y-1 pl-2">
        <div className="flex flex-col gap-1">
          {leftColumn.map((stat, index) => (
            <div key={index} className="flex items-start text-[11px]">
              <span className="text-[#F1D5AD] mr-2 mt-[3px] text-[6px]">●</span>
              <span className="text-gray-200 font-medium tracking-wide">
                {stat.description}{" "}
                <span className="text-[#F1D5AD] ml-0.5">({stat.ranking})</span>
              </span>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-1">
          {rightColumn.map((stat, index) => (
            <div key={index} className="flex items-start text-[11px]">
              <span className="text-[#F1D5AD] mr-2 mt-[3px] text-[6px]">●</span>
              <span className="text-gray-200 font-medium tracking-wide">
                {stat.description}{" "}
                <span className="text-[#F1D5AD] ml-0.5">({stat.ranking})</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </SectionBox>
  );
}
