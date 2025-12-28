interface CardRankBadgeProps {
  rank: number;
  year: number;
}

export function CardRankBadge({ rank, year }: CardRankBadgeProps) {
  return (
    <div className="flex flex-col items-end">
      <span
        className="font-black"
        style={{
          fontFamily: "'Roboto Condensed', sans-serif",
          fontStyle: "italic",
          fontSize: "130px",
          lineHeight: "0.85",
          background: "linear-gradient(180deg, #F1D5AD 0%, #d4af37 30%, #b8962e 60%, #8b7022 80%, #5a4a18 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          filter: "drop-shadow(0 4px 12px rgba(0, 0, 0, 0.6))",
          letterSpacing: "-0.03em",
        }}
      >
        #{rank}
      </span>
      <div className="flex items-center gap-1.5 mt-3">
        <span 
          className="text-[12px] font-bold tracking-wider"
          style={{ 
            color: "#e8e8e8",
            textShadow: "0 1px 2px rgba(0,0,0,0.5)",
          }}
        >
          HLTV
        </span>
        <span 
          className="text-[12px] font-bold tracking-wider"
          style={{ 
            color: "#3b82f6",
            textShadow: "0 1px 2px rgba(0,0,0,0.5)",
          }}
        >
          1XBET
        </span>
        <span 
          className="text-[12px] tracking-wider flex items-center gap-0.5"
          style={{ 
            color: "#a0a0a0",
          }}
        >
          <span className="text-emerald-400">✦</span>Skin.Club
        </span>
      </div>
      <span 
        className="text-[11px] mt-1 tracking-widest uppercase"
        style={{ color: "#808080" }}
      >
        HLTV TOP 20 / {year}
      </span>
    </div>
  );
}
