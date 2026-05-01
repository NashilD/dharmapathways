/**
 * Input validation and sanitization
 * Ensures data integrity for calculations
 */

import type { PressureInput, CostInput, RouteData } from './types';

/**
 * Validate pressure check input
 * Returns true if valid, throws error with message if invalid
 */
export function validatePressureInput(input: PressureInput): boolean {
  if (input.income < 0) throw new Error('Income cannot be negative');
  if (input.dependents < 0) throw new Error('Dependents cannot be negative');
  if (input.expenses < 0) throw new Error('Expenses cannot be negative');
  if (input.studyCost < 0) throw new Error('Study cost cannot be negative');

  const validSupport = ['none', 'partial', 'full'];
  if (!validSupport.includes(input.support)) {
    throw new Error('Invalid support level');
  }

  return true;
}

/**
 * Validate cost calculator input
 */
export function validateCostInput(input: CostInput): boolean {
  const costFields = [
    'tuition',
    'accommodation',
    'transport',
    'food',
    'devices',
    'dataCost',
    'personal',
    'other',
    'income',
    'support',
  ];

  for (const field of costFields) {
    const value = input[field as keyof CostInput];
    if (typeof value !== 'number' || value < 0) {
      throw new Error(`${field} must be a non-negative number`);
    }
  }

  return true;
}

/**
 * Validate route data for comparison
 */
export function validateRouteData(route: RouteData): boolean {
  if (!route.name || route.name.trim() === '')
    throw new Error('Route name is required');
  if (route.years < 1 || route.years > 10)
    throw new Error('Years must be between 1 and 10');
  if (route.cost < 0) throw new Error('Cost cannot be negative');
  if (route.duration < 1 || route.duration > 10)
    throw new Error('Duration must be between 1 and 10');
  if (route.certainty < 0 || route.certainty > 100)
    throw new Error('Certainty must be between 0 and 100');

  const validSupport = ['none', 'partial', 'full'];
  if (!validSupport.includes(route.support)) {
    throw new Error('Invalid support level');
  }

  return true;
}

/**
 * Sanitize numeric input to prevent invalid calculations
 */
export function sanitizeNumber(value: any, defaultValue = 0): number {
  const num = Number(value);
  return isNaN(num) ? defaultValue : Math.max(0, num);
}

/**
 * Ensure value is within bounds
 */
export function clampValue(
  value: number,
  min: number = 0,
  max: number = 100
): number {
  return Math.min(max, Math.max(min, value));
}
