# Documentation Index

## Quick Navigation

### 📋 Getting Started
1. **[PROJECT_ORGANIZATION.md](./PROJECT_ORGANIZATION.md)** - Complete directory structure and organization guide
   - Directory structure explanation
   - Key components and modules
   - Import paths and usage examples
   - Contributing guidelines

2. **[ARCHITECTURE.md](./ARCHITECTURE.md)** - Visual diagrams and architecture overview
   - High-level system architecture
   - Data flow diagrams
   - Component hierarchy
   - Type dependencies
   - Deployment architecture

3. **[MIGRATION_SUMMARY.md](./MIGRATION_SUMMARY.md)** - What was created and next steps
   - Files created (9 files, 1000+ LOC)
   - Summary of changes
   - Step-by-step migration guide
   - Next steps to complete migration

### 🗂️ Directory Structure Reference
**[RESTRUCTURE_GUIDE.md](./RESTRUCTURE_GUIDE.md)** - Detailed migration checklist
   - New directory structure
   - Files to copy mapping
   - Import path updates
   - TypeScript configuration

### 📁 File-by-File Mapping
**[frontend/FILES_TO_COPY.txt](./frontend/FILES_TO_COPY.txt)** - Complete file copy manifest
   - Source to destination mappings
   - All files that need to be copied
   - Configuration files needed

---

## What Gets What?

### Frontend (`/frontend`)
Handles all user interface and client-side logic:
```
✅ All page.tsx files from /app
✅ All React components from /components
✅ Custom hooks from /hooks
✅ Static assets from /public
✅ Global styles (globals.css)
✅ Configuration: next.config.mjs, tsconfig.json, tailwind.config.ts
```

### Backend (`/backend`)
Reusable business logic that can be shared or extracted:
```
✅ Scoring algorithms (route comparison)
✅ Financial calculations (costs, affordability)
✅ Input validators (form validation)
✅ Future API routes
✅ Backend-specific types
```

### Shared (`/shared`)
Code used by both frontend and backend:
```
✅ TypeScript interfaces (7 types)
✅ Constants and enums (10 constant groups)
✅ Validation schemas
```

---

## Code Organization

### Backend Utilities Extracted

**`/backend/utils/scoring.ts`** (160 lines)
- `determineBestRoute()` - Multi-factor route comparison
- `calculateRiskScore()` - Risk assessment algorithm
- `determineSaferRoute()` - Safety ranking

**`/backend/utils/calculations.ts`** (158 lines)
- `calculateAnnualCost()` - Total cost computation
- `calculateMonthlyCost()` - Monthly breakdown
- `calculatePressureScore()` - Affordability pressure
- `determineAffordabilityStatus()` - Status labeling
- Helper functions for financial math

**`/backend/utils/validators.ts`** (170 lines)
- `validateRouteData()` - Route form validation
- `validateCostData()` - Cost input validation
- `validateRealityCheckData()` - Pressure form validation
- `validateBookingData()` - Contact form validation
- Email and phone validators

### Shared Types & Constants

**`/shared/types.ts`** (83 lines)
- `RouteData` - Route comparison data
- `ComparisonResult` - Comparison results
- `RealityCheckData` - Affordability data
- `CostCalculatorData` - Cost breakdown
- `CareerFitData` - Career assessment
- `ToolResults` - Combined results
- `BookingData` - Booking information

**`/shared/constants.ts`** (84 lines)
- `QUALIFICATION_TYPES` - 9 SA qualifications
- `FACULTIES` - 12 university faculties
- `DURATION_OPTIONS` - Year options
- `SUPPORT_LEVELS` - Support categories
- `AFFORDABILITY_STATUSES` - 4 status types
- `PRESSURE_LEVELS` - 4 pressure levels
- `CAREER_PATHS` - 10 career types
- `RISK_THRESHOLDS` - Risk boundaries

---

## Import Examples

### In Frontend Components
```typescript
// Shared types
import type { RouteData, ComparisonResult } from '@/shared/types'

// Shared constants
import { QUALIFICATION_TYPES, FACULTIES } from '@/shared/constants'

// Backend utilities
import { determineBestRoute } from '@/backend/utils/scoring'
import { calculateAnnualCost } from '@/backend/utils/calculations'
import { validateRouteData } from '@/backend/utils/validators'
```

### In Backend Utilities
```typescript
// Shared types and constants
import type { ComparisonResult } from '@/shared/types'
import { MONTHS_IN_YEAR } from '@/shared/constants'

// Other backend utilities
import { calculateRiskScore } from './scoring'
```

---

## Use Case Examples

### Reality Check Tool
1. User enters: Income, dependents, expenses, debt status
2. **Frontend** Component renders form
3. **Backend** `validators.ts` validates input
4. **Backend** `calculations.ts` computes pressure score
5. **Frontend** Displays result in localStorage

