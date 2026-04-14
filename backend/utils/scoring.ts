/**
 * Business logic for scoring and comparison algorithms
 * Can be used by frontend components or backend API endpoints
 */

import type { RouteData, ComparisonResult } from '@/shared/types';

export interface BestRouteRecommendation {
  best: 'A' | 'B' | 'Equal';
  reasons: string[];
  scores: {
    scoreA: number;
    scoreB: number;
  };
}

/**
 * Determines which route is best based on weighted scoring algorithm
 * Factors: Cost (25%), Job Certainty (30%), Duration (20%), Support (15%), Risk (10%)
 */
export function determineBestRoute(result: ComparisonResult): BestRouteRecommendation {
  const scoreA: number[] = [];
  const scoreB: number[] = [];
  const reasons: string[] = [];

  // Cost factor (lower is better) - weight: 25%
  if (result.optionA.cost < result.optionB.cost) {
    scoreA.push(25);
    scoreB.push(0);
    reasons.push(`Option A is R${(result.optionB.cost - result.optionA.cost).toLocaleString()} cheaper`);
  } else if (result.optionB.cost < result.optionA.cost) {
    scoreB.push(25);
    scoreA.push(0);
    reasons.push(`Option B is R${(result.optionA.cost - result.optionB.cost).toLocaleString()} cheaper`);
  } else {
    scoreA.push(12.5);
    scoreB.push(12.5);
  }

  // Duration factor (shorter is better) - weight: 20%
  if (result.optionA.duration < result.optionB.duration) {
    scoreA.push(20);
    scoreB.push(0);
    reasons.push(`Option A is ${result.optionB.duration - result.optionA.duration} year(s) shorter`);
  } else if (result.optionB.duration < result.optionA.duration) {
    scoreB.push(20);
    scoreA.push(0);
    reasons.push(`Option B is ${result.optionA.duration - result.optionB.duration} year(s) shorter`);
  } else {
    scoreA.push(10);
    scoreB.push(10);
  }

  // Job Certainty factor (higher is better) - weight: 30%
  if (result.optionA.certainty > result.optionB.certainty) {
    scoreA.push(30);
    scoreB.push(0);
    reasons.push(`Option A has ${result.optionA.certainty - result.optionB.certainty}% higher job certainty`);
  } else if (result.optionB.certainty > result.optionA.certainty) {
    scoreB.push(30);
    scoreA.push(0);
    reasons.push(`Option B has ${result.optionB.certainty - result.optionA.certainty}% higher job certainty`);
  } else {
    scoreA.push(15);
    scoreB.push(15);
  }

  // Support factor (more is better) - weight: 15%
  const supportValue = { none: 0, partial: 1, full: 2 };
  const supportA = supportValue[result.optionA.support as keyof typeof supportValue];
  const supportB = supportValue[result.optionB.support as keyof typeof supportValue];
  if (supportA > supportB) {
    scoreA.push(15);
    scoreB.push(0);
    reasons.push(`Option A offers better support`);
  } else if (supportB > supportA) {
    scoreB.push(15);
    scoreA.push(0);
    reasons.push(`Option B offers better support`);
  } else {
    scoreA.push(7.5);
    scoreB.push(7.5);
  }

  // Risk factor (lower is better) - weight: 10%
  if (result.riskA < result.riskB) {
    scoreA.push(10);
    scoreB.push(0);
    reasons.push(`Option A has lower financial risk`);
  } else if (result.riskB < result.riskA) {
    scoreB.push(10);
    scoreA.push(0);
    reasons.push(`Option B has lower financial risk`);
  } else {
    scoreA.push(5);
    scoreB.push(5);
  }

  const totalA = scoreA.reduce((a, b) => a + b, 0);
  const totalB = scoreB.reduce((a, b) => a + b, 0);

  if (totalA > totalB) {
    return { best: 'A', reasons, scores: { scoreA: totalA, scoreB: totalB } };
  } else if (totalB > totalA) {
    return { best: 'B', reasons, scores: { scoreA: totalA, scoreB: totalB } };
  } else {
    return {
      best: 'Equal',
      reasons: ['Both options are equally well-suited for your needs based on cost, duration, support, and career outcomes.'],
      scores: { scoreA: totalA, scoreB: totalB },
    };
  }
}

/**
 * Calculate which route is safer based on cost and risk
 */
export function determineSaferRoute(costA: number, costB: number, riskA: number, riskB: number): 'A' | 'B' | 'Equal' {
  const scoreA = (costA / 10000) + (riskA / 100); // Normalize and combine
  const scoreB = (costB / 10000) + (riskB / 100);

  if (scoreA < scoreB) return 'A';
  if (scoreB < scoreA) return 'B';
  return 'Equal';
}

/**
 * Calculate overall risk score based on multiple factors
 */
export function calculateRiskScore(
  cost: number,
  duration: number,
  jobCertainty: number,
  support: 'none' | 'partial' | 'full'
): number {
  let risk = 0;

  // Cost risk: higher cost = higher risk
  if (cost < 50000) risk += 10;
  else if (cost < 100000) risk += 25;
  else if (cost < 150000) risk += 40;
  else risk += 60;

  // Duration risk: longer = more risk
  if (duration <= 2) risk += 10;
  else if (duration <= 3) risk += 20;
  else if (duration <= 4) risk += 30;
  else risk += 40;

  // Job certainty risk: lower certainty = higher risk
  risk += (100 - jobCertainty);

  // Support risk: less support = higher risk
  if (support === 'none') risk += 30;
  else if (support === 'partial') risk += 15;
  else risk += 5;

  return Math.min(risk, 100); // Cap at 100
}
