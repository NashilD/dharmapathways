# Complete Folder Inventory - Dharma MVP

## Root Level Directory (`/vercel/share/v0-project/`)

### Current Project Files (Original Structure - Still Active)
- `app/` - Next.js app router pages
- `components/` - React components
- `hooks/` - Custom React hooks
- `public/` - Static assets
- `scripts/` - Executable scripts (Python/Node)
- `node_modules/` - Dependencies
- `.next/` - Build output
- `package.json` - Dependencies and scripts
- `tsconfig.json` - TypeScript configuration
- `next.config.mjs` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS config
- `.gitignore` - Git ignore rules
- `README.md` - Original readme

### New Reorganized Structure (Recently Created)

---

## `/frontend` Directory - Next.js Frontend Application

### `/frontend/app/` - Pages and Routes

**Homepage & Layout:**
- `page.tsx` - Homepage with hero, tools grid, CTA sections
- `layout.tsx` - Root layout wrapper with metadata
- `globals.css` - Global Tailwind styles with design tokens
- `not-found.tsx` - 404 error page

**Route Pages:**
- `start/page.tsx` - Guided journey introduction
- `about/page.tsx` - About Dharma, mission, vision, approach
- `solutions/page.tsx` - Detailed solutions/products page
- `contact/page.tsx` - Booking form with R75 contribution modal
- `why-dharma/page.tsx` - Philosophy and differentiation page
- `summary/page.tsx` - Results summary with PDF export

**Tools Section (`/frontend/app/tools/`):**
- `page.tsx` - Tools hub listing all 4 tools
- `reality-check/page.tsx` - Reality Check tool (affordability assessment)
  - Multi-step questionnaire
  - Pressure scoring algorithm
  - Household situation assessment
  - Support & debt tracking
- `cost-calculator/page.tsx` - Cost Calculator tool
  - Annual cost breakdown (tuition, accommodation, transport, food, devices, data, personal, other)
  - Monthly support calculation
  - Affordability status determination
- `route-compare/page.tsx` - Route Compare tool
  - 3 dropdown selectors per route (duration, qualification type, faculty)
  - Cost, duration, support, and job certainty inputs
  - Risk scoring and safety assessment
  - Best route recommendation with multi-factor analysis
- `fit-check/page.tsx` - Career Fit Check tool
  - Interest and work style assessments
  - Slider-based questions
  - Career path recommendations
  - 10 different career paths with education suggestions

### `/frontend/components/` - React Components

**Navigation & Layout:**
- `navbar.tsx` - Sticky navigation bar with mobile menu
- `footer.tsx` - Footer with links and info
- `navigation.tsx` - Alternative navigation (older version)

**Tool Components:**
- `tool-card.tsx` - Preview card for tools on homepage
- `hero.tsx` - Hero section component
- `overview.tsx` - Overview/challenge section
- `offerings.tsx` - Offerings showcase
- `philosophy.tsx` - Philosophy section
- `cta.tsx` - Call-to-action section

**UI Components (shadcn/ui):**
- `ui/accordion.tsx`
- `ui/alert.tsx`
- `ui/avatar.tsx`
- `ui/button.tsx`
- `ui/card.tsx`
- `ui/dropdown-menu.tsx`
- `ui/input-group.tsx`
- `ui/spinner.tsx`
- `ui/input.tsx`
- `ui/label.tsx`
- `ui/field.tsx`
- `ui/empty.tsx`

### `/frontend/hooks/` - Custom React Hooks
- `use-mobile.ts` - Mobile responsiveness hook
- `use-toast.ts` - Toast notifications hook

### `/frontend/public/` - Static Assets
- `dharma-research.jpg` - Hero section background image
- `icon.svg` - Favicon
- `icon-light-32x32.png` - Light theme icon
- `icon-dark-32x32.png` - Dark theme icon
- `apple-icon.png` - Apple touch icon
- `robots.txt` - SEO robots configuration

### `/frontend/lib/` - Utility Functions
- `utils.ts` - Common utilities (cn function for Tailwind)

### `/frontend/styles/` - Additional Styling
- `globals.css` - Global styles (can be split from app/globals.css)

### `/frontend` Configuration Files
- `next.config.mjs` - Next.js configuration
- `tsconfig.json` - TypeScript paths and config
- `tailwind.config.ts` - Tailwind CSS theme and config
- `package.json` - Frontend-specific dependencies
- `FILES_TO_COPY.txt` - Migration checklist

---

## `/backend` Directory - Business Logic & Utilities

### `/backend/utils/` - Reusable Business Logic

**`scoring.ts` (160 lines)**
- `determineBestRoute(optionA, optionB)` - Multi-factor route scoring
  - Weights: Cost (25%), Job Certainty (30%), Duration (20%), Support (15%), Risk (10%)
  - Compares two education routes and recommends best fit
  - Handles tie situations
- `calculateRiskScore(cost, support, certainty)` - Financial risk assessment
- `determineSaferRoute(optionA, optionB)` - Identifies financially safer option
- `getRiskLabel(score)` - Converts risk number to label

**`calculations.ts` (158 lines)**
- `calculateAnnualCost(costs)` - Sums all annual expense categories
- `calculateMonthlyCost(annualCost)` - Divides by 12 for monthly view
- `calculateAffordabilityGap(annualCost, monthlySupport)` - Student must contribute
- `calculatePressureScore(income, expenses, dependents, support, debt)` - Household affordability pressure
- `determineAffordabilityStatus(gap)` - Categorizes as Affordable/Tight/High Risk/Not Sustainable
- `calculateMonthlyPayoff(gap, months)` - Monthly payment amount if payable over months

