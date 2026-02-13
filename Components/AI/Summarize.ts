// summarize.ts
// A provider-agnostic summarization utility.

import { llm } from "./llmClient";

export async function summarize(text: string) {
  const prompt = `
    Summarize the following text in 5 bullet points:
    ---
    ${text}
  `;

  const response = await llm.generate(prompt);

  return response.trim();
}
