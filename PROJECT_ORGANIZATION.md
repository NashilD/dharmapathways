# Dharma MVP - Project Organization Guide

## Overview

This project has been reorganized into **frontend**, **backend**, and **shared** directories to create a clean separation of concerns and enable future scalability.

## Directory Structure

```
dharma-mvp/
├── frontend/                    # Next.js Frontend Application
│   ├── app/                    # Pages and routes
│   │   ├── page.tsx           # Homepage
│   │   ├── layout.tsx         # Root layout
│   │   ├── globals.css        # Global styles
│   │   ├── start/             # Guided journey intro
│   │   ├── tools/             # Tool hub and individual tools
│   │   │   ├── reality-check/
│   │   │   ├── cost-calculator/
│   │   │   ├── route-compare/
│   │   │   └── fit-check/
│   │   ├── contact/           # Booking form
│   │   ├── summary/           # Results summary
│   │   ├── about/             # About page
│   │   └── solutions/         # Solutions/products page
│   ├── components/            # React components
│   │   ├── navbar.tsx        # Navigation bar
│   │   ├── footer.tsx        # Footer
│   │   ├── tool-card.tsx     # Tool preview card
│   │   └── ui/               # shadcn/ui components
│   ├── hooks/                # Custom React hooks
│   │   ├── use-mobile.ts
│   │   └── use-toast.ts
│   ├── public/               # Static assets
│   │   └── dharma-research.jpg
│   ├── styles/               # Additional CSS files
│   ├── next.config.mjs       # Next.js configuration
│   ├── tsconfig.json         # TypeScript config with path aliases
│   ├── tailwind.config.ts    # Tailwind CSS config
│   └── package.json          # Frontend dependencies
│
├── backend/                   # Backend Utilities & Business Logic
│   ├── utils/                # Business logic that can be reused
│   │   ├── scoring.ts        # Route comparison scoring algorithm
│   │   ├── calculations.ts   # Cost and financial calculations
│   │   └── validators.ts     # Input validation functions
│   ├── api/                  # (Future) API route handlers
│   ├── types/                # Backend-specific interfaces
│   └── config/               # Configuration files
│
├── shared/                    # Shared Code Between Frontend & Backend
│   ├── types.ts              # Shared TypeScript interfaces
│   │   ├── RouteData
│   │   ├── ComparisonResult
│   │   ├── RealityCheckData
│   │   ├── CostCalculatorData
│   │   ├── CareerFitData
│   │   ├── BookingData
│   │   └── ToolResults
│   └── constants.ts          # Shared constants
│       ├── QUALIFICATION_TYPES
│       ├── FACULTIES
│       ├── DURATION_OPTIONS
│       ├── SUPPORT_LEVELS
│       ├── AFFORDABILITY_STATUSES
│       └── CAREER_PATHS
│
├── docs/                      # Documentation
│   ├── DEVELOPER_REFERENCE.md
│   ├── README_DHARMA.md
│   └── IMPLEMENTATION_SUMMARY.md
│
├── package.json              # Root dependencies
├── tsconfig.json             # Root TypeScript config
└── README.md                 # This file
```

## Key Components

### Frontend (`/frontend`)
- **Purpose**: User interface and client-side logic
- **Framework**: Next.js 16+ with React 19
- **Styling**: Tailwind CSS v4 with shadcn/ui components
- **State Management**: React hooks + localStorage for tool results
- **Key Features**:
  - Responsive design (mobile-first)
  - 4 interactive tools (Reality Check, Cost Calculator, Route Compare, Career Fit)
  - Guided journey through tools
  - Results summary with PDF export
  - Contact/booking form

### Backend (`/backend`)
- **Purpose**: Business logic, calculations, and validation
- **Key Modules**:
  - **scoring.ts**: Route comparison algorithms
    - `determineBestRoute()`: Multi-factor scoring
    - `calculateRiskScore()`: Risk assessment
    - `determineSaferRoute()`: Financial safety ranking
  
  - **calculations.ts**: Financial math
    - `calculateAnnualCost()`: Total cost computation
    - `calculateMonthlyCost()`: Monthly breakdown
    - `calculatePressureScore()`: Affordability assessment
    - `determineAffordabilityStatus()`: Status labeling
  
  - **validators.ts**: Input validation
    - `validateRouteData()`: Route comparison validation
    - `validateCostData()`: Cost input validation
    - `validateRealityCheckData()`: Reality check validation
    - `validateBookingData()`: Booking form validation

