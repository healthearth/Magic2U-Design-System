// Shared plugin interface.

export interface AIPlugin {
  name: string;
  summarize(text: string): Promise<string>;
  chat(prompt: string): Promise<string>;
}
