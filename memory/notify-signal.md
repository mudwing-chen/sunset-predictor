---
name: ""
description: 每次完成任务后需要通过信号文件触发Mac弹窗和语音播报
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 2db22444-fdce-4ce6-90e3-05fe9b3d375f
---

每次完成用户交代的任务（特别是长时间任务）后，向 `~/.openclaw/workspace/.notify_signal` 写入完成消息，触发用户 Mac 上的 notifier.sh 脚本弹出通知和中文语音播报。

**How to apply:** 任何对话、任何长任务完成时，最后一步写入信号文件通知用户。
