// OpenAI implementation of AIPlugin.

import type { AIPlugin } from "../types";

export const openaiPlugin: AIPlugin = {
  name: "openai",
  async summarize(text: string) {
    // Placeholder: call OpenAI API here.
    return `OpenAI summary of: ${text.slice(0, 50)}...`;
  },
  async chat(prompt: string) {
    // Placeholder: call OpenAI API here.
    return `OpenAI response to: ${prompt.slice(0, 50)}...`;
  },
};

