# Dharma MVP - Architecture Diagram

## High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                       USER INTERFACE (Frontend)                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │         Next.js 16 + React 19 Application                │   │
│  ├──────────────────────────────────────────────────────────┤   │
│  │                                                            │   │
│  │  Pages:                  Components:       Hooks:         │   │
│  │  • Home                  • Navbar          • useToast      │   │
│  │  • Tools Hub             • Footer          • useMobile     │   │
│  │  • 4 Tool Pages          • ToolCard        • Custom        │   │
│  │  • Summary               • UI Components                  │   │
│  │  • Contact/Booking       • Forms                          │   │
│  │                                                            │   │
│  └──────────────────────────────────────────────────────────┘   │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
                              │
                Uses/Imports   │
                              │
        ┌─────────────────────┴─────────────────────┐
        │                                           │
┌───────▼──────────────────┐          ┌────────────▼─────────┐
│   SHARED CODE & TYPES    │          │  BUSINESS LOGIC      │
│    (`/shared`)           │          │   (`/backend`)       │
├──────────────────────────┤          ├──────────────────────┤
│                          │          │                      │
│  types.ts:              │          │  utils/:             │
│  • RouteData            │          │  • scoring.ts        │
│  • ComparisonResult     │          │    - determineBest   │
│  • RealityCheckData     │          │    - riskScore       │
│  • CostCalculatorData   │          │                      │
│  • CareerFitData        │          │  • calculations.ts   │
│  • BookingData          │          │    - annualCost      │
│  • ToolResults          │          │    - affordability   │
│                          │          │    - pressure        │
│  constants.ts:          │          │                      │
│  • QUALIFICATIONS       │          │  • validators.ts     │
│  • FACULTIES            │          │    - validate routes │
│  • DURATIONS            │          │    - validate costs  │
│  • SUPPORT_LEVELS       │          │    - validate input  │
│  • STATUSES             │          │                      │
│  • THRESHOLDS           │          │                      │
│                          │          │                      │
└──────────────────────────┘          └──────────────────────┘
```

## Data Flow - Reality Check Tool

```
    User Input                Form Component              Validation
    ┌──────────────┐          ┌──────────┐              ┌──────────┐
    │ Income: 5000 │ ────────▶│  React   │ ────────────▶│validators│
    │ Dependents:2 │          │Component │              │  .ts     │
    │ Expenses:3500│          └──────────┘              └──────────┘
    │ Debt: No     │                                          │
    └──────────────┘                                          │
                                                              │
                                    ┌─────────────────────────▼──────┐
                                    │     Storage & Display           │
                                    │                                 │
                                    │  ┌─────────────────────────┐   │
                                    │  │  localStorage           │   │
                                    │  │  {                      │   │
                                    │  │    pressure: 45,        │   │
                                    │  │    level: "Moderate"    │   │
                                    │  │  }                      │   │
                                    │  └─────────────────────────┘   │
                                    │                                 │
                                    │  ┌─────────────────────────┐   │
                                    │  │  UI Display             │   │
                                    │  │  "Moderate Pressure"    │   │
                                    │  └─────────────────────────┘   │
                                    └─────────────────────────────────┘
```

## Data Flow - Cost Calculator Tool

```
Cost Breakdown                Calculation              Storage & Display
┌──────────────────┐         ┌──────────┐             ┌──────────────┐
│ Tuition: 50,000  │ ───────▶│calculations         │─▶│   Result     │
│ Accom: 30,000    │         │ .ts:                │  │              │
│ Food: 20,000     │         │ • annual            │  │ Annual: R150k│
│ Transport: 8,000 │         │ • monthly           │  │ Monthly: R12k│
│ ... other: 10k   │         │ • gap               │  │ Gap: R2,000  │
└──────────────────┘         │ • affordability     │  │ Status:Tight │
                             └──────────┘             └──────────────┘
                                  │
                    ┌─────────────▼──────────┐
                    │  User Support Input    │
                    │  • Income: R15,000     │
                    │  • Support: R8,000     │
                    └────────────────────────┘
```

## Data Flow - Route Compare Tool

```
Route A Details           Route B Details           Comparison Logic
┌─────────────────┐      ┌─────────────────┐      ┌──────────────────┐
│ 3yr Bachelor    │      │ 4yr Bachelor    │      │  scoring.ts:     │
│ Commerce        │      │ Engineering     │      │  determineBest() │
│ Cost: R150,000  │ ────▶│ Cost: R200,000  │ ────▶│                  │
│ Job: 85% cert   │      │ Job: 90% cert   │      │ Factors:         │
│ Support: Full   │      │ Support: Partial│      │ • Cost (25%)     │
└─────────────────┘      └─────────────────┘      │ • Certainty(30%) │
                                                   │ • Duration(20%)  │
                                                   │ • Support(15%)   │
                                                   │ • Risk(10%)      │
                                                   └────────┬─────────┘
                                                           │
                                            ┌──────────────▼────────────┐
                                            │   RECOMMENDATION          │
                                            │                           │
                                            │ "Option A is Best"        │
                                            │ Reasons:                  │
                                            │ • R50k cheaper            │
                                            │ • 1 year shorter          │
                                            │ • 5% job advantage        │
                                            └───────────────────────────┘
