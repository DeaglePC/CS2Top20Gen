// 选手基础信息
export interface PlayerBasicInfo {
  playerId: string;
  realName: string;
  age: number;
  nationality: string;
  team: string;
  rank: number;
  year: number;
}

// 个人数据统计项
export interface PersonalStat {
  name: string;
  value: number;
  maxValue?: number;
}

// MVP/EVP 奖项
export interface Award {
  type: "MVP" | "EVP";
  event: string;
  isGold?: boolean; // 是否显示金色竖线
}

// 战队成就
export interface TeamAchievement {
  place: "1ST" | "2ND" | "3RD";
  events: string[];
}

// 详细数据统计项
export interface NotableStat {
  description: string;
  ranking: string;
}

// 完整选手数据
export interface PlayerData {
  basicInfo: PlayerBasicInfo;
  photoUrl: string;
  teamLogoUrl: string;
  mvpAwards: Award[];
  evpAwards: Award[];
  teamAchievements: TeamAchievement[];
  personalStats: PersonalStat[];
  notableStats: NotableStat[];
}

// 默认选手数据
export const defaultPlayerData: PlayerData = {
  basicInfo: {
    playerId: "DONK",
    realName: "Danil Kryshkovets",
    age: 18,
    nationality: "RU",
    team: "Team Spirit",
    rank: 1,
    year: 2025,
  },
  photoUrl: "/donk.jpg",
  teamLogoUrl: "/team-spirit.png",
  mvpAwards: [
    { type: "MVP", event: "BLAST Bounty 2025 S2" },
    { type: "MVP", event: "IEM Cologne 2025" },
    { type: "MVP", event: "PGL Astana 2025" },
    { type: "MVP", event: "BLAST Bounty 2025 S1" },
  ],
  evpAwards: [
    { type: "EVP", event: "SL Budapest Major" },
    { type: "EVP", event: "BLAST Open Fall" },
    { type: "EVP", event: "BLAST.tv Austin Major" },
    { type: "EVP", event: "BLAST Rivals Spring" },
    { type: "EVP", event: "BLAST Open Spring" },
    { type: "EVP", event: "ESL Pro League Season 21" },
    { type: "EVP", event: "IEM Katowice 2025" },
  ],
  teamAchievements: [
    {
      place: "1ST",
      events: ["BLAST Bounty S1", "PGL Astana", "IEM Cologne", "BLAST Bounty S2"],
    },
    {
      place: "2ND",
      events: ["IEM Katowice"],
    },
    {
      place: "3RD",
      events: ["StarLadder Budapest Major"],
    },
  ],
  personalStats: [
    { name: "KPR", value: 0.93 },
    { name: "SURVIVING", value: 43.3 },
    { name: "ADR", value: 97.1 },
    { name: "MULTI-KILLS", value: 25.5 },
    { name: "KAST", value: 77.6 },
    { name: "ROUND SWING", value: 3.4 },
    { name: "RATING", value: 1.42 },
  ],
  notableStats: [
    { description: "1.39 rating 3.0", ranking: "#1" },
    { description: "95.5 damage per round", ranking: "#1" },
    { description: "0.18 opening kills per round", ranking: "#1" },
    { description: "25.5% rounds with 2+ kills", ranking: "#1" },
    { description: "1.4 Elite+ rating", ranking: "#1" },
    { description: "1.36 rating vs top 5", ranking: "#1" },
    { description: "1.4 playoff rating", ranking: "#1" },
    { description: "1.41 big event rating", ranking: "#1" },
    { description: "1.34 rating on Amcient", ranking: "#1" },
    { description: "1.38 rating on Mirage", ranking: "#1" },
    { description: "1.42 rating on Overpass", ranking: "#1" },
    { description: "1.64 impact rating", ranking: "#1" },
    { description: "1.33 CT rating", ranking: "#1" },
    { description: "1.44 T rating", ranking: "#1" },
    { description: "1.38 rating vs top 10", ranking: "#1" },
    { description: "1.55 rating on Dust2", ranking: "#1" },
  ],
};

// 国家信息（代码、中文名、emoji）
export interface CountryInfo {
  code: string;
  name: string;
  emoji: string;
}

