/**
 * Cost and affordability calculations
 * Determines financial viability and generates advisory guidance
 */

import type { CostInput, CostResult } from './types';

/**
 * Calculate comprehensive cost breakdown
 * Aggregates annual costs, derives monthly figures, and assesses affordability
 */
export function calculateCostBreakdown(input: CostInput): CostResult {
  const totalAnnual =
    input.tuition +
    input.accommodation +
    input.transport +
    input.food +
    input.devices +
    input.dataCost +
    input.personal +
    input.other;

  const monthlyCost = Math.round(totalAnnual / 12);
  const availableMonthly = input.income + input.support;
  const gap = monthlyCost - availableMonthly;

  let affordability = 'Affordable';
  if (gap > 5000) affordability = 'Not Sustainable';
  else if (gap > 2000) affordability = 'High Risk';
  else if (gap > 0) affordability = 'Tight';

  const flags: string[] = [];
  if (input.devices < 5000 && input.devices > 0)
    flags.push('Device costs may be underestimated');
  if (input.dataCost < 200 && input.dataCost > 0)
    flags.push('Data costs may be underestimated');
  if (input.food < 1500 && input.food > 0)
    flags.push('Food costs may be underestimated');
  if (totalAnnual === 0) flags.push('No costs entered yet');

  return {
    totalAnnual,
    monthlyCost,
    availableMonthly,
    gap,
    affordability,
    flags,
  };
}

/**
 * Generate next steps based on affordability assessment
 * Provides actionable guidance for each affordability level
 */
export function getCostNextSteps(affordability: string): string[] {
  if (affordability === 'Not Sustainable')
    return [
      'Do not commit to this option without significant changes',
      'Explore lower-cost alternatives urgently',
      'Compare safer routes immediately',
    ];

  if (affordability === 'High Risk')
    return [
      'Proceed with extreme caution',
      'Secure additional support before committing',
      'Stress-test other options',
    ];

  if (affordability === 'Tight')
    return [
      'Plan carefully for unexpected costs',
      'Keep a financial buffer of at least 3 months',
      'Review all expenses quarterly',
    ];

  return [
    'Continue planning confidently',
    'Validate all assumptions',
    'Ensure long-term sustainability',
  ];
}

/**
 * Generate next steps for Reality Check based on pressure category
 * Provides guidance tailored to missing middle and pressure level
 */
export function getPressureNextSteps(category: string): string[] {
  if (category === 'Severely Pressured')
    return [
      'Avoid committing to high-cost options immediately',
      'Explore lower-cost or step-in pathways',
      'Seek guidance before making financial commitments',
    ];

  if (category === 'Highly Pressured')
    return [
      'Compare safer, lower-cost study routes',
      'Confirm support before committing',
      'Stress-test affordability using cost calculator',
    ];

  if (category === 'Pressured')
    return [
      'Carefully compare multiple options',
      'Plan for hidden costs',
      'Avoid overcommitting financially',
    ];

  return [
    'Continue planning carefully',
    'Validate affordability with full cost breakdown',
    'Ensure chosen path aligns with your goals',
  ];
}