```

## Tool Integration Flow

```
                         ┌─────────────────┐
                         │  Home / Start    │
                         └────────┬─────────┘
                                  │
                    ┌─────────────▼─────────────┐
                    │    Tools Hub Page         │
                    └────┬────┬────┬────────────┘
                         │    │    │
        ┌────────────────┘    │    └──────────────────┐
        │                     │                       │
        │                     │                       │
    ┌───▼────┐          ┌─────▼────┐          ┌──────▼───┐
    │Reality │          │  Cost    │          │  Route   │
    │ Check  │          │Calculator│          │ Compare  │
    └───┬────┘          └─────┬────┘          └──────┬───┘
        │                     │                       │
        └─────────────────────┼───────────────────────┘
                              │
                        ┌─────▼──────┐
                        │  Career Fit│
                        └─────┬──────┘
                              │
                        ┌─────▼─────────┐
                        │  Summary Page │
                        │  • Show All   │
                        │  • Export PDF │
                        │  • Book Call  │
                        └───────┬───────┘
                                │
                        ┌───────▼──────┐
                        │ Contact Form │
                        │ • R75 Modal  │
                        │ • Booking    │
                        └───────┬──────┘
                                │
                        ┌───────▼──────┐
                        │ Confirmation │
                        │ Thank You    │
                        └──────────────┘
```

## Component Hierarchy

```
RootLayout
  ├── Navbar
  │   ├── Logo
  │   ├── Navigation Links
  │   └── Mobile Menu
  │
  ├── Pages
  │   ├── Home
  │   │   ├── Hero
  │   │   ├── ToolCards (x4)
  │   │   └── CTA Section
  │   │
  │   ├── Tools Hub
  │   │   └── Tool Cards Grid
  │   │
  │   ├── Individual Tools
  │   │   ├── Form Fields
  │   │   ├── Controls
  │   │   ├── Progress Indicator
  │   │   └── Results Display
  │   │
  │   ├── Summary
  │   │   ├── Results from all tools
  │   │   └── Export Options
  │   │
  │   └── Contact
  │       ├── Form
  │       └── R75 Contribution Modal
  │
  └── Footer
      ├── Links
      ├── Social
      └── Copyright
```

## State Management

```
Frontend State (localStorage)
┌─────────────────────────────────────────┐
│  toolResults = {                         │
│    realityCheck: {                       │
│      pressure: 45,                       │
│      level: "Moderate Pressure",         │
│      ...                                 │
│    },                                    │
│    costCalculator: {                     │
│      annual: 150000,                     │
│      monthly: 12500,                     │
│      gap: 2000,                          │
│      status: "Tight",                    │
│      ...                                 │
│    },                                    │
│    routeCompare: {                       │
│      optionA: { ... },                   │
│      optionB: { ... },                   │
│      safer: "A",                         │
│      best: "A",                          │
│      ...                                 │
│    },                                    │
│    careerFit: {                          │
│      topPaths: ["Engineering", ...],     │
│      ...                                 │
│    }                                     │
│  }                                       │
└─────────────────────────────────────────┘
```

## Type Dependencies

```
                      ┌──────────────┐
                      │ ToolResults  │
                      │   (shared)   │
                      └────┬─────────┘
                           │
          ┌────────────────┼────────────────┐
          │                │                │
    ┌─────▼───────┐  ┌─────▼────┐   ┌────▼─────────┐
    │RealityCheck │  │CostCalc  │   │ComparisonRes │
    │   Data      │  │ Data     │   │  Result      │
    │ (shared)    │  │(shared)  │   │  (shared)    │
    └─────────────┘  └──────────┘   └──────┬───────┘
                                            │
                                      ┌─────▼──────┐
                                      │ RouteData  │
                                      │ (shared)   │
                                      └────────────┘
```

## External Dependencies

```
Next.js 16              React 19               UI Libraries
├── App Router          ├── Hooks               ├── shadcn/ui
├── Image Optimization  ├── Components          ├── Tailwind CSS v4
├── TypeScript Support  └── Server Components   └── Radix UI
└── Vercel Deployment

Utilities
├── Tailwind CSS
├── Geist Font Family
└── Vercel Analytics
```

## Deployment Architecture

```
                    ┌──────────────────┐
                    │  Source Code     │
                    │  (GitHub)        │
                    └────────┬─────────┘
                             │
                             │ git push
                             │
                    ┌────────▼─────────┐
                    │ Vercel CI/CD     │
                    └────────┬─────────┘
                             │
        ┌────────────────────┼────────────────────┐
        │                    │                    │
        │                    │                    │
    ┌───▼─────┐         ┌───▼──────┐        ┌───▼──────┐
    │  Build  │         │   Test   │        │ Preview  │
    │ Frontend│         │  (if set)│        │Deploy    │
    └───┬─────┘         └──────────┘        └───┬──────┘
        │                                       │
        └───────────────────┬───────────────────┘
                            │
                    ┌───────▼──────┐
                    │ Production   │
                    │ Deployment   │
                    │ (Vercel CDN) │
                    └──────────────┘
```

---

This architecture ensures:
- ✅ Clear separation of concerns
- ✅ Reusable business logic
- ✅ Type safety
- ✅ Scalability
- ✅ Maintainability
- ✅ Testability
- ✅ Future API extraction capability
