# Riflebird Agency Two-Layer Audit System
## Ultra-Lean Micro-Audits for Cold Outreach + Full Lite Audits for Warm Leads

---

## 📋 Table of Contents
1. [System Overview](#system-overview)
2. [Layer 1: Micro-Audit (Cold Outreach)](#layer-1-micro-audit)
3. [Layer 2: Lite Audit (Warm Leads)](#layer-2-lite-audit)
4. [Core Principles](#core-principles)
5. [API Call Strategy](#api-call-strategy)
6. [Audit Execution Paths](#audit-execution-paths)
7. [Issue Detection Framework](#issue-detection-framework)
8. [Lite Audit Template](#lite-audit-template)
9. [Email Templates](#email-templates)
10. [Implementation Workflow](#implementation-workflow)
11. [Tools & Resources](#tools-resources)
12. [Success Metrics](#success-metrics)

---

## 🎯 System Overview

### Two-Layer Approach
**Layer 1 - Micro-Audit:** Ultra-lean process for cold outreach (0-2 API calls)
**Layer 2 - Lite Audit:** Comprehensive analysis for engaged leads (3-6 API calls)

### Purpose
Minimize API spend on cold prospects while having a robust system ready for interested leads.

### Goals
- Generate 100+ micro-audits per week at minimal cost
- Convert 10% to replies requiring lite audits
- Close 20% of lite audits to clients
- Keep API costs under $50/week

### Key Deliverables
**Cold Prospects (Layer 1):**
- 3 bullet points of issues
- Personalized cold email
- No formal document

**Warm Leads (Layer 2):**
- Full lite audit document (1-2 pages)
- Detailed comparison tables
- Strategic recommendations

---

## 🚀 LAYER 1: MICRO-AUDIT (Cold Outreach)

### Overview
The micro-audit is your first touch with cold prospects. Goal: Find 2-3 compelling issues using Chrome DevTools MCP and minimal Ahrefs API calls.

### Resource Limits
- **Chrome DevTools:** Unlimited (FREE!)
- **Ahrefs API Calls:** 0-1 maximum (only if needed)
- **Time:** 3-5 minutes per prospect
- **Output:** 3 bullet points (no document)
- **Cost:** ~$0-0.10 per prospect

### Micro-Audit Process

#### Step 0: Chrome DevTools Analysis (0 API calls)
```
Use Chrome DevTools MCP to automatically extract:

1. Technical SEO Issues
   - Title tag content and length
   - Meta description presence/quality
   - H1-H6 heading structure
   - Page word count
   - Image alt text coverage
   - Internal/external link count
   - Page load speed metrics
   - Mobile responsiveness issues
   - Schema markup presence

2. Content Analysis
   - Text-to-HTML ratio
   - Keyword density for target terms
   - Content structure (paragraphs, lists, etc.)
   - Duplicate content indicators
   
3. SERP Analysis (via Chrome)
   - Current ranking position for main keyword
   - Competitor titles/descriptions
   - SERP features present (PAA, featured snippets)
   - Local pack presence

Common Issues to Flag:
- Title under 30 or over 60 characters
- Missing meta description
- Multiple or missing H1 tags
- Content under 300 words
- No internal links to important pages
- Images without alt text
- Page load time >3 seconds

If you have 3 clear issues → STOP (0 API calls used!)
```

#### Step 1: Chrome DevTools Competitive Analysis (0 API calls)
```
Use Chrome DevTools on competitor sites:

1. Analyze top 3 competitors (from SERP)
   - Extract their title/meta patterns
   - Count their content word length
   - Identify their heading structure
   - Note their internal linking patterns
   
2. Create comparison data
   - Your client: 250 words vs Competitor avg: 1,500 words
   - Your client: 0 internal links vs Competitor avg: 8 links
   - Your client: Generic title vs Competitor: Keyword-optimized titles

If you have 3 strong comparative issues → STOP
```

#### Step 2: Optional Ahrefs Call (1 API call - ONLY if needed)
```
Use ONLY when Chrome DevTools cannot provide:
- Domain Rating comparison
- Exact organic traffic numbers
- Referring domains count
- Page 2 keyword opportunities

Call: site-explorer-metrics OR site-explorer-organic-keywords
Parameters:
- Minimal fields via select parameter
- Limit to essential data only

Decision: Is the missing data worth $0.10-0.30?
Often the answer is NO - Chrome DevTools data is sufficient.
```

### Chrome DevTools Extraction Framework

```javascript
// Example Chrome DevTools MCP Commands

// 1. Extract all SEO elements
chrome.evaluate({
  expression: `
    {
      title: document.title,
      metaDescription: document.querySelector('meta[name="description"]')?.content,
      h1: Array.from(document.querySelectorAll('h1')).map(h => h.textContent),
      h2: Array.from(document.querySelectorAll('h2')).map(h => h.textContent),
      wordCount: document.body.innerText.split(' ').length,
      images: document.querySelectorAll('img').length,
      imagesWithAlt: document.querySelectorAll('img[alt]').length,
      internalLinks: document.querySelectorAll('a[href^="/"]').length,
      externalLinks: document.querySelectorAll('a[href^="http"]').length
    }
  `
})

// 2. Performance metrics
chrome.metrics() // Returns load time, DOM metrics, etc.

// 3. Mobile responsiveness check
chrome.emulate({ device: 'iPhone 12' })
chrome.screenshot() // Visual check for mobile issues

// 4. Competitive analysis (run on competitor sites)
// Extract same data from top 3 competitors
// Compare directly without needing Ahrefs
```

### Issues Detectable via Chrome DevTools Alone

| Issue Category | Chrome DevTools Check | What to Look For | Email Point |
|----------------|----------------------|------------------|-------------|
| Title Tags | `document.title` | Missing keywords, too short/long | "Title is just company name - missing 'service + city'" |
| Meta Description | `querySelector('meta[name="description"]')` | Missing or generic | "No meta description - missing SERP real estate" |
| Content Length | `body.innerText.split(' ').length` | Under 300 words | "Main service page has only 150 words" |
| Headings | `querySelectorAll('h1').length` | Multiple/missing H1 | "No H1 tag on main service page" |
| Internal Links | `querySelectorAll('a[href^="/"]')` | Orphaned pages | "Service pages have no internal links" |
| Page Speed | `chrome.metrics()` | Load time >3s | "Page takes 5.2 seconds to load" |
| Mobile | `chrome.emulate()` + screenshot | Layout issues | "Content cut off on mobile" |
| Images | `querySelectorAll('img[alt=""]')` | Missing alt text | "12 images missing alt text" |
| Schema | `querySelectorAll('[itemscope]')` | No structured data | "No local business schema" |

### Micro-Audit Output Format (Updated)

```
Company: [Name]
Domain: [URL]
Issue 1: Title tag is "Company Name" - competitors use "Service + City"
Issue 2: Main service page has 200 words vs competitor average of 1,500
Issue 3: Page loads in 4.5 seconds (competitors average 1.8s)
Chrome DevTools Used: Yes
Ahrefs Calls Used: 0
Ready for Email: Yes
```

---

## 📊 LAYER 2: LITE AUDIT (Warm Leads Only)

### Overview
The lite audit is deployed ONLY after a prospect shows interest (replies, books a call, or requests more info).

### When to Trigger Layer 2
- Prospect replies to cold email
- Prospect books a discovery call
- Prospect asks for more details
- Referral or warm introduction

### Resource Investment
- **API Calls:** 3-6 based on business size
- **Time:** 15-20 minutes
- **Output:** 1-2 page markdown document
- **Cost:** ~$0.50-1.00 per audit

### Lite Audit Process
This is when you use the full framework with Paths A/B/C as originally designed.

---

## ⚡ Core Principles

### Efficiency Rules - Updated for Two Layers

1. **Micro-audit (cold):** Maximum 2 API calls - stop at 3 issues
2. **Lite audit (warm):** Maximum 6 API calls - comprehensive analysis
3. **80% manual checks first** - API calls are last resort for cold outreach
4. **Only create documents for warm leads** - bullets are enough for cold
5. **Time allocation:** 5 min cold, 20 min warm

### Time & Cost Targets
- **Time per audit:** 5-10 minutes
- **API units per audit:** 60-150 units
- **Cost per audit:** ~$0.50-1.00
- **Potential value per client:** $2,000-5,000/month

---

## 🔧 API Call Strategy

### Layer 1: Micro-Audit API Usage

#### Maximum 2 Calls Per Cold Prospect

**Call 1 (If Manual Checks Insufficient):**
```javascript
// site-explorer-metrics - ALWAYS FIRST
{
  target: "example.com",
  date: "2024-01-15",
  mode: "subdomains",
  country: "au",
  select: "domain_rating,organic_traffic,organic_keywords,refdomains"
}
// Cost: ~10 units
```

**Call 2 (Pick ONE If Needed):**
```javascript
// OPTION A: site-explorer-top-pages (for traffic distribution)
{
  target: "example.com",
  limit: 5,
  select: "url,traffic,keywords_count"
}
// Cost: ~20-30 units

// OPTION B: site-explorer-organic-keywords (for opportunities)
{
  target: "example.com",
  date: "2024-01-15",
  country: "au",
  limit: 10,
  select: "keyword,position,volume,url",
  where: "position > 10 AND position <= 20",
  order_by: "volume:desc"
}
// Cost: ~30-40 units
```

**Total Micro-Audit Cost: 10-50 units ($0.10-0.50)**

### Layer 2: Lite Audit API Usage (Warm Leads Only)

#### Full Analysis - 3-6 Calls Based on Business Size

#### Essential Calls (Use for Every Audit)
1. **site-explorer-metrics**
   - Purpose: Get overview metrics
   - Units: ~10
   - Fields: organic_traffic, organic_keywords, domain_rating, refdomains

2. **site-explorer-organic-keywords**
   - Purpose: Find opportunities & check quality
   - Units: ~50
   - Fields: keyword, position, volume, traffic, url, difficulty

#### Conditional Calls (Based on Business Type)
3. **site-explorer-organic-competitors**
   - Purpose: Identify competitive gaps
   - Units: ~50
   - When: For established businesses (DR >20)

4. **site-explorer-top-pages**
   - Purpose: Find traffic concentration issues
   - Units: ~30
   - When: For content-heavy sites

5. **batch-analysis-batch-analysis**
   - Purpose: Compare multiple competitors
   - Units: ~40
   - When: You know the competitors already

### API Call Parameters

```javascript
// Call 1: Site Metrics
{
  target: "example.com",
  date: "2024-01-15",
  mode: "subdomains",
  country: "au"
}

// Call 2: Organic Keywords
{
  target: "example.com",
  date: "2024-01-15",
  country: "au",
  limit: 30,
  select: "keyword,volume,position,traffic,url,difficulty",
  where: "position <= 20",
  order_by: "traffic:desc"
}

// Call 3: Competitors
{
  target: "example.com",
  date: "2024-01-15",
  country: "au",
  limit: 3,
  select: "domain,common_keywords,competitor_traffic,domain_rating"
}
```

---

## 🛤️ Audit Execution Paths

### Path 0: Micro-Audit (ALL Cold Prospects)
```
1. Manual checks → Find obvious on-page issues (0 calls)
2. If needed: site-explorer-metrics → Basic health check (1 call)
3. If still needed: ONE opportunity call → Find page 2 keywords OR traffic issues (1 call)

Total: 0-2 calls, ~10-50 units
Output: 3 bullet points for email
Time: 3-5 minutes
```

### Warm Lead Paths (After Reply/Interest)

### Path A: Established Business (DR 20+, Traffic 1000+)
```
1. site-explorer-metrics → Overview
2. site-explorer-organic-keywords → Quality check + opportunities
3. site-explorer-organic-competitors → Gap analysis
4. batch-analysis-batch-analysis → Competitive comparison
Total: 4 calls, ~150 units
```

### Path B: Small/Local Business (DR <20, Traffic <1000)
```
1. site-explorer-metrics → Overview
2. site-explorer-organic-keywords (limit: 20) → Current rankings
3. site-explorer-top-pages → Traffic distribution
Total: 3 calls, ~90 units
```

### Path C: Quick Competitive Gap (Known Competitors)
```
1. batch-analysis-batch-analysis → Multi-competitor comparison
2. site-explorer-organic-keywords → Deep dive
Total: 2 calls, ~90 units
```

### Decision Tree
```
COLD PROSPECT
│
├─→ Path 0: Micro-Audit (ALWAYS START HERE)
│   ├─ Manual checks
│   ├─ 0-2 API calls maximum
│   ├─ Find 3 issues
│   └─ Send cold email
│
└─→ IF REPLY/INTEREST
    │
    ├─[DR <15 OR Traffic <500]
    │  └→ Path B (Small Business)
    │     └→ Focus: Foundation building
    │
    ├─[DR 15-30 AND Traffic 500-5000]
    │  └→ Path B or C (depending on data)
    │     └→ Focus: Quick wins
    │
    └─[DR >30 OR Traffic >5000]
       └→ Path A (Full Competitive)
          └→ Focus: Market share capture
```

---

## 🔍 Issue Detection Framework

### Issue Priority Matrix

| Priority | Issue Type | Detection Criteria | Impact | Effort |
|----------|-----------|-------------------|---------|--------|
| 1 | Page 2 Keywords | 3+ keywords position 11-20 | High | Low |
| 2 | Traffic Concentration | >80% traffic to homepage | High | Low |
| 3 | Competitor Gap | Competitors have 3x traffic | High | Medium |
| 4 | Missing Commercial Pages | No service/product pages ranking | High | Medium |
| 5 | Low Authority | DR <20 with good content | Medium | High |
| 6 | Thin Content | <300 words on money pages | Medium | Low |

### Quick Win Identification

**Criteria for a "Quick Win":**
- Implementation time: <2 hours
- Technical skill required: Basic
- Time to impact: <6 weeks
- Clear, measurable outcome

**Top Quick Wins to Look For:**
1. Title tag optimization for page 2 keywords
2. Internal linking to orphaned pages
3. H1 optimization on money pages
4. Creating missing location pages
5. Adding commercial modifiers to content

---

## 📄 Lite Audit Template (Warm Leads Only)

**Important:** This document is ONLY created after a prospect shows interest. Cold prospects get bullet points only.

```markdown
# SEO Opportunity Analysis: [Company Name]
*Generated: [Date] by Riflebird Agency*

## Executive Summary
**Website:** [domain.com]  
**Current Monthly Organic Traffic:** [X] visitors  
**Domain Rating:** [X]/100  
**Market:** [City, State]  
**Industry:** [Industry]  
**Audit Focus:** Quick wins for immediate impact

## 🚨 Priority Issues & Opportunities

### Issue #1: [Descriptive Title]
**The Problem:**
- [Specific description of the issue with data]
- Impact: Missing [X] potential visitors monthly

**The Fix:**
- [Specific action item 1]
- [Specific action item 2]
- Time required: [X] hours
- Expected result: [Specific outcome]

### Issue #2: [Descriptive Title]
**The Problem:**
- [Specific description of the issue with data]
- Impact: [Quantified impact]

**The Fix:**
- [Specific action item 1]
- [Specific action item 2]
- Time required: [X] hours
- Expected result: [Specific outcome]

### Issue #3: [Descriptive Title]
**The Problem:**
- [Specific description of the issue with data]
- Impact: [Quantified impact]

**The Fix:**
- [Specific action item 1]
- [Specific action item 2]
- Time required: [X] hours
- Expected result: [Specific outcome]

## 📊 Competitive Landscape

| Metric | You | Competitor A | Competitor B | Industry Avg |
|--------|-----|--------------|--------------|--------------|
| Monthly Traffic | [X] | [X] | [X] | [X] |
| Total Keywords | [X] | [X] | [X] | [X] |
| Domain Authority | [X] | [X] | [X] | [X] |
| Backlinks | [X] | [X] | [X] | [X] |

**Key Insight:** [One sentence about competitive position]

## 🎯 Quick Win Keywords (Page 2 Opportunities)

| Keyword | Current Position | Monthly Searches | Current URL |
|---------|-----------------|------------------|-------------|
| [keyword] | #[X] | [X] | [URL] |
| [keyword] | #[X] | [X] | [URL] |
| [keyword] | #[X] | [X] | [URL] |

## 💡 Immediate Action Plan

### Week 1: Quick Technical Fixes
- [ ] Update title tags for top 3 page 2 keywords
- [ ] Add H1 tags to service pages
- [ ] Create internal links from homepage

### Week 2-3: Content Optimization
- [ ] Expand thin content on money pages
- [ ] Add FAQ sections targeting long-tail keywords
- [ ] Optimize meta descriptions for CTR

### Week 4: Monitor & Adjust
- [ ] Track ranking improvements
- [ ] Monitor traffic changes
- [ ] Identify next opportunities

## 📈 Expected Results

**If these recommendations are implemented:**
- **Month 1:** 20-30% increase in page 1 rankings
- **Month 2:** 15-25% increase in organic traffic
- **Month 3:** 10-15% increase in organic conversions

---

*This audit identifies surface-level opportunities. A comprehensive technical audit would reveal additional growth potential.*

**Next Steps:** Ready to implement these changes? Let's discuss a full SEO strategy for [Company Name].
```

---

## ✉️ Email Templates

### Template A: Technical/Performance Issues (Chrome DevTools Focus)

**Subject Lines:**
- "[Company] site loads 3x slower than competitors"
- "Quick fix for [Company]'s invisible service pages"
- "[Company] is missing basic SEO elements"

**Email Body:**
```
Hi [Name],

I was analyzing [industry] websites in [City] and ran some technical checks on [website].

Found three issues holding back your rankings:

Your main service page title is only 25 characters - you're missing the opportunity to include "service + city" like your competitors who rank #1-3.

The page also loads in 4.5 seconds (I checked with Chrome DevTools). Google recommends under 2.5 seconds, and slow sites get penalized in rankings.

Plus, your service pages have no internal links pointing to them, making them invisible to Google's crawlers.

Quick fixes that typically work:
• Expand title to include your main keywords
• Compress images and enable caching 
• Add navigation links from homepage to all services

These are just from automated Chrome scans. Happy to run a deeper analysis if you'd like to capture more organic traffic.

Worth a quick chat about improving [Company]'s visibility?

[Your Name]
[Your Title]
Riflebird Agency
[Phone]
```

### Template B: Content Comparison (Chrome + Competitor Analysis)

**Subject Lines:**
- "Quick SEO win for [Company] - you're 1 spot from page 1"
- "[Company] almost ranks for [keyword]"
- "Found easy ranking opportunity for [Company]"

**Email Body:**
```
Hi [Name],

I was researching [industry] businesses in [City] and noticed [Company] ranks #[12] for "[main keyword]" - literally one spot away from page 1 where all the clicks are.

Looking at your [page URL], the title is just "[Current Title]" while every page 1 competitor uses "[Keyword] | Brand". Plus, you have zero internal links pointing to this page despite having [X] blog posts that could naturally link to it.

Two quick fixes that typically work:
• Update title to include "[target keyword] in [City]"
• Add 2-3 internal links from your popular posts

These changes usually push page 2 rankings up within 3-4 weeks.

This is just from a quick look in our SEO tools. We typically do a full 40-point audit and build a complete ranking strategy for [industry] businesses.

Worth a quick chat about getting more organic leads for [Company]?

[Your Name]
[Your Title]
Riflebird Agency
[Phone]
```

### Template B: Traffic Concentration Issue

**Subject Lines:**
- "[Company]'s service pages are invisible to Google"
- "Why [Company] gets traffic but not leads"
- "Found the bottleneck in [Company]'s SEO"

**Email Body:**
```
Hi [Name],

Noticed something interesting about [website] - you get [X] organic visitors monthly, but 85% land on your homepage while your [service] pages get almost zero traffic.

This means people find your brand but not your services when they're ready to buy.

Your competitors [Competitor A] and [Competitor B] spread traffic across service pages, each ranking for specific buyer searches like "[service] [city]" and "best [service] near me".

The fix is straightforward:
• Add a services section on your homepage with proper internal links
• Optimize each service page for its main keyword
• Create location-specific landing pages

This typically redistributes traffic within 4-6 weeks and increases conversions since visitors land directly on relevant pages.

We specialize in helping [industry] businesses capture more organic leads. Happy to show you exactly which service keywords you should be ranking for.

Free for a 15-minute call this week?

[Your Name]
Riflebird Agency
```

### Template C: Competitor Gap Focus

**Subject Lines:**
- "[Competitor] is eating [Company]'s lunch online"
- "Why [Competitor] outranks [Company]"
- "[Company] vs [Competitor] - the data"

**Email Body:**
```
Hi [Name],

I was analyzing [industry] SEO in [City] and found something concerning - [Competitor] gets 3x more organic traffic than [Company] despite offering similar services.

They're capturing customers searching for:
• "[buying keyword]" - 450 searches/month
• "[commercial keyword]" - 320 searches/month  
• "[service + location]" - 280 searches/month

You don't show up for any of these buyer searches, meaning they're getting customers who should be finding you.

With the right content and optimization strategy, you could rank for these within 2-3 months. We're talking about 3-4 new pages and some strategic link building.

We helped [Similar Client] go from invisible to page 1 for their main commercial keywords. Happy to share the exact process.

Worth 15 minutes to discuss capturing these customers?

[Your Name]
Riflebird Agency
```

### Follow-Up Template (Day 3-4)

```
Hi [Name],

Following up on the SEO opportunities I found for [Company].

The [specific issue] is likely costing you [X] visitors monthly. Happy to jump on a quick call to walk through the fixes.

Are you the right person to discuss this with, or should I reach out to someone else on your team?

[Your Name]
```

---

## 📋 Implementation Workflow

### Phase 1: Setup (One-Time)
1. Configure Chrome DevTools MCP
2. Configure Ahrefs MCP (backup only)
3. Create Chrome DevTools extraction scripts
4. Set up CRM with two stages (Cold/Warm)
5. Build prospect list (100-200 domains)
6. Create email sequences

### Phase 2: Daily Execution - Two Tracks

#### Track 1: Micro-Audits with Chrome DevTools (Morning - 1 hour)
```
For 20 cold prospects:
1. Chrome DevTools extraction (2 min)
   - Run SEO element extraction
   - Check page performance
   - Screenshot mobile view
2. Analyze competitor sites via Chrome (1 min)
3. Note 3 issues in spreadsheet (30 sec)
4. Generate personalized email (30 sec)
5. Queue for sending

Total: ~4 minutes per prospect
Output: 20 emails ready to send
Ahrefs Cost: $0-2 (only 1-2 prospects might need it)
Chrome Cost: FREE
```

#### Track 2: Lite Audits (Afternoon - 30 min)
```
For warm leads who replied:
1. Chrome DevTools deep dive (5 min)
2. Run Ahrefs Path A/B/C analysis (10 min)
3. Create lite audit document (5 min)
4. Prepare follow-up email/call agenda (5 min)

Total: ~25 minutes per warm lead
Output: Professional audit document
API Cost: ~150 units per audit
```

### Phase 3: Follow-Up Schedule

#### Cold Prospects (Micro-Audit)
- Day 1: Send initial email with 3 issues
- Day 4: Follow-up if no response
- Day 7: Final follow-up
- Day 14: Move to nurture sequence

#### Warm Leads (Lite Audit)
- Immediate: Send lite audit document
- Day 2: Call to discuss findings
- Day 5: Send proposal
- Day 7: Follow up on proposal

### File Organization
```
/audits/
  /micro/ (just a tracking spreadsheet)
    - prospects.csv
    - issues-log.txt
  /lite/ (full documents for warm leads)
    /company-name-1/
      - audit.md
      - proposal.pdf
      - notes.md
    /company-name-2/
      - audit.md
      - proposal.pdf
      - notes.md
```

---

## 🛠️ Tools & Resources

### Required Tools - Priority Order
1. **Chrome DevTools MCP** - PRIMARY tool for micro-audits (FREE)
2. **Ahrefs MCP** - ONLY for specific metrics Chrome can't provide
3. **CRM System** - Track outreach and responses
4. **Email Tool** - Send and track emails
5. **Markdown Editor** - Create audit documents (warm leads only)
6. **Spreadsheet** - Track metrics and results

### Chrome DevTools Capabilities
- **Technical SEO:** Title, meta, headings, schema
- **Content Analysis:** Word count, structure, keyword density
- **Performance:** Load times, Core Web Vitals
- **Mobile:** Responsive design issues
- **Competitive Analysis:** Extract same data from competitors
- **Visual Issues:** Screenshots for proof

### When to Use Ahrefs (Sparingly)
- Domain Rating (DR) - Chrome can't determine
- Exact organic traffic numbers
- Referring domains count
- Page 2 keyword opportunities
- Historical data trends

### Chrome DevTools Scripts Library
```javascript
// Save these as templates for quick execution

// 1. Complete SEO Extraction
const seoAudit = {
  title: document.title,
  titleLength: document.title.length,
  metaDesc: document.querySelector('meta[name="description"]')?.content || 'MISSING',
  h1Count: document.querySelectorAll('h1').length,
  h1Text: Array.from(document.querySelectorAll('h1')).map(h => h.textContent),
  wordCount: document.body.innerText.split(/\s+/).length,
  internalLinks: document.querySelectorAll('a[href^="/"]').length,
  images: document.querySelectorAll('img').length,
  imagesNoAlt: document.querySelectorAll('img:not([alt])').length,
  loadTime: performance.timing.loadEventEnd - performance.timing.navigationStart
};

// 2. Local Business Check
const localSEO = {
  hasNAP: document.body.innerText.includes('phone') && document.body.innerText.includes('address'),
  hasSchema: document.querySelectorAll('[itemtype*="LocalBusiness"]').length > 0,
  hasMap: document.querySelectorAll('iframe[src*="google.com/maps"]').length > 0,
  hasHours: document.body.innerText.toLowerCase().includes('hours') || 
            document.body.innerText.toLowerCase().includes('open')
};

// 3. Content Quality Check
const contentQuality = {
  paragraphs: document.querySelectorAll('p').length,
  lists: document.querySelectorAll('ul, ol').length,
  headings: document.querySelectorAll('h2, h3, h4').length,
  textToHTML: (document.body.innerText.length / document.body.innerHTML.length * 100).toFixed(2)
};
```

### Prospect Research Sources
- Google Maps (local businesses)
- Industry directories
- LinkedIn Sales Navigator
- Facebook business pages
- Local business associations

---

## 📊 Success Metrics

### Key Performance Indicators - Two Layer System

#### Layer 1: Micro-Audit Metrics
- **Volume:** 100+ micro-audits per week
- **API Cost:** <$0.30 per audit
- **Time:** <5 minutes per audit
- **Email Open Rate:** 40%+
- **Reply Rate:** 10%+ (triggers Layer 2)

#### Layer 2: Lite Audit Metrics
- **Trigger Rate:** 10% of cold emails
- **Lite Audits Created:** 10-15 per week
- **API Cost:** <$1.00 per audit
- **Call Booking Rate:** 50% of lite audits
- **Close Rate:** 20% of lite audits

#### Overall Funnel
```
100 Micro-Audits (Layer 1)
  ↓ 10% reply rate
10 Lite Audits (Layer 2)
  ↓ 50% book calls
5 Sales Calls
  ↓ 40% close rate
2 New Clients

Cost: 100 × $0.30 + 10 × $1.00 = $40
Revenue: 2 × $3,000 = $6,000
ROI: 150x
```

### Tracking Spreadsheet - Updated

| Week | Micro-Audits | Cold Emails | Replies | Lite Audits | Calls | Proposals | Clients | API Cost | Revenue |
|------|--------------|-------------|---------|-------------|-------|-----------|---------|----------|---------|
| 1 | 100 | 100 | 10 | 10 | 5 | 2 | 0 | $40 | $0 |
| 2 | 100 | 100 | 12 | 12 | 6 | 3 | 1 | $42 | $3,000 |
| 3 | 100 | 100 | 15 | 15 | 7 | 4 | 2 | $45 | $6,000 |
| 4 | 100 | 100 | 18 | 18 | 9 | 5 | 2 | $48 | $6,000 |

### Optimization Metrics to Track

**Micro-Audit Efficiency:**
- Which manual checks find the most issues?
- What's the optimal number of API calls?
- Which issues generate the most replies?

**Lite Audit Conversion:**
- Which audit depth converts best?
- What's the optimal document length?
- Which comparisons resonate most?

---

## 🚀 Getting Started Checklist

### Week 1: Master the Micro-Audit
- [ ] Practice manual site checks (find issues without API)
- [ ] Run 10 test micro-audits (0-2 calls each)
- [ ] Time yourself - target <5 minutes each
- [ ] Create tracking spreadsheet for issues
- [ ] Test email templates with found issues

### Week 2: Scale Micro-Audits
- [ ] Complete 50 micro-audits
- [ ] Send 50 cold emails
- [ ] Track opens and replies
- [ ] Note which issues generate replies
- [ ] Prepare lite audit template for responders

### Week 3: Add Lite Audit Layer
- [ ] Create first lite audits for warm leads
- [ ] Test Path A/B/C on real responders
- [ ] Book first sales calls
- [ ] Refine audit-to-proposal process
- [ ] Track conversion at each stage

### Week 4: Full System Implementation
- [ ] Run 100 micro-audits
- [ ] Manage 10-15 lite audits
- [ ] Optimize based on data
- [ ] Delegate or automate where possible
- [ ] Set weekly targets going forward

---

## 📝 Notes & Best Practices

### Micro-Audit Best Practices (Layer 1)

**Do's:**
✅ ALWAYS try manual checks first (save API calls)
✅ Stop immediately at 3 issues
✅ Keep issues simple and quantifiable
✅ Focus on issues visible in SERPs
✅ Use competitor comparisons (people understand competition)

**Don'ts:**
❌ Don't run more than 2 API calls for cold prospects
❌ Don't create documents for cold outreach
❌ Don't mention technical SEO jargon
❌ Don't give away the entire solution
❌ Don't waste time on non-responders

### Lite Audit Best Practices (Layer 2)

**Do's:**
✅ Reference their reply/interest in your follow-up
✅ Create professional documentation
✅ Include competitive analysis
✅ Provide specific timeline for improvements
✅ Prepare for sales call with insights

**Don'ts:**
❌ Don't overwhelm with 10+ issues
❌ Don't be too technical for non-SEO audience
❌ Don't forget to book next steps
❌ Don't give away implementation details

### Tips for Success
1. **Timing:** Send emails Tuesday-Thursday, 10am local time
2. **Subject Lines:** Keep under 40 characters, be specific
3. **Personalization:** Reference their city, industry, competitors
4. **Social Proof:** Mention similar clients (without naming)
5. **Urgency:** Reference competitors gaining ground
6. **Value:** Always lead with what's in it for them
7. **CTA:** Make it easy to say yes (15-minute call)

---

## 🎯 Final Thoughts

This system is designed to be:
- **Scalable:** Can be done by one person or a team
- **Efficient:** Minimal time and API costs per prospect
- **Effective:** Focuses on real issues that matter
- **Professional:** Positions Riflebird as experts
- **Measurable:** Everything can be tracked and optimized

Remember: The goal is not to do full audits for free, but to identify enough issues to start a conversation. The real value comes from the full engagement.

---

*Document Version: 1.0*
*Last Updated: January 2024*
*Created for: Riflebird Agency*

---

## Appendix: Quick Reference

### Layer 1 - Micro-Audit Costs (Chrome DevTools First)
**Chrome DevTools Extraction:** FREE
**Chrome Performance Check:** FREE  
**Chrome Mobile Check:** FREE
**Chrome Competitor Analysis:** FREE

**Ahrefs (only if needed):**
- site-explorer-metrics: ~10 units
- site-explorer-organic-keywords (limit 10): ~30 units

**Typical Micro-Audit with Chrome:**
- Chrome only: 0 units (90% of cases)
- Chrome + 1 Ahrefs call: 10-30 units (10% of cases)
- Average: ~2 units ($0.02)

### Layer 2 - Lite Audit Costs (Chrome + Full Ahrefs)
**Chrome DevTools:** FREE (deep technical analysis)
**Ahrefs Path A (Established):** ~150 units
**Ahrefs Path B (Small):** ~90 units  
**Ahrefs Path C (Quick Competitive):** ~90 units
**Average:** ~110 units ($1.10)

### Time Estimates
**Micro-Audit:**
- Manual checks: 1-2 minutes
- API calls (if needed): 1-2 minutes
- Email generation: 1-2 minutes
- Total: 3-5 minutes

**Lite Audit:**
- Full analysis: 10-15 minutes
- Document creation: 5-10 minutes
- Total: 15-25 minutes

### Weekly Economics (100 Prospects) - With Chrome DevTools
```
Chrome DevTools Audits: 100 × $0 = $0
Ahrefs for ~10% of prospects: 10 × $0.10 = $1
Lite Audits for responders: 10 × $1.10 = $11
Total Weekly Cost: $12 (vs $31 without Chrome)

Expected Clients: 2
Revenue: 2 × $3,000 = $6,000
ROI: 500x or 50,000%
```

### Chrome DevTools vs Manual vs Ahrefs Comparison

| Task | Manual | Chrome DevTools | Ahrefs | Best Choice |
|------|--------|-----------------|--------|-------------|
| Check title/meta | 30 sec | 2 sec | N/A | Chrome |
| Count words | 1 min | 2 sec | N/A | Chrome |
| Find H1 issues | 30 sec | 2 sec | N/A | Chrome |
| Check page speed | Can't | 5 sec | N/A | Chrome |
| Mobile check | Can't | 5 sec | N/A | Chrome |
| Find internal links | 2 min | 2 sec | N/A | Chrome |
| Get Domain Rating | Can't | Can't | 10 units | Ahrefs (if needed) |
| Find page 2 keywords | Can't | Can't | 30 units | Ahrefs (if needed) |
| Analyze competitors | 5 min | 30 sec | 50 units | Chrome |

### Decision Matrix - Updated

| If Chrome DevTools Finds... | It Means... | Email Point | Need Ahrefs? |
|----------------------------|-------------|-------------|---------------|
| Title <30 or >60 chars | Poor optimization | "Title too short/long" | No |
| No meta description | Missing SERP text | "Invisible in search results" | No |
| <300 words | Thin content | "Competitors have 5x more content" | No |
| Load time >3s | Slow site | "Losing visitors to slow load" | No |
| Multiple H1s | Confused structure | "Google can't understand page focus" | No |
| No internal links | Orphaned pages | "Service pages are islands" | No |
| Want traffic numbers | Need metrics | "You get X visits vs competitor's Y" | Yes (1 call) |
| Need authority metric | DR comparison | "Your site authority is X vs Y" | Yes (1 call) |

### Chrome DevTools Workflow for Micro-Audits

#### Step-by-Step Process (Per Prospect)

**1. Initial Site Scan (30 seconds)**
```javascript
// Navigate to target site
chrome.navigate({ url: 'https://example.com' })

// Run comprehensive extraction
chrome.evaluate({
  expression: `
    (() => {
      const audit = {
        // SEO Basics
        title: document.title,
        titleLength: document.title.length,
        metaDesc: document.querySelector('meta[name="description"]')?.content || 'MISSING',
        
        // Content
        h1s: document.querySelectorAll('h1').length,
        wordCount: document.body.innerText.split(/\s+/).length,
        
        // Technical
        internalLinks: document.querySelectorAll('a[href^="/"]').length,
        imgNoAlt: document.querySelectorAll('img:not([alt])').length,
        
        // Performance (rough estimate)
        domElements: document.getElementsByTagName('*').length
      };
      
      // Flag issues
      audit.issues = [];
      if (audit.titleLength < 30 || audit.titleLength > 60) 
        audit.issues.push('Title length issue');
      if (audit.metaDesc === 'MISSING') 
        audit.issues.push('No meta description');
      if (audit.h1s !== 1) 
        audit.issues.push('H1 problem');
      if (audit.wordCount < 300) 
        audit.issues.push('Thin content');
        
      return audit;
    })()
  `
})
```

**2. Performance Check (10 seconds)**
```javascript
// Get load metrics
chrome.metrics()
// Returns: { TaskDuration, ScriptDuration, LayoutDuration, etc. }

// Flag if slow
if (metrics.TaskDuration > 3000) {
  issues.push('Page loads slowly');
}
```

**3. Mobile Check (10 seconds)**
```javascript
// Switch to mobile view
chrome.emulate({ device: 'iPhone 12' })

// Take screenshot for visual issues
chrome.screenshot({ path: 'mobile-view.png' })

// Check viewport meta
chrome.evaluate({
  expression: `document.querySelector('meta[name="viewport"]')?.content`
})
```

**4. Competitor Quick Check (30 seconds)**
```javascript
// Google the main keyword
chrome.navigate({ url: 'https://google.com/search?q=service+city' })

// Extract top 3 competitor URLs
const competitors = chrome.evaluate({
  expression: `
    Array.from(document.querySelectorAll('.g a'))
      .slice(0, 3)
      .map(a => a.href)
  `
})

// Visit top competitor and extract same metrics
chrome.navigate({ url: competitors[0] })
// Run same extraction script
// Compare metrics
```

**5. Output Issues (10 seconds)**
```
Issues Found via Chrome DevTools:
1. Title only 25 characters (competitors use 50-60)
2. Main page has 180 words (competitors average 1,200)  
3. No meta description (missing SERP real estate)
4. Page loads in 4.2s (Google recommends <2.5s)

Decision: Already have 4 issues - NO AHREFS NEEDED
```

### Common Issue Patterns by Industry

**Local Service Business:**
- Missing location in title/H1
- No local schema markup
- Thin service page content
- No Google Maps embed
- Missing NAP consistency

**E-commerce:**
- Category pages with no unique content
- Missing product schema
- Poor internal linking structure
- Slow load times from large images
- No reviews schema

**B2B/SaaS:**
- Feature pages with technical jargon only
- No comparison/alternative pages
- Blog posts not linked to product pages
- Missing FAQ schema
- Generic meta descriptions

**Professional Services:**
- Attorney/Doctor/Accountant name only in title
- No service-specific pages
- Missing credentials/trust signals
- No case studies or testimonials
- Thin "About" page

---

*Document Version: 2.0 - Two-Layer System*
*Last Updated: January 2024*
*Created for: Riflebird Agency*
