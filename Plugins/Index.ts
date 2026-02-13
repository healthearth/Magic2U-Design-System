// Plugin registry and loader.

import type { AIPlugin } from "./types";
import { openaiPlugin } from "./openai";
import { anthropicPlugin } from "./anthropic";

const registry: Record<string, AIPlugin> = {
  openai: openaiPlugin,
  anthropic: anthropicPlugin,
};

export function getPlugin(name: string): AIPlugin {
  const plugin = registry[name];
  if (!plugin) {
    throw new Error(`Plugin not found: ${name}`);
  }
  return plugin;
}

