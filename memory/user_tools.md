---
name: user-tools
description: 用户已安装的工具链记录——BibiGPT/bibigpt-skill 抖音视频分析能力
metadata: 
  node_type: memory
  type: reference
  originSessionId: 46b858ea-50f4-407f-8134-5a6d2cbbb2b8
---

安装了 [bibigpt-skill](https://github.com/JimmyLv/bibigpt-skill)（JimmyLv），配合 BibiGPT 桌面端，让 Claude Code 具备观看/总结抖音等中文平台视频的能力。

**安装方式**：
- BibiGPT 桌面端：`brew install --cask jimmylv/bibigpt/bibigpt`
- Skill：`npx skills add JimmyLv/bibigpt-skill`
- 登录方式：`bibi auth login`（OAuth 浏览器授权）

**验证状态**：✅ 已连接，API token 有效

**核心命令**：
- `bibi summarize <url>` — 总结视频
- `bibi summarize <url> --chapter` — 分段总结
- `bibi summarize <url> --subtitle` — 获取逐字稿
- `bibi summarize <url> --json` — JSON 格式输出

**免费额度**：注册赠送 120 分钟/2次，单次 ≤30 分钟。超出需付费 Plus ($19.8/月) 或 Pro ($34.8/月)

**Skill 安装位置**：`~/.agents/skills/bibi/`，symlink 到 Claude Code
