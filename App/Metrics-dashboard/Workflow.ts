// Orchestrates the demo workflow using Magic2U workflows + AI + data.

import { Pipeline } from "../../components/workflows/pipeline";
import { getSampleMetrics } from "./data";
import { summarize } from "../../components/ai/summarize";

export async function runMetricsWorkflow(runtime: any) {
  const pipeline = new Pipeline([
    async (ctx) => {
      const metrics = await getSampleMetrics();
      return { ...ctx, metrics };
    },
    async (ctx) => {
      const summary = await summarize(JSON.stringify(ctx.metrics));
      return { ...ctx, summary };
    },
  ]);

  const result = await pipeline.run({});
  return result;
}

