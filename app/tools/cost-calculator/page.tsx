'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Link from 'next/link';

interface CostResult {
  totalAnnual: number;
  monthlyCost: number;
  availableMonthly: number;
  gap: number;
  affordability: string;
  flags: string[];
}

export default function CostCalculator() {
  const [data, setData] = useState({
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
    const saved = localStorage.getItem('dharma_cost_calculator');
    if (saved) {
      setResult(JSON.parse(saved));
      setShowResult(true);
    }
  }, []);

  const update = (field: string, value: number) => {
    setData({ ...data, [field]: value });
  };

  const calculate = () => {
    const totalAnnual =
      data.tuition +
      data.accommodation +
      data.transport +
      data.food +
      data.devices +
      data.dataCost +
      data.personal +
      data.other;

    const monthlyCost = Math.round(totalAnnual / 12);
    const availableMonthly = data.income + data.support;
    const gap = monthlyCost - availableMonthly;

    let affordability = 'Affordable';
    if (gap > 5000) affordability = 'Not Sustainable';
    else if (gap > 2000) affordability = 'High Risk';
    else if (gap > 0) affordability = 'Tight';

    const flags: string[] = [];
    if (data.devices < 5000 && data.devices > 0)
      flags.push('Device costs may be underestimated');
    if (data.dataCost < 200 && data.dataCost > 0)
      flags.push('Data costs may be underestimated');
    if (data.food < 1500 && data.food > 0)
      flags.push('Food costs may be underestimated');
    if (totalAnnual === 0)
      flags.push('No costs entered yet');

    const finalResult: CostResult = {
      totalAnnual,
      monthlyCost,
      availableMonthly,
      gap,
      affordability,
      flags,
    };

    setResult(finalResult);
    localStorage.setItem('dharma_cost_calculator', JSON.stringify(finalResult));
    setShowResult(true);
  };

  const getNextSteps = (affordability: string): string[] => {
    if (affordability === 'Not Sustainable')
      return [
        'Do not commit to this option without significant changes',
        'Explore lower-cost alternatives urgently',
        'Compare safer routes immediately',
      ];

    if (affordability === 'High Risk')
      return [
        'Proceed with extreme caution',
        'Secure additional support before committing',
        'Stress-test other options',
      ];

    if (affordability === 'Tight')
      return [
        'Plan carefully for unexpected costs',
        'Keep a financial buffer of at least 3 months',
        'Review all expenses quarterly',
      ];

    return [
      'Continue planning confidently',
      'Validate all assumptions',
      'Ensure long-term sustainability',
    ];
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
      <Navbar />

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
                  {getNextSteps(result.affordability).map((step, i) => (
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
