# Dharma Pathways

Research-backed guidance helping students and families make clear, safer, and more affordable education decisions.

## Tech Stack

- **Next.js 16** with App Router
- **TypeScript** for type safety
- **React 19** for components
- **Tailwind CSS** for styling
- **Radix UI** for accessible component primitives

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Open browser to http://localhost:3000
```

### Production Build

```bash
# Build the project
npm run build

# Start production server
npm start
```

## Project Structure

```
/
├── app/                    # Next.js App Router pages and routes
│   ├── tools/             # Interactive tools (reality-check, cost-calculator, fit-check, route-compare)
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   └── [other pages]/
├── backend/               # Pure TypeScript business logic (no React)
│   ├── types.ts           # Shared type definitions
│   ├── scoring.ts         # Scoring and categorization logic
│   ├── calculations.ts    # Cost and affordability calculations
│   ├── career.ts          # Career fit scoring
│   └── validators.ts      # Input validation
├── components/            # Reusable React components
│   ├── ui/                # Radix UI wrapped components
│   ├── navigation.tsx     # Header navigation
│   ├── footer.tsx         # Footer
│   └── [other components]/
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
├── public/                # Static assets
└── styles/                # Global CSS (if needed)
```

## Architecture Philosophy

The project separates frontend concerns from business logic:

- **`/app`**: Next.js pages and routing only. No business logic inline.
- **`/components`**: Reusable UI and structural React components.
- **`/backend`**: Pure TypeScript calculation, scoring, and validation logic. No React, no browser APIs.

This allows business logic to be tested independently and reused across different interfaces.

## Key Features

- **Reality Check**: Assess household financial pressure and affordability constraints
- **Cost Calculator**: Break down true cost of education including hidden expenses
- **Career Fit Check**: Match interests and work style to career pathways
- **Route Compare**: Compare education routes by cost, duration, support, and job certainty

All calculations are deterministic and stored in `/backend` for clarity and maintainability.
