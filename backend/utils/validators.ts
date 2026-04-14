/**
 * Input validation functions for form data
 */

import { QUALIFICATION_TYPES, FACULTIES } from '@/shared/constants';

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

/**
 * Validate route data from Route Compare tool
 */
export function validateRouteData(data: {
  years?: number;
  qualificationType?: string;
  faculty?: string;
  cost?: number;
  duration?: number;
  certainty?: number;
}): ValidationResult {
  const errors: string[] = [];

  if (!data.years || data.years < 1 || data.years > 6) {
    errors.push('Duration must be between 1 and 6 years');
  }

  if (!data.qualificationType || !QUALIFICATION_TYPES.includes(data.qualificationType as any)) {
    errors.push('Invalid qualification type selected');
  }

  if (!data.faculty || !FACULTIES.includes(data.faculty as any)) {
    errors.push('Invalid faculty selected');
  }

  if (data.cost === undefined || data.cost < 0) {
    errors.push('Cost must be a positive number');
  }

  if (data.duration === undefined || data.duration < 0) {
    errors.push('Duration must be a positive number');
  }

  if (data.certainty === undefined || data.certainty < 0 || data.certainty > 100) {
    errors.push('Certainty must be between 0 and 100');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

/**
 * Validate cost calculator data
 */
export function validateCostData(data: {
  tuition?: number;
  accommodation?: number;
  transport?: number;
  food?: number;
  devices?: number;
  dataCost?: number;
  personal?: number;
  other?: number;
  income?: number;
  support?: number;
}): ValidationResult {
  const errors: string[] = [];

  const fields = ['tuition', 'accommodation', 'transport', 'food', 'devices', 'dataCost', 'personal', 'other', 'income', 'support'] as const;

  for (const field of fields) {
    const value = data[field];
    if (value === undefined || value < 0) {
      errors.push(`${field} must be a positive number`);
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

/**
 * Validate reality check data
 */
export function validateRealityCheckData(data: {
  householdIncome?: number;
  dependents?: number;
  monthlyExpenses?: number;
  financialSupport?: number;
}): ValidationResult {
  const errors: string[] = [];

  if (data.householdIncome === undefined || data.householdIncome < 0) {
    errors.push('Household income must be positive');
  }

  if (data.dependents === undefined || data.dependents < 0 || !Number.isInteger(data.dependents)) {
    errors.push('Number of dependents must be a whole number');
  }

  if (data.monthlyExpenses === undefined || data.monthlyExpenses < 0) {
    errors.push('Monthly expenses must be positive');
  }

  if (data.financialSupport === undefined || data.financialSupport < 0) {
    errors.push('Financial support must be positive');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

/**
 * Validate booking form data
 */
export function validateBookingData(data: {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}): ValidationResult {
  const errors: string[] = [];

  if (!data.name || data.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters');
  }

  if (!data.email || !isValidEmail(data.email)) {
    errors.push('Please provide a valid email address');
  }

  if (data.phone && !isValidPhoneNumber(data.phone)) {
    errors.push('Please provide a valid phone number');
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.push('Message must be at least 10 characters');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

/**
 * Validate email format
 */
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate phone number (basic check)
 */
function isValidPhoneNumber(phone: string): boolean {
  // Remove non-digit characters
  const cleaned = phone.replace(/\D/g, '');
  // Phone number should be 10-15 digits
  return cleaned.length >= 10 && cleaned.length <= 15;
}
