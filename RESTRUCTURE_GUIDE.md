# Frontend/Backend Restructure Guide

## New Directory Structure

```
/vercel/share/v0-project/
├── frontend/                 # Next.js frontend app
│   ├── app/                 # Pages and routes
│   ├── components/          # React components
│   ├── hooks/              # Custom React hooks
│   ├── public/             # Static assets
│   ├── styles/             # CSS files
│   ├── next.config.mjs     # Next.js config
│   ├── tsconfig.json       # TypeScript config
│   ├── tailwind.config.ts  # Tailwind config
│   └── package.json        # Frontend dependencies
│
├── backend/                 # Backend logic & API
│   ├── api/                # API route handlers
│   ├── utils/              # Utility functions & algorithms
│   │   ├── scoring.ts      # Scoring algorithms
│   │   ├── calculations.ts # Cost/duration calculations
│   │   └── validators.ts   # Input validation
│   ├── types/              # Backend-specific types
│   └── config/             # Configuration
│
├── shared/                  # Shared types & constants
│   ├── types.ts            # Shared TypeScript types
│   ├── constants.ts        # Shared constants
│   └── schemas.ts          # Zod/validation schemas
│
└── docs/                    # Documentation
    ├── DEVELOPER_REFERENCE.md
    ├── README_DHARMA.md
    └── IMPLEMENTATION_SUMMARY.md
```

## Key Changes

### Frontend Moving To:
- `/frontend/app/` ← All page.tsx files and routes
- `/frontend/components/` ← All React components
- `/frontend/hooks/` ← Custom hooks (e.g., use-toast, use-mobile)
- `/frontend/public/` ← Static images and assets
- `/frontend/styles/` ← globals.css and other CSS

### Backend Moving To:
- `/backend/utils/scoring.ts` ← Route comparison scoring logic
- `/backend/utils/calculations.ts` ← Cost and affordability calculations
- `/backend/utils/validators.ts` ← Input validation functions
- `/backend/types/` ← Backend-specific interfaces

### Shared Between Both:
- `/shared/types.ts` ← RouteData, FormData, and common types
- `/shared/constants.ts` ← Qualification types, faculties, etc.

## Import Path Updates

After restructure, update imports in all files:

```typescript
// Old:
import Navbar from '@/components/navbar'

// New (in frontend):
import Navbar from '@/components/navbar'  // Same, as paths are relative to frontend root

// In backend utils using shared types:
import type { RouteData } from '@/shared/types'
```

## TypeScript Path Aliases

Update `tsconfig.json` in both frontend and backend:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"],
      "@/shared/*": ["../shared/*"]
    }
  }
}
```

## Next Steps

1. Create directory structure
2. Move files to appropriate folders
3. Update import statements
4. Update configuration files
5. Update package.json root dependencies
6. Test build and preview
