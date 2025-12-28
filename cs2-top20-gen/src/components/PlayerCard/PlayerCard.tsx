import { forwardRef } from "react";
import { PlayerData, countryFlags } from "@/types/player";

interface PlayerCardProps {
  data: PlayerData;
}


const figmaAssetsBase = "/CodeBubbyAssets/103_2";

function toLines(values: string[], maxLines: number): string[] {
  return values.slice(0, Math.max(0, maxLines));
}

export const PlayerCard = forwardRef<HTMLDivElement, PlayerCardProps>(({ data }, ref) => {
  const place1 = data.teamAchievements.find((x) => x.place === "1ST");
  const place2 = data.teamAchievements.find((x) => x.place === "2ND");
  const place3 = data.teamAchievements.find((x) => x.place === "3RD");

  const flagEmoji = countryFlags[data.basicInfo.nationality] || "🏳️";

  // 竖线颜色
  const goldBarColor = "rgb(244, 213, 151)";
  const defaultBarColor = "rgb(226, 221, 216)";
  // 奖项文字颜色
  const awardTextColor = "#fffff9";

  const notableMid = Math.ceil(data.notableStats.length / 2);
  const notableLeft = data.notableStats.slice(0, notableMid);
  const notableRight = data.notableStats.slice(notableMid);

  const statsByName = new Map(data.personalStats.map((x) => [x.name.toUpperCase(), x]));
  // average值作为柱状图100%位置的基准
  const statRows = [
    { key: "KPR", y: 36, average: 0.71 },
    { key: "SURVIVING", y: 58, average: 28.8 },
    { key: "ADR", y: 80, average: 80 },
    { key: "MULTI-KILLS", y: 102, average: 16 },
    { key: "KAST", y: 124, average: 58.1 },
    { key: "ROUND SWING", y: 146, average: 0.64 },
    { key: "RATING", y: 168, average: 0.95 }, 
  ] as const;

  return (
    <div
      ref={ref}
      style={{
        width: 800,
        height: 900,
        position: "relative",
        overflow: "hidden",
        background: "rgba(0,0,0,0)",
      }}
    >
      {/* Trophy background - 高斯模糊奖杯，左侧区域 */}
      <img
        src={`${figmaAssetsBase}/trophy.jpg`}
        alt="trophy"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 500,
          height: 900,
          objectFit: "cover",
          filter: "blur(8px)",
          opacity: 1,
          zIndex: 0,
        }}
      />

      {/* 右下角黑色背景 */}
      <div
        style={{
          position: "absolute",
          left: 500,
          top: 600,
          width: 300,
          height: 300,
          backgroundColor: "#000000",
          zIndex: 0,
        }}
      />

      {/* 选手照片 - 右侧区域，带渐变边缘 */}
      <div
        style={{
          position: "absolute",
          left: 430,
          top: 0,
          width: 370,
          height: 700,
          zIndex: 0,
          overflow: "hidden",
        }}
      >
        <img
          src={data.photoUrl ? data.photoUrl : `${figmaAssetsBase}/17.png`}
          crossOrigin={data.photoUrl ? "anonymous" : undefined}
          alt={data.basicInfo.playerId}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center center",
          }}
        />
        {/* 左侧渐变遮罩 */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 100,
            height: "100%",
            background: "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
          }}
        />
        {/* 底部渐变遮罩 */}
        <div
          style={{
            position: "absolute",
            left: 0,
            bottom: 0,
            width: "100%",
            height: 100,
            background: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
          }}
        />
      </div>

      {/* Sponsors icons */}
      <img
        src={`${figmaAssetsBase}/1.svg`}
        alt="sponsor-mark"
        style={{ left: 687, top: 780, position: "absolute" }}
      />
      <img
        src={`${figmaAssetsBase}/2.svg`}
        alt="sponsor-mark"
        style={{ left: 555, top: 778, position: "absolute" }}
      />

      {/* Header block (Figma: left=8 top=2) */}
      <div style={{ width: 502, height: 138, left: 8, top: 0, position: "absolute" }}>
        {/* Top gold border */}
        <div
          style={{
            width: 493,
            height: 3,
            left: 6,
            top: 13,
            position: "absolute",
            background: "rgb(251, 208, 138)",
            borderRadius: "2px 2px 0 0",
            zIndex: 10,
          }}
        />
        {/* Header container with team logo background */}
        <div
          style={{
            width: 493,
            height: 113,
            left: 6,
            top: 16,
            position: "absolute",
            overflow: "hidden",
            borderRadius: "0 0 2px 2px",
          }}
        >
          {/* Team logo background */}
          {data.teamLogoUrl && (
            <img
              src={data.teamLogoUrl}
              crossOrigin="anonymous"
              alt="team-logo"
              style={{
                position: "absolute",
                right: 60,
                top: "50%",
                transform: "translateY(-50%)",
                width: 260,
                height: 260,
                objectFit: "contain",
                opacity: 0.4,
                filter: "grayscale(30%)",
              }}
            />
          )}
          {/* Frosted glass overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(90deg, rgba(26,22,16,0.95) 0%, rgba(26,22,16,0.7) 60%, rgba(26,22,16,0.5) 100%)",
              backdropFilter: "blur(2px)",
            }}
          />
          {/* Original header background image */}
          <img
            src={`${figmaAssetsBase}/30.png`}
            alt="header-bg"
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              objectFit: "cover",
              mixBlendMode: "overlay",
              opacity: 0.8,
            }}
          />
        </div>

        {/* Player ID */}
        <div
          style={{
            width: 331,
            height: 68,
            left: 30,
            top: 24,
            position: "absolute",
            fontFamily: "Orbitron, Roboto Condensed, sans-serif",
            fontSize: 77,
            fontWeight: 700,
            lineHeight: "68px",
            color: "#EEC98C",
          }}
        >
          {data.basicInfo.playerId}
        </div>

        {/* Bottom info row with flex layout */}
        <div
          style={{
            left: 30,
            top: 96,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            fontFamily: "'Industry', 'Rajdhani', sans-serif",
            fontSize: 14,
          }}
        >
          {/* Flag */}
          <img
            src={`https://flagcdn.com/w40/${data.basicInfo.nationality.toLowerCase()}.png`}
            alt={`flag-${data.basicInfo.nationality}`}
            style={{
              width: 18,
              height: 12,
              objectFit: "cover",
              borderRadius: 1,
              filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.6))",
              marginRight: 12,
            }}
          />
          {/* Real Name */}
          <span
            style={{
              fontWeight: 700,
              color: "rgb(203, 202, 198)",
              whiteSpace: "nowrap",
            }}
          >
            {data.basicInfo.realName}
          </span>
          {/* Age - 8px gap from name */}
          <span
            style={{
              fontWeight: 400,
              color: "rgb(173, 170, 165)",
              whiteSpace: "nowrap",
              marginLeft: 20,
              marginRight: 12,
            }}
          >
            {data.basicInfo.age} years
          </span>
          {/* Dot separator */}
          <span
            style={{
              color: "rgb(173, 170, 165)",
              fontSize: 10,
              marginRight: 12,
            }}
          >
            •
          </span>
          {/* Team */}
          <span
            style={{
              fontWeight: 400,
              color: "rgb(173, 170, 165)",
              whiteSpace: "nowrap",
            }}
          >
            {data.basicInfo.team}
          </span>
        </div>
      </div>

      {/* Awards */}
      {/* MVP Awards Section */}
      <div style={{ width: 131, height: 26, left: 22, top: 170, position: "absolute", zIndex: 5 }}>
        <div
          style={{
            width: 127,
            height: 22,
            left: 3,
            top: 3,
            position: "absolute",
            background: "#1A1610",
            border: "1px rgb(228, 203, 162) solid",
            borderRadius: 6,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 13,
              fontWeight: 400,
              color: "rgb(228, 203, 162)",
              letterSpacing: "0.02em",
              whiteSpace: "nowrap",
            }}
          >
            MVP AWARDS
          </span>
        </div>
      </div>

      {/* MVP card with dynamic height - two columns when > 4 items */}
      <div
        style={{
          left: 15,
          top: 187,
          position: "absolute",
          width: 241,
          minHeight: 34,
          padding: "8px 10px 8px 6px",
          background: "linear-gradient(180deg, rgba(26,22,16,0.95) 0%, rgba(30,26,18,0.9) 100%)",
          borderTop: "3px solid rgb(240, 208, 158)",
          boxSizing: "border-box",
        }}
      >
        {data.mvpAwards.length > 4 ? (
          <div style={{ display: "flex", gap: 12 }}>
            {/* Left column - first 4 items */}
            <div style={{ display: "flex", flexDirection: "column", gap: 4, flex: 1 }}>
              {data.mvpAwards.slice(0, 4).map((award, idx) => (
                <div key={`mvp-${idx}`} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <div style={{ width: 3, height: 12, flexShrink: 0, background: award.isGold ? goldBarColor : defaultBarColor }} />
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: 10, color: awardTextColor }}>{award.event}</span>
                </div>
              ))}
            </div>
            {/* Right column - remaining items */}
            <div style={{ display: "flex", flexDirection: "column", gap: 4, flex: 1 }}>
              {data.mvpAwards.slice(4).map((award, idx) => (
                <div key={`mvp-r-${idx}`} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <div style={{ width: 3, height: 12, flexShrink: 0, background: award.isGold ? goldBarColor : defaultBarColor }} />
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: 10, color: awardTextColor }}>{award.event}</span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {data.mvpAwards.map((award, idx) => (
              <div key={`mvp-${idx}`} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div style={{ width: 3, height: 12, flexShrink: 0, background: award.isGold ? goldBarColor : defaultBarColor }} />
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: 10, color: awardTextColor }}>{award.event}</span>
              </div>
            ))}
            {data.mvpAwards.length === 0 && (
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: 10, color: awardTextColor, opacity: 0.5 }}>-</span>
            )}
          </div>
        )}
      </div>

      {/* EVP Awards Section */}
      <div style={{ width: 127, height: 24, left: 276, top: 171, position: "absolute", zIndex: 5 }}>
        <div
          style={{
            width: 124,
            height: 22,
            left: 2,
            top: 2,
            position: "absolute",
            background: "#18150F",
            border: "1px rgb(228, 203, 162) solid",
            borderRadius: 6,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 13,
              fontWeight: 500,
              color: "rgb(228, 203, 162)",
              whiteSpace: "nowrap",
            }}
          >
            EVP AWARDS
          </span>
        </div>
      </div>

      {/* EVP card with dynamic height */}
      <div
        style={{
          left: 266,
          top: 186,
          position: "absolute",
          width: 240,
          minHeight: 55,
          padding: "8px 10px 8px 6px",
          background: "linear-gradient(180deg, rgba(24,21,15,0.95) 0%, rgba(28,24,16,0.9) 100%)",
          borderTop: "3px solid rgb(240, 208, 158)",
          boxSizing: "border-box",
        }}
      >
        {data.evpAwards.length > 4 ? (
          <div style={{ display: "flex", gap: 12 }}>
            {/* Left column - first 4 items */}
            <div style={{ display: "flex", flexDirection: "column", gap: 4, flex: 1 }}>
              {data.evpAwards.slice(0, 4).map((award, idx) => (
                <div key={`evp-${idx}`} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <div style={{ width: 3, height: 12, flexShrink: 0, background: award.isGold ? goldBarColor : defaultBarColor }} />
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: 10, color: awardTextColor }}>{award.event}</span>
                </div>
              ))}
            </div>
            {/* Right column - remaining items */}
            <div style={{ display: "flex", flexDirection: "column", gap: 4, flex: 1 }}>
              {data.evpAwards.slice(4).map((award, idx) => (
                <div key={`evp-r-${idx}`} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <div style={{ width: 3, height: 12, flexShrink: 0, background: award.isGold ? goldBarColor : defaultBarColor }} />
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: 10, color: awardTextColor }}>{award.event}</span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {data.evpAwards.map((award, idx) => (
              <div key={`evp-${idx}`} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div style={{ width: 3, height: 12, flexShrink: 0, background: award.isGold ? goldBarColor : defaultBarColor }} />
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: 10, color: awardTextColor }}>{award.event}</span>
              </div>
            ))}
            {data.evpAwards.length === 0 && (
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: 10, color: awardTextColor, opacity: 0.5 }}>-</span>
            )}
          </div>
        )}
      </div>

      {/* Achievements block */}
      <div style={{ width: 499, height: 160, left: 9, top: 276, position: "absolute" }}>
        {/* 半透明毛玻璃背景 */}
        <div
          style={{
            width: 492,
            height: 129,
            left: 5,
            top: 24,
            position: "absolute",
            background: "rgba(30, 28, 24, 0.85)",
            backdropFilter: "blur(8px)",
            borderRadius: 2,
            borderTop: "2px solid rgb(240, 209, 162)",
          }}
        />
        <img src={`${figmaAssetsBase}/31.svg`} alt="m1" style={{ left: 23, top: 35, position: "absolute" }} />
        <img src={`${figmaAssetsBase}/35.svg`} alt="m2" style={{ left: 181, top: 35, position: "absolute" }} />
        <img src={`${figmaAssetsBase}/34.svg`} alt="m3" style={{ left: 339, top: 35, position: "absolute" }} />

        <div style={{ width: 299, height: 26, left: 13, top: 4, position: "absolute" }}>
          <div
            style={{
              width: 296,
              height: 23,
              left: 3,
              top: 3,
              position: "absolute",
              background: "#1A160E",
              borderRadius: 6,
              border: "1px rgb(228, 203, 162) solid",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 15,
                fontWeight: 400,
                color: "rgb(228, 203, 162)",
                whiteSpace: "nowrap",
              }}
            >
              NOTABLE TEAM ACHIEVEMENTS
            </span>
          </div>
        </div>

        {/* 1ST */}
        <div
          style={{
            left: 49,
            top: 37,
            position: "absolute",
            fontFamily: "Inter, sans-serif",
            fontSize: 15,
            fontWeight: 400,
            color: "#BCA677",
          }}
        >
          1ST
        </div>
        <div
          style={{
            width: 140,
            left: 23,
            top: 60,
            position: "absolute",
            fontFamily: "Inter, sans-serif",
            fontSize: 11,
            fontWeight: 700,
            color: awardTextColor,
            whiteSpace: "pre-line",
            lineHeight: 1.3,
          }}
        >
          {toLines(place1?.events ?? [], 6).join("\n")}
        </div>

        {/* 2ND */}
        <div
          style={{
            left: 207,
            top: 37,
            position: "absolute",
            fontFamily: "Inter, sans-serif",
            fontSize: 15,
            fontWeight: 400,
            color: "#ACA8A4",
          }}
        >
          2ND
        </div>
        <div
          style={{
            width: 140,
            left: 181,
            top: 58,
            position: "absolute",
            fontFamily: "Inter, sans-serif",
            fontSize: 11,
            fontWeight: 700,
            color: awardTextColor,
            whiteSpace: "pre-line",
            lineHeight: 1.3,
          }}
        >
          {toLines(place2?.events ?? [], 6).join("\n")}
        </div>

        {/* 3RD */}
        <div
          style={{
            left: 365,
            top: 37,
            position: "absolute",
            fontFamily: "Inter, sans-serif",
            fontSize: 15,
            fontWeight: 400,
            color: "#B68465",
          }}
        >
          3RD
        </div>
        <div
          style={{
            width: 140,
            left: 339,
            top: 58,
            position: "absolute",
            fontFamily: "Inter, sans-serif",
            fontSize: 11,
            fontWeight: 700,
            color: awardTextColor,
            whiteSpace: "pre-line",
            lineHeight: 1.3,
          }}
        >
          {toLines(place3?.events ?? [], 6).join("\n")}
        </div>
      </div>

      {/* Personal stats */}
      <div style={{ width: 499, height: 196, left: 11, top: 469, position: "absolute" }}>
        {/* 半透明毛玻璃背景 */}
        <div
          style={{
            width: 492,
            height: 182,
            left: 3,
            top: 14,
            position: "absolute",
            background: "rgba(30, 28, 24, 0.85)",
            backdropFilter: "blur(8px)",
            borderRadius: 2,
            borderTop: "2px solid rgb(240, 209, 162)",
          }}
        />

        <div style={{ width: 198, height: 24, left: 17, top: -4, position: "absolute" }}>
          <div
            style={{
              width: 195,
              height: 22,
              left: 2,
              top: 2,
              position: "absolute",
              background: "#19160E",
              borderRadius: 6,
              border: "1px rgb(228, 203, 162) solid",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 15,
                fontWeight: 400,
                color: "rgb(228, 203, 162)",
                whiteSpace: "nowrap",
              }}
            >
              PERSONAL STATS
            </span>
          </div>
        </div>

        <div
          style={{
            width: 48,
            height: 13,
            left: 245,
            top: 19,
            position: "absolute",
            fontFamily: "Inter, sans-serif",
            fontSize: 10,
            fontWeight: 700,
            color: "#A8A399",
          }}
        >
          AVERAGE
        </div>

        {/* AVERAGE 下方的竖线 - zIndex确保在柱状图上层 */}
        <div
          style={{
            width: 2,
            height: 150,
            left: 268,
            top: 34,
            position: "absolute",
            background: "rgb(84, 87, 80)",
            zIndex: 10,
          }}
        />

        {statRows.map((row) => {
          const stat = statsByName.get(row.key) ?? statsByName.get(row.key.replace(" ", ""));
          const rawValue = stat?.value ?? 0;
          // SURVIVING、MULTI-KILLS、KAST、ROUND SWING 需要加百分号，ROUND SWING 还需要加+号
          const needsPercent = ["SURVIVING", "MULTI-KILLS", "KAST", "ROUND SWING"].includes(row.key);
          const valueText = row.key === "ROUND SWING" 
            ? `+${rawValue}%` 
            : needsPercent 
              ? `${rawValue}%` 
              : String(rawValue);
          // 以average值为基准计算百分比，average对应竖线位置（约145px宽度）
          // 柱状图最大宽度220px，average位置在145px处
          const averageBarWidth = 145;
          const percentage = row.average > 0 ? rawValue / row.average : 0;
          const barWidth = Math.max(0, Math.min(220, Math.round(averageBarWidth * percentage)));

          const isRating = row.key === "RATING";
          // 渐变色：灰色从左侧深灰(70,81,85)到右侧浅灰(220,218,211)，金色从#f2d7af到#f3d090
          const fillGradient = isRating
            ? "linear-gradient(90deg, #f2d7af 0%, #f3d090 100%)"
            : "linear-gradient(90deg, rgb(70, 81, 85) 0%, rgb(220, 218, 211) 100%)";

          return (
            <div key={row.key}>
              <div
                style={{
                  left: 12,
                  top: row.y,
                  position: "absolute",
                  fontFamily: "Inter, sans-serif",
                  fontSize: row.key === "ADR" ? 12 : 11,
                  fontWeight: row.key === "KPR" || row.key === "RATING" ? 400 : 700,
                  color: "#fffcf5",
                  letterSpacing: "0.02em",
                  whiteSpace: "nowrap",
                }}
              >
                {row.key}
              </div>

              <div
                style={{
                  left: 123,
                  top: row.y,
                  position: "absolute",
                  width: `${barWidth}px`,
                  height: 16,
                  background: fillGradient,
                  borderRadius: 3,
                }}
              />

              <div
                style={{
                  left: 123 + barWidth + 10,
                  top: row.y,
                  position: "absolute",
                  fontFamily: "Inter, sans-serif",
                  fontSize: 12,
                  fontWeight: 400,
                  color: "#fffcf5",
                  whiteSpace: "nowrap",
                }}
              >
                {valueText}
              </div>
            </div>
          );
        })}
      </div>

      {/* Notable stats */}
      <div style={{ width: 497, height: 186, left: 12, top: 705, position: "absolute" }}>
        {/* 半透明毛玻璃背景 */}
        <div
          style={{
            width: 493,
            height: 162,
            left: 2,
            top: 20,
            position: "absolute",
            background: "rgba(30, 28, 24, 0.85)",
            backdropFilter: "blur(8px)",
            borderRadius: 2,
            borderTop: "2px solid rgb(240, 209, 162)",
          }}
        />

        <div style={{ width: 201, height: 24, left: 14, top: 6, position: "absolute" }}>
          <div
            style={{
              width: 196,
              height: 22,
              left: 3,
              top: 2,
              position: "absolute",
              background: "#1B170F",
              border: "1px rgb(228, 203, 162) solid",
              borderRadius: 6,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 13,
                fontWeight: 400,
                color: "rgb(228, 203, 162)",
                whiteSpace: "nowrap",
              }}
            >
              NOTABLE STATS
            </span>
          </div>
        </div>

        {/* left column */}
        <div style={{ left: 30, top: 36, position: "absolute" }}>
          {toLines(notableLeft.map((x) => `${x.description} (${x.ranking})`), 7).map((text, index) => (
            <div key={text} style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
              <img src={`${figmaAssetsBase}/10.svg`}
                alt="dot"
                style={{ width: 4, height: 4 }}
              />
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: awardTextColor }}>{text}</span>
            </div>
          ))}
        </div>

        {/* right column */}
        <div style={{ left: 21 + 239, top: 35, position: "absolute" }}>
          {toLines(notableRight.map((x) => `${x.description} (${x.ranking})`), 7).map((text) => (
            <div key={text} style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
              <img src={`${figmaAssetsBase}/10.svg`}
                alt="dot"
                style={{ width: 4, height: 4 }}
              />
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: awardTextColor }}>{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Rank */}
      <div
        style={{
          width: 170,
          height: 80,
          left: 567,
          top: 645,
          position: "absolute",
          fontFamily: "Inter, sans-serif",
          fontSize: 93,
          fontWeight: 600,
          color: "#EACA95",
          whiteSpace: "nowrap",
        }}
      >
        #{data.basicInfo.rank}
      </div>

      <div
        style={{
          width: 103,
          height: 20,
          left: 577,
          top: 778,
          position: "absolute",
          fontFamily: "Inter, sans-serif",
          fontSize: 17,
          fontWeight: 400,
          color: "#D0D0D0",
        }}
      >
        HLTV 1XBET
      </div>

      <div
        style={{
          width: 63,
          left: 706,
          top: 780,
          position: "absolute",
          fontFamily: "Inter, sans-serif",
          fontSize: 12,
          fontWeight: 400,
          color: "#A0A0A0",
        }}
      >
        Skin.Club
      </div>

      <div
        style={{
          width: 146,
          height: 16,
          left: 589,
          top: 803,
          position: "absolute",
          fontFamily: "Inter, sans-serif",
          fontSize: 10,
          fontWeight: 400,
          color: "#A0A0A0",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        }}
      >
        HLTV TOP 20 / {data.basicInfo.year}
      </div>
    </div>
  );
});

PlayerCard.displayName = "PlayerCard";
