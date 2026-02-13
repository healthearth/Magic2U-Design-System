// Simulates a user submitting feedback and AI summarizing it.

import { Pipeline } from "../../components/workflows/pipeline";
import { summarize } from "../../components/ai/summarize";

export async function runFeedbackWorkflow(runtime: any) {
  const pipeline = new Pipeline([
    async (ctx) => {
      // Simulated user input
      const feedback =
        "I love the idea of Magic2U, but I wish the docs had more examples.";
      return { ...ctx, feedback };
    },
    async (ctx) => {
      const summary = await summarize(ctx.feedback);
      return { ...ctx, summary };
    },
  ]);

  const result = await pipeline.run({});
  return result;
}

