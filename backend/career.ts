/**
 * Career fit scoring and recommendation logic
 * Matches user interests and work style to career pathways
 */

import type {
  CareerInterests,
  CareerWorkStyle,
  CareerFitScores,
} from './types';

/**
 * Calculate career fit scores based on interests and work style
 * Returns normalized scores for each career (0-100)
 */
export function calculateCareerFit(
  interests: CareerInterests,
  workStyle: CareerWorkStyle
): CareerFitScores {
  const careerFits: CareerFitScores = {
    'Software Engineering': 0,
    'Data Science': 0,
    'Business/Finance': 0,
    Healthcare: 0,
    Education: 0,
    'Creative Industries': 0,
    Entrepreneurship: 0,
    Engineering: 0,
    Sales: 0,
    'Non-Profit/Social Impact': 0,
  };

  // Score each career based on interests and work style
  careerFits['Software Engineering'] =
    interests.analytical * 0.4 +
    workStyle.autonomy * 0.3 +
    interests.hands_on * 0.3;

  careerFits['Data Science'] =
    interests.analytical * 0.4 +
    interests.creative * 0.3 +
    workStyle.structure * 0.3;

  careerFits['Business/Finance'] =
    interests.analytical * 0.3 +
    interests.entrepreneurial * 0.4 +
    workStyle.leadership * 0.3;

  careerFits['Healthcare'] =
    interests.people * 0.4 +
    interests.analytical * 0.3 +
    workStyle.teamwork * 0.3;

  careerFits['Education'] =
    interests.people * 0.4 +
    interests.creative * 0.3 +
    workStyle.structure * 0.3;

  careerFits['Creative Industries'] =
    interests.creative * 0.4 +
    workStyle.flexibility * 0.4 +
    interests.entrepreneurial * 0.2;

  careerFits['Entrepreneurship'] =
    interests.entrepreneurial * 0.5 +
    workStyle.autonomy * 0.3 +
    workStyle.flexibility * 0.2;

  careerFits['Engineering'] =
    interests.hands_on * 0.4 +
    interests.analytical * 0.4 +
    workStyle.structure * 0.2;

  careerFits['Sales'] =
    interests.people * 0.4 +
    interests.entrepreneurial * 0.3 +
    workStyle.flexibility * 0.3;

  careerFits['Non-Profit/Social Impact'] =
    interests.people * 0.4 +
    interests.creative * 0.3 +
    workStyle.teamwork * 0.3;

  return careerFits;
}

/**
 * Get top 2 career fits from scores
 * Returns primary and secondary recommendations
 */
export function getTopCareerFits(
  careerFits: CareerFitScores
): { primary: string; secondary: string } {
  const sorted = Object.entries(careerFits).sort((a, b) => b[1] - a[1]);
  return {
    primary: sorted[0][0],
    secondary: sorted[1][0],
  };
}

/**
 * Get recommended pathways for a specific career
 * Returns list of education/training options
 */
export function getPathwaysForCareer(career: string): string[] {
  const pathways: Record<string, string[]> = {
    'Software Engineering': [
      'Bachelor in Computer Science',
      'Bootcamp + Portfolio',
      'Self-taught + Projects',
      'Bachelor in Engineering (Software focus)',
    ],
    'Data Science': [
      'Bachelor in Mathematics/Statistics',
      'Data Science Bootcamp',
      'Bachelor in Computer Science + specialized courses',
      'Online Data Science Certificate',
    ],
    'Business/Finance': [
      'Bachelor in Commerce/Business',
      'MBA (after work experience)',
      'CFA Program',
      'Accounting Qualification',
    ],
    Healthcare: [
      'Bachelor in Nursing',
      'Medicine (6 years)',
      'Pharmacy',
      'Allied Health Professions',
    ],
    Education: [
      'Bachelor in Education',
      'Bachelor in specific subject + PGCE',
      'Early Childhood Development',
      'Adult Education Diploma',
    ],
    'Creative Industries': [
      'Bachelor of Arts (Design/Media)',
      'Visual Arts Diploma',
      'Film & Television Production',
      'Creative Portfolio + Experience',
    ],
    Entrepreneurship: [
      'Bachelor of Commerce',
      'Business Bootcamp',
      'Self-directed learning + mentorship',
      'MBA (later)',
    ],
    Engineering: [
      'Bachelor in Engineering',
      'Diploma in Engineering',
      'Technical Training Certificate',
      'Apprenticeship programs',
    ],
    Sales: [
      'Bachelor in Business/Commerce',
      'Sales Certification',
      'On-the-job training',
      'Sales Academy programs',
    ],
    'Non-Profit/Social Impact': [
      'Bachelor in Social Sciences',
      'Development Studies',
      'Public Administration',
      'NGO Leadership programs',
    ],
  };

  return pathways[career] || [
    'Explore relevant degree programs',
    'Consider certifications',
  ];
}

/**
 * Generate warnings based on interest and work style profile
 * Identifies potential gaps or misalignments
 */
export function generateCareerWarnings(
  interests: CareerInterests,
  workStyle: CareerWorkStyle
): string[] {
  const warnings: string[] = [];

  if (interests.analytical < 30 && interests.hands_on < 30) {
    warnings.push(
      'Consider careers focused on people or creative skills rather than technical work'
    );
  }

  if (workStyle.structure > 80 && interests.entrepreneurial > 70) {
    warnings.push(
      'Your strong entrepreneurial drive may clash with preference for structured environments'
    );
  }

  if (workStyle.autonomy < 30 && interests.entrepreneurial > 70) {
    warnings.push(
      'Entrepreneurship requires high autonomy; consider roles with more independence'
    );
  }

  if (interests.people < 25 && interests.creative < 25) {
    warnings.push(
      'Consider technical or analytical careers that align with your strengths'
    );
  }

  if (workStyle.teamwork > 80 && workStyle.autonomy > 80) {
    warnings.push(
      'Reconcile your need for teamwork with desire for autonomy; seek collaborative leadership roles'
    );
  }

  return warnings;
}
