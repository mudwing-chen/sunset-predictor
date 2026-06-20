# 陈鸿宇 · 摄影个人网站 + 朝霞晚霞预测工具 — 项目交接文档

> 摄影个人网站 + 朝霞晚霞预测工具，包含作品集展示和预测工具。
> 请下一个 AI 阅读此文档以了解项目全貌。

---

## 📋 项目状态

**已部署到 Cloudflare Pages（国内可直接访问）：**
- **线上地址**: https://sunset-predictor-9n9.pages.dev
- **Vercel 已弃用**（国内被墙），改用 Cloudflare Pages
- **GitHub**: https://github.com/mudwing-chen/sunset-predictor
- **GitHub 仓库目录**: `/Users/chenhongyu/文章/code/`
- **桌面副本**: `/Users/chenhongyu/Desktop/sunset-predictor/`

**⚠️ 注意：修改代码后需要 `git add . && git commit -m "xxx" && git push`，Cloudflare Pages 会自动部署（等 1-2 分钟）。**

---

## 🔧 网站结构

```
/                  → 首页（个人摄影主页）
├ /gallery/        → 作品集
├ /tool/           → 朝霞晚霞预测工具 ← 原有工具，不动
├ /about/          → 关于 / 联系方式
└ /assets/         → 图标等静态资源
```

**工具目录 `tool/index.html` 不要动。**

## ✅ 已完成功能

1. **摄影作品集首页** — 深色系，精选作品展示
2. **作品页面** — 网格布局，hover 显示信息
3. **关于页面** — 个人简介 + 联系方式
4. **预测工具** — 朝霞晚霞质量预测（原有功能全部保留）
5. **部署** — Cloudflare Pages，国内访问

## 🔄 最近一次修改

从 Vercel 迁移到 Cloudflare Pages，搭建摄影个人网站 + 工具整合。

---

## ⏳ 待办 / 可改进项

| 优先级 | 项目 | 说明 |
|--------|------|------|
| 🟡 | 评分使用说明弹窗 | 点击"评分说明"展示各因子权重 |
| 🟢 | 更高饱和度配色方案 | 用户之前提到过于朴素 |

---

## 🌐 数据源

| 数据 | API | 备注 |
|------|-----|------|
| 天气 | Open-Meteo Weather API | 免费，无需 Key |
| 空气质量 | Open-Meteo Air Quality API | 免费，无需 Key |
| 天文 | SunCalc.js | CDN 引入 |
| 地图 | Leaflet + OpenStreetMap | CDN 引入 |

---

## 💡 给下一个 AI 的提示

1. 用户是**中国风光摄影师**，用中文交流
2. 用户不太懂技术，需要你直接修改并告诉她"已改好，去线上看"
3. **改代码后必须 git add/commit/push**，Cloudflare Pages 会自动部署
4. 线上地址的更新需要等 1-2 分钟
5. 项目已近乎完成，主要做 UI 微调即可
