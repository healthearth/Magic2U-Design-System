export interface AccessibilityResult {
  violations: number;
  passes: number;
  incomplete: number;
}

export function calculateAccessibilityScore(result: AccessibilityResult): number {
  const totalChecks = result.violations + result.passes + result.incomplete;

  if (totalChecks === 0) return 100;

  const penalty = result.violations * 5;
  const rawScore = 100 - penalty;

  return Math.max(0, rawScore);
}

