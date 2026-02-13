// Local LLM plugin for Magic2U.
// Useful for offline or self-hosted inference.

import type { AIPlugin } from "../types";

export const LLMPlugin: AIPlugin = {
  name: "llm",

  async summarize(text: string) {
    return `Local LLM summary: ${text.slice(0, 40)}...`;
  },

  async chat(prompt: string) {
    return `Local LLM response to: ${prompt.slice(0, 40)}...`;
  },
};