### Cost Calculator Tool
1. User enters: All cost categories and income
2. **Frontend** Component renders form
3. **Backend** `validators.ts` validates input
4. **Backend** `calculations.ts` computes costs
5. **Frontend** Displays breakdown and affordability status

### Route Compare Tool
1. User selects: Duration, qualification, faculty (x2)
2. **Frontend** Component renders dropdowns
3. User enters: Cost, job certainty, support level (x2)
4. **Backend** `validators.ts` validates selections
5. **Backend** `scoring.ts` analyzes both routes
6. **Frontend** Displays comparison and best route

### Booking Form
1. User enters: Name, email, phone, message
2. **Frontend** Component renders contact form
3. **Backend** `validators.ts` validates input
4. **Frontend** Shows R75 contribution modal
5. Backend (future): Process payment and booking

---

## Tools Overview

All 4 tools use this architecture:

| Tool | Validation | Calculation | Storage | Display |
|------|-----------|-------------|---------|---------|
| **Reality Check** | `validators.ts` | `calculations.ts` | localStorage | Summary card |
| **Cost Calculator** | `validators.ts` | `calculations.ts` | localStorage | Cost breakdown |
| **Route Compare** | `validators.ts` | `scoring.ts` | localStorage | Comparison + Best Route |
| **Career Fit** | `validators.ts` | Custom in component | localStorage | Career matches |

---

## Development Workflow

### Making Changes to Business Logic
1. Edit `/backend/utils/*.ts` files
2. Update `/shared/types.ts` if needed
3. Update `/shared/constants.ts` if needed
4. Test logic with unit tests
5. Use in frontend components

### Adding New Features
1. Create page in `/frontend/app/*`
2. Create components in `/frontend/components/*`
3. Add types to `/shared/types.ts`
4. Add constants to `/shared/constants.ts`
5. Add logic to `/backend/utils/*`
6. Add validators to `/backend/utils/validators.ts`

### Testing the Build
```bash
cd frontend
npm install
npm run build
npm run dev
```

---

## File Statistics

### Files Created
- **Total**: 9 new files
- **Frontend**: 3 files (page.tsx, layout.tsx, globals.css)
- **Backend**: 3 files (scoring.ts, calculations.ts, validators.ts)
- **Shared**: 2 files (types.ts, constants.ts)
- **Documentation**: 4 markdown files

### Code Volume
- **Backend utilities**: 450+ lines
- **Shared types/constants**: 160+ lines
- **Documentation**: 400+ lines
- **Total new code**: 1000+ lines

### TypeScript Types
- **Shared interfaces**: 7 types
- **Constants groups**: 10 groups
- **Validation functions**: 5 functions
- **Scoring functions**: 3 functions
- **Calculation functions**: 6+ functions

---

## Best Practices

✅ **Do**:
- Import types from `/shared/types`
- Use constants from `/shared/constants`
- Put business logic in `/backend/utils`
- Validate input before processing
- Keep components in `/frontend/components`

❌ **Don't**:
- Hardcode constants in components
- Put business logic in components
- Skip input validation
- Duplicate types across files
- Put UI in backend utils

---

## Troubleshooting

**Q: Import not found for backend utils?**
A: Check tsconfig.json path aliases are configured for `@/backend/*`

**Q: Types not aligning between frontend and backend?**
A: All types should come from `/shared/types.ts`

**Q: Missing constants?**
A: Check `/shared/constants.ts` and add new ones there

**Q: Old `/app` structure still there?**
A: Yes! Both exist during migration. Copy to `/frontend` gradually.

---

## Next Steps

1. **Complete Migration** - Follow [MIGRATION_SUMMARY.md](./MIGRATION_SUMMARY.md)
2. **Review Architecture** - Read [ARCHITECTURE.md](./ARCHITECTURE.md)
3. **Understand Organization** - Study [PROJECT_ORGANIZATION.md](./PROJECT_ORGANIZATION.md)
4. **Check File Mappings** - Use [frontend/FILES_TO_COPY.txt](./frontend/FILES_TO_COPY.txt)
5. **Test Build** - Run `npm run build` in frontend
6. **Deploy** - Push to Vercel with `/frontend` as root

---

## Questions?

Refer to these documents:
- Architecture questions → [ARCHITECTURE.md](./ARCHITECTURE.md)
- Organization questions → [PROJECT_ORGANIZATION.md](./PROJECT_ORGANIZATION.md)
- Migration questions → [MIGRATION_SUMMARY.md](./MIGRATION_SUMMARY.md)
- File location questions → [frontend/FILES_TO_COPY.txt](./frontend/FILES_TO_COPY.txt)

Last Updated: 2026-04-14
