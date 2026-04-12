# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Artifacts

### All-in-One Free Tools (tools-website)
- **Path**: `artifacts/tools-website/`
- **Preview**: `/` (root)
- **Type**: React + Vite (frontend-only, no backend)
- **Stack**: React, Wouter, TailwindCSS, shadcn/ui, qrcode library
- **Design**: Warm cream/coral color palette with Outfit font

#### Pages
- `/` — Homepage with search, tool grid, ad banners, contact section
- `/tools/text-styler` — Unicode text transformer (10 style variants)
- `/tools/qr-code` — QR code generator (canvas-based, downloadable PNG)
- `/tools/love-message` — Random romantic message generator (25 messages)
- `/tools/caption` — Social media caption generator (5 mood categories)
- `/tools/bio` — Instagram bio generator (5 style categories)

#### Features
- Real-time search filtering on homepage
- Copy to clipboard with toast notifications
- QR code download as PNG
- Mobile-first responsive design
- SEO: unique page titles per tool
- Ad placement areas (dashed border placeholders)
- "Contact us" section
