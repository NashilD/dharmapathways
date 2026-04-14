'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Link from 'next/link';

interface FitResult {
  interests: Record<string, number>;
  workStyle: Record<string, number>;
  primaryFit: string;
  secondaryFit: string;
  pathways: string[];
  warnings: string[];
}

export default function CareerFitCheck() {
  const [interests, setInterests] = useState({
    analytical: 50,
    creative: 50,
    people: 50,
    hands_on: 50,
    entrepreneurial: 50,
  });

  const [workStyle, setWorkStyle] = useState({
    structure: 50,
    flexibility: 50,
    autonomy: 50,
    teamwork: 50,
    leadership: 50,
  });

  const [result, setResult] = useState<FitResult | null>(null);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('dharma_fit_check');
    if (saved) {
      const data = JSON.parse(saved);
      setResult(data);
      setShowResult(true);
    }
  }, []);

  const updateInterest = (field: string, value: number) => {
    setInterests({ ...interests, [field]: value });
  };

  const updateWorkStyle = (field: string, value: number) => {
    setWorkStyle({ ...workStyle, [field]: value });
  };

  const calculateFit = () => {
    const careerFits: Record<string, number> = {
      'Software Engineering': 0,
      'Data Science': 0,
      'Business/Finance': 0,
      'Healthcare': 0,
      'Education': 0,
      'Creative Industries': 0,
      'Entrepreneurship': 0,
      'Engineering': 0,
      'Sales': 0,
      'Non-Profit/Social Impact': 0,
    };

    // Score each career based on interests and work style
    careerFits['Software Engineering'] =
      interests.analytical * 0.4 + workStyle.autonomy * 0.3 + interests.hands_on * 0.3;

    careerFits['Data Science'] =
      interests.analytical * 0.4 + interests.creative * 0.3 + workStyle.structure * 0.3;

    careerFits['Business/Finance'] =
      interests.analytical * 0.3 + interests.entrepreneurial * 0.4 + workStyle.leadership * 0.3;

    careerFits['Healthcare'] =
      interests.people * 0.4 + interests.analytical * 0.3 + workStyle.teamwork * 0.3;

    careerFits['Education'] =
      interests.people * 0.4 + interests.creative * 0.3 + workStyle.structure * 0.3;

    careerFits['Creative Industries'] =
      interests.creative * 0.4 + workStyle.flexibility * 0.4 + interests.entrepreneurial * 0.2;

    careerFits['Entrepreneurship'] =
      interests.entrepreneurial * 0.5 + workStyle.autonomy * 0.3 + workStyle.flexibility * 0.2;

    careerFits['Engineering'] =
      interests.hands_on * 0.4 + interests.analytical * 0.4 + workStyle.structure * 0.2;

    careerFits['Sales'] =
      interests.people * 0.4 + interests.entrepreneurial * 0.3 + workStyle.flexibility * 0.3;

    careerFits['Non-Profit/Social Impact'] =
      interests.people * 0.4 + interests.creative * 0.3 + workStyle.teamwork * 0.3;

    // Find top 2 fits
    const sorted = Object.entries(careerFits).sort((a, b) => b[1] - a[1]);
    const primaryFit = sorted[0][0];
    const secondaryFit = sorted[1][0];

    // Suggest pathways
    const pathways = getPathwaysForCareer(primaryFit);

    // Generate warnings
    const warnings = generateWarnings(interests, workStyle);

    const finalResult: FitResult = {
      interests,
      workStyle,
      primaryFit,
      secondaryFit,
      pathways,
      warnings,
    };

    setResult(finalResult);
    localStorage.setItem('dharma_fit_check', JSON.stringify(finalResult));
    setShowResult(true);
  };

  const getPathwaysForCareer = (career: string): string[] => {
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
      'Healthcare': [
        'Bachelor in Nursing',
        'Medicine (6 years)',
        'Pharmacy',
        'Allied Health Professions',
      ],
      'Education': [
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
      'Entrepreneurship': [
        'Bachelor of Commerce',
        'Business Bootcamp',
        'Self-directed learning + mentorship',
        'MBA (later)',
      ],
      'Engineering': [
        'Bachelor in Engineering',
        'Diploma in Engineering',
        'Technical Training Certificate',
        'Apprenticeship programs',
      ],
      'Sales': [
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

    return pathways[career] || ['Explore relevant degree programs', 'Consider certifications'];
  };

  const generateWarnings = (
    interests: Record<string, number>,
    workStyle: Record<string, number>
  ): string[] => {
    const warnings: string[] = [];

    if (interests.analytical < 30 && interests.hands_on < 30) {
      warnings.push(
        'Consider careers focused on people or creative skills rather than technical work'
      );
    }

    if (workStyle.structure < 25 && workStyle.flexibility < 25) {
      warnings.push('Your work style preferences are unclear—consider exploring various work environments');
    }

    if (interests.entrepreneurial > 70 && workStyle.leadership < 40) {
      warnings.push('You show entrepreneurial interest but low leadership preference—consider collaborative partnerships');
    }

    if (interests.people > 70 && workStyle.autonomy > 70) {
      warnings.push('Balance team collaboration with independent work in your career choice');
    }

    return warnings;
  };

  const interestFields = [
    { key: 'analytical', label: 'Analytical & Problem-Solving', emoji: '🔬' },
    { key: 'creative', label: 'Creative & Innovative', emoji: '🎨' },
    { key: 'people', label: 'People & Communication', emoji: '👥' },
    { key: 'hands_on', label: 'Hands-On & Practical', emoji: '🔧' },
    { key: 'entrepreneurial', label: 'Entrepreneurial & Risk-Taking', emoji: '🚀' },
  ];

  const workStyleFields = [
    { key: 'structure', label: 'Structure & Clear Processes', emoji: '📋' },
    { key: 'flexibility', label: 'Flexibility & Freedom', emoji: '🌬️' },
    { key: 'autonomy', label: 'Autonomy & Independence', emoji: '🎯' },
    { key: 'teamwork', label: 'Teamwork & Collaboration', emoji: '🤝' },
    { key: 'leadership', label: 'Leadership & Mentoring', emoji: '👔' },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="mb-8">
            <p className="text-sm text-muted-foreground">Step 4 of 4</p>
            <h1 className="text-3xl font-bold text-foreground mt-2">
              Career Fit Check
            </h1>
          </div>

          {!showResult ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                calculateFit();
              }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-6">
                  Your Interests
                </h2>
                <p className="text-muted-foreground mb-6">
                  Rate how much each interest appeals to you (0 = Not at all, 100 = Very much)
                </p>

                <div className="space-y-6">
                  {interestFields.map(({ key, label, emoji }) => (
                    <div key={key}>
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-sm font-medium text-foreground">
                          <span className="mr-2">{emoji}</span>
                          {label}
                        </label>
                        <span className="text-sm font-semibold text-primary">
                          {interests[key as keyof typeof interests]}%
                        </span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={interests[key as keyof typeof interests]}
                        onChange={(e) =>
                          updateInterest(key, Number(e.target.value))
                        }
                        className="w-full"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-border pt-12">
                <h2 className="text-2xl font-semibold text-foreground mb-6">
                  Your Work Style
                </h2>
                <p className="text-muted-foreground mb-6">
                  Rate your preferred work environment and approach (0 = Not at all, 100 = Very much)
                </p>

                <div className="space-y-6">
                  {workStyleFields.map(({ key, label, emoji }) => (
                    <div key={key}>
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-sm font-medium text-foreground">
                          <span className="mr-2">{emoji}</span>
                          {label}
                        </label>
                        <span className="text-sm font-semibold text-primary">
                          {workStyle[key as keyof typeof workStyle]}%
                        </span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={workStyle[key as keyof typeof workStyle]}
                        onChange={(e) =>
                          updateWorkStyle(key, Number(e.target.value))
                        }
                        className="w-full"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:opacity-90 transition-opacity font-semibold text-lg"
              >
                See Your Career Fit
              </button>
            </form>
          ) : result ? (
            <div className="space-y-8">
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-sm text-muted-foreground mb-2">
                  Primary Career Fit
                </p>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  {result.primaryFit}
                </h2>

                <p className="text-sm text-muted-foreground mb-4">
                  Secondary Career Fit
                </p>
                <p className="text-lg font-semibold text-foreground mb-6">
                  {result.secondaryFit}
                </p>

                <p className="text-muted-foreground">
                  Based on your interests and work style preferences, these careers align best with your profile. Consider exploring roles in these fields through internships, job shadowing, or informational interviews.
                </p>
              </div>

              {result.pathways.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Education Pathways for {result.primaryFit}
                  </h3>
                  <div className="space-y-3">
                    {result.pathways.map((pathway, i) => (
                      <div key={i} className="border-l-4 border-primary pl-4 py-2">
                        <p className="text-foreground">{pathway}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {result.warnings.length > 0 && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <p className="text-sm font-semibold text-yellow-900 mb-3">
                    Considerations
                  </p>
                  <ul className="space-y-2">
                    {result.warnings.map((warning, i) => (
                      <li key={i} className="flex gap-2 text-sm text-yellow-800">
                        <span>•</span>
                        <span>{warning}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="border-t border-border pt-8 space-y-3">
                <Link
                  href="/summary"
                  className="block w-full bg-primary text-primary-foreground py-3 rounded-lg hover:opacity-90 transition-opacity font-semibold text-center"
                >
                  Continue to Summary Report →
                </Link>
                <button
                  onClick={() => {
                    setShowResult(false);
                    setResult(null);
                    setInterests({
                      analytical: 50,
                      creative: 50,
                      people: 50,
                      hands_on: 50,
                      entrepreneurial: 50,
                    });
                    setWorkStyle({
                      structure: 50,
                      flexibility: 50,
                      autonomy: 50,
                      teamwork: 50,
                      leadership: 50,
                    });
                  }}
                  className="w-full border border-border text-foreground py-3 rounded-lg hover:bg-card transition-colors font-semibold"
                >
                  Retake Assessment
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </main>

      <Footer />
    </div>
  );
}
