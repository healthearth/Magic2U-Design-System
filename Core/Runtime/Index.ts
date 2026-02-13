// Central runtime bootstrap for any app.

import { loadConfig } from "../config";
import { logger } from "../logging/logger";

export async function createRuntime() {
  const config = await loadConfig();

  logger.info("Runtime initialized", { env: config.env });

  return {
    config,
    logger,
  };
}
