---
name: user-hardware
description: "User's computer hardware specs for AI model deployment decisions"
metadata: 
  node_type: memory
  type: user
  originSessionId: 98651e5d-94e7-44ac-a773-def05bed9e22
---

M1 MacBook, 8GB RAM, 256GB internal SSD + 1TB external SSD.
For local LLM: recommend 3B-4B models (Qwen3 4B, Llama 3.2 3B, Phi-4-mini). 7B+ won't fit in 8GB RAM.
Storage on external SSD is fine — 8GB RAM is the bottleneck.
Interested in ollama + open-webui, waiting for stable network.
