// Entry point for the Metrics Dashboard demo.

import { createRuntime } from "../../core/runtime";
import { logger } from "../../core/logging/logger";
import { runMetricsWorkflow } from "./workflow";

async function main() {
  const runtime = await createRuntime();

  logger.info("Starting Metrics Dashboard demo...");

  const result = await runMetricsWorkflow(runtime);

  logger.info("Metrics Dashboard result", { result });
}

main().catch((err) => {
  logger.error("Metrics Dashboard failed", { error: err.message });
});
