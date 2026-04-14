# Dharma Institute of Purpose — Developer Handoff (Single File)

This file consolidates the website code and implementation snippets created so far into one place.
It is intended as a handoff reference for a developer.

## Recommended stack
- Next.js
- React
- Tailwind CSS
- Nodemailer
- jsPDF

---

# 1. PROJECT STRUCTURE

```text
dharma-institute/
├── app/
│   ├── layout.js
│   ├── globals.css
│   ├── page.js
│   ├── start/page.js
│   ├── summary/page.js
│   ├── about/page.js
│   ├── contact/page.js
│   ├── intake/page.js
│   ├── schedule/page.js
│   ├── tools/
│   │   ├── page.js
│   │   ├── reality-check/page.js
│   │   ├── cost-calculator/page.js
│   │   ├── route-compare/page.js
│   │   ├── fit-check/page.js
│   ├── api/
│   │   ├── send-booking/route.js
│   │   ├── send-intake/route.js
│   │   └── send-schedule/route.js
├── components/
│   ├── Navbar.js
│   ├── Footer.js
│   └── ToolCard.js
├── package.json
├── tailwind.config.js
└── .env.local
```

---

# 2. PACKAGE CONFIGURATION — WHAT IT DOES
Sets up the website dependencies and scripts.

## File: `package.json`
```json
{
  "name": "dharma-institute",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "jspdf": "^2.5.1",
    "next": "latest",
    "nodemailer": "^6.9.13",
    "react": "latest",
    "react-dom": "latest"
  },
  "devDependencies": {
    "autoprefixer": "^10.4.19",
    "postcss": "^8.4.38",
    "tailwindcss": "^3.4.4"
  }
}
```

---

# 3. TAILWIND CONFIG — WHAT IT DOES
Allows Tailwind utility classes across the website.

## File: `tailwind.config.js`
```js
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

---

# 4. GLOBAL STYLES — WHAT IT DOES
Defines shared styles like body font, button styling, and input styling.

## File: `app/globals.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  font-family: system-ui, sans-serif;
}

.btn {
  background: black;
  color: white;
  padding: 10px 16px;
  border-radius: 8px;
  display: inline-block;
}

.input {
  border: 1px solid #ddd;
  padding: 10px;
  width: 100%;
  margin-bottom: 12px;
  border-radius: 8px;
}
```

---

# 5. ROOT LAYOUT — WHAT IT DOES
Wraps the whole website with the Navbar and Footer.

## File: `app/layout.js`
```js
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Dharma Institute of Purpose",
  description: "Where opportunity meets direction"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

---

# 6. NAVBAR — WHAT IT DOES
Provides top navigation across the website.

## File: `components/Navbar.js`
```js
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-4 border-b flex justify-between">
      <h1 className="font-bold">Dharma</h1>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/tools">Tools</Link>
        <Link href="/summary">Summary</Link>
        <Link href="/schedule">Schedule</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
```

---

# 7. FOOTER — WHAT IT DOES
Displays basic branding in the website footer.

## File: `components/Footer.js`
```js
export default function Footer() {
  return (
    <footer className="p-6 border-t mt-10 text-center text-sm">
      <p>Dharma Institute of Purpose</p>
      <p>Where opportunity meets direction</p>
    </footer>
  );
}
```

---

# 8. TOOL CARD COMPONENT — WHAT IT DOES
Reusable card for the Tools page and homepage tool listing.

## File: `components/ToolCard.js`
```js
import Link from "next/link";

export default function ToolCard({ title, desc, link }) {
  return (
    <div className="border p-5 rounded-xl shadow-sm">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm mb-4">{desc}</p>
      <Link href={link} className="text-blue-600">
        Start →
      </Link>
    </div>
  );
}
```

---

# 9. HOMEPAGE — WHAT IT DOES
Main landing page for Dharma Institute of Purpose.

## File: `app/page.js`
```js
import Link from "next/link";
import ToolCard from "../components/ToolCard";

export default function Home() {
  return (
    <div className="p-8 max-w-5xl mx-auto">
      <section className="mb-12">
        <h1 className="text-3xl font-bold mb-2">
          Dharma Institute of Purpose
        </h1>
        <p className="text-lg mb-4">
          Where opportunity meets direction
        </p>
        <p className="mb-6">
          Helping students and families make clearer, safer,
          and more affordable education decisions.
        </p>

        <div className="space-x-4">
          <Link href="/tools/reality-check" className="bg-black text-white px-4 py-2 rounded">
            Start Reality Check
          </Link>
          <Link href="/tools" className="border px-4 py-2 rounded">
            Explore Tools
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Our Tools</h2>

        <div className="grid md:grid-cols-2 gap-4">
          <ToolCard
            title="Missing Middle Reality Check"
            desc="Understand your real affordability pressure"
            link="/tools/reality-check"
          />
          <ToolCard
            title="True Cost Calculator"
            desc="See the full cost of study"
            link="/tools/cost-calculator"
          />
          <ToolCard
            title="Safer Route Compare"
            desc="Compare your options"
            link="/tools/route-compare"
          />
          <ToolCard
            title="Career Fit"
            desc="Find a path that suits you"
            link="/tools/fit-check"
          />
        </div>
      </section>

      <section className="mt-12 p-6 border rounded-xl">
        <h2 className="text-xl font-semibold mb-3">
          Not sure where to start?
        </h2>

        <p className="mb-4">
          Follow our guided journey to understand your options step by step.
        </p>

        <Link href="/start" className="btn">
          Start Guided Journey
        </Link>
      </section>
    </div>
  );
}
```

---

# 10. TOOLS HUB PAGE — WHAT IT DOES
Lists all four core tools.

## File: `app/tools/page.js`
```js
import ToolCard from "../../components/ToolCard";

export default function Tools() {
  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Tools</h1>

      <div className="grid md:grid-cols-2 gap-4">
        <ToolCard title="Reality Check" desc="Check pressure" link="/tools/reality-check" />
        <ToolCard title="Cost Calculator" desc="True cost" link="/tools/cost-calculator" />
        <ToolCard title="Route Compare" desc="Compare paths" link="/tools/route-compare" />
        <ToolCard title="Career Fit" desc="Find direction" link="/tools/fit-check" />
      </div>
    </div>
  );
}
```

---

# 11. START JOURNEY PAGE — WHAT IT DOES
Entry page for the guided website journey.

## File: `app/start/page.js`
```js
import Link from "next/link";

export default function StartJourney() {
  return (
    <div className="p-8 max-w-3xl mx-auto text-center">
      <h1 className="text-2xl font-bold mb-4">
        Start Your Decision Journey
      </h1>

      <p className="mb-6">
        This guided process will help you understand your affordability,
        explore your options, and choose a safer path forward.
      </p>

      <div className="space-y-4 text-left mb-8">
        <p>Step 1: Understand your financial pressure</p>
        <p>Step 2: Calculate the true cost of study</p>
        <p>Step 3: Compare safer options</p>
        <p>Step 4: Check your career fit</p>
      </div>

      <Link href="/tools/reality-check" className="btn">
        Begin Journey
      </Link>
    </div>
  );
}
```

