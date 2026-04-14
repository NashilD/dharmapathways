'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Link from 'next/link';

interface RouteData {
  name: string;
  years: number;
  qualificationType: string;
  faculty: string;
  cost: number;
  duration: number;
  support: string;
  certainty: number;
}

interface RouteResult {
  optionA: RouteData;
  optionB: RouteData;
  riskA: number;
  riskB: number;
  safer: string;
}

export default function RouteCompare() {
  const [optionA, setOptionA] = useState<RouteData>({
    name: '',
    years: 3,
    qualificationType: '',
    faculty: '',
    cost: 0,
    duration: 3,
    support: 'none',
    certainty: 50,
  });

  const [optionB, setOptionB] = useState<RouteData>({
    name: '',
    years: 3,
    qualificationType: '',
    faculty: '',
    cost: 0,
    duration: 3,
    support: 'none',
    certainty: 50,
  });

  const [result, setResult] = useState<RouteResult | null>(null);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('dharma_route_compare');
    if (saved) {
      const data = JSON.parse(saved);
      setResult(data);
      setOptionA(data.optionA);
      setOptionB(data.optionB);
      setShowResult(true);
    }
  }, []);

  const calculateRisk = (option: RouteData): number => {
    let risk = 50; // baseline

    // Cost factor (0-30 points)
    if (option.cost > 100000) risk += 30;
    else if (option.cost > 60000) risk += 20;
    else if (option.cost > 30000) risk += 10;

    // Duration factor (0-20 points)
    if (option.duration > 4) risk += 20;
    else if (option.duration > 3) risk += 10;

    // Support factor (0-20 points)
    if (option.support === 'none') risk += 20;
    else if (option.support === 'partial') risk += 10;

    // Certainty factor (0-30 points, inverted)
    risk += (100 - option.certainty) * 0.3;

    return Math.min(100, Math.round(risk));
  };

  const handleCompare = () => {
    if (!optionA.qualificationType || !optionA.faculty || !optionB.qualificationType || !optionB.faculty) {
      alert('Please select all qualification details for both options');
      return;
    }

    // Generate names from dropdown selections
    const optionAName = `${optionA.duration} years • ${optionA.qualificationType} • ${optionA.faculty}`;
    const optionBName = `${optionB.duration} years • ${optionB.qualificationType} • ${optionB.faculty}`;
    optionA.name = optionAName;
    optionB.name = optionBName;

    const riskA = calculateRisk(optionA);
    const riskB = calculateRisk(optionB);

    const finalResult: RouteResult = {
      optionA,
      optionB,
      riskA,
      riskB,
      safer: riskA < riskB ? 'A' : riskB < riskA ? 'B' : 'Equal',
    };

    setResult(finalResult);
    localStorage.setItem('dharma_route_compare', JSON.stringify(finalResult));
    setShowResult(true);
  };

  const updateOption = (
    option: 'A' | 'B',
    field: string,
    value: any
  ) => {
    if (option === 'A') {
      setOptionA({ ...optionA, [field]: value });
    } else {
      setOptionB({ ...optionB, [field]: value });
    }
  };

  const getRiskColor = (risk: number): string => {
    if (risk < 30) return 'text-green-600';
    if (risk < 50) return 'text-yellow-600';
    if (risk < 70) return 'text-orange-600';
    return 'text-red-600';
  };

  const getRiskLabel = (risk: number): string => {
    if (risk < 30) return 'Low Risk';
    if (risk < 50) return 'Moderate Risk';
    if (risk < 70) return 'High Risk';
    return 'Very High Risk';
  };

  const determineBestRoute = (): { best: 'A' | 'B' | 'Equal'; reasons: string[] } => {
    if (!result) return { best: 'Equal', reasons: [] };

    const scoreA: number[] = [];
    const scoreB: number[] = [];
    const reasons: string[] = [];

    // Cost factor (lower is better) - weight: 25%
    if (result.optionA.cost < result.optionB.cost) {
      scoreA.push(25);
      scoreB.push(0);
      reasons.push(`Option A is ${(result.optionB.cost - result.optionA.cost).toLocaleString()} cheaper`);
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
    const certaintyCeil = Math.max(result.optionA.certainty, result.optionB.certainty);
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
      return { best: 'A', reasons };
    } else if (totalB > totalA) {
      return { best: 'B', reasons };
    } else {
      return { best: 'Equal', reasons: ['Both options are equally well-suited for your needs based on cost, duration, support, and career outcomes.'] };
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="mb-8">
            <p className="text-sm text-muted-foreground">Step 3 of 4</p>
            <h1 className="text-3xl font-bold text-foreground mt-2">
              Safer Route Compare
            </h1>
          </div>

          {!showResult ? (
            <div className="space-y-8">
              <p className="text-muted-foreground">
                Compare two education pathways to identify which offers the safer financial and career outcome.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                {['A', 'B'].map((letter) => {
                  const option = letter === 'A' ? optionA : optionB;

                  return (
                    <div
                      key={letter}
                      className="border border-border rounded-lg p-6 space-y-4"
                    >
                      <h3 className="text-lg font-semibold text-foreground">
                        Option {letter}
                      </h3>

                      {/* Duration Dropdown */}
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Duration (years)
                        </label>
                        <select
                          value={option.duration}
                          onChange={(e) =>
                            updateOption(letter as 'A' | 'B', 'duration', Number(e.target.value))
                          }
                          className="w-full border border-border rounded-lg px-4 py-2 text-foreground bg-background"
                        >
                          <option value="">Select duration</option>
                          <option value={1}>1 year</option>
                          <option value={2}>2 years</option>
                          <option value={3}>3 years</option>
                          <option value={4}>4 years</option>
                          <option value={5}>5 years</option>
                          <option value={6}>6 years</option>
                        </select>
                      </div>

                      {/* Qualification Type Dropdown */}
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Qualification type
                        </label>
                        <select
                          value={option.qualificationType}
                          onChange={(e) =>
                            updateOption(letter as 'A' | 'B', 'qualificationType', e.target.value)
                          }
                          className="w-full border border-border rounded-lg px-4 py-2 text-foreground bg-background"
                        >
                          <option value="">Select qualification</option>
                          <option value="Higher Certificate">Higher Certificate</option>
                          <option value="Advanced Certificate">Advanced Certificate</option>
                          <option value="Diploma">Diploma</option>
                          <option value="Advanced Diploma">Advanced Diploma</option>
                          <option value="Bachelor's Degree">Bachelor&apos;s Degree</option>
                          <option value="Bachelor Honours Degree">Bachelor Honours Degree</option>
                          <option value="Postgraduate Diploma">Postgraduate Diploma</option>
                          <option value="Master's Degree">Master&apos;s Degree</option>
                          <option value="Doctoral Degree (PhD)">Doctoral Degree (PhD)</option>
                        </select>
                      </div>

                      {/* Faculty Dropdown */}
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Faculty
                        </label>
                        <select
                          value={option.faculty}
                          onChange={(e) =>
                            updateOption(letter as 'A' | 'B', 'faculty', e.target.value)
                          }
                          className="w-full border border-border rounded-lg px-4 py-2 text-foreground bg-background"
                        >
                          <option value="">Select faculty</option>
                          <option value="Faculty of Commerce / Business">Faculty of Commerce / Business</option>
                          <option value="Faculty of Engineering & the Built Environment">Faculty of Engineering & the Built Environment</option>
                          <option value="Faculty of Health Sciences">Faculty of Health Sciences</option>
                          <option value="Faculty of Humanities">Faculty of Humanities</option>
                          <option value="Faculty of Law">Faculty of Law</option>
                          <option value="Faculty of Science">Faculty of Science</option>
                          <option value="Faculty of Education">Faculty of Education</option>
                          <option value="Faculty of Agriculture / Agricultural Sciences">Faculty of Agriculture / Agricultural Sciences</option>
                          <option value="Faculty of Theology / Religion">Faculty of Theology / Religion</option>
                          <option value="Faculty of Arts & Design">Faculty of Arts & Design</option>
                          <option value="Faculty of Information Technology / Informatics">Faculty of Information Technology / Informatics</option>
                          <option value="Faculty of Social Sciences">Faculty of Social Sciences</option>
                        </select>
                      </div>

                      {/* Summary Line */}
                      {option.duration && option.qualificationType && option.faculty && (
                        <div className="bg-card border border-border rounded px-3 py-2 text-sm text-muted-foreground">
                          {option.duration} years • {option.qualificationType} • {option.faculty}
                        </div>
                      )}

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Total Cost (R)
                        </label>
                        <input
                          type="number"
                          min="0"
                          value={option.cost}
                          onChange={(e) =>
                            updateOption(letter as 'A' | 'B', 'cost', Number(e.target.value))
                          }
                          className="w-full border border-border rounded-lg px-4 py-2 text-foreground"
                          placeholder="0"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-3">
                          Support Available
                        </label>
                        <div className="space-y-2">
                          {['none', 'partial', 'full'].map((support) => (
                            <label
                              key={support}
                              className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition-colors ${
                                option.support === support
                                  ? 'border-primary bg-primary/5'
                                  : 'border-border hover:bg-card'
                              }`}
                            >
                              <input
                                type="radio"
                                name={`support-${letter}`}
                                value={support}
                                checked={option.support === support}
                                onChange={(e) =>
                                  updateOption(letter as 'A' | 'B', 'support', e.target.value)
                                }
                                className="w-4 h-4"
                              />
                              <span className="text-sm text-foreground font-medium capitalize">
                                {support === 'none'
                                  ? 'No support'
                                  : support === 'partial'
                                  ? 'Some support'
                                  : 'Full support'}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-3">
                          Job Certainty After Completion: {option.certainty}%
                        </label>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={option.certainty}
                          onChange={(e) =>
                            updateOption(letter as 'A' | 'B', 'certainty', Number(e.target.value))
                          }
                          className="w-full"
                        />
                        <p className="text-xs text-muted-foreground mt-2">
                          How confident are you of securing employment in your field?
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <button
                onClick={handleCompare}
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:opacity-90 transition-opacity font-semibold text-lg"
              >
                Compare Routes
              </button>
            </div>
          ) : result ? (
            <div className="space-y-8">
              {(() => {
                const bestRoute = determineBestRoute();
                return (
                  <>
                    {result.safer !== 'Equal' && (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                        <p className="text-sm font-semibold text-green-900 mb-2">
                          Safer Option Identified
                        </p>
                        <p className="text-green-900">
                          <strong>Option {result.safer}</strong> appears to be the safer financial pathway based on cost, duration, support availability, and job certainty.
                        </p>
                      </div>
                    )}

                    {/* Best for You Recommendation */}
                    {bestRoute.best !== 'Equal' ? (
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <p className="text-sm font-semibold text-blue-900 mb-3">
                          Best for You
                        </p>
                        <p className="text-blue-900 mb-3">
                          <strong>Option {bestRoute.best}</strong> is the best fit for your situation.
                        </p>
                        <ul className="space-y-2">
                          {bestRoute.reasons.map((reason, idx) => (
                            <li key={idx} className="text-sm text-blue-900 flex items-start gap-2">
                              <span className="text-blue-600 mt-1">•</span>
                              <span>{reason}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <p className="text-sm font-semibold text-blue-900 mb-3">
                          Best for You
                        </p>
                        <p className="text-blue-900">
                          Both options are equally well-suited for your needs based on cost, duration, support, and career outcomes. Your choice should depend on other personal factors like location, learning style, or specific interests in the field.
                        </p>
                      </div>
                    )}
                  </>
                );
              })()}

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { letter: 'A', data: result.optionA, risk: result.riskA },
                  { letter: 'B', data: result.optionB, risk: result.riskB },
                ].map(({ letter, data, risk }) => (
                  <div
                    key={letter}
                    className={`border rounded-lg p-6 ${
                      result.safer === letter ? 'border-green-400 bg-green-50' : 'border-border'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">
                          Option {letter}
                        </h3>
                        <p className="text-muted-foreground">{data.name}</p>
                      </div>
                      {result.safer === letter && (
                        <span className="text-sm font-semibold text-green-700 bg-green-100 px-3 py-1 rounded-full">
                          Safer
                        </span>
                      )}
                    </div>

                    <div className="space-y-4">
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide">
                          Total Cost
                        </p>
                        <p className="text-2xl font-bold text-foreground">
                          R {data.cost.toLocaleString()}
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-wide">
                            Duration
                          </p>
                          <p className="text-xl font-bold text-foreground">
                            {data.duration} years
                          </p>
                        </div>

                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-wide">
                            Job Certainty
                          </p>
                          <p className="text-xl font-bold text-foreground">
                            {data.certainty}%
                          </p>
                        </div>
                      </div>

                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">
                          Support
                        </p>
                        <p className="text-foreground font-medium capitalize">
                          {data.support === 'none'
                            ? 'No support'
                            : data.support === 'partial'
                            ? 'Some support'
                            : 'Full support'}
                        </p>
                      </div>

                      <div className="border-t border-border pt-4">
                        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">
                          Risk Assessment
                        </p>
                        <p className={`text-2xl font-bold ${getRiskColor(risk)}`}>
                          {getRiskLabel(risk)}
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Risk Score: {risk}/100
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-8 space-y-3">
                <Link
                  href="/tools/fit-check"
                  className="block w-full bg-primary text-primary-foreground py-3 rounded-lg hover:opacity-90 transition-opacity font-semibold text-center"
                >
                  Continue to Career Fit Check →
                </Link>
                <button
                  onClick={() => {
                    setShowResult(false);
                    setResult(null);
                    setOptionA({
                      name: '',
                      cost: 0,
                      duration: 0,
                      support: 'none',
                      certainty: 50,
                    });
                    setOptionB({
                      name: '',
                      cost: 0,
                      duration: 0,
                      support: 'none',
                      certainty: 50,
                    });
                  }}
                  className="w-full border border-border text-foreground py-3 rounded-lg hover:bg-card transition-colors font-semibold"
                >
                  Compare Different Routes
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
