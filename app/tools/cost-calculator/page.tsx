'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import Link from 'next/link';
import type { CostInput, CostResult } from '@/backend/types';
import { calculateCostBreakdown, getCostNextSteps } from '@/backend/calculations';

export default function CostCalculator() {
  const [data, setData] = useState<CostInput>({
    tuition: 0,
    accommodation: 0,
    transport: 0,
    food: 0,
    devices: 0,
    dataCost: 0,
    personal: 0,
    other: 0,
    income: 0,
    support: 0,
  });
  const [result, setResult] = useState<CostResult | null>(null);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    // Flow guard: Only restore results if session flag exists
    // This prevents auto-rendering on page reload or direct visits
    const sessionFlag = sessionStorage.getItem('dharma_cost_calculator_started');
    
    if (sessionFlag) {
      // User intentionally completed the form in this session
      const saved = localStorage.getItem('dharma_cost_calculator');
      if (saved) {
        try {
          setResult(JSON.parse(saved));
          setShowResult(true);
        } catch (e) {
          // Invalid stored data, clear it
          localStorage.removeItem('dharma_cost_calculator');
          sessionStorage.removeItem('dharma_cost_calculator_started');
        }
      }
    } else {
      // First visit or page reload - always start with input form
      // Clear any stale persisted data
      localStorage.removeItem('dharma_cost_calculator');
    }
  }, []);

  const update = (field: string, value: number) => {
    setData({ ...data, [field]: value });
  };

  const calculate = () => {
    const result = calculateCostBreakdown(data);
    // Set session flag to allow result restoration in the same session
    sessionStorage.setItem('dharma_cost_calculator_started', 'true');
    setResult(result);
    localStorage.setItem('dharma_cost_calculator', JSON.stringify(result));
    setShowResult(true);
  };

  const costFields = [
    { key: 'tuition', label: 'Tuition Fees (annual)' },
    { key: 'accommodation', label: 'Accommodation (annual)' },
    { key: 'transport', label: 'Transport (annual)' },
    { key: 'food', label: 'Food (annual)' },
    { key: 'devices', label: 'Devices (Laptop, etc.) (annual)' },
    { key: 'dataCost', label: 'Data / Internet (annual)' },
    { key: 'personal', label: 'Personal Expenses (annual)' },
    { key: 'other', label: 'Other Costs (annual)' },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="flex-1">
        <div className="max-w-2xl mx-auto px-4 py-12">
          <div className="mb-8">
            <p className="text-sm text-muted-foreground">Step 2 of 4</p>
            <h1 className="text-3xl font-bold text-foreground mt-2">
              True Cost of Study Calculator
            </h1>
          </div>

          {!showResult ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                calculate();
              }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Annual Costs (R)
                </h2>
                <div className="space-y-4">
                  {costFields.map(({ key, label }) => (
                    <div key={key}>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        {label}
                      </label>
                      <input
                        type="number"
                        min="0"
                        value={data[key as keyof typeof data]}
                        onChange={(e) => update(key, Number(e.target.value))}
                        className="w-full border border-border rounded-lg px-4 py-2 text-foreground"
                        placeholder="0"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-border pt-8">
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Monthly Support (R)
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Household Contribution (per month)
                    </label>
                    <input
                      type="number"
                      min="0"
                      value={data.income}
                      onChange={(e) => update('income', Number(e.target.value))}
                      className="w-full border border-border rounded-lg px-4 py-2 text-foreground"
                      placeholder="0"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      External Support / Funding (per month)
                    </label>
                    <input
                      type="number"
                      min="0"
                      value={data.support}
                      onChange={(e) => update('support', Number(e.target.value))}
                      className="w-full border border-border rounded-lg px-4 py-2 text-foreground"
                      placeholder="0"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:opacity-90 transition-opacity font-semibold text-lg"
              >
                Calculate
              </button>
            </form>
          ) : result ? (
            <div className="space-y-8">
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-sm text-muted-foreground mb-2">
                  Affordability Status
                </p>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  {result.affordability}
                </h2>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">
                      Annual Cost
                    </p>
                    <p className="text-2xl font-bold text-foreground">
                      R {result.totalAnnual.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">
                      Monthly Cost
                    </p>
                    <p className="text-2xl font-bold text-foreground">
                      R {result.monthlyCost.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">
                      Monthly Support
                    </p>
                    <p className="text-2xl font-bold text-foreground">
                      R {result.availableMonthly.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">
                      Monthly Gap
                    </p>
                    <p
                      className={`text-2xl font-bold ${
                        result.gap <= 0
                          ? 'text-green-600'
                          : 'text-red-600'
                      }`}
                    >
                      {result.gap > 0 ? '+' : ''}R{result.gap.toLocaleString()}
                    </p>
                  </div>
                </div>

                {result.gap > 0 && (
                  <div className="text-sm text-muted-foreground">
                    You have a monthly shortfall of R{result.gap.toLocaleString()}. This needs to be covered by additional savings, part-time work, or additional funding.
                  </div>
                )}
              </div>

              {result.flags.length > 0 && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <p className="text-sm font-semibold text-yellow-900 mb-3">
                    Cost Warnings
                  </p>
                  <ul className="space-y-2">
                    {result.flags.map((flag, i) => (
                      <li key={i} className="flex gap-2 text-sm text-yellow-800">
                        <span>⚠</span>
                        <span>{flag}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Recommended Next Steps
                </h3>
                <ul className="space-y-2">
                  {getCostNextSteps(result.affordability).map((step, i) => (
                    <li key={i} className="flex gap-3 text-foreground">
                      <span className="text-primary font-bold">→</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-border pt-8 space-y-3">
                <Link
                  href="/tools/route-compare"
                  className="block w-full bg-primary text-primary-foreground py-3 rounded-lg hover:opacity-90 transition-opacity font-semibold text-center"
                >
                  Continue to Route Compare →
                </Link>
                <button
                  onClick={() => {
                    // Clear session and persisted data
                    sessionStorage.removeItem('dharma_cost_calculator_started');
                    localStorage.removeItem('dharma_cost_calculator');
                    
                    setShowResult(false);
                    setResult(null);
                    setData({
                      tuition: 0,
                      accommodation: 0,
                      transport: 0,
                      food: 0,
                      devices: 0,
                      dataCost: 0,
                      personal: 0,
                      other: 0,
                      income: 0,
                      support: 0,
                    });
                  }}
                  className="w-full border border-border text-foreground py-3 rounded-lg hover:bg-card transition-colors font-semibold"
                >
                  Recalculate
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