---

# 12. TOOL 1 — MISSING MIDDLE REALITY CHECK — WHAT IT DOES
Multi-step pressure assessment with weighted scoring, drivers, next steps, and localStorage save.

## File: `app/tools/reality-check/page.js`
```js
"use client";

import { useState } from "react";

export default function RealityCheck() {
  const [step, setStep] = useState(1);

  const [data, setData] = useState({
    income: 0,
    dependents: 0,
    expenses: 0,
    debt: false,
    studyCost: 0,
    support: "none"
  });

  const [result, setResult] = useState(null);

  const update = (field, value) => {
    setData({ ...data, [field]: value });
  };

  const calculateScores = () => {
    let breakdown = {
      household: 0,
      financial: 0,
      study: 0,
      support: 0
    };

    if (data.income < 10000) breakdown.household += 80;
    else if (data.income < 20000) breakdown.household += 60;
    else if (data.income < 35000) breakdown.household += 40;
    else breakdown.household += 20;

    if (data.dependents >= 4) breakdown.household += 20;
    else if (data.dependents >= 2) breakdown.household += 10;

    breakdown.household = Math.min(breakdown.household, 100);

    const ratio = data.income > 0 ? data.expenses / data.income : 1;

    if (ratio > 0.8) breakdown.financial += 80;
    else if (ratio > 0.6) breakdown.financial += 60;
    else breakdown.financial += 30;

    if (data.debt) breakdown.financial += 20;

    breakdown.financial = Math.min(breakdown.financial, 100);

    if (data.studyCost > 80000) breakdown.study += 80;
    else if (data.studyCost > 40000) breakdown.study += 60;
    else breakdown.study += 30;

    if (data.support === "none") breakdown.support = 100;
    else if (data.support === "partial") breakdown.support = 60;
    else breakdown.support = 20;

    const total =
      breakdown.household * 0.25 +
      breakdown.financial * 0.3 +
      breakdown.study * 0.25 +
      breakdown.support * 0.2;

    return { breakdown, total };
  };

  const getCategory = (score) => {
    if (score < 30) return "More Stable";
    if (score < 50) return "Vulnerable";
    if (score < 70) return "Pressured";
    if (score < 85) return "Highly Pressured";
    return "Severely Pressured";
  };

  const detectMissingMiddle = () => {
    const ratio = data.income > 0 ? data.expenses / data.income : 1;
    return (
      data.income >= 15000 &&
      data.income <= 40000 &&
      data.support !== "full" &&
      ratio > 0.6
    );
  };

  const getDrivers = (breakdown) => {
    let drivers = [];

    if (breakdown.financial > 70)
      drivers.push("High monthly expenses relative to income");

    if (breakdown.study > 60)
      drivers.push("High study cost burden");

    if (breakdown.support > 70)
      drivers.push("Limited or no confirmed support");

    if (data.debt)
      drivers.push("Existing debt commitments increasing pressure");

    if (data.dependents >= 3)
      drivers.push("Multiple dependents increasing household pressure");

    return drivers;
  };

  const getNextSteps = (category) => {
    if (category === "Severely Pressured")
      return [
        "Avoid committing to high-cost study options immediately",
        "Explore lower-cost or step-in pathways",
        "Seek guidance before making financial commitments"
      ];

    if (category === "Highly Pressured")
      return [
        "Compare safer, lower-cost study routes",
        "Confirm support before committing",
        "Stress-test affordability using cost calculator"
      ];

    if (category === "Pressured")
      return [
        "Carefully compare multiple options",
        "Plan for hidden costs",
        "Avoid overcommitting financially"
      ];

    return [
      "Continue planning carefully",
      "Validate affordability with full cost breakdown",
      "Ensure chosen path aligns with your goals"
    ];
  };

  const handleSubmit = () => {
    const { breakdown, total } = calculateScores();
    const category = getCategory(total);
    const missingMiddle = detectMissingMiddle();
    const drivers = getDrivers(breakdown);
    const nextSteps = getNextSteps(category);

    const finalResult = {
      breakdown,
      total: Math.round(total),
      category,
      missingMiddle,
      drivers,
      nextSteps
    };

    setResult(finalResult);
    localStorage.setItem("dharma_reality_check", JSON.stringify(finalResult));
    setStep(5);
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <p className="text-sm text-gray-500 mb-4">Step 1 of 4</p>
      <h1 className="text-xl font-bold mb-6">
        Missing Middle Reality Check
      </h1>

      {step === 1 && (
        <>
          <h2 className="mb-4">Household Profile</h2>
          <input type="number" placeholder="Monthly Income (R)" className="input" onChange={(e) => update("income", Number(e.target.value))}/>
          <input type="number" placeholder="Dependents" className="input" onChange={(e) => update("dependents", Number(e.target.value))}/>
          <button onClick={() => setStep(2)} className="btn">Next</button>
        </>
      )}

      {step === 2 && (
        <>
          <h2 className="mb-4">Financial Pressure</h2>
          <input type="number" placeholder="Monthly Expenses (R)" className="input" onChange={(e) => update("expenses", Number(e.target.value))}/>
          <label className="block mb-3">
            <input type="checkbox" onChange={(e) => update("debt", e.target.checked)}/>
            Under debt / debt review
          </label>
          <button onClick={() => setStep(3)} className="btn">Next</button>
        </>
      )}

      {step === 3 && (
        <>
          <h2 className="mb-4">Study Plan</h2>
          <input type="number" placeholder="Estimated Study Cost (R/year)" className="input" onChange={(e) => update("studyCost", Number(e.target.value))}/>
          <button onClick={() => setStep(4)} className="btn">Next</button>
        </>
      )}

      {step === 4 && (
        <>
          <h2 className="mb-4">Support</h2>
          <select className="input" onChange={(e) => update("support", e.target.value)}>
            <option value="none">No confirmed support</option>
            <option value="partial">Some support</option>
            <option value="full">Full support</option>
          </select>
          <button onClick={handleSubmit} className="btn">See Results</button>
        </>
      )}

      {step === 5 && result && (
        <>
          <h2 className="mb-4">Your Result</h2>

          <p className="text-xl font-bold">{result.category}</p>
          <p className="mb-4">Score: {result.total}/100</p>

          {result.missingMiddle && (
            <p className="text-orange-600 mb-4">
              Missing-middle pattern likely: your income may appear sufficient on paper, but real-life pressure is high.
            </p>
          )}

          <h3 className="font-semibold mt-4">Key Pressure Drivers</h3>
          <ul className="list-disc ml-5">
            {result.drivers.map((d, i) => <li key={i}>{d}</li>)}
          </ul>

          <h3 className="font-semibold mt-4">Next Steps</h3>
          <ul className="list-disc ml-5">
            {result.nextSteps.map((s, i) => <li key={i}>{s}</li>)}
          </ul>

          <h3 className="font-semibold mt-4">Breakdown</h3>
          <p>Household: {result.breakdown.household}</p>
          <p>Financial: {result.breakdown.financial}</p>
          <p>Study: {result.breakdown.study}</p>
          <p>Support: {result.breakdown.support}</p>

          <div className="mt-6 space-x-3">
            <a href="/tools/cost-calculator" className="btn">
              Continue → Calculate True Cost
            </a>
          </div>

          <button onClick={() => setStep(1)} className="btn mt-4">
            Restart
          </button>
        </>
      )}
    </div>
  );
}
```

