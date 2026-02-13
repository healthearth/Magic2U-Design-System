// pipeline.ts
// A reusable workflow pipeline engine.

export class Pipeline {
  constructor(steps = []) {
    this.steps = steps;
  }

  async run(context = {}) {
    for (const step of this.steps) {
      try {
        context = await step(context);
      } catch (err) {
        console.error("Pipeline error:", err);
        throw err;
      }
    }
    return context;
  }
}

// Example usage:
// const pipeline = new Pipeline([step1, step2, step3]);
// pipeline.run({ input: "hello" });