### Shared (`/shared`)
- **Purpose**: Common interfaces and constants used by both frontend and backend
- **types.ts**: TypeScript interfaces for all data structures
- **constants.ts**: Enums, arrays, and configuration values

## Data Flow

### Reality Check Tool
```
User Input → Frontend Component → Validation → Calculation
          ↓                           ↓             ↓
    localStorage         validators.ts    calculations.ts
```

### Cost Calculator Tool
```
Cost Breakdown → Validation → Calculate Annual → Monthly Gap → Affordability
    Input            ↓            ↓               ↓            ↓
              validators.ts   calculations.ts    Get Status   Display
```

### Route Compare Tool
```
Option A & B → Validation → Risk Scoring → Best Route → Comparison
   Details         ↓             ↓          Algorithm    Results
            validators.ts   scoring.ts      scoring.ts   Display
```

## Import Paths

### From Frontend Components
```typescript
// Components
import { Button } from '@/components/ui/button'

// Custom hooks
import { useToast } from '@/hooks/use-toast'

// Shared types
import type { RouteData, ComparisonResult } from '@/shared/types'

// Shared constants
import { QUALIFICATION_TYPES, FACULTIES } from '@/shared/constants'
```

### From Backend Utilities
```typescript
// Shared types
import type { CostCalculatorData } from '@/shared/types'

// Shared constants
import { AFFORDABILITY_STATUSES } from '@/shared/constants'

// Other backend utils
import { calculateAnnualCost } from './calculations'
import { determineBestRoute } from './scoring'
```

## Usage Examples

### Using Backend Scoring in Frontend
```typescript
import { determineBestRoute } from '@/backend/utils/scoring'
import type { ComparisonResult } from '@/shared/types'

const result: ComparisonResult = { /* ... */ }
const recommendation = determineBestRoute(result)
console.log(`Best route: Option ${recommendation.best}`)
recommendation.reasons.forEach(reason => console.log(reason))
```

### Using Backend Calculations in Frontend
```typescript
import { calculateTotalCostWithBreakdown } from '@/backend/utils/calculations'

const breakdown = calculateTotalCostWithBreakdown(
  50000,  // tuition
  30000,  // accommodation
  // ... other costs
  15000,  // household income
  2,      // dependents
  5000    // external support
)

console.log(`Affordability: ${breakdown.affordabilityStatus}`)
console.log(`Monthly gap: R${breakdown.gap}`)
```

### Input Validation
```typescript
import { validateRouteData } from '@/backend/utils/validators'

const validation = validateRouteData(routeData)
if (!validation.isValid) {
  console.error('Errors:', validation.errors)
}
```

## Environment Variables

Create `.env.local` in `/frontend` with:
```
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Running the Project

### Development
```bash
cd frontend
npm run dev
# Open http://localhost:3000
```

### Build
```bash
cd frontend
npm run build
npm start
```

## Future Enhancements

1. **Backend API**: Extract business logic into API routes
   - POST `/api/compare-routes` - Route comparison
   - POST `/api/calculate-costs` - Cost calculation
   - POST `/api/book-session` - Booking with payment

2. **Database**: Store user results and bookings
   - PostgreSQL with Supabase
   - User authentication
   - Session history

3. **Testing**:
   - Unit tests for backend utils
   - Integration tests for tools
   - E2E tests for user journeys

4. **Admin Dashboard**:
   - View bookings and sessions
   - User analytics
   - Tool usage statistics

## Contributing

- **Frontend changes**: Only edit files in `/frontend`
- **Backend logic**: Add utilities to `/backend/utils`
- **Shared code**: Update `/shared` types and constants
- **Types**: Keep `/shared/types.ts` as source of truth
- **Constants**: Keep `/shared/constants.ts` in sync across projects

## Support

For questions about the project structure, see:
- `RESTRUCTURE_GUIDE.md` - Migration guide
- `DEVELOPER_REFERENCE.md` - Original implementation notes
- `IMPLEMENTATION_SUMMARY.md` - Feature overview
