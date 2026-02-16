import { calculateAccessibilityScore } from "./accessibility-score";

export function enforceAccessibilityThreshold(score: number, threshold = 90) {
  if (score < threshold) {
    throw new Error(
      `Accessibility score ${score} is below required threshold ${threshold}`
    );
  }

  return true;
}

