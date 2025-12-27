# PMAX Campaign Manager (Ads SaaS) - Implementation Plan

## Overview

Adding a **Performance Max Campaign Manager** as a new SaaS product for Riflebird Agency. This will be a separate Next.js app (`apps/ads-saas`) that simplifies Google Ads PMAX campaign management through an AI-powered conversational interface.

**Key Facts:**
- **Current State**: Riflebird is a stateless marketing website (no database, no auth)
- **New Product**: Authenticated SaaS dashboard for Google Ads management
- **Architecture**: Separate app in monorepo (`apps/ads-saas`)
- **UI Approach**: magic-mcp for component generation + Tailwind CSS
- **Designs**: Located at `/Users/ali/my-projects/riflebird/designs` (external repository)

---

## 1. Architecture Decision

### Separate App: `apps/ads-saas/`

**Rationale:**
- Clean separation between public marketing site and authenticated SaaS product
- Independent deployment on Vercel
- Different auth boundaries (public vs. authenticated)
- Easier to scale and add more products later

**Structure:**
```
riflebird-fspec/
├── apps/
│   ├── main-website/          # Existing marketing site
│   └── ads-saas/              # NEW: PMAX Dashboard
├── packages/
│   ├── ui/                    # Shared components
│   ├── types/                 # NEW: Shared TypeScript types
│   ├── database/              # NEW: Prisma schema & client
│   └── auth/                  # NEW: NextAuth utilities
└── designs/                   # Design files (Figma, mockups)
```

---

## 2. Technology Stack

### Core Infrastructure
- **Database**: Vercel Postgres (serverless, auto-scaling, Vercel-native)
- **ORM**: Prisma (type-safe, migrations, excellent DX)
- **Authentication**: NextAuth.js v5 (Google OAuth, token management)
- **AI**: Anthropic Claude via Vercel AI SDK (conversational builder)
- **Google Ads**: `google-ads-api` npm package (official client)

### Frontend
- **Framework**: Next.js 16 (App Router) + React 19
- **Styling**: Tailwind CSS (reuse config from main-website)
- **UI Components**: magic-mcp for generation + shadcn/ui patterns
- **Charts**: Recharts (React-native, responsive)
- **Forms**: React Hook Form + Zod validation
- **State**: React Query for server state

### Why These Choices
- **Vercel Postgres**: First-class Vercel integration, zero config
- **NextAuth.js**: De-facto standard for Next.js auth, handles OAuth complexity
- **Claude**: Superior conversational AI, better for guided workflows
- **magic-mcp**: Fast UI component generation per user requirement

---

## 3. Database Schema (Prisma)

### Core Models

**Location**: `packages/database/prisma/schema.prisma`