---

# 13. TOOL 2 — TRUE COST OF STUDY CALCULATOR — WHAT IT DOES
Calculates full cost, monthly cost, gap, affordability, flags, and saves result.

## File: `app/tools/cost-calculator/page.js`
```js
"use client";

import { useState } from "react";

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
    support: 0
  });

  const [result, setResult] = useState(null);

  const update = (field, value) => {
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

    let affordability;
    if (gap <= 0) affordability = "Affordable";
    else if (gap < 2000) affordability = "Tight";
    else if (gap < 5000) affordability = "High Risk";
    else affordability = "Not Sustainable";

    let flags = [];
    if (data.devices < 5000) flags.push("Device costs may be underestimated");
    if (data.dataCost < 200) flags.push("Data costs may be underestimated");
    if (data.food < 1500) flags.push("Food costs may be underestimated");

    const finalResult = {
      totalAnnual,
      monthlyCost,
      availableMonthly,
      gap,
      affordability,
      flags
    };

    setResult(finalResult);
    localStorage.setItem("dharma_cost_calculator", JSON.stringify(finalResult));
  };

  const getNextSteps = (affordability) => {
    if (affordability === "Not Sustainable")
      return [
        "Do not commit to this option without changes",
        "Explore lower-cost alternatives",
        "Compare safer routes"
      ];

    if (affordability === "High Risk")
      return [
        "Proceed with caution",
        "Secure additional support before committing",
        "Stress-test other options"
      ];

    if (affordability === "Tight")
      return [
        "Plan carefully for unexpected costs",
        "Keep a financial buffer",
        "Review all expenses"
      ];

    return [
      "Continue planning",
      "Validate assumptions",
      "Ensure long-term sustainability"
    ];
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <p className="text-sm text-gray-500 mb-4">Step 2 of 4</p>
      <h1 className="text-xl font-bold mb-6">
        True Cost of Study Calculator
      </h1>

      <h2 className="mb-2 font-semibold">Annual Costs (R)</h2>

      {[
        ["tuition", "Tuition Fees"],
        ["accommodation", "Accommodation"],
        ["transport", "Transport"],
        ["food", "Food"],
        ["devices", "Devices (Laptop etc.)"],
        ["dataCost", "Data / Internet"],
        ["personal", "Personal Expenses"],
        ["other", "Other Costs"]
      ].map(([field, label]) => (
        <input
          key={field}
          type="number"
          placeholder={label}
          className="input"
          onChange={(e) => update(field, Number(e.target.value))}
        />
      ))}

      <h2 className="mt-4 mb-2 font-semibold">Monthly Support (R)</h2>

      <input
        type="number"
        placeholder="Household Contribution"
        className="input"
        onChange={(e) => update("income", Number(e.target.value))}
      />

      <input
        type="number"
        placeholder="External Support / Funding"
        className="input"
        onChange={(e) => update("support", Number(e.target.value))}
      />

      <button onClick={calculate} className="btn">
        Calculate
      </button>

      {result && (
        <div className="mt-6">
          <h2 className="font-semibold text-lg mb-2">Results</h2>

          <p>Total Annual Cost: R{result.totalAnnual}</p>
          <p>Estimated Monthly Cost: R{result.monthlyCost}</p>
          <p className="mt-2">Available Monthly: R{result.availableMonthly}</p>
          <p className="mt-2 font-semibold">Gap: R{result.gap}</p>
          <p className="mt-2 text-lg font-bold">{result.affordability}</p>

          {result.flags.length > 0 && (
            <>
              <h3 className="mt-4 font-semibold">Check These</h3>
              <ul className="list-disc ml-5">
                {result.flags.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </>
          )}

          <h3 className="mt-4 font-semibold">Next Steps</h3>
          <ul className="list-disc ml-5">
            {getNextSteps(result.affordability).map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>

          <div className="mt-6 space-x-3">
            <a href="/tools/route-compare" className="btn">
              Continue → Compare Routes
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
```

---

# 14. TOOL 3 — SAFER ROUTE COMPARE — WHAT IT DOES
Compares two options, scores them, detects safer route, and saves result.