**`validators.ts` (170 lines)**
- `validateRouteData(data)` - Validates route comparison inputs
  - Checks all fields present and valid types
  - Validates cost > 0, duration in range, support level valid
  - Returns detailed error messages
- `validateCostData(data)` - Validates cost calculator inputs
- `validateRealityCheckData(data)` - Validates affordability assessment
- `validateBookingData(data)` - Validates contact form submission
- `validateEmail(email)` - Email format validation
- `validatePhone(phone)` - Phone number validation
- Helper validators for individual fields

### `/backend/api/` - (Future) API Routes
- (Placeholder for future API endpoints)
- Can be filled with route handlers that use utility functions

### `/backend/types/` - Backend-Specific Types
- (Placeholder for backend-only interfaces)
- Can extend shared types if needed

### `/backend/config/` - Configuration
- (Placeholder for backend configuration files)

---

## `/shared` Directory - Shared Code

### `types.ts` (83 lines) - TypeScript Interfaces

**Data Models:**
- `RouteData` - Single education route with all parameters
  - name, years, qualificationType, faculty, cost, duration, support, certainty
- `ComparisonResult` - Results from route compare
  - optionA, optionB, safer, riskA, riskB, recommendation
- `RealityCheckData` - Affordability assessment data
  - income, expenses, dependents, support, debt, debtStatus, pressureScore
- `CostCalculatorData` - Cost breakdown
  - All cost categories, monthly support, total annual, affordability status, gap
- `CareerFitData` - Career assessment results
  - Interest scores, work style scores, matched paths, recommendations
- `BookingData` - Contact form submission
  - name, email, phone, message, timestamp
- `ToolResults` - All tool results combined
  - realityCheck, costCalculator, routeCompare, careerFit, booking

### `constants.ts` (84 lines) - Shared Constants

**Qualification Types (9 options)**
- Higher Certificate, Advanced Certificate, Diploma, Advanced Diploma
- Bachelor's Degree, Bachelor Honours Degree, Postgraduate Diploma
- Master's Degree, Doctoral Degree (PhD)

**Faculties (12 options)**
- Commerce/Business, Engineering & Built Environment, Health Sciences
- Humanities, Law, Science, Education, Agriculture, Theology/Religion
- Arts & Design, IT/Informatics, Social Sciences

**Duration Options (6 options)**
- 1, 2, 3, 4, 5, 6 years

**Support Levels**
- none (0), partial (1), full (2)

**Affordability Statuses**
- "Affordable", "Tight", "High Risk", "Not Sustainable"

**Career Paths (10 options)**
- Engineering, Healthcare, Law, Education, Business/Finance, IT
- Trades, Creative/Design, Science, Government/Public Service

**Risk Thresholds & Scoring Weights**
- Various constants for risk calculation algorithms

---

## `/docs` Directory - Documentation

### Existing Documentation
- `DEVELOPER_REFERENCE.md` - Developer handoff code reference
- `README_DHARMA.md` - Original Dharma readme
- `IMPLEMENTATION_SUMMARY.md` - Implementation details

---

## Root Level Documentation Files (Recently Created)

- `PROJECT_ORGANIZATION.md` - Complete directory and organization guide
- `ARCHITECTURE.md` - Visual architecture diagrams and data flow
- `MIGRATION_SUMMARY.md` - Migration checklist and next steps
- `RESTRUCTURE_GUIDE.md` - Restructuring instructions
- `DOCUMENTATION_INDEX.md` - Quick navigation guide
- `FOLDER_INVENTORY.md` - This file - comprehensive inventory

---

## Summary Statistics

| Directory | File Count | Purpose |
|-----------|-----------|---------|
| `/frontend/app/` | 12 pages | User-facing pages and routes |
| `/frontend/components/` | 15+ components | React UI components |
| `/frontend/public/` | 6 assets | Static images and config |
| `/backend/utils/` | 3 files | Business logic (490 lines) |
| `/shared/` | 2 files | Types and constants (167 lines) |
| `/docs/` | 3+ files | Documentation |
| Root docs | 6 files | Project documentation |
| **Total** | **40+ files** | **Complete MVP application** |

---

## File Dependencies & Imports

### Frontend Imports From Backend
```typescript
import { determineBestRoute, calculateRiskScore } from '@/backend/utils/scoring'
import { calculateAnnualCost, calculateAffordabilityGap } from '@/backend/utils/calculations'
import { validateRouteData, validateCostData } from '@/backend/utils/validators'
```

### Frontend Imports From Shared
```typescript
import type { RouteData, ComparisonResult, RealityCheckData } from '@/shared/types'
import { QUALIFICATIONS, FACULTIES, AFFORDABILITY_STATUSES } from '@/shared/constants'
```

### Backend Imports From Shared
```typescript
import type { RouteData, ComparisonResult } from '@/shared/types'
import { RISK_THRESHOLDS, SCORING_WEIGHTS } from '@/shared/constants'
```

---

## What's Running Currently

- **Frontend**: Active in `/app/` (original structure)
- **Components**: Using `/components/` from root
- **Styles**: Using `/app/globals.css`
- **Config**: `next.config.mjs`, `tsconfig.json`, `tailwind.config.ts`

## What's Ready for Migration

- **New `/frontend`**: Copied home structure ready
- **Shared types**: Ready to use across applications
- **Backend utilities**: Ready to be imported
- **Documentation**: Complete guides for next steps