```prisma
model User {
  id                String   @id @default(cuid())
  email             String   @unique
  name              String?
  googleId          String?  @unique
  googleAccessToken String?  // Encrypted
  googleRefreshToken String? // Encrypted
  googleTokenExpiry DateTime?
  createdAt         DateTime @default(now())

  googleAdsAccounts GoogleAdsAccount[]
  chatSessions      ChatSession[]
}

model GoogleAdsAccount {
  id           String   @id @default(cuid())
  userId       String
  customerId   String   // Google Ads Customer ID
  accountName  String
  currency     String   @default("USD")
  linkedAt     DateTime @default(now())

  user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  campaigns    Campaign[]

  @@unique([userId, customerId])
}

model Campaign {
  id                  String   @id @default(cuid())
  googleAdsAccountId  String
  campaignId          String   // Google Ads Campaign ID
  campaignName        String
  status              String   // ENABLED, PAUSED, REMOVED
  budgetAmountMicros  BigInt   // Daily budget in micros
  biddingStrategy     String
  createdAt           DateTime @default(now())

  googleAdsAccount    GoogleAdsAccount @relation(fields: [googleAdsAccountId], references: [id], onDelete: Cascade)
  assetGroups         AssetGroup[]
  performanceMetrics  PerformanceMetric[]
}

model AssetGroup {
  id           String   @id @default(cuid())
  campaignId   String
  assetGroupId String   // Google Ads Asset Group ID
  name         String
  status       String

  campaign     Campaign @relation(fields: [campaignId], references: [id], onDelete: Cascade)
  assets       Asset[]
}

model Asset {
  id                String   @id @default(cuid())
  assetGroupId      String
  assetId           String   // Google Ads Asset ID
  type              String   // IMAGE, VIDEO, HEADLINE, DESCRIPTION
  content           String
  performanceRating String?  // LOW, GOOD, BEST

  assetGroup        AssetGroup @relation(fields: [assetGroupId], references: [id], onDelete: Cascade)
}

model PerformanceMetric {
  id              String   @id @default(cuid())
  campaignId      String
  date            DateTime
  impressions     Int      @default(0)
  clicks          Int      @default(0)
  conversions     Float    @default(0)
  costMicros      BigInt   @default(0)
  conversionValue Float    @default(0)

  campaign        Campaign @relation(fields: [campaignId], references: [id], onDelete: Cascade)

  @@unique([campaignId, date])
}

model ChatSession {
  id          String   @id @default(cuid())
  userId      String
  sessionType String   // CAMPAIGN_CREATION, OPTIMIZATION
  status      String   // ACTIVE, COMPLETED, ABANDONED
  createdAt   DateTime @default(now())

  user        User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  messages    ChatMessage[]
}

model ChatMessage {
  id            String   @id @default(cuid())
  chatSessionId String
  role          String   // USER, ASSISTANT, SYSTEM
  content       String   @db.Text
  metadata      Json?
  createdAt     DateTime @default(now())

  chatSession   ChatSession @relation(fields: [chatSessionId], references: [id], onDelete: Cascade)
}
```

**Key Design Decisions:**
- **Token Encryption**: Google OAuth tokens encrypted with AES-256-GCM
- **Micros Precision**: Google Ads uses micros (1/1M) for currency (avoid float errors)
- **Cascade Deletes**: User deletion removes all related data (GDPR compliance)
- **Composite Unique Keys**: Prevent duplicate Google Ads entities

---

## 4. Authentication Strategy

### NextAuth.js v5 Implementation

**Configuration** (`apps/ads-saas/src/auth.ts`):
```typescript
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          scope: "openid email profile https://www.googleapis.com/auth/adwords",
          access_type: "offline",
          prompt: "consent",
        },
      },
    }),
  ],
})
```

**Protected Routes** (`apps/ads-saas/src/middleware.ts`):
- Check session on all routes except `/auth/*`
- Redirect to `/auth/signin` if unauthenticated

**Environment Variables:**
```env
GOOGLE_CLIENT_ID=your-client-id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=GOCSPX-your-secret
NEXTAUTH_SECRET=your-32-char-secret
NEXTAUTH_URL=http://localhost:3000
```

---

## 5. Google Ads API Integration

### API Client (`packages/google-ads/src/client.ts`)

**Features:**
- OAuth token management (access + refresh tokens)
- Campaign CRUD operations
- Performance metrics fetching
- Asset group management

**Caching Strategy:**
- **Database Cache**: Store daily metrics in `PerformanceMetric` table
- **Background Sync**: Vercel Cron job every 6 hours
- **Real-time Updates**: User-initiated actions bypass cache

**Rate Limiting:**
- Google Ads API: 15,000 operations/day
- Mitigation: Aggressive caching, batch operations

---

## 6. AI Integration (Claude + Vercel AI Elements)

### Conversational Campaign Builder

