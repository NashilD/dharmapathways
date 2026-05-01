/**
 * Scoring and categorization logic for tools
 * Pure functions that accept typed input and return deterministic results
 */

import type {
  PressureInput,
  PressureBreakdown,
  RouteData,
} from './types';

/**
 * Calculate pressure scores for Reality Check tool
 * Returns breakdown by category (household, financial, study, support)
 */
export function calculatePressureScores(
  input: PressureInput
): { breakdown: PressureBreakdown; total: number } {
  const breakdown = {
    household: 0,
    financial: 0,
    study: 0,
    support: 0,
  };

  // Household pressure
  if (input.income < 10000) breakdown.household += 80;
  else if (input.income < 20000) breakdown.household += 60;
  else if (input.income < 35000) breakdown.household += 40;
  else breakdown.household += 20;

  if (input.dependents >= 4) breakdown.household += 20;
  else if (input.dependents >= 2) breakdown.household += 10;

  breakdown.household = Math.min(breakdown.household, 100);

  // Financial pressure
  const ratio = input.income > 0 ? input.expenses / input.income : 1;

  if (ratio > 0.8) breakdown.financial += 80;
  else if (ratio > 0.6) breakdown.financial += 60;
  else breakdown.financial += 30;

  if (input.debt) breakdown.financial += 20;

  breakdown.financial = Math.min(breakdown.financial, 100);

  // Study cost pressure
  if (input.studyCost > 80000) breakdown.study += 80;
  else if (input.studyCost > 40000) breakdown.study += 60;
  else breakdown.study += 30;

  // Support level
  if (input.support === 'none') breakdown.support = 100;
  else if (input.support === 'partial') breakdown.support = 60;
  else breakdown.support = 20;

  const total =
    breakdown.household * 0.25 +
    breakdown.financial * 0.3 +
    breakdown.study * 0.25 +
    breakdown.support * 0.2;

  return { breakdown, total };
}

/**
 * Categorize pressure score into meaningful categories
 */
export function getPressureCategory(score: number): string {
  if (score < 30) return 'More Stable';
  if (score < 50) return 'Vulnerable';
  if (score < 70) return 'Pressured';
  if (score < 85) return 'Highly Pressured';
  return 'Severely Pressured';
}

/**
 * Detect if user falls into "missing middle" category
 * Missing middle: moderate income with high expenses and limited support
 */
export function detectMissingMiddle(input: PressureInput): boolean {
  const ratio = input.income > 0 ? input.expenses / input.income : 1;
  return (
    input.income >= 15000 &&
    input.income <= 40000 &&
    input.support !== 'full' &&
    ratio > 0.6
  );
}

/**
 * Identify key drivers of pressure from breakdown scores
 */
export function getPressureDrivers(
  breakdown: PressureBreakdown,
  input: PressureInput
): string[] {
  const drivers: string[] = [];

  if (breakdown.financial > 70)
    drivers.push('High monthly expenses relative to income');
  if (breakdown.study > 60) drivers.push('High study cost burden');
  if (breakdown.support > 70) drivers.push('Limited or no confirmed support');
  if (input.debt) drivers.push('Existing debt commitments increasing pressure');
  if (input.dependents >= 3)
    drivers.push('Multiple dependents increasing household pressure');

  return drivers;
}

/**
 * Calculate risk score for a route comparison option
 * Considers cost, duration, support, and certainty
 */
export function calculateRouteRisk(option: RouteData): number {
  let risk = 50; // baseline

  // Cost factor (0-30 points)
  if (option.cost > 100000) risk += 30;
  else if (option.cost > 60000) risk += 20;
  else if (option.cost > 30000) risk += 10;

  // Duration factor (0-20 points)
  if (option.duration > 4) risk += 20;
  else if (option.duration > 3) risk += 10;

  // Support factor (0-20 points)
  if (option.support === 'none') risk += 20;
  else if (option.support === 'partial') risk += 10;

  // Certainty factor (0-30 points, inverted)
  risk += (100 - option.certainty) * 0.3;

  return Math.min(100, Math.round(risk));
}

/**
 * Get risk label for UI display
 */
export function getRiskLabel(risk: number): string {
  if (risk < 30) return 'Low Risk';
  if (risk < 50) return 'Moderate Risk';
  if (risk < 70) return 'High Risk';
  return 'Very High Risk';
}

/**
 * Get risk color class for UI display
 */
export function getRiskColor(risk: number): string {
  if (risk < 30) return 'text-green-600';
  if (risk < 50) return 'text-yellow-600';
  if (risk < 70) return 'text-orange-600';
  return 'text-red-600';
}