## File: `app/tools/route-compare/page.js`
```js
"use client";

import { useState } from "react";

export default function RouteCompare() {
  const [optionA, setOptionA] = useState({
    name: "Option A",
    cost: 0,
    duration: 0,
    support: "none",
    certainty: "low"
  });

  const [optionB, setOptionB] = useState({
    name: "Option B",
    cost: 0,
    duration: 0,
    support: "none",
    certainty: "low"
  });

  const [result, setResult] = useState(null);

  const update = (option, field, value) => {
    if (option === "A") {
      setOptionA({ ...optionA, [field]: value });
    } else {
      setOptionB({ ...optionB, [field]: value });
    }
  };

  const scoreOption = (opt) => {
    let score = 0;

    if (opt.cost > 80000) score += 30;
    else if (opt.cost > 40000) score += 20;
    else score += 10;

    if (opt.duration >= 4) score += 20;
    else if (opt.duration >= 2) score += 10;
    else score += 5;

    if (opt.support === "none") score += 25;
    else if (opt.support === "partial") score += 15;
    else score += 5;

    if (opt.certainty === "low") score += 25;
    else if (opt.certainty === "medium") score += 15;
    else score += 5;

    return score;
  };

  const getRiskLevel = (score) => {
    if (score < 30) return "Low Risk";
    if (score < 60) return "Moderate Risk";
    if (score < 85) return "High Risk";
    return "Very High Risk";
  };

  const getDrivers = (opt) => {
    let drivers = [];
    if (opt.cost > 60000) drivers.push("High cost");
    if (opt.support === "none") drivers.push("No confirmed support");
    if (opt.certainty === "low") drivers.push("Uncertain outcome");
    if (opt.duration >= 4) drivers.push("Long duration before income");
    return drivers;
  };

  const compare = () => {
    const scoreA = scoreOption(optionA);
    const scoreB = scoreOption(optionB);
    const safer = scoreA < scoreB ? "A" : "B";

    const finalResult = {
      scoreA,
      scoreB,
      riskA: getRiskLevel(scoreA),
      riskB: getRiskLevel(scoreB),
      driversA: getDrivers(optionA),
      driversB: getDrivers(optionB),
      safer,
      optionAName: optionA.name,
      optionBName: optionB.name
    };

    setResult(finalResult);
    localStorage.setItem("dharma_route_compare", JSON.stringify(finalResult));
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <p className="text-sm text-gray-500 mb-4">Step 3 of 4</p>
      <h1 className="text-xl font-bold mb-6">
        Safer Route Compare
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h2 className="font-semibold mb-2">Option A</h2>
          <input className="input" placeholder="Name" onChange={(e)=>update("A","name",e.target.value)} />
          <input className="input" type="number" placeholder="Annual Cost (R)" onChange={(e)=>update("A","cost",Number(e.target.value))} />
          <input className="input" type="number" placeholder="Duration (years)" onChange={(e)=>update("A","duration",Number(e.target.value))} />
          <select className="input" onChange={(e)=>update("A","support",e.target.value)}>
            <option value="none">No support</option>
            <option value="partial">Partial support</option>
            <option value="full">Full support</option>
          </select>
          <select className="input" onChange={(e)=>update("A","certainty",e.target.value)}>
            <option value="low">Low outcome certainty</option>
            <option value="medium">Medium certainty</option>
            <option value="high">High certainty</option>
          </select>
        </div>

        <div>
          <h2 className="font-semibold mb-2">Option B</h2>
          <input className="input" placeholder="Name" onChange={(e)=>update("B","name",e.target.value)} />
          <input className="input" type="number" placeholder="Annual Cost (R)" onChange={(e)=>update("B","cost",Number(e.target.value))} />
          <input className="input" type="number" placeholder="Duration (years)" onChange={(e)=>update("B","duration",Number(e.target.value))} />
          <select className="input" onChange={(e)=>update("B","support",e.target.value)}>
            <option value="none">No support</option>
            <option value="partial">Partial support</option>
            <option value="full">Full support</option>
          </select>
          <select className="input" onChange={(e)=>update("B","certainty",e.target.value)}>
            <option value="low">Low outcome certainty</option>
            <option value="medium">Medium certainty</option>
            <option value="high">High certainty</option>
          </select>
        </div>
      </div>

      <button onClick={compare} className="btn mt-6">
        Compare Options
      </button>

      {result && (
        <div className="mt-8">
          <h2 className="font-semibold text-lg mb-4">Results</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold">{optionA.name || "Option A"}</h3>
              <p>Score: {result.scoreA}</p>
              <p>{result.riskA}</p>
              <ul className="list-disc ml-5 mt-2">
                {result.driversA.map((d,i)=><li key={i}>{d}</li>)}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">{optionB.name || "Option B"}</h3>
              <p>Score: {result.scoreB}</p>
              <p>{result.riskB}</p>
              <ul className="list-disc ml-5 mt-2">
                {result.driversB.map((d,i)=><li key={i}>{d}</li>)}
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 border rounded-lg">
            <h3 className="font-bold">
              Safer Route: {result.safer === "A" ? optionA.name : optionB.name}
            </h3>
            <p>
              This option carries lower overall financial and outcome risk based on your inputs.
            </p>
          </div>

          <div className="mt-6 space-x-3">
            <a href="/tools/fit-check" className="btn">
              Continue → Check Career Fit
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
```

---

# 15. TOOL 4 — CAREER FIT CHECK — WHAT IT DOES
Maps interest and work-style preferences into fit clusters and saves result.

## File: `app/tools/fit-check/page.js`
```js
"use client";

import { useState } from "react";

export default function FitCheck() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    people: 0,
    numbers: 0,
    creative: 0,
    practical: 0,
    structure: 0,
    independence: 0
  });

  const [result, setResult] = useState(null);

  const update = (field, value) => {
    setAnswers({ ...answers, [field]: value });
  };

  const calculateFit = () => {
    let clusters = {
      analytical: answers.numbers + answers.structure,
      people: answers.people,
      creative: answers.creative,
      practical: answers.practical,
      independent: answers.independence
    };

    const sorted = Object.entries(clusters).sort((a, b) => b[1] - a[1]);
    const primary = sorted[0][0];
    const secondary = sorted[1][0];

    return { clusters, primary, secondary };
  };

  const getPathways = (type) => {
    const map = {
      analytical: ["Finance", "Engineering", "Data / IT"],
      people: ["Teaching", "HR", "Social services"],
      creative: ["Design", "Media", "Marketing"],
      practical: ["Trades", "Technical fields", "Logistics"],
      independent: ["Entrepreneurship", "Freelance", "Consulting"]
    };

    return map[type] || [];
  };

  const getWarnings = (primary) => {
    if (primary === "creative")
      return ["Highly structured or rigid study paths may feel limiting"];

    if (primary === "independent")
      return ["Long academic pathways may feel restrictive"];

    if (primary === "analytical")
      return ["Unstructured or vague paths may feel frustrating"];

    return [];
  };

  const handleSubmit = () => {
    const { clusters, primary, secondary } = calculateFit();

    const finalResult = {
      clusters,
      primary,
      secondary,
      pathways: getPathways(primary),
      warnings: getWarnings(primary)
    };

    setResult(finalResult);
    localStorage.setItem("dharma_fit_check", JSON.stringify(finalResult));
    setStep(4);
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <p className="text-sm text-gray-500 mb-4">Step 4 of 4</p>
      <h1 className="text-xl font-bold mb-6">
        Career Interest + Personality Fit
      </h1>

      {step === 1 && (
        <>
          <h2 className="mb-4">What do you enjoy?</h2>

          <label>Working with people</label>
          <input type="range" min="0" max="10" className="w-full mb-3"
            onChange={(e)=>update("people", Number(e.target.value))}/>

          <label>Working with numbers/data</label>
          <input type="range" min="0" max="10" className="w-full mb-3"
            onChange={(e)=>update("numbers", Number(e.target.value))}/>

          <label>Creative activities</label>
          <input type="range" min="0" max="10" className="w-full mb-3"
            onChange={(e)=>update("creative", Number(e.target.value))}/>

          <button onClick={()=>setStep(2)} className="btn">Next</button>
        </>
      )}

      {step === 2 && (
        <>
          <h2 className="mb-4">How do you prefer to work?</h2>

          <label>Hands-on / practical work</label>
          <input type="range" min="0" max="10" className="w-full mb-3"
            onChange={(e)=>update("practical", Number(e.target.value))}/>

          <label>Structured environments</label>
          <input type="range" min="0" max="10" className="w-full mb-3"
            onChange={(e)=>update("structure", Number(e.target.value))}/>

          <label>Working independently</label>
          <input type="range" min="0" max="10" className="w-full mb-3"
            onChange={(e)=>update("independence", Number(e.target.value))}/>

          <button onClick={()=>setStep(3)} className="btn">Next</button>
        </>
      )}

      {step === 3 && (
        <>
          <h2 className="mb-4">Confirm your responses</h2>
          <button onClick={handleSubmit} className="btn">
            See Results
          </button>
        </>
      )}

      {step === 4 && result && (
        <>
          <h2 className="mb-4">Your Fit Profile</h2>

          <p className="font-semibold">
            Primary: {result.primary}
          </p>
          <p className="mb-4">
            Secondary: {result.secondary}
          </p>

          <h3 className="font-semibold">Suggested Pathways</h3>
          <ul className="list-disc ml-5">
            {result.pathways.map((p,i)=><li key={i}>{p}</li>)}
          </ul>

          {result.warnings.length > 0 && (
            <>
              <h3 className="font-semibold mt-4">Things to consider</h3>
              <ul className="list-disc ml-5">
                {result.warnings.map((w,i)=><li key={i}>{w}</li>)}
              </ul>
            </>
          )}

          <h3 className="font-semibold mt-4">Next Steps</h3>
          <ul className="list-disc ml-5">
            <li>Compare study pathways that match your fit</li>
            <li>Check affordability before committing</li>
            <li>Speak to someone in this field</li>
          </ul>

          <div className="mt-6 space-x-3">
            <a href="/summary" className="btn">
              View Full Summary Report
            </a>
          </div>

          <button onClick={()=>setStep(1)} className="btn mt-4">
            Restart
          </button>
        </>
      )}
    </div>
  );
}
```

