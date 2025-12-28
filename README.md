# CS2 Top 20 卡片生成器

[English](#english) | 中文

一个用于生成 HLTV 风格 CS2 年度 Top 20 选手卡片的在线工具。

![Preview](./assets/preview.png)

## ✨ 功能特性

- 🎨 **HLTV 官方风格** - 高度还原 HLTV Top 20 选手卡片设计
- 📝 **完整信息编辑** - 支持选手基本信息、战队、数据统计、荣誉成就等
- 🖼️ **自定义图片** - 支持上传选手照片和战队 Logo
- 🌍 **国籍选择** - 内置全球国家/地区旗帜
- 📊 **数据统计** - 自定义添加各类游戏数据
- 🏆 **荣誉展示** - MVP/EVP 奖项和赛事成绩
- 💾 **本地存储** - 自动保存编辑进度
- 📥 **一键导出** - 导出高清 PNG 图片
- 🌐 **中英文切换** - 支持中文/英文界面

## 🚀 快速开始

### 环境要求

- Node.js >= 18
- npm 或 pnpm

### 安装运行

```bash
# 克隆项目
git clone https://github.com/DeaglePC/CS2Top20Gen.git

# 进入项目目录
cd CS2Top20Gen/cs2-top20-gen

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

访问 `http://localhost:5173` 即可使用。

### 构建部署

```bash
npm run build
```

构建产物位于 `dist` 目录。

### Docker 部署

```bash
# 使用 Docker Compose（推荐）
docker-compose up -d

# 或手动构建运行
docker build -t cs2-top20-gen .
docker run -d -p 8080:80 cs2-top20-gen
```

访问 `http://localhost:8080` 即可使用。

## 📖 使用说明

1. **基本信息** - 填写选手昵称、真名、年龄、国籍、排名等
2. **图片上传** - 上传选手照片和战队 Logo
3. **数据统计** - 添加 Rating、K/D、ADR 等数据
4. **荣誉成就** - 添加 MVP/EVP 奖项和赛事名次
5. **导出图片** - 点击右上角导出按钮保存为 PNG

## 🛠️ 技术栈

- **框架**: React 18 + TypeScript
- **构建工具**: Vite
- **样式**: Tailwind CSS
- **UI 组件**: Radix UI
- **图片导出**: html2canvas

## 📄 许可证

MIT License

## ⭐ 支持项目

如果这个项目对你有帮助，请给一个 Star ⭐

---

<a name="english"></a>

# CS2 Top 20 Card Generator

English | [中文](#cs2-top-20-卡片生成器)

An online tool for generating HLTV-style CS2 annual Top 20 player cards.

![Preview](./assets/preview.png)

## ✨ Features

- 🎨 **HLTV Official Style** - Highly accurate HLTV Top 20 player card design
- 📝 **Complete Info Editing** - Support player info, team, stats, achievements, etc.
- 🖼️ **Custom Images** - Upload player photos and team logos
- 🌍 **Nationality Selection** - Built-in flags for all countries/regions
- 📊 **Statistics** - Customize various game statistics
- 🏆 **Honors Display** - MVP/EVP awards and tournament placements
- 💾 **Local Storage** - Auto-save editing progress
- 📥 **One-Click Export** - Export high-resolution PNG images
- 🌐 **Language Switch** - Support Chinese/English interface

## 🚀 Quick Start

### Requirements

- Node.js >= 18
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/DeaglePC/CS2Top20Gen.git

# Enter project directory
cd CS2Top20Gen/cs2-top20-gen

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to use the application.

### Build for Production

```bash
npm run build
```

Build output is in the `dist` directory.

### Docker Deployment

```bash
# Using Docker Compose (recommended)
docker-compose up -d

# Or build and run manually
docker build -t cs2-top20-gen .
docker run -d -p 8080:80 cs2-top20-gen
```

Visit `http://localhost:8080` to use the application.

## 📖 Usage

1. **Basic Info** - Fill in player nickname, real name, age, nationality, ranking, etc.
2. **Image Upload** - Upload player photo and team logo
3. **Statistics** - Add Rating, K/D, ADR, and other stats
4. **Achievements** - Add MVP/EVP awards and tournament placements
5. **Export Image** - Click the export button in the top right to save as PNG

## 🛠️ Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Image Export**: html2canvas

## 📄 License

MIT License

## ⭐ Support

If this project helps you, please give it a Star ⭐
