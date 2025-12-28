import { PlayerBasicInfo, countryFlags } from "@/types/player";

interface CardHeaderProps {
  basicInfo: PlayerBasicInfo;
}

export function CardHeader({ basicInfo }: CardHeaderProps) {
  const flag = countryFlags[basicInfo.nationality] || "🏳️";

  return (
    <div 
      className="relative px-6 py-4 rounded-none overflow-hidden mb-4 flex flex-col justify-center"
      style={{
        width: "502px",
        height: "138px",
        background: "rgba(26, 22, 16, 0.6)",
        border: "1px solid rgba(96, 84, 64, 0.8)",
        borderTop: "2px solid #B49F7C",
        backdropFilter: "blur(4px)",
      }}
    >
      <div className="relative z-10 flex flex-col gap-1">
        <h1
          className="font-bold uppercase"
          style={{
            fontFamily: "'Orbitron', 'Roboto Condensed', sans-serif",
            fontSize: "76px",
            lineHeight: "0.8",
            letterSpacing: "0.02em",
            marginBottom: "8px",
            background: "linear-gradient(180deg, #EEC98C 0%, #B49F7C 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            filter: "drop-shadow(0 4px 4px rgba(0,0,0,0.5))",
          }}
        >
          {basicInfo.playerId}
        </h1>
        <div className="flex items-center gap-3 text-[#B3B2AF] text-sm pl-1">
          <span className="text-xl filter drop-shadow-md">{flag}</span>
          <span className="font-bold tracking-wide text-[14px] text-[#B3B2AF]">{basicInfo.realName}</span>
          <span className="text-[#605440] font-light">|</span>
          <span className="text-[#9C9994] font-medium text-[14px]">{basicInfo.age} years</span>
          <span className="text-[#605440] font-light">|</span>
          <span className="text-[#B29C98] font-bold tracking-wide text-[14px]">{basicInfo.team}</span>
        </div>
      </div>
    </div>
  );
}