---

# 16. SUMMARY REPORT PAGE — WHAT IT DOES
Reads all saved tool results from localStorage, combines them, exports PDF, and recommends next action.

## File: `app/summary/page.js`
```js
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import jsPDF from "jspdf";

export default function SummaryPage() {
  const [summary, setSummary] = useState({
    reality: null,
    cost: null,
    compare: null,
    fit: null
  });

  useEffect(() => {
    const reality = localStorage.getItem("dharma_reality_check");
    const cost = localStorage.getItem("dharma_cost_calculator");
    const compare = localStorage.getItem("dharma_route_compare");
    const fit = localStorage.getItem("dharma_fit_check");

    setSummary({
      reality: reality ? JSON.parse(reality) : null,
      cost: cost ? JSON.parse(cost) : null,
      compare: compare ? JSON.parse(compare) : null,
      fit: fit ? JSON.parse(fit) : null
    });
  }, []);

  const getOverallSignal = () => {
    if (!summary.reality && !summary.cost && !summary.compare && !summary.fit) {
      return "No results available yet";
    }

    const pressure = summary.reality?.category;
    const affordability = summary.cost?.affordability;
    const saferRoute =
      summary.compare?.safer === "A"
        ? summary.compare?.optionAName || "Option A"
        : summary.compare?.optionBName || "Option B";

    if (
      pressure === "Severely Pressured" ||
      affordability === "Not Sustainable"
    ) {
      return "High caution: your current situation suggests you should pause and review safer, lower-pressure options before committing.";
    }

    if (
      pressure === "Highly Pressured" ||
      affordability === "High Risk"
    ) {
      return "Proceed carefully: your results suggest that affordability and sustainability need stronger planning before any commitment.";
    }

    return `You appear to be in a more manageable planning zone overall. ${
      saferRoute ? `The current safer route appears to be ${saferRoute}.` : ""
    }`;
  };

  const getRecommendedAction = () => {
    const pressure = summary.reality?.category;
    const affordability = summary.cost?.affordability;

    if (
      pressure === "Severely Pressured" ||
      affordability === "Not Sustainable"
    ) {
      return "Book a guidance session before making a final education commitment.";
    }

    if (
      pressure === "Highly Pressured" ||
      affordability === "High Risk" ||
      affordability === "Tight"
    ) {
      return "Use this report to compare lower-cost routes and consider booking guidance.";
    }

    return "Double-check your assumptions, compare options carefully, and proceed with planning.";
  };

  const clearResults = () => {
    localStorage.removeItem("dharma_reality_check");
    localStorage.removeItem("dharma_cost_calculator");
    localStorage.removeItem("dharma_route_compare");
    localStorage.removeItem("dharma_fit_check");
    window.location.reload();
  };

  const exportPdf = () => {
    const doc = new jsPDF();
    let y = 20;

    doc.setFontSize(18);
    doc.text("Dharma Institute of Purpose", 20, y);
    y += 10;

    doc.setFontSize(12);
    doc.text("Summary Report", 20, y);
    y += 10;

    const lines = [
      `Overall signal: ${getOverallSignal()}`,
      "",
      "1. Reality Check",
      `Pressure category: ${summary.reality?.category || "N/A"}`,
      `Score: ${summary.reality?.total || "N/A"}`,
      `Missing-middle pattern: ${summary.reality?.missingMiddle ? "Likely" : "Not flagged"}`,
      "",
      "2. True Cost of Study",
      `Total annual cost: R${summary.cost?.totalAnnual ?? "N/A"}`,
      `Monthly cost: R${summary.cost?.monthlyCost ?? "N/A"}`,
      `Available monthly support: R${summary.cost?.availableMonthly ?? "N/A"}`,
      `Affordability gap: R${summary.cost?.gap ?? "N/A"}`,
      `Affordability signal: ${summary.cost?.affordability || "N/A"}`,
      "",
      "3. Safer Route Compare",
      `Safer route: ${
        summary.compare
          ? summary.compare.safer === "A"
            ? summary.compare.optionAName || "Option A"
            : summary.compare.optionBName || "Option B"
          : "N/A"
      }`,
      `Option A risk: ${summary.compare?.riskA || "N/A"}`,
      `Option B risk: ${summary.compare?.riskB || "N/A"}`,
      "",
      "4. Career Interest + Fit",
      `Primary fit: ${summary.fit?.primary || "N/A"}`,
      `Secondary fit: ${summary.fit?.secondary || "N/A"}`,
      `Recommended next action: ${getRecommendedAction()}`
    ];

    lines.forEach((line) => {
      if (y > 270) {
        doc.addPage();
        y = 20;
      }
      doc.text(String(line), 20, y);
      y += 8;
    });

    doc.save("Dharma_Summary_Report.pdf");
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">
        Your Dharma Summary Report
      </h1>
      <p className="mb-6 text-gray-600">
        A combined view of your results across pressure, cost, route comparison, and personal fit.
      </p>

      <div className="border rounded-xl p-5 mb-6">
        <h2 className="text-lg font-semibold mb-2">Overall signal</h2>
        <p>{getOverallSignal()}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <section className="border rounded-xl p-5">
          <h2 className="font-semibold mb-3">1. Reality Check</h2>
          {summary.reality ? (
            <>
              <p><strong>Pressure category:</strong> {summary.reality.category}</p>
              <p><strong>Score:</strong> {summary.reality.total}/100</p>
              {summary.reality.missingMiddle && (
                <p className="mt-2 text-orange-600">
                  Missing-middle pattern likely
                </p>
              )}
              {summary.reality.drivers?.length > 0 && (
                <>
                  <h3 className="font-medium mt-3">Key drivers</h3>
                  <ul className="list-disc ml-5">
                    {summary.reality.drivers.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
            </>
          ) : (
            <p className="text-gray-500">No Reality Check result yet.</p>
          )}
        </section>

        <section className="border rounded-xl p-5">
          <h2 className="font-semibold mb-3">2. True Cost of Study</h2>
          {summary.cost ? (
            <>
              <p><strong>Total annual cost:</strong> R{summary.cost.totalAnnual}</p>
              <p><strong>Monthly cost:</strong> R{summary.cost.monthlyCost}</p>
              <p><strong>Available monthly support:</strong> R{summary.cost.availableMonthly}</p>
              <p><strong>Affordability gap:</strong> R{summary.cost.gap}</p>
              <p className="mt-2"><strong>Affordability:</strong> {summary.cost.affordability}</p>
              {summary.cost.flags?.length > 0 && (
                <>
                  <h3 className="font-medium mt-3">Cost warnings</h3>
                  <ul className="list-disc ml-5">
                    {summary.cost.flags.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
            </>
          ) : (
            <p className="text-gray-500">No Cost Calculator result yet.</p>
          )}
        </section>

        <section className="border rounded-xl p-5">
          <h2 className="font-semibold mb-3">3. Safer Route Compare</h2>
          {summary.compare ? (
            <>
              <p>
                <strong>Safer route:</strong>{" "}
                {summary.compare.safer === "A"
                  ? summary.compare.optionAName || "Option A"
                  : summary.compare.optionBName || "Option B"}
              </p>
              <p><strong>Option A risk:</strong> {summary.compare.riskA}</p>
              <p><strong>Option B risk:</strong> {summary.compare.riskB}</p>
            </>
          ) : (
            <p className="text-gray-500">No Route Compare result yet.</p>
          )}
        </section>

        <section className="border rounded-xl p-5">
          <h2 className="font-semibold mb-3">4. Career Interest + Fit</h2>
          {summary.fit ? (
            <>
              <p><strong>Primary fit:</strong> {summary.fit.primary}</p>
              <p><strong>Secondary fit:</strong> {summary.fit.secondary}</p>
              {summary.fit.pathways?.length > 0 && (
                <>
                  <h3 className="font-medium mt-3">Suggested directions</h3>
                  <ul className="list-disc ml-5">
                    {summary.fit.pathways.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
            </>
          ) : (
            <p className="text-gray-500">No Fit Check result yet.</p>
          )}
        </section>
      </div>

      <div className="border rounded-xl p-5 mt-6">
        <h2 className="text-lg font-semibold mb-2">Recommended next action</h2>
        <p>{getRecommendedAction()}</p>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/contact" className="btn">Book Guidance Session</Link>
        <Link href="/tools" className="btn">Return to Tools</Link>
        <button onClick={exportPdf} className="btn">Download PDF Report</button>
        <button onClick={clearResults} className="btn">Clear Results</button>
      </div>
    </div>
  );
}
```