// 完整国家列表（按中文拼音排序）
export const countries: CountryInfo[] = [
  { code: "AE", name: "阿联酋", emoji: "🇦🇪" },
  { code: "AF", name: "阿富汗", emoji: "🇦🇫" },
  { code: "AL", name: "阿尔巴尼亚", emoji: "🇦🇱" },
  { code: "DZ", name: "阿尔及利亚", emoji: "🇩🇿" },
  { code: "AR", name: "阿根廷", emoji: "🇦🇷" },
  { code: "AM", name: "亚美尼亚", emoji: "🇦🇲" },
  { code: "AU", name: "澳大利亚", emoji: "🇦🇺" },
  { code: "AT", name: "奥地利", emoji: "🇦🇹" },
  { code: "AZ", name: "阿塞拜疆", emoji: "🇦🇿" },
  { code: "BH", name: "巴林", emoji: "🇧🇭" },
  { code: "BD", name: "孟加拉国", emoji: "🇧🇩" },
  { code: "BY", name: "白俄罗斯", emoji: "🇧🇾" },
  { code: "BE", name: "比利时", emoji: "🇧🇪" },
  { code: "BA", name: "波黑", emoji: "🇧🇦" },
  { code: "BR", name: "巴西", emoji: "🇧🇷" },
  { code: "BG", name: "保加利亚", emoji: "🇧🇬" },
  { code: "KH", name: "柬埔寨", emoji: "🇰🇭" },
  { code: "CA", name: "加拿大", emoji: "🇨🇦" },
  { code: "CL", name: "智利", emoji: "🇨🇱" },
  { code: "CN", name: "中国", emoji: "🇨🇳" },
  { code: "CO", name: "哥伦比亚", emoji: "🇨🇴" },
  { code: "HR", name: "克罗地亚", emoji: "🇭🇷" },
  { code: "CY", name: "塞浦路斯", emoji: "🇨🇾" },
  { code: "CZ", name: "捷克", emoji: "🇨🇿" },
  { code: "DK", name: "丹麦", emoji: "🇩🇰" },
  { code: "EC", name: "厄瓜多尔", emoji: "🇪🇨" },
  { code: "EG", name: "埃及", emoji: "🇪🇬" },
  { code: "EE", name: "爱沙尼亚", emoji: "🇪🇪" },
  { code: "FI", name: "芬兰", emoji: "🇫🇮" },
  { code: "FR", name: "法国", emoji: "🇫🇷" },
  { code: "GE", name: "格鲁吉亚", emoji: "🇬🇪" },
  { code: "DE", name: "德国", emoji: "🇩🇪" },
  { code: "GR", name: "希腊", emoji: "🇬🇷" },
  { code: "HK", name: "中国香港", emoji: "🇭🇰" },
  { code: "HU", name: "匈牙利", emoji: "🇭🇺" },
  { code: "IS", name: "冰岛", emoji: "🇮🇸" },
  { code: "IN", name: "印度", emoji: "🇮🇳" },
  { code: "ID", name: "印度尼西亚", emoji: "🇮🇩" },
  { code: "IR", name: "伊朗", emoji: "🇮🇷" },
  { code: "IQ", name: "伊拉克", emoji: "🇮🇶" },
  { code: "IE", name: "爱尔兰", emoji: "🇮🇪" },
  { code: "IL", name: "以色列", emoji: "🇮🇱" },
  { code: "IT", name: "意大利", emoji: "🇮🇹" },
  { code: "JP", name: "日本", emoji: "🇯🇵" },
  { code: "JO", name: "约旦", emoji: "🇯🇴" },
  { code: "KZ", name: "哈萨克斯坦", emoji: "🇰🇿" },
  { code: "KE", name: "肯尼亚", emoji: "🇰🇪" },
  { code: "KW", name: "科威特", emoji: "🇰🇼" },
  { code: "KG", name: "吉尔吉斯斯坦", emoji: "🇰🇬" },
  { code: "LV", name: "拉脱维亚", emoji: "🇱🇻" },
  { code: "LB", name: "黎巴嫩", emoji: "🇱🇧" },
  { code: "LT", name: "立陶宛", emoji: "🇱🇹" },
  { code: "LU", name: "卢森堡", emoji: "🇱🇺" },
  { code: "MO", name: "中国澳门", emoji: "🇲🇴" },
  { code: "MY", name: "马来西亚", emoji: "🇲🇾" },
  { code: "MT", name: "马耳他", emoji: "🇲🇹" },
  { code: "MX", name: "墨西哥", emoji: "🇲🇽" },
  { code: "MD", name: "摩尔多瓦", emoji: "🇲🇩" },
  { code: "MN", name: "蒙古", emoji: "🇲🇳" },
  { code: "ME", name: "黑山", emoji: "🇲🇪" },
  { code: "MA", name: "摩洛哥", emoji: "🇲🇦" },
  { code: "NP", name: "尼泊尔", emoji: "🇳🇵" },
  { code: "NL", name: "荷兰", emoji: "🇳🇱" },
  { code: "NZ", name: "新西兰", emoji: "🇳🇿" },
  { code: "NG", name: "尼日利亚", emoji: "🇳🇬" },
  { code: "MK", name: "北马其顿", emoji: "🇲🇰" },
  { code: "NO", name: "挪威", emoji: "🇳🇴" },
  { code: "OM", name: "阿曼", emoji: "🇴🇲" },
  { code: "PK", name: "巴基斯坦", emoji: "🇵🇰" },
  { code: "PS", name: "巴勒斯坦", emoji: "🇵🇸" },
  { code: "PA", name: "巴拿马", emoji: "🇵🇦" },
  { code: "PY", name: "巴拉圭", emoji: "🇵🇾" },
  { code: "PE", name: "秘鲁", emoji: "🇵🇪" },
  { code: "PH", name: "菲律宾", emoji: "🇵🇭" },
  { code: "PL", name: "波兰", emoji: "🇵🇱" },
  { code: "PT", name: "葡萄牙", emoji: "🇵🇹" },
  { code: "QA", name: "卡塔尔", emoji: "🇶🇦" },
  { code: "RO", name: "罗马尼亚", emoji: "🇷🇴" },
  { code: "RU", name: "俄罗斯", emoji: "🇷🇺" },
  { code: "SA", name: "沙特阿拉伯", emoji: "🇸🇦" },
  { code: "RS", name: "塞尔维亚", emoji: "🇷🇸" },
  { code: "SG", name: "新加坡", emoji: "🇸🇬" },
  { code: "SK", name: "斯洛伐克", emoji: "🇸🇰" },
  { code: "SI", name: "斯洛文尼亚", emoji: "🇸🇮" },
  { code: "ZA", name: "南非", emoji: "🇿🇦" },
  { code: "KR", name: "韩国", emoji: "🇰🇷" },
  { code: "ES", name: "西班牙", emoji: "🇪🇸" },
  { code: "LK", name: "斯里兰卡", emoji: "🇱🇰" },
  { code: "SE", name: "瑞典", emoji: "🇸🇪" },
  { code: "CH", name: "瑞士", emoji: "🇨🇭" },
  { code: "TW", name: "中国台湾", emoji: "🇹🇼" },
  { code: "TJ", name: "塔吉克斯坦", emoji: "🇹🇯" },
  { code: "TH", name: "泰国", emoji: "🇹🇭" },
  { code: "TN", name: "突尼斯", emoji: "🇹🇳" },
  { code: "TR", name: "土耳其", emoji: "🇹🇷" },
  { code: "TM", name: "土库曼斯坦", emoji: "🇹🇲" },
  { code: "UA", name: "乌克兰", emoji: "🇺🇦" },
  { code: "GB", name: "英国", emoji: "🇬🇧" },
  { code: "US", name: "美国", emoji: "🇺🇸" },
  { code: "UY", name: "乌拉圭", emoji: "🇺🇾" },
  { code: "UZ", name: "乌兹别克斯坦", emoji: "🇺🇿" },
  { code: "VE", name: "委内瑞拉", emoji: "🇻🇪" },
  { code: "VN", name: "越南", emoji: "🇻🇳" },
];

// 国家代码到国旗 emoji 的映射（兼容旧代码）
export const countryFlags: Record<string, string> = Object.fromEntries(
  countries.map((c) => [c.code, c.emoji])
);

// 国家代码到中文名的映射
export const countryNames: Record<string, string> = Object.fromEntries(
  countries.map((c) => [c.code, c.name])
);
