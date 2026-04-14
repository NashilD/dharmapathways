/**
 * Shared constants used across frontend and backend
 */

export const QUALIFICATION_TYPES = [
  'Higher Certificate',
  'Advanced Certificate',
  'Diploma',
  'Advanced Diploma',
  'Bachelor\'s Degree',
  'Bachelor Honours Degree',
  'Postgraduate Diploma',
  'Master\'s Degree',
  'Doctoral Degree (PhD)',
] as const;

export const FACULTIES = [
  'Faculty of Commerce / Business',
  'Faculty of Engineering & the Built Environment',
  'Faculty of Health Sciences',
  'Faculty of Humanities',
  'Faculty of Law',
  'Faculty of Science',
  'Faculty of Education',
  'Faculty of Agriculture / Agricultural Sciences',
  'Faculty of Theology / Religion',
  'Faculty of Arts & Design',
  'Faculty of Information Technology / Informatics',
  'Faculty of Social Sciences',
] as const;

export const DURATION_OPTIONS = [
  { value: 1, label: '1 year' },
  { value: 2, label: '2 years' },
  { value: 3, label: '3 years' },
  { value: 4, label: '4 years' },
  { value: 5, label: '5 years' },
  { value: 6, label: '6 years' },
] as const;

export const SUPPORT_LEVELS = [
  { value: 'none', label: 'No support' },
  { value: 'partial', label: 'Partial support' },
  { value: 'full', label: 'Full support' },
] as const;

export const AFFORDABILITY_STATUSES = {
  AFFORDABLE: 'Affordable',
  TIGHT: 'Tight but manageable',
  HIGH_RISK: 'High risk',
  NOT_SUSTAINABLE: 'Not sustainable',
} as const;

export const PRESSURE_LEVELS = {
  LOW: 'Low Pressure',
  MODERATE: 'Moderate Pressure',
  HIGH: 'High Pressure',
  VERY_HIGH: 'Very High Pressure',
} as const;

export const CAREER_PATHS = [
  'Healthcare Professional',
  'Business / Finance',
  'Engineering / Technology',
  'Education',
  'Creative / Arts',
  'Law',
  'Government / Public Service',
  'Science / Research',
  'Social Work / Community',
  'Entrepreneurship',
] as const;

export const RISK_THRESHOLDS = {
  LOW: 30,
  MODERATE: 50,
  HIGH: 70,
  VERY_HIGH: 100,
} as const;

export const CONTRIBUTION_AMOUNT = 75; // R75 for booking

export const MONTHS_IN_YEAR = 12;