---

# 17. BOOKING PAGE — WHAT IT DOES
Collects booking request details, validates minimum donation, sends booking request with summary, and links to scheduling and intake.

## File: `app/contact/page.js`
```js
"use client";

import { useState } from "react";

export default function BookingPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    type: "short",
    attendees: 1,
    donation: 0,
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const update = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const getMinimum = () => {
    if (form.type === "short") return 75;
    if (form.type === "standard") return 160;
    if (form.type === "group") return 300;
    return 0;
  };

  const validate = () => {
    return form.donation >= getMinimum();
  };

  const handleSubmit = async () => {
    if (form.type !== "corporate" && !validate()) {
      alert(`Minimum donation is R${getMinimum()}`);
      return;
    }

    const summary = {
      reality: JSON.parse(localStorage.getItem("dharma_reality_check") || "null"),
      cost: JSON.parse(localStorage.getItem("dharma_cost_calculator") || "null"),
      compare: JSON.parse(localStorage.getItem("dharma_route_compare") || "null"),
      fit: JSON.parse(localStorage.getItem("dharma_fit_check") || "null")
    };

    const payload = {
      ...form,
      summary
    };

    const res = await fetch("/api/send-booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      alert("There was a problem sending your booking request.");
      return;
    }

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-8 max-w-xl mx-auto text-center">
        <h1 className="text-xl font-bold mb-4">
          Booking Request Received
        </h1>
        <p className="mb-4">
          Thank you. We will contact you to confirm your session and next steps.
        </p>

        <div className="flex flex-col gap-3 items-center">
          <a href="/schedule" className="btn">
            Choose a Preferred Time Slot
          </a>
          <a href="/intake" className="btn">
            Complete Pre-Session Intake Form
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-xl font-bold mb-6">
        Book a Guidance Session
      </h1>

      <input
        className="input"
        placeholder="Full Name"
        onChange={(e) => update("name", e.target.value)}
      />

      <input
        className="input"
        placeholder="Email Address"
        onChange={(e) => update("email", e.target.value)}
      />

      <h2 className="mt-4 mb-2 font-semibold">Session Type</h2>

      <select
        className="input"
        onChange={(e) => update("type", e.target.value)}
      >
        <option value="short">Short Session (≤30 min) – Min R75</option>
        <option value="standard">Standard (1–2 hrs) – Min R160</option>
        <option value="group">Group (4+ people) – Min R300</option>
        <option value="corporate">School / Corporate</option>
      </select>

      {form.type === "group" && (
        <input
          type="number"
          className="input"
          placeholder="Number of attendees"
          onChange={(e) => update("attendees", Number(e.target.value))}
        />
      )}

      {form.type !== "corporate" && (
        <>
          <h2 className="mt-4 mb-2 font-semibold">
            Donation (R)
          </h2>

          <input
            type="number"
            className="input"
            placeholder={`Minimum R${getMinimum()}`}
            onChange={(e) => update("donation", Number(e.target.value))}
          />

          <p className="text-sm text-gray-500">
            This is a minimum donation. You may contribute more to support our work.
          </p>
        </>
      )}

      {form.type === "corporate" && (
        <p className="mt-4 text-sm">
          We will provide a customised, itemised quotation based on your needs.
        </p>
      )}

      <textarea
        className="input"
        placeholder="Additional details (optional)"
        onChange={(e) => update("message", e.target.value)}
      />

      <button onClick={handleSubmit} className="btn mt-4">
        Submit Booking Request
      </button>
    </div>
  );
}
```

---

# 18. INTAKE FORM PAGE — WHAT IT DOES
Collects pre-session details for admin preparation.

