/**
 * Business logic for cost and financial calculations
 */

import { MONTHS_IN_YEAR, AFFORDABILITY_STATUSES } from '@/shared/constants';

export interface CostBreakdown {
  annual: number;
  monthly: number;
  gap: number;
  affordabilityStatus: string;
}

/**
 * Calculate total annual cost from individual expense items
 */
export function calculateAnnualCost(
  tuition: number,
  accommodation: number,
  transport: number,
  food: number,
  devices: number,
  dataCost: number,
  personal: number,
  other: number
): number {
  return tuition + accommodation + transport + food + devices + dataCost + personal + other;
}

/**
 * Calculate monthly cost from annual cost
 */
export function calculateMonthlyCost(annualCost: number): number {
  return Math.round(annualCost / MONTHS_IN_YEAR);
}

/**
 * Calculate monthly gap (deficit) between costs and available support
 */
export function calculateMonthlyGap(monthlyCost: number, householdContribution: number, externalSupport: number): number {
  const totalAvailable = householdContribution + externalSupport;
  const gap = monthlyCost - totalAvailable;
  return Math.max(gap, 0); // Don't show negative gap
}

/**
 * Determine affordability status based on monthly gap and household income
 */
export function determineAffordabilityStatus(
  monthlyGap: number,
  householdIncome: number,
  dependents: number
): string {
  if (monthlyGap === 0) {
    return AFFORDABILITY_STATUSES.AFFORDABLE;
  }

  // Consider household income and dependents for context
  const incomePerDependent = householdIncome / Math.max(dependents, 1);

  // Gap is less than 10% of monthly income per dependent
  if (monthlyGap < incomePerDependent * 0.1) {
    return AFFORDABILITY_STATUSES.AFFORDABLE;
  }

  // Gap is 10-25% of monthly income
  if (monthlyGap < incomePerDependent * 0.25) {
    return AFFORDABILITY_STATUSES.TIGHT;
  }

  // Gap is 25-50% of monthly income
  if (monthlyGap < incomePerDependent * 0.5) {
    return AFFORDABILITY_STATUSES.HIGH_RISK;
  }

  // Gap is more than 50% of monthly income
  return AFFORDABILITY_STATUSES.NOT_SUSTAINABLE;
}

/**
 * Calculate affordability pressure score (0-100)
 */
export function calculatePressureScore(
  householdIncome: number,
  monthlyExpenses: number,
  dependents: number,
  hasDebt: boolean,
  educationCost: number
): { score: number; level: string } {
  let score = 0;

  // Income vs. expenses ratio
  const surplus = householdIncome - monthlyExpenses;
  if (surplus < 0) score += 40; // Spending more than earning
  else if (surplus < householdIncome * 0.1) score += 30; // Less than 10% surplus
  else if (surplus < householdIncome * 0.2) score += 20; // 10-20% surplus
  else score += 10; // Good surplus

  // Education cost impact
  const monthlyEducationCost = educationCost / MONTHS_IN_YEAR;
  const costRatio = monthlyEducationCost / householdIncome;

  if (costRatio > 0.5) score += 30; // Education cost > 50% of income
  else if (costRatio > 0.3) score += 25; // 30-50% of income
  else if (costRatio > 0.15) score += 15; // 15-30% of income
  else score += 5; // < 15% of income

  // Dependents (more dependents = more pressure)
  score += dependents * 5;

  // Debt burden
  if (hasDebt) score += 15;

  return {
    score: Math.min(score, 100),
    level: getPressureLevel(Math.min(score, 100)),
  };
}

/**
 * Get pressure level label based on score
 */
function getPressureLevel(score: number): string {
  if (score < 25) return 'Low Pressure';
  if (score < 50) return 'Moderate Pressure';
  if (score < 75) return 'High Pressure';
  return 'Very High Pressure';
}

/**
 * Calculate total cost with breakdown
 */
export function calculateTotalCostWithBreakdown(
  tuition: number,
  accommodation: number,
  transport: number,
  food: number,
  devices: number,
  dataCost: number,
  personal: number,
  other: number,
  householdIncome: number,
  dependents: number,
  externalSupport: number
): CostBreakdown {
  const annual = calculateAnnualCost(tuition, accommodation, transport, food, devices, dataCost, personal, other);
  const monthly = calculateMonthlyCost(annual);
  const gap = calculateMonthlyGap(monthly, householdIncome, externalSupport);
  const status = determineAffordabilityStatus(gap, householdIncome, dependents);

  return {
    annual,
    monthly,
    gap,
    affordabilityStatus: status,
  };
}
