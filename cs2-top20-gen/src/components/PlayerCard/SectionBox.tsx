import React from "react";

interface SectionBoxProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "fill-title";
}

export function SectionBox({ title, children, className = "", variant = "default" }: SectionBoxProps) {
  // 提取自 Figma 的配色
  const colors = {
    border: "rgba(96, 84, 64, 0.8)", // #605440
    topBorder: "#B49F7C", // #B49F7C
    bg: "rgba(26, 22, 16, 0.6)", // #1A1610 
    titleText: "#B49F7C", 
    titleBg: "#1A1610",
    titleBorder: "#605440"
  };

  return (
    <div className={`relative mt-4 ${className}`}>
      {/* 标题标签 */}
      <div 
        className="absolute -top-3 left-4 z-10"
      >
        <div 
          className="px-4 py-0.5"
          style={{
            background: colors.titleBg,
            border: `1px solid ${colors.titleBorder}`,
            boxShadow: "0 2px 4px rgba(0,0,0,0.5)",
          }}
        >
          <span 
            className="text-[13px] font-medium tracking-[0.05em] uppercase block"
            style={{ 
              color: colors.titleText,
              fontFamily: "'Inter', 'Roboto Condensed', sans-serif",
            }}
          >
            {title}
          </span>
        </div>
      </div>

      {/* 卡片主体 */}
      <div 
        className="rounded-none p-4 pt-5 h-full"
        style={{
          background: colors.bg,
          border: `1px solid ${colors.border}`,
          borderTop: `2px solid ${colors.topBorder}`,
          backdropFilter: "blur(4px)",
        }}
      >
        {children}
      </div>
    </div>
  );
}
