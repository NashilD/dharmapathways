# Architecture

This document explains the structure and design philosophy of Dharma Pathways.

## Overview

Dharma Pathways is a Next.js application that guides students and families through education decisions. The architecture separates business logic from UI to maintain clarity, testability, and reusability.

## Directory Structure

### `/app` - Next.js App Router

Contains all page routes and layouts. Uses the App Router paradigm for client-side rendered pages.

**Structure:**
- `layout.tsx` - Root layout (metadata, providers)
- `page.tsx` - Landing page
- `[route]/page.tsx` - Nested pages (e.g., `/tools`, `/about`)
- `tools/[tool]/page.tsx` - Tool pages (reality-check, cost-calculator, fit-check, route-compare)

**Why it stays here:**
- App Router is the canonical way to define routes in modern Next.js
- Pages are the entry point for user interactions
- Keeps routing structure clear and co-located with content

### `/backend` - Business Logic

Pure TypeScript modules containing all calculations, scoring, and decision logic. **No React, no browser APIs**.

**Modules:**

| File | Purpose |
|------|---------|
| `types.ts` | Shared TypeScript interfaces for all tools (inputs, outputs, intermediate results) |
| `scoring.ts` | Score calculations (pressure scores, route risk, career fit), categorization, and helper functions |
| `calculations.ts` | Cost aggregation, affordability assessment, and next-step guidance |
| `career.ts` | Career pathway matching and pathway recommendations |
| `validators.ts` | Input validation and data sanitization |

**Why this structure:**
- Decouples business logic from React/UI concerns
- Logic can be tested independently
- Easy to audit calculations and decision rules
- Reusable across different frontends (CLI, API, reporting)
- Type-safe: all functions have explicit input/output types

### `/components` - React Components

Reusable UI components and structural components for the app.

**Structure:**
- `ui/` - Radix UI wrapped components (Button, Card, Input, Dialog, etc.)
- `navigation.tsx` - Header navigation component
- `footer.tsx` - Footer component
- `hero.tsx`, `cta.tsx` - Page section components
- `tool-card.tsx` - Tool showcase card

**Why it's separate:**
- Promotes component reuse across pages
- UI components are decoupled from business logic
- Radix UI provides accessible, unstyled primitives

### `/hooks` - Custom React Hooks

Custom hooks for React functionality.

- `use-toast.ts` - Toast notification hook
- `use-mobile.ts` - Responsive/mobile detection hook

### `/lib` - Utilities

General-purpose utility functions.

- `utils.ts` - Class name merging, formatting helpers

## Frontend ↔ Backend Communication Pattern

### Within a Tool Page

```typescript
// 1. User fills form in /components
// 2. Page imports business logic from /backend
import { calculatePressureScores, getPressureCategory } from '@/backend/scoring'

// 3. Page calls backend function with user input
const { breakdown, total } = calculatePressureScores(userInput)

// 4. Backend returns typed result (no side effects)
const category = getPressureCategory(total)

// 5. Page displays result and stores in localStorage
setResult({ breakdown, total, category, ... })
```

**Principle**: Pages orchestrate user interaction and state management. Backend provides deterministic calculation functions.

## Data Flow

1. **Input**: User fills form in a tool page
2. **Validation**: Optional client-side validation via `@/backend/validators`
3. **Calculation**: Call backend function (pure, deterministic)
4. **Output**: Backend returns typed result
5. **Persistence**: Page stores result in localStorage
6. **Display**: Page renders result to user

## Design Decisions

### Why App Router stays in `/app`

Next.js App Router is the modern routing paradigm. Moving logic out of pages (into backend) keeps this clear:
- Routes are defined by file structure under `/app`
- Pages are thin wrappers around backend logic and UI components
- No duplicate route definitions

### Why `/backend` is separate

The backend folder contains pure TypeScript business logic:
- **Testable**: No React dependencies means easy unit testing
- **Auditable**: Calculation rules are explicit and isolated
- **Reusable**: Logic could be used in API routes, CLIs, or reports in future
- **Clear boundaries**: UI developers know not to modify business logic directly

### No API Routes (Currently)

The app currently uses client-side rendering with localStorage. If backend calculations migrate to API routes in the future:
- Backend logic stays the same
- API route handler imports from `/backend`
- Frontend pages call API instead of calling functions directly

## TypeScript Configuration

- Strict mode enabled: `"strict": true` in `tsconfig.json`
- No build-time error suppression (previously removed `typescript.ignoreBuildErrors`)
- Type safety is enforced at both development and build time

## Key Principles

1. **Separation of Concerns**: Business logic lives in `/backend`, UI in `/components`, routing in `/app`
2. **Type Safety**: All interfaces defined in `/backend/types.ts`, shared across tools
3. **Determinism**: Backend functions have no side effects; pure calculations only
4. **Testability**: Backend can be tested without React or browser APIs
5. **Maintainability**: Changes to calculation rules are localized to backend files
