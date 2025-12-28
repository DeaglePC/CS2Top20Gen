---
name: hltv-card-style-optimization
overview: 优化 HLTV Top 20 选手卡片样式，使其更接近官方原版效果，并放大卡片预览尺寸。
todos:
  - id: explore-codebase
    content: 使用 [subagent:code-explorer] 探索项目结构，定位卡片相关的样式文件和组件
    status: completed
  - id: fix-background-texture
    content: 为卡片添加纹理背景效果，增强视觉层次感
    status: completed
    dependencies:
      - explore-codebase
  - id: fix-progress-bar
    content: 修改进度条颜色为白色/灰色渐变
    status: completed
    dependencies:
      - explore-codebase
  - id: enhance-gold-gradient
    content: 优化金色渐变效果，增加光泽和层次
    status: completed
    dependencies:
      - explore-codebase
  - id: fix-label-border
    content: 修正标签边框颜色，匹配官方设计
    status: completed
    dependencies:
      - explore-codebase
  - id: fix-rank-number
    content: 调整排名数字的字体样式和大小
    status: completed
    dependencies:
      - explore-codebase
  - id: enlarge-preview
    content: 放大卡片预览尺寸并验证整体效果
    status: completed
    dependencies:
      - fix-background-texture
      - fix-progress-bar
      - enhance-gold-gradient
      - fix-label-border
      - fix-rank-number
---

## Product Overview

优化 HLTV Top 20 选手卡片样式，使其视觉效果更接近官方原版设计，同时放大卡片预览尺寸以提升展示效果。

## Core Features

- **背景纹理优化**：为卡片添加类似官方的纹理背景效果，增强视觉层次感
- **进度条颜色修正**：将进度条颜色从绿色改为白色/灰色，符合官方配色
- **金色渐变增强**：优化金色渐变效果，使其更加明显和高级
- **标签边框修正**：调整标签边框颜色，匹配官方设计规范
- **排名数字样式优化**：修正排名数字的字体、大小和样式
- **卡片预览放大**：增大卡片预览尺寸，提升可视性

## Tech Stack

- 前端框架：HTML + CSS + JavaScript
- 样式方案：CSS3（渐变、纹理、动画效果）

## Implementation Details

### 核心修改文件

```
project-root/
├── src/
│   ├── styles/
│   │   └── card.css          # 修改：卡片样式优化
│   ├── components/
│   │   └── PlayerCard.js     # 修改：卡片组件调整
│   └── index.html            # 修改：预览尺寸调整
```

### 关键样式修改

**背景纹理实现**：通过 CSS 背景叠加实现纹理效果

```css
.card-background {
  background: 
    url('texture.png') repeat,
    linear-gradient(to bottom, #1a1a2e, #0f0f1a);
}
```

**进度条样式修正**：白色/灰色配色方案

```css
.progress-bar {
  background: linear-gradient(to right, #ffffff, #cccccc);
}
```

**金色渐变增强**：多层渐变叠加

```css
.gold-effect {
  background: linear-gradient(135deg, #ffd700, #b8860b, #ffd700);
}
```

### Technical Implementation Plan

1. **背景纹理**

- 问题：当前背景过于平面
- 方案：添加 SVG 或 PNG 纹理叠加层
- 步骤：创建纹理图案 → CSS 背景叠加 → 调整透明度

2. **进度条颜色**

- 问题：绿色与官方不符
- 方案：改用白色/灰色渐变
- 步骤：修改 CSS 变量 → 更新渐变定义

3. **金色渐变**

- 问题：渐变效果不够明显
- 方案：增加渐变层次和光泽效果
- 步骤：多色渐变 → 添加高光层

4. **卡片尺寸**

- 问题：预览尺寸偏小
- 方案：按比例放大卡片容器
- 步骤：调整容器宽高 → 等比缩放内部元素

## Agent Extensions

### SubAgent

- **code-explorer**
- Purpose：探索项目中现有的卡片样式实现，定位需要修改的 CSS 文件和组件
- Expected outcome：获取完整的样式文件结构和当前实现细节，为精准修改提供依据