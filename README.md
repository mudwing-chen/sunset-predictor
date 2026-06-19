# 朝霞晚霞预测工具 🌅

风光摄影师专用，预测任意地点未来 2 天的朝霞/晚霞质量。

## 功能

- 📍 自动定位 + 搜索城市 + 地图选点
- 🌅 今日/明日朝霞评分
- 🌇 今日/明日晚霞评分
- ☁️ 6 因子加权分析（云量、太阳方向、AQI、能见度、降水、时间贴合）
- 🗺️ 地图交互选点
- 📱 PWA 可安装到手机桌面（类 App 体验）
- 💰 完全免费，无需注册

## 技术栈

- 纯静态 HTML + Tailwind CSS + Vanilla JS
- [SunCalc](https://github.com/mourner/suncalc) — 天文计算
- [Open-Meteo](https://open-meteo.com/) — 气象数据（免费，无需 API Key）
- [Leaflet](https://leafletjs.com/) + OpenStreetMap — 地图选点
- PWA (Service Worker) — 离线支持

## 本地使用

直接用浏览器打开 `index.html` 即可。

## 部署到 Vercel（推荐）

1. 安装 Vercel CLI: `npm i -g vercel`
2. 在项目目录运行: `vercel`
3. 按照提示完成部署

或直接 push 到 GitHub 后用 Vercel 导入。

## 数据说明

- **气象数据**: 来自 Open-Meteo，基于 ECMWF/GFS 模型
- **AQI**: 欧洲空气质量指数（European AQI）
- **朝晚霞算法**: 基于 US Patent 10459119 B2 + 崇明气象局指数 + Solyra 开源项目
- **预测范围**: 当天 + 次日
- **预测准确度提醒**: 天气预测本身有不确定性，建议结合实时天空判断

## 开源协议

MIT
