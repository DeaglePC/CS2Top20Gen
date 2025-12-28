import { PersonalStat } from "@/types/player";
import { SectionBox } from "./SectionBox";

interface CardStatsProps {
  stats: PersonalStat[];
}

export function CardStats({ stats }: CardStatsProps) {
  return (
    <SectionBox title="PERSONAL STATS">
      <div className="flex justify-end mb-1 -mt-2">
        <span className="text-[9px] text-gray-400 tracking-widest uppercase font-semibold">Average</span>
      </div>
      
      <div className="flex flex-col gap-1.5">
        {stats.map((stat, index) => {
          const percentage =
            stat.maxValue !== undefined
              ? (stat.value / stat.maxValue) * 100
              : 50;
          
          const isRating = stat.name.toUpperCase() === "RATING";
          
          // 精确配色：普通条为蓝灰色，Rating为奶白金
          const barGradient = isRating
            ? "linear-gradient(180deg, #F1D5AD 0%, #d4af37 50%, #b38f2d 100%)" // 新金色 -> 金 -> 深金
            : "linear-gradient(180deg, #a4b0ba 0%, #8da1b3 45%, #6e7f8c 55%, #56636e 100%)"; // 亮蓝灰 -> 蓝灰 -> 深蓝灰
            
          const textColor = isRating ? "#F1D5AD" : "#e0e0e0";

          return (
            <div key={index} className="flex items-center gap-4 h-[22px]">
              <span className="text-[12px] font-bold text-[#b0b0b0] w-28 uppercase tracking-wider font-condensed">
                {stat.name}
              </span>
              <div 
                className="flex-1 h-[16px] relative rounded-[1px] overflow-hidden"
                style={{ 
                  background: "rgba(10, 10, 12, 0.6)", // 深色槽背景
                  boxShadow: "inset 0 1px 3px rgba(0,0,0,0.8), 0 1px 0 rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.03)"
                }}
              >
                {/* 进度条背景 - 垂直分隔线纹理 */}
                <div 
                  className="absolute inset-0 z-0"
                  style={{
                    backgroundImage: "linear-gradient(90deg, transparent 95%, rgba(0,0,0,0.4) 100%)",
                    backgroundSize: "8.33% 100%", // 12格
                  }}
                />
                
                {/* 进度条填充 */}
                <div
                  className="h-full transition-all duration-300 relative z-10"
                  style={{ 
                    width: `${Math.min(percentage, 100)}%`,
                    background: barGradient,
                    boxShadow: "0 0 10px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.4)", // 顶部高光 + 阴影
                    borderRadius: "0",
                  }}
                />
              </div>
              <span 
                className="text-[14px] font-bold w-12 text-right tracking-wide font-condensed"
                style={{ color: textColor }}
              >
                {stat.name.toUpperCase() === "ROUND SWING" && stat.value > 0 ? `+${stat.value}%` : 
                 stat.name.toUpperCase() === "SURVIVING" || stat.name.toUpperCase() === "MULTI-KILLS" || stat.name.toUpperCase() === "KAST" ? `${stat.value}%` :
                 stat.value}
              </span>
            </div>
          );
        })}
      </div>
    </SectionBox>
  );
}