## File: `app/intake/page.js`
```js
"use client";

import { useState } from "react";

export default function IntakePage() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    bookingType: "",
    studentName: "",
    studentAge: "",
    currentStudyLevel: "",
    keyConcern: "",
    optionsConsidering: "",
    householdPressure: "",
    fundingSituation: "",
    mainQuestions: "",
    parentAttending: "no"
  });

  const [submitted, setSubmitted] = useState(false);

  const update = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = async () => {
    const res = await fetch("/api/send-intake", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    if (!res.ok) {
      alert("There was a problem submitting the intake form.");
      return;
    }

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-8 max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Intake form received</h1>
        <p>Thank you. Your intake information has been submitted successfully.</p>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Pre-Session Intake Form</h1>

      <input className="input" placeholder="Full name" onChange={(e) => update("fullName", e.target.value)} />
      <input className="input" placeholder="Email address" onChange={(e) => update("email", e.target.value)} />
      <input className="input" placeholder="Phone number" onChange={(e) => update("phone", e.target.value)} />
      <input className="input" placeholder="Booking type" onChange={(e) => update("bookingType", e.target.value)} />
      <input className="input" placeholder="Student name" onChange={(e) => update("studentName", e.target.value)} />
      <input className="input" placeholder="Student age" onChange={(e) => update("studentAge", e.target.value)} />
      <input className="input" placeholder="Current study level (e.g. Grade 12, gap year, first-year student)" onChange={(e) => update("currentStudyLevel", e.target.value)} />

      <textarea className="input" placeholder="What is the main concern or reason for booking?" onChange={(e) => update("keyConcern", e.target.value)} />
      <textarea className="input" placeholder="Which study or career options are you currently considering?" onChange={(e) => update("optionsConsidering", e.target.value)} />
      <textarea className="input" placeholder="How would you describe the current household affordability pressure?" onChange={(e) => update("householdPressure", e.target.value)} />
      <textarea className="input" placeholder="What is the current funding or support situation?" onChange={(e) => update("fundingSituation", e.target.value)} />
      <textarea className="input" placeholder="What are the main questions you want answered in the session?" onChange={(e) => update("mainQuestions", e.target.value)} />

      <select className="input" onChange={(e) => update("parentAttending", e.target.value)}>
        <option value="no">Parent/guardian attending: No</option>
        <option value="yes">Parent/guardian attending: Yes</option>
      </select>

      <button className="btn mt-4" onClick={handleSubmit}>
        Submit Intake Form
      </button>
    </div>
  );
}
```

---

# 19. SCHEDULE PAGE — WHAT IT DOES
Allows users to request a preferred time slot and sends the request with summary data.

## File: `app/schedule/page.js`
```js
"use client";

import { useMemo, useState } from "react";

const DEFAULT_SLOTS = [
  { id: "mon-09", day: "Monday", date: "2026-04-13", time: "09:00" },
  { id: "mon-11", day: "Monday", date: "2026-04-13", time: "11:00" },
  { id: "tue-14", day: "Tuesday", date: "2026-04-14", time: "14:00" },
  { id: "wed-10", day: "Wednesday", date: "2026-04-15", time: "10:00" },
  { id: "thu-15", day: "Thursday", date: "2026-04-16", time: "15:00" },
  { id: "fri-09", day: "Friday", date: "2026-04-17", time: "09:00" }
];

export default function SchedulePage() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    sessionType: "short",
    selectedSlotId: "",
    notes: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const selectedSlot = useMemo(
    () => DEFAULT_SLOTS.find((slot) => slot.id === form.selectedSlotId),
    [form.selectedSlotId]
  );

  const update = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const getSessionLabel = (type) => {
    if (type === "short") return "Short Session (≤30 min)";
    if (type === "standard") return "Standard Consultation (1–2 hours)";
    if (type === "group") return "Group Consultation (1 hour)";
    return "School / Corporate";
  };

  const handleSubmit = async () => {
    if (!form.fullName || !form.email || !form.selectedSlotId) {
      alert("Please complete your name, email, and choose a time slot.");
      return;
    }

    setLoading(true);

    const summary = {
      reality: JSON.parse(localStorage.getItem("dharma_reality_check") || "null"),
      cost: JSON.parse(localStorage.getItem("dharma_cost_calculator") || "null"),
      compare: JSON.parse(localStorage.getItem("dharma_route_compare") || "null"),
      fit: JSON.parse(localStorage.getItem("dharma_fit_check") || "null")
    };

    const res = await fetch("/api/send-schedule", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...form,
        selectedSlot,
        sessionLabel: getSessionLabel(form.sessionType),
        summary
      })
    });

    setLoading(false);

    if (!res.ok) {
      alert("There was a problem sending your scheduling request.");
      return;
    }

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-8 max-w-2xl mx-auto text-center">
        <h1 className="text-2xl font-bold mb-4">Scheduling request received</h1>
        <p className="mb-4">
          Thank you. Your preferred session time has been sent to Dharma Institute of Purpose.
        </p>
        <p className="mb-6">
          We will contact you to confirm the booking and next steps.
        </p>
        <a href="/intake" className="btn">
          Complete Pre-Session Intake Form
        </a>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">Schedule Your Guidance Session</h1>
      <p className="text-gray-600 mb-6">
        Choose your preferred session type and select an available time slot.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <section>
          <h2 className="text-lg font-semibold mb-3">Your details</h2>

          <input
            className="input"
            placeholder="Full name"
            value={form.fullName}
            onChange={(e) => update("fullName", e.target.value)}
          />

          <input
            className="input"
            placeholder="Email address"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
          />

          <input
            className="input"
            placeholder="Phone number"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
          />

          <select
            className="input"
            value={form.sessionType}
            onChange={(e) => update("sessionType", e.target.value)}
          >
            <option value="short">Short Session (≤30 min)</option>
            <option value="standard">Standard Consultation (1–2 hours)</option>
            <option value="group">Group Consultation (1 hour)</option>
            <option value="corporate">School / Corporate</option>
          </select>

          <textarea
            className="input"
            placeholder="Anything we should know before the session?"
            value={form.notes}
            onChange={(e) => update("notes", e.target.value)}
          />
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">Available time slots</h2>

          <div className="space-y-3">
            {DEFAULT_SLOTS.map((slot) => (
              <label
                key={slot.id}
                className={`block border rounded-lg p-4 cursor-pointer ${
                  form.selectedSlotId === slot.id ? "border-black" : "border-gray-300"
                }`}
              >
                <input
                  type="radio"
                  name="slot"
                  className="mr-3"
                  checked={form.selectedSlotId === slot.id}
                  onChange={() => update("selectedSlotId", slot.id)}
                />
                <span className="font-medium">
                  {slot.day} • {slot.date} • {slot.time}
                </span>
              </label>
            ))}
          </div>

          {selectedSlot && (
            <div className="mt-6 border rounded-lg p-4">
              <h3 className="font-semibold mb-2">Selected slot</h3>
              <p>{selectedSlot.day}</p>
              <p>{selectedSlot.date}</p>
              <p>{selectedSlot.time}</p>
            </div>
          )}
        </section>
      </div>

      <div className="mt-8">
        <button onClick={handleSubmit} className="btn" disabled={loading}>
          {loading ? "Sending..." : "Submit Scheduling Request"}
        </button>
      </div>
    </div>
  );
}
```

---

# 20. ABOUT PAGE — WHAT IT DOES
Placeholder About page.

## File: `app/about/page.js`
```js
export default function AboutPage() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">About Dharma Institute of Purpose</h1>
      <p>
        Dharma Institute of Purpose is a public-interest initiative focused on helping
        students and families make clearer, safer, and more affordable education decisions.
      </p>
    </div>
  );
}
```

---

# 21. BOOKING EMAIL API — WHAT IT DOES
Sends booking details and summary to admin, and confirmation email to user.

