'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Link from 'next/link';

interface PressureResult {
  breakdown: Record<string, number>;
  total: number;
  category: string;
  missingMiddle: boolean;
  drivers: string[];
  nextSteps: string[];
}

export default function RealityCheck() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    income: 0,
    dependents: 0,
    expenses: 0,
    debt: false,
    studyCost: 0,
    support: 'none',
  });
  const [result, setResult] = useState<PressureResult | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('dharma_reality_check');
    if (saved) {
      setResult(JSON.parse(saved));
      setStep(5);
    }
  }, []);

  const update = (field: string, value: any) => {
    setData({ ...data, [field]: value });
  };

  const calculateScores = () => {
    const breakdown: Record<string, number> = {
      household: 0,
      financial: 0,
      study: 0,
      support: 0,
    };

    // Household pressure
    if (data.income < 10000) breakdown.household += 80;
    else if (data.income < 20000) breakdown.household += 60;
    else if (data.income < 35000) breakdown.household += 40;
    else breakdown.household += 20;

    if (data.dependents >= 4) breakdown.household += 20;
    else if (data.dependents >= 2) breakdown.household += 10;

    breakdown.household = Math.min(breakdown.household, 100);

    // Financial pressure
    const ratio = data.income > 0 ? data.expenses / data.income : 1;

    if (ratio > 0.8) breakdown.financial += 80;
    else if (ratio > 0.6) breakdown.financial += 60;
    else breakdown.financial += 30;

    if (data.debt) breakdown.financial += 20;

    breakdown.financial = Math.min(breakdown.financial, 100);

    // Study cost pressure
    if (data.studyCost > 80000) breakdown.study += 80;
    else if (data.studyCost > 40000) breakdown.study += 60;
    else breakdown.study += 30;

    // Support level
    if (data.support === 'none') breakdown.support = 100;
    else if (data.support === 'partial') breakdown.support = 60;
    else breakdown.support = 20;

    const total =
      breakdown.household * 0.25 +
      breakdown.financial * 0.3 +
      breakdown.study * 0.25 +
      breakdown.support * 0.2;

    return { breakdown, total };
  };

  const getCategory = (score: number): string => {
    if (score < 30) return 'More Stable';
    if (score < 50) return 'Vulnerable';
    if (score < 70) return 'Pressured';
    if (score < 85) return 'Highly Pressured';
    return 'Severely Pressured';
  };

  const detectMissingMiddle = (): boolean => {
    const ratio = data.income > 0 ? data.expenses / data.income : 1;
    return (
      data.income >= 15000 &&
      data.income <= 40000 &&
      data.support !== 'full' &&
      ratio > 0.6
    );
  };

  const getDrivers = (breakdown: Record<string, number>): string[] => {
    const drivers: string[] = [];

    if (breakdown.financial > 70)
      drivers.push('High monthly expenses relative to income');
    if (breakdown.study > 60) drivers.push('High study cost burden');
    if (breakdown.support > 70) drivers.push('Limited or no confirmed support');
    if (data.debt) drivers.push('Existing debt commitments increasing pressure');
    if (data.dependents >= 3)
      drivers.push('Multiple dependents increasing household pressure');

    return drivers;
  };

  const getNextSteps = (category: string): string[] => {
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
  };

  const handleSubmit = () => {
    const { breakdown, total } = calculateScores();
    const category = getCategory(total);
    const missingMiddle = detectMissingMiddle();
    const drivers = getDrivers(breakdown);
    const nextSteps = getNextSteps(category);

    const finalResult: PressureResult = {
      breakdown,
      total: Math.round(total),
      category,
      missingMiddle,
      drivers,
      nextSteps,
    };

    setResult(finalResult);
    localStorage.setItem('dharma_reality_check', JSON.stringify(finalResult));
    setStep(5);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-2xl mx-auto px-4 py-12">
          <div className="mb-8">
            <p className="text-sm text-muted-foreground">Step 1 of 4</p>
            <h1 className="text-3xl font-bold text-foreground mt-2">
              Missing Middle Reality Check
            </h1>
          </div>

          {step === 1 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Monthly Household Income (R)
                </label>
                <input
                  type="number"
                  value={data.income}
                  onChange={(e) => update('income', Number(e.target.value))}
                  className="w-full border border-border rounded-lg px-4 py-2 text-foreground"
                  placeholder="e.g. 20000"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Number of Dependents
                </label>
                <input
                  type="number"
                  value={data.dependents}
                  onChange={(e) => update('dependents', Number(e.target.value))}
                  className="w-full border border-border rounded-lg px-4 py-2 text-foreground"
                  placeholder="e.g. 2"
                />
              </div>

              <button
                onClick={() => setStep(2)}
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:opacity-90 transition-opacity font-semibold"
              >
                Next
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Monthly Expenses (R)
                </label>
                <input
                  type="number"
                  value={data.expenses}
                  onChange={(e) => update('expenses', Number(e.target.value))}
                  className="w-full border border-border rounded-lg px-4 py-2 text-foreground"
                  placeholder="e.g. 15000"
                />
              </div>

              <label className="flex items-center gap-3 p-4 border border-border rounded-lg cursor-pointer hover:bg-card">
                <input
                  type="checkbox"
                  checked={data.debt}
                  onChange={(e) => update('debt', e.target.checked)}
                  className="w-5 h-5"
                />
                <span className="text-foreground font-medium">
                  I am under debt review
                </span>
              </label>

              <div className="flex gap-3">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 border border-border text-foreground py-3 rounded-lg hover:bg-card transition-colors font-semibold"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="flex-1 bg-primary text-primary-foreground py-3 rounded-lg hover:opacity-90 transition-opacity font-semibold"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Estimated Annual Study Cost (R)
                </label>
                <input
                  type="number"
                  value={data.studyCost}
                  onChange={(e) => update('studyCost', Number(e.target.value))}
                  className="w-full border border-border rounded-lg px-4 py-2 text-foreground"
                  placeholder="e.g. 45000"
                />
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setStep(2)}
                  className="flex-1 border border-border text-foreground py-3 rounded-lg hover:bg-card transition-colors font-semibold"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(4)}
                  className="flex-1 bg-primary text-primary-foreground py-3 rounded-lg hover:opacity-90 transition-opacity font-semibold"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-4">
                  Support Level
                </label>
                <div className="space-y-3">
                  {[
                    { value: 'none', label: 'No confirmed support' },
                    { value: 'partial', label: 'Some support' },
                    { value: 'full', label: 'Full support' },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className={`flex items-center gap-3 p-4 border rounded-lg cursor-pointer transition-colors ${
                        data.support === option.value
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:bg-card'
                      }`}
                    >
                      <input
                        type="radio"
                        name="support"
                        value={option.value}
                        checked={data.support === option.value}
                        onChange={(e) => update('support', e.target.value)}
                        className="w-5 h-5"
                      />
                      <span className="text-foreground font-medium">
                        {option.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setStep(3)}
                  className="flex-1 border border-border text-foreground py-3 rounded-lg hover:bg-card transition-colors font-semibold"
                >
                  Back
                </button>
                <button
                  onClick={handleSubmit}
                  className="flex-1 bg-primary text-primary-foreground py-3 rounded-lg hover:opacity-90 transition-opacity font-semibold"
                >
                  See Results
                </button>
              </div>
            </div>
          )}

          {step === 5 && result && (
            <div className="space-y-8">
              <div className="border-l-4 border-primary pl-6">
                <p className="text-sm text-muted-foreground mb-2">
                  Your Pressure Category
                </p>
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  {result.category}
                </h2>
                <p className="text-lg text-muted-foreground">
                  Pressure Score: {result.total}/100
                </p>
              </div>

              {result.missingMiddle && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <p className="text-sm font-semibold text-yellow-900 mb-2">
                    Missing-Middle Pattern Detected
                  </p>
                  <p className="text-yellow-800">
                    Your income may appear sufficient on paper, but real-life financial pressure is high. This is common among the "missing middle" who don't qualify for maximum support but face significant affordability challenges.
                  </p>
                </div>
              )}

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Key Pressure Drivers
                </h3>
                <ul className="space-y-2">
                  {result.drivers.map((driver, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-foreground"
                    >
                      <span className="text-primary font-bold">•</span>
                      <span>{driver}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Next Steps
                </h3>
                <ul className="space-y-2">
                  {result.nextSteps.map((step, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-foreground"
                    >
                      <span className="text-primary font-bold">→</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-border pt-8 space-y-4">
                <Link
                  href="/tools/cost-calculator"
                  className="block w-full bg-primary text-primary-foreground py-3 rounded-lg hover:opacity-90 transition-opacity font-semibold text-center"
                >
                  Continue to Cost Calculator →
                </Link>
                <button
                  onClick={() => {
                    setStep(1);
                    setData({
                      income: 0,
                      dependents: 0,
                      expenses: 0,
                      debt: false,
                      studyCost: 0,
                      support: 'none',
                    });
                    setResult(null);
                  }}
                  className="w-full border border-border text-foreground py-3 rounded-lg hover:bg-card transition-colors font-semibold"
                >
                  Restart
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
