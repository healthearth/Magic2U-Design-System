// Entry point for the Feedback Form demo.

import { createRuntime } from "../../core/runtime";
import { logger } from "../../core/logging/logger";
import { runFeedbackWorkflow } from "./workflow";

async function main() {
  const runtime = await createRuntime();

  logger.info("Starting Feedback Form demo...");

  const result = await runFeedbackWorkflow(runtime);

  logger.info("Feedback Form result", { result });
}

main().catch((err) => {
  logger.error("Feedback Form failed", { error: err.message });
});

