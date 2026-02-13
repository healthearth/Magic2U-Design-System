// Simple structured logger with levels.

type Level = "debug" | "info" | "warn" | "error";

function log(level: Level, message: string, meta: Record<string, any> = {}) {
  console.log(
    JSON.stringify({
      level,
      message,
      meta,
      timestamp: new Date().toISOString(),
    })
  );
}

export const logger = {
  debug: (msg: string, meta?: any) => log("debug", msg, meta),
  info: (msg: string, meta?: any) => log("info", msg, meta),
  warn: (msg: string, meta?: any) => log("warn", msg, meta),
  error: (msg: string, meta?: any) => log("error", msg, meta),
};
