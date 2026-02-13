// Config validation schema.

import { z } from "zod";

export const configSchema = z.object({
  env: z.enum(["development", "production", "test"]),
  openaiApiKey: z.string().min(1, "OPENAI_API_KEY is required"),
});
