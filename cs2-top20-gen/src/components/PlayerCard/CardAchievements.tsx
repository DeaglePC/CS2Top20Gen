import { TeamAchievement } from "@/types/player";
import { SectionBox } from "./SectionBox";

interface CardAchievementsProps {
  achievements: TeamAchievement[];
}

// 奖牌图标组件
function MedalIcon({ place }: { place: string }) {
  const colors: Record<string, { bg: string; border: string; text: string }> = {
    "1ST": { bg: "#d4af37", border: "#f5d87a", text: "#1a1a1a" },
    "2ND": { bg: "#a8a8a8", border: "#d0d0d0", text: "#1a1a1a" },
    "3RD": { bg: "#cd7f32", border: "#e8a050", text: "#1a1a1a" },
  };
  const style = colors[place] || colors["3RD"];
  const number = place === "1ST" ? "1" : place === "2ND" ? "2" : "3";
  
  return (
    <div 
      className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold border"
      style={{ 
        background: "transparent",
        borderColor: style.border,
        color: style.border,
        boxShadow: `0 0 5px ${style.border}40`,
      }}
    >
      {number}
    </div>
  );
}

export function CardAchievements({ achievements }: CardAchievementsProps) {
  const placeColors: Record<string, string> = {
    "1ST": "#F1D5AD", // 使用新金色
    "2ND": "#d0d0d0", 
    "3RD": "#e8a050",
  };

  return (
    <SectionBox title="NOTABLE TEAM ACHIEVEMENTS">
      <div className="grid grid-cols-3 gap-2">
        {achievements.map((achievement, index) => {
          const color = placeColors[achievement.place] || placeColors["3RD"];
          return (
            <div key={index} className="flex flex-col">
              <div className="flex items-center gap-1.5 mb-1">
                <MedalIcon place={achievement.place} />
                <span
                  className="font-bold text-xs tracking-widest uppercase"
                  style={{ color }}
                >
                  {achievement.place}
                </span>
              </div>
              <div className="flex flex-col gap-0.5 pl-1">
                {achievement.events.map((event, eventIndex) => (
                  <span key={eventIndex} className="text-[10px] text-gray-300 leading-tight font-medium">
                    {event}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </SectionBox>
  );
}