**Backend**: Vercel AI SDK
**Frontend**: Vercel AI Elements (https://github.com/vercel/ai-elements)

**API Route** (`apps/ads-saas/src/app/api/chat/route.ts`):
- Uses Vercel AI SDK with Claude Sonnet 4.5
- Streaming responses for real-time UX
- Function calling for structured data extraction
- Saves conversation to `ChatSession` table

**Chat Interface** (`apps/ads-saas/src/app/dashboard/create/page.tsx`):
- **Uses Vercel AI Elements** for pre-built chat components:
  - `<Message>` - Message bubbles with streaming support
  - `<MessageList>` - Scrollable message container
  - `<MessageInput>` - Input field with send button
  - `<ToolInvocation>` - Display tool calls (for structured data)
- Integrates with `useChat` hook from Vercel AI SDK
- Button-based multiple choice questions (custom components)
- Asset upload integration via magic-mcp file upload component

**Why AI Elements:**
- Pre-built, production-ready chat components
- Built-in streaming support
- Accessible and responsive out of the box
- Customizable with Tailwind CSS
- Reduces development time by 70%

**Installation:**
```bash
pnpm add @vercel/ai-elements
```

**Conversation Flow:**
1. Campaign name → 2. Goal (sales/leads/traffic) → 3. Budget → 4. Location → 5. Conversions → 6. Images → 7. Headlines → 8. Preview → 9. Launch

---

## 7. UI Component Strategy with magic-mcp

### **PRIMARY APPROACH: magic-mcp for ALL UI Components**

**Critical**: magic-mcp is the PRIMARY tool for UI generation. Use it extensively throughout implementation.

**Workflow:**
1. Reference designs from `/Users/ali/my-projects/riflebird/designs`
2. Use magic-mcp tools to generate components based on designs
3. Customize with Tailwind config from main-website (colors: dark, cream, charcoal, navy)

---

## 8. Implementation Timeline

### Phase 1: MVP (5-6 weeks, 113 points)

**Goal**: Users can sign in, link Google Ads account, view campaigns, create campaigns via AI chat

**Scope:**
- Authentication & Database foundation
- Dashboard with basic metrics
- Campaign list view
- AI-powered campaign builder (9-step conversation)

### Phase 2: Enhanced Features (3-4 weeks, 87 points)

**Scope:**
- Performance charts
- Campaign detail pages
- Automatic metric updates
- Asset uploads in chat

### Phase 3: Advanced Features (3-4 weeks, 72 points)

**Scope:**
- Asset performance analysis
- Alert system
- Optimization suggestions
- Campaign update capabilities

---

## 9. Epic & Work Unit Breakdown

**6 Epics with 30+ work units**:
1. **Foundation Infrastructure (AUTH)** - 34 points
2. **Dashboard Core (DASH)** - 47 points
3. **Google Ads Integration (ADS)** - 68 points
4. **Campaign Details (CAMP)** - 42 points
5. **AI Campaign Builder (AI)** - 55 points
6. **Settings & Optimization (SET)** - 26 points

**Total: 272 story points (~12 weeks with 1 developer)**

---

## 10. Google Ads Linking Flow (AUTH-004)

**User Journey:**
1. User signs in with Google → authenticated in app
2. User redirected to onboarding: "Connect your Google Ads account"
3. Click "Connect Google Ads" button
4. **Second OAuth consent** with Google Ads API scope
5. User grants access → receives access token + refresh token
6. App fetches Google Ads customer IDs
7. Present list of available accounts (if multiple)
8. User selects account(s) to link
9. Store encrypted tokens in `GoogleAdsAccount` table
10. Redirect to dashboard showing campaigns

**Key Implementation Details:**
- **Two separate OAuth flows**: Sign in (email/profile) vs Connect Google Ads (API access)
- **Token Encryption**: AES-256-GCM encryption for sensitive tokens
- **Multiple Accounts**: Support users with multiple Google Ads accounts
- **Token Refresh**: Automatic refresh of expired tokens before API calls

---

## 11. Next Steps

### Immediate Actions:

1. **Copy this plan** to project docs (✅ Done)
2. **Set up fspec epics and prefixes** for tracking work units
3. **Create first work units** starting with AUTH-001 (Google OAuth)
4. **Set up project structure**:
   ```bash
   mkdir -p apps/ads-saas/src/{app,components,lib}
   mkdir -p packages/{database/prisma,types/src,auth/src,google-ads/src}
   ```
5. **Google Cloud Console setup**:
   - Create new project
   - Enable Google Ads API
   - Create OAuth 2.0 credentials
   - Apply for production access

### Week 1 Goal: Proof of Concept
- NextAuth.js + Google OAuth working
- Google Ads API client can fetch campaigns
- Database connection successful
- Protected routes enforcing auth

---

## 12. Testing Strategy - Playwright Only

**CRITICAL**: All testing must use **Playwright** exclusively.

### Playwright Test Structure

**Unit Tests** (Functions & utilities):
```typescript
// src/__tests__/lib/google-ads-client.spec.ts
import { test, expect } from '@playwright/test';
import { GoogleAdsClient } from '@/lib/google-ads-client';

test.describe('GoogleAdsClient', () => {
  test('should refresh expired tokens', async () => {
    // Test implementation
  });
});
```

**Integration Tests** (API routes & database):
```typescript
// src/__tests__/api/campaigns.spec.ts
import { test, expect } from '@playwright/test';

test.describe('GET /api/campaigns', () => {
  test('should fetch campaigns for authenticated user', async ({ page }) => {
    const response = await page.request.get('/api/campaigns');
    expect(response.status()).toBe(200);
  });
});
```

**E2E Tests** (Full user workflows):
```typescript
// src/__tests__/features/user-auth.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Feature: User Authentication', () => {
  test('User signs in with Google', async ({ page }) => {
    // Given I am on the sign-in page
    await page.goto('/auth/signin');

    // When I click "Sign in with Google"
    await page.click('button:has-text("Sign in with Google")');

    // Then I should be authenticated
    // ... verify dashboard loads
  });
});
```

### Test Configuration

**File**: `playwright.config.ts`
- Base URL: `http://localhost:3000`
- Browser types: Chromium, Firefox, WebKit
- Timeout: 30 seconds per test
- Retry: 2 times on failure

### Test Coverage Targets

- **Phase 1**: Auth flows, campaign fetching, campaign creation
- **Phase 2**: Dashboard metrics, charts, campaign details
- **Phase 3**: Asset management, alerts, optimizations

**Run tests**: `pnpm exec playwright test`

---

## 13. Critical Success Factors

**Phase 1 Success Metrics:**
- 10 beta users signed up
- 80% campaign creation completion rate
- Dashboard loads in <2 seconds
- Zero critical bugs in auth flow

**Phase 2 Success Metrics:**
- Users spend 10+ min/session
- 50+ campaigns created
- Background sync running successfully

**Phase 3 Success Metrics:**
- Users make 5+ optimizations/week
- Alerts drive 50% of optimization actions
- 90% user satisfaction score

---

## 13. Risk Mitigation

### Technical Risks:
1. **Google Ads API Approval Delay** - Apply early, use test account during development
2. **Rate Limiting** - Implement aggressive caching and background sync
3. **Token Refresh Failures** - Monitor expiry, proactive re-auth
4. **AI Costs** - Cache common flows, limit context size

### Product Risks:
1. **Low Completion Rate** - Save progress automatically, allow resume
2. **Overwhelming Complexity** - User testing in Phase 1, iterate based on feedback

---

## Summary

This plan provides a pragmatic, phased approach to building the Ads SaaS product:

- **Separate app architecture** for clean separation
- **Vercel Postgres + Prisma** for serverless database
- **NextAuth.js** for battle-tested Google OAuth
- **Claude via Vercel AI SDK + Vercel AI Elements** for conversational builder
- **magic-mcp** for rapid UI component generation
- **Multi-tier caching** to respect API rate limits
- **12-week timeline** broken into 3 phases
- **fspec integration** with 6 epics and 30+ work units

**See also**: `/Users/ali/.claude/plans/idempotent-riding-shell.md` for detailed technical specifications
