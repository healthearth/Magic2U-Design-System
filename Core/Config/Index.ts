// Unified config loader with environment awareness.

import { z } from "zod";
import { configSchema } from "./schema";

export type AppConfig = z.infer<typeof configSchema>;

export async function loadConfig(): Promise<AppConfig> {
  const raw = {
    env: process.env.NODE_ENV || "development",
    openaiApiKey: process.env.OPENAI_API_KEY,
  };

  const parsed = configSchema.parse(raw);
  return parsed;
}