## File: `app/api/send-booking/route.js`
```js
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      type,
      attendees,
      donation,
      message,
      summary
    } = body;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    const adminHtml = `
      <h2>New Dharma Booking Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Session Type:</strong> ${type}</p>
      <p><strong>Attendees:</strong> ${attendees || 1}</p>
      <p><strong>Donation:</strong> R${donation || 0}</p>
      <p><strong>Message:</strong> ${message || "-"}</p>

      <hr />

      <h3>Attached Website Summary</h3>
      <p><strong>Reality Check:</strong> ${summary?.reality?.category || "N/A"}</p>
      <p><strong>Reality Score:</strong> ${summary?.reality?.total ?? "N/A"}</p>
      <p><strong>Cost Affordability:</strong> ${summary?.cost?.affordability || "N/A"}</p>
      <p><strong>Annual Cost:</strong> R${summary?.cost?.totalAnnual ?? "N/A"}</p>
      <p><strong>Safer Route:</strong> ${
        summary?.compare
          ? summary.compare.safer === "A"
            ? summary.compare.optionAName || "Option A"
            : summary.compare.optionBName || "Option B"
          : "N/A"
      }</p>
      <p><strong>Primary Fit:</strong> ${summary?.fit?.primary || "N/A"}</p>
    `;

    const userHtml = `
      <h2>Thank you for your booking request</h2>
      <p>Hi ${name},</p>
      <p>We have received your booking request with Dharma Institute of Purpose.</p>
      <p>Session type: <strong>${type}</strong></p>
      <p>Donation indicated: <strong>R${donation || 0}</strong></p>
      <p>We will contact you to confirm the next steps.</p>
      <hr />
      <p><strong>Your current summary snapshot:</strong></p>
      <p>Reality Check: ${summary?.reality?.category || "N/A"}</p>
      <p>Cost Affordability: ${summary?.cost?.affordability || "N/A"}</p>
      <p>Primary Fit: ${summary?.fit?.primary || "N/A"}</p>
    `;

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.ADMIN_EMAIL,
      subject: `New Dharma Booking: ${name}`,
      html: adminHtml
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: email,
      subject: "Your Dharma booking request",
      html: userHtml
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
}
```

---

# 22. INTAKE EMAIL API — WHAT IT DOES
Sends intake form details to admin email.

## File: `app/api/send-intake/route.js`
```js
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    const html = `
      <h2>New Pre-Session Intake Form</h2>
      <p><strong>Full name:</strong> ${data.fullName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Booking type:</strong> ${data.bookingType}</p>
      <p><strong>Student name:</strong> ${data.studentName}</p>
      <p><strong>Student age:</strong> ${data.studentAge}</p>
      <p><strong>Current study level:</strong> ${data.currentStudyLevel}</p>
      <p><strong>Main concern:</strong> ${data.keyConcern}</p>
      <p><strong>Options being considered:</strong> ${data.optionsConsidering}</p>
      <p><strong>Household affordability pressure:</strong> ${data.householdPressure}</p>
      <p><strong>Funding situation:</strong> ${data.fundingSituation}</p>
      <p><strong>Main questions:</strong> ${data.mainQuestions}</p>
      <p><strong>Parent attending:</strong> ${data.parentAttending}</p>
    `;

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.ADMIN_EMAIL,
      subject: `New Intake Form: ${data.fullName}`,
      html
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
}
```

---

# 23. SCHEDULE EMAIL API — WHAT IT DOES
Sends selected slot request and summary to admin, and confirmation email to user.

## File: `app/api/send-schedule/route.js`
```js
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    const adminHtml = `
      <h2>New Dharma Scheduling Request</h2>
      <p><strong>Name:</strong> ${body.fullName}</p>
      <p><strong>Email:</strong> ${body.email}</p>
      <p><strong>Phone:</strong> ${body.phone || "-"}</p>
      <p><strong>Session Type:</strong> ${body.sessionLabel}</p>
      <p><strong>Selected Day:</strong> ${body.selectedSlot?.day || "-"}</p>
      <p><strong>Selected Date:</strong> ${body.selectedSlot?.date || "-"}</p>
      <p><strong>Selected Time:</strong> ${body.selectedSlot?.time || "-"}</p>
      <p><strong>Notes:</strong> ${body.notes || "-"}</p>

      <hr />

      <h3>Attached Website Summary</h3>
      <p><strong>Reality Check:</strong> ${body.summary?.reality?.category || "N/A"}</p>
      <p><strong>Reality Score:</strong> ${body.summary?.reality?.total ?? "N/A"}</p>
      <p><strong>Cost Affordability:</strong> ${body.summary?.cost?.affordability || "N/A"}</p>
      <p><strong>Annual Cost:</strong> R${body.summary?.cost?.totalAnnual ?? "N/A"}</p>
      <p><strong>Primary Fit:</strong> ${body.summary?.fit?.primary || "N/A"}</p>
    `;

    const userHtml = `
      <h2>Your scheduling request has been received</h2>
      <p>Hi ${body.fullName},</p>
      <p>Thank you for selecting a preferred guidance session time with Dharma Institute of Purpose.</p>
      <p><strong>Session Type:</strong> ${body.sessionLabel}</p>
      <p><strong>Preferred Date:</strong> ${body.selectedSlot?.date || "-"}</p>
      <p><strong>Preferred Time:</strong> ${body.selectedSlot?.time || "-"}</p>
      <p>We will review your request and confirm the booking with you shortly.</p>
    `;

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.ADMIN_EMAIL,
      subject: `Scheduling Request: ${body.fullName}`,
      html: adminHtml
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: body.email,
      subject: "Your Dharma scheduling request",
      html: userHtml
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
}
```

---

# 24. ENVIRONMENT VARIABLES — WHAT THEY DO
Used by Nodemailer for sending booking, intake, and scheduling emails.

## File: `.env.local`
```env
SMTP_HOST=smtp.yourprovider.com
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASS=your-password
SMTP_FROM=your-email@example.com
ADMIN_EMAIL=admin@dharmainstitute.org
```

---

# 25. DEVELOPER NOTES — WHAT STILL NEEDS REFINEMENT
These are the main areas the developer should review and improve next:
- Replace hardcoded schedule slots with a dynamic source or calendar integration
- Add proper server-side validation to API routes
- Add spam protection and CAPTCHA to forms
- Improve UI polish and branding
- Add actual payment gateway integration
- Add persistent database if you want bookings and results stored permanently
- Review accessibility and mobile UX
- Replace placeholder About page with final content
- Add privacy policy, disclaimer, and terms pages

---

# 26. CURRENT FLOW — WHAT THE WEBSITE DOES
```text
Homepage
→ Start Journey
→ Tool 1: Reality Check
→ Tool 2: True Cost Calculator
→ Tool 3: Route Compare
→ Tool 4: Fit Check
→ Summary Report
→ Booking Request
→ Schedule Request
→ Intake Form
→ Admin Email Workflow
```
