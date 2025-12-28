export type Locale = "zh" | "en";

export const locales: Record<Locale, Record<string, string>> = {
  zh: {
    // Header
    "app.title": "CS2 Top 20 Card Generator",
    "app.subtitle": "HLTV Style",
    "app.github": "GitHub",
    "app.star": "⭐ 给我一个Star",
    "app.reset": "重置",
    "app.export": "导出 PNG",
    "app.exporting": "导出中...",

    // Preview
    "preview.title": "卡片预览",
    "preview.size": "导出尺寸: 800 x 900 px",

    // Tabs
    "tab.basic": "基础",
    "tab.awards": "奖项",
    "tab.achievements": "成就",
    "tab.stats": "数据",
    "tab.notable": "详细",

    // Basic Info Form
    "form.basicInfo": "基础信息",
    "form.playerId": "选手ID",
    "form.playerIdPlaceholder": "如: NIKO",
    "form.realName": "真实姓名",
    "form.realNamePlaceholder": "如: Nikola Kovač",
    "form.age": "年龄",
    "form.agePlaceholder": "如: 28",
    "form.nationality": "国籍",
    "form.team": "战队",
    "form.teamPlaceholder": "如: Falcons",
    "form.rank": "排名",
    "form.rankPlaceholder": "1-20",
    "form.year": "年份",
    "form.yearPlaceholder": "如: 2025",

    // Image Uploader
    "upload.playerPhoto": "选手照片",
    "upload.teamLogo": "战队Logo",
    "upload.click": "点击上传",
    "upload.drag": "或拖拽图片到此处",
    "upload.change": "更换",
    "upload.remove": "移除",

    // Awards Form
    "form.awards": "奖项",
    "form.mvpAwards": "MVP Awards",
    "form.evpAwards": "EVP Awards",
    "form.add": "添加",
    "form.gold": "金色",
    "form.eventPlaceholder": "赛事名称，如: PGL Major",
    "form.noMvp": "暂无 MVP 奖项",
    "form.noEvp": "暂无 EVP 奖项",

    // Achievements Form
    "form.achievements": "战队成就",
    "form.place1st": "冠军 🥇",
    "form.place2nd": "亚军 🥈",
    "form.place3rd": "季军 🥉",
    "form.addEvent": "添加赛事",
    "form.eventNamePlaceholder": "赛事名称，如: PGL Major",
    "form.noAchievement1st": "暂无冠军成就",
    "form.noAchievement2nd": "暂无亚军成就",
    "form.noAchievement3rd": "暂无季军成就",

    // Stats Form
    "form.personalStats": "个人数据统计",
    "form.addStat": "添加数据",
    "form.statItem": "数据项",
    "form.statName": "名称",
    "form.statNamePlaceholder": "如: KPR",
    "form.statValue": "数值",
    "form.noStats": "暂无数据统计，点击上方按钮添加",

    // Notable Stats Form
    "form.notableStats": "详细数据统计",
    "form.description": "描述",
    "form.descPlaceholder": "数据描述，如: 1.13 rating 3.0",
    "form.ranking": "排名",
    "form.rankingPlaceholder": "排名，如: #15",
    "form.noNotableStats": "暂无详细数据，点击上方按钮添加",
    "form.notableTip": "提示：每条数据包含描述和排名，如：",
    "form.notableTipDesc": "• 描述: \"1.13 rating 3.0\"",
    "form.notableTipRank": "• 排名: \"#15\"",
  },
  en: {
    // Header
    "app.title": "CS2 Top 20 Card Generator",
    "app.subtitle": "HLTV Style",
    "app.github": "GitHub",
    "app.star": "⭐ Give me a Star",
    "app.reset": "Reset",
    "app.export": "Export PNG",
    "app.exporting": "Exporting...",

    // Preview
    "preview.title": "Card Preview",
    "preview.size": "Export Size: 800 x 900 px",

    // Tabs
    "tab.basic": "Basic",
    "tab.awards": "Awards",
    "tab.achievements": "Achievements",
    "tab.stats": "Stats",
    "tab.notable": "Notable",

    // Basic Info Form
    "form.basicInfo": "Basic Info",
    "form.playerId": "Player ID",
    "form.playerIdPlaceholder": "e.g. NIKO",
    "form.realName": "Real Name",
    "form.realNamePlaceholder": "e.g. Nikola Kovač",
    "form.age": "Age",
    "form.agePlaceholder": "e.g. 28",
    "form.nationality": "Nationality",
    "form.team": "Team",
    "form.teamPlaceholder": "e.g. Falcons",
    "form.rank": "Rank",
    "form.rankPlaceholder": "1-20",
    "form.year": "Year",
    "form.yearPlaceholder": "e.g. 2025",

    // Image Uploader
    "upload.playerPhoto": "Player Photo",
    "upload.teamLogo": "Team Logo",
    "upload.click": "Click to upload",
    "upload.drag": "or drag and drop",
    "upload.change": "Change",
    "upload.remove": "Remove",

    // Awards Form
    "form.awards": "Awards",
    "form.mvpAwards": "MVP Awards",
    "form.evpAwards": "EVP Awards",
    "form.add": "Add",
    "form.gold": "Gold",
    "form.eventPlaceholder": "Event name, e.g. PGL Major",
    "form.noMvp": "No MVP awards",
    "form.noEvp": "No EVP awards",

    // Achievements Form
    "form.achievements": "Team Achievements",
    "form.place1st": "1ST 🥇",
    "form.place2nd": "2ND 🥈",
    "form.place3rd": "3RD 🥉",
    "form.addEvent": "Add Event",
    "form.eventNamePlaceholder": "Event name, e.g. PGL Major",
    "form.noAchievement1st": "No 1ST place achievements",
    "form.noAchievement2nd": "No 2ND place achievements",
    "form.noAchievement3rd": "No 3RD place achievements",

    // Stats Form
    "form.personalStats": "Personal Stats",
    "form.addStat": "Add Stat",
    "form.statItem": "Stat Item",
    "form.statName": "Name",
    "form.statNamePlaceholder": "e.g. KPR",
    "form.statValue": "Value",
    "form.noStats": "No stats yet, click button above to add",

    // Notable Stats Form
    "form.notableStats": "Notable Stats",
    "form.description": "Description",
    "form.descPlaceholder": "e.g. 1.13 rating 3.0",
    "form.ranking": "Ranking",
    "form.rankingPlaceholder": "e.g. #15",
    "form.noNotableStats": "No notable stats yet, click button above to add",
    "form.notableTip": "Tip: Each stat includes description and ranking, e.g.:",
    "form.notableTipDesc": "• Description: \"1.13 rating 3.0\"",
    "form.notableTipRank": "• Ranking: \"#15\"",
  },
};
