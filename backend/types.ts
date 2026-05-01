/**
 * Shared types for backend business logic
 * These types are used across all tool calculations
 */

// Reality Check / Pressure Assessment
export interface PressureInput {
  income: number;
  dependents: number;
  expenses: number;
  debt: boolean;
  studyCost: number;
  support: 'none' | 'partial' | 'full';
}

export interface PressureBreakdown {
  household: number;
  financial: number;
  study: number;
  support: number;
}

export interface PressureResult {
  breakdown: PressureBreakdown;
  total: number;
  category: string;
  missingMiddle: boolean;
  drivers: string[];
  nextSteps: string[];
}

// Cost Calculator
export interface CostInput {
  tuition: number;
  accommodation: number;
  transport: number;
  food: number;
  devices: number;
  dataCost: number;
  personal: number;
  other: number;
  income: number;
  support: number;
}

export interface CostResult {
  totalAnnual: number;
  monthlyCost: number;
  availableMonthly: number;
  gap: number;
  affordability: string;
  flags: string[];
}

// Career Fit Check
export interface CareerInterests {
  analytical: number;
  creative: number;
  people: number;
  hands_on: number;
  entrepreneurial: number;
}

export interface CareerWorkStyle {
  structure: number;
  flexibility: number;
  autonomy: number;
  teamwork: number;
  leadership: number;
}

export interface CareerFitScores {
  [career: string]: number;
}

export interface FitResult {
  interests: CareerInterests;
  workStyle: CareerWorkStyle;
  primaryFit: string;
  secondaryFit: string;
  pathways: string[];
  warnings: string[];
}

// Route Comparison
export interface RouteData {
  name: string;
  years: number;
  qualificationType: string;
  faculty: string;
  cost: number;
  duration: number;
  support: 'none' | 'partial' | 'full';
  certainty: number;
}

export interface RouteResult {
  optionA: RouteData;
  optionB: RouteData;
  riskA: number;
  riskB: number;
  safer: string;
}

export interface RouteBestDecision {
  best: 'A' | 'B' | 'Equal';
  reasons: string[];
}
