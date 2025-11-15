# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Riflebird Agency is a digital marketing agency website built with Next.js 15, featuring a modern landing page with services (Google Ads, Social Media Advertising, Local SEO), newsletter subscription, and contact forms. The project uses the App Router architecture with TypeScript, Tailwind CSS, and Resend for email functionality.

## Development Commands

### Setup
```bash
# Install dependencies
yarn install

# Set up environment variables
cp .env.example .env.local
# Then edit .env.local with actual API keys
```

### Running the Application
```bash
# Development server with Turbopack
yarn dev

# Production build
yarn build

# Start production server
yarn start

# Lint code
yarn lint
```

The development server runs at http://localhost:3000

### Package Manager
This project uses **Yarn 4.5.3** (Berry). Do not use npm or pnpm.

## Architecture

### App Structure (Next.js App Router)
- **`src/app/`**: All routes and pages
  - `page.tsx`: Homepage with Hero, Services, BookingSection, NewsletterSection
  - `layout.tsx`: Root layout with Navigation, Footer, SpeedInsights
  - `api/contact/route.ts`: Contact form endpoint (emails to ali@riflebirdagency.com.au)
  - `api/newsletter/route.ts`: Newsletter subscription endpoint
  - `api/newsletter/unsubscribe/route.ts`: Newsletter unsubscribe endpoint
  - `services/`: Service pages (Google Ads, Social Media, Local SEO)
  - `contact/`: Contact page
  - `book-now/`: Booking page
  - `privacy-policy/`: Privacy policy page

### Component Organization
- **`src/components/`**: Reusable UI components
  - **`templates/SeoPageTemplate.tsx`**: Reusable template for service pages with image/content layout and FAQ section
  - Navigation, Hero, Services, BookingSection, NewsletterSection, Footer, FAQ components
- **`src/faqItems/`**: FAQ data for different services (localSeoFaq, socialMediaFaq, googleAdsFaq)
- **`src/icons/`**: Custom icon components (Instagram, Facebook, Twitter)

### Email Integration (Resend)
The project uses Resend for two email flows:
1. **Contact form** (`api/contact/route.ts`): Sends contact inquiries to the agency
2. **Newsletter** (`api/newsletter/route.ts`):
   - Creates contacts in Resend audience
   - Sends welcome email with unsubscribe link
   - Unsubscribe route uses contact ID from URL params

### Styling System
- **Tailwind CSS** with custom theme colors:
  - `dark`: #0A0C14
  - `cream`: #DDDDD7
  - `charcoal`: #2A2829
  - `navy`: #2B3F55
- **Typography plugin**: Enabled for rich text content
- **Custom fonts**:
  - Geist (primary)
  - Almarai (Arabic support, variable font)
  - Libre Baskerville (serif, variable font)
- **Custom animations**: fadeIn animation defined in tailwind.config.ts

### Lead Management
The `leads/` directory contains markdown files for tracking client leads and communications. This is a simple file-based CRM approach.

## Environment Variables

Required variables in `.env.local`:
```
RESEND_API_KEY=              # Main Resend API key for contact form
RESEND_AUDIENCE_ID=          # Newsletter audience ID
RESEND_AUDIENCE_API_KEY=     # Audience-specific API key for newsletter
NEXT_PUBLIC_BASE_URL=        # Base URL for unsubscribe links (http://localhost:3000 in dev)
```

## Key Implementation Details

### Service Pages Pattern
All service pages (Google Ads, Social Media, Local SEO) use the `SeoPageTemplate` component which provides:
- Responsive image/content layout (60/50 split on desktop, stacked on mobile)
- FAQ section integration
- Consistent styling and structure

### Newsletter Flow
1. User submits email via NewsletterSection component
2. POST to `/api/newsletter` creates Resend contact
3. Welcome email sent with unsubscribe link containing contact ID
4. Unsubscribe link format: `/api/newsletter/unsubscribe?id={contactId}`

### Image Hosting
External images from Unsplash are allowed via Next.js image configuration (`next.config.ts`).

## Code Conventions

- TypeScript strict mode enabled
- React 19 and Next.js 15 features
- Server components by default (mark "use client" only when needed)
- API routes use NextResponse for consistent responses
- Custom metadata per route for SEO
