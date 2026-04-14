/**
 * Shared types used across frontend and backend
 */

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

export interface ComparisonResult {
  optionA: RouteData;
  optionB: RouteData;
  riskA: number;
  riskB: number;
  safer: 'A' | 'B' | 'Equal';
  timestamp: number;
}

export interface RealityCheckData {
  householdIncome: number;
  dependents: number;
  hasDebt: boolean;
  financialSupport: number;
  monthlyExpenses: number;
  pressure: number;
  pressureLevel: string;
  timestamp: number;
}

export interface CostCalculatorData {
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
  annualCost: number;
  monthlyCost: number;
  monthlyGap: number;
  affordabilityStatus: string;
  timestamp: number;
}

export interface CareerFitData {
  interest1: number;
  interest2: number;
  interest3: number;
  workStyle1: number;
  workStyle2: number;
  topPaths: string[];
  timestamp: number;
}

export interface ToolResults {
  realityCheck?: RealityCheckData;
  costCalculator?: CostCalculatorData;
  routeCompare?: ComparisonResult;
  careerFit?: CareerFitData;
  summaryGenerated?: boolean;
  completedAt?: number;
}

export interface BookingData {
  name: string;
  email: string;
  phone: string;
  message: string;
  toolsUsed?: string[];
  contributionMade: boolean;
  contribution Amount: number;
  timestamp: number;
}
