# Lead Generation Plan: Organic Traffic Investigation with Ahrefs MCP

## Overview

This document outlines a minimal, credit-efficient strategy for using Ahrefs MCP to investigate a prospect's website organic traffic and generate meaningful insights for outreach. The goal is to provide a "free sample" of value that demonstrates expertise without requiring extensive analysis.

## Strategic Approach: The 3-Call Method

To maximize efficiency and minimize API credit usage, we will use only **3 strategic Ahrefs MCP calls** per prospect. This provides enough data to identify meaningful insights while keeping costs low.

### Call 1: Core Health Snapshot
**Tool:** `site-explorer-metrics`

**Purpose:** Get the foundational SEO health metrics for the prospect's website.

**Data Points to Fetch:**
- Organic traffic estimate
- Total organic keywords ranking
- Domain Rating (DR)
- Total backlinks
- Referring domains

**Why This Matters:**
- Establishes baseline performance
- Identifies if they're underperforming vs. their domain authority
- Provides context for all other insights
- Single call gives us 5+ talking points

**Select Parameters:**
```
select: organic_traffic,organic_keywords,domain_rating,backlinks,refdomains
target: [prospect-domain.com]
date: [current-date]
mode: domain
country: au
```

---

### Call 2: Top Pages Analysis
**Tool:** `site-explorer-top-pages`

**Purpose:** Identify which pages are actually driving traffic and which aren't.

**Data Points to Fetch (Limit to Top 10 Pages):**
- URL
- Organic traffic per page
- Top keyword for each page
- Number of keywords ranking
- Traffic change (if using date_compared)

**Why This Matters:**
- Shows if traffic is concentrated in just a few pages (risk)
- Identifies underperforming pages (opportunity)
- Reveals content gaps
- Provides specific, actionable examples

**Select Parameters:**
```
select: url,traffic,top_keyword,keywords,traffic_diff
target: [prospect-domain.com]
date: [current-date]
limit: 10
order_by: traffic:desc
country: au
```

---

### Call 3: Quick Win Keywords
**Tool:** `site-explorer-organic-keywords`

**Purpose:** Find low-hanging fruit opportunities where they rank on page 2-3.

**Data Points to Fetch (Filtered to Positions 11-30):**
- Keyword
- Current position
- Search volume
- Traffic potential
- URL ranking
- Keyword difficulty

**Why This Matters:**
- Positions 11-30 are the easiest to improve
- Small improvements = big traffic gains
- Specific, actionable recommendations
- Demonstrates understanding of SEO strategy

**Select Parameters:**
```
select: keyword,position,volume,url,difficulty,traffic
target: [prospect-domain.com]
date: [current-date]
where: position>10 AND position<=30 AND volume>100
order_by: volume:desc
limit: 15
country: au
```

---

## Insight Extraction Framework

From these 3 calls, we extract **4 key insights** that are easy to understand and immediately valuable.

### Insight 1: Traffic Health Score (From Call 1)

**What We Look For:**
- Is organic traffic growing or declining?
- How does their DR compare to traffic (underperforming sites have high DR but low traffic)
- Do they have a "thin" backlink profile?

**Simple Language Translation:**
- "Your website has good domain authority (DR 45) but is getting less traffic than expected - there's untapped potential here"
- "Your site currently attracts about 2,500 visitors/month from Google, which is solid but could be 3-4x higher"
- "You're ranking for 350 keywords, but many of them are close to breaking into page 1"

---

### Insight 2: Content Performance Gaps (From Call 2)

**What We Look For:**
- Is 80%+ of traffic coming from just 2-3 pages? (concentration risk)
- Do they have pages ranking for valuable keywords but getting low traffic? (optimization opportunity)
- Are service pages underperforming vs. blog content?

**Simple Language Translation:**
- "90% of your traffic comes from just 2 pages - this makes your business vulnerable to Google algorithm changes"
- "Your 'Services' page ranks for 15 keywords but gets minimal traffic, suggesting it needs optimization"
- "You have 10 blog posts that each get 50-100 visitors/month - small tweaks could double this"

---

### Insight 3: Low-Hanging Fruit Opportunities (From Call 3)

**What We Look For:**
- High-volume keywords ranking positions 11-20 (page 2)
- Keywords with low difficulty scores that they're "close" on
- Business-relevant keywords vs. informational fluff

**Simple Language Translation:**
- "You're ranking #14 for 'local plumber Sydney' (800 searches/month) - moving to page 1 could bring 50+ extra visitors monthly"
- "I found 7 valuable keywords where you're on page 2 - these are the easiest wins to target first"
- "Keywords like '[specific example]' are within reach and could drive qualified leads to your business"

---

### Insight 4: Competitive Context (Optional Bonus Insight)

If we have data showing domain authority is decent but results are poor, we can infer:

**Simple Language Translation:**
- "Your website has the authority to compete, but your competitors are outranking you on valuable terms"
- "You're investing in your site (good backlinks) but not seeing the traffic returns you should"

---

## Outreach Email Template

### Template Version 1: Discovery Approach

**Subject:** Quick insight about [Company Name]'s website traffic

Hi [First Name],

I was researching digital marketing agencies in [location] and came across [Company Name]. Out of curiosity, I ran a quick analysis on your website's organic search performance and noticed a few interesting opportunities.

Your site has solid authority (Domain Rating 45), but you're currently getting about 2,500 visitors per month from Googlewhich is actually lower than expected for a site with your strength. I also spotted 7 valuable keywords where you're ranking on page 2. Moving just a few of these to page 1 could easily add 300-500 qualified visitors monthly.

For example, you're ranking #14 for "[specific keyword]" which gets 800 searches per month locally. That's a relatively easy win that most businesses overlook.

I thought this might be useful context as you plan your marketing for the year. If you'd like me to share the full breakdown (no strings attached), I'm happy to send it overit takes me 5 minutes and might give you some ideas.

Either way, best of luck with [Company Name]!

[Your Name]
[Riflebird Agency]

---

### Template Version 2: Value-First Approach

**Subject:** Found something interesting about [website-domain.com]

Hi [First Name],

I help businesses improve their online visibility, and I was looking at [Company Name]'s website earlier today. I ran a quick traffic analysis and wanted to share a few things that stood out.

Right now, about 90% of your organic traffic comes from just 2-3 pages, which makes your visitor numbers vulnerable if Google changes anything. The good news? You're already ranking on page 2 for several high-value keywords like "[example 1]" and "[example 2]"small improvements here could significantly boost your traffic.

You're also getting far less traffic than your domain authority suggests you should be, which usually means there are quick optimization wins available.

I put together a short summary of what I found (takes 2 minutes to read). Would it be helpful if I sent it over? No charge, just thought you might find it useful.

Let me know!

[Your Name]
[Riflebird Agency]

---

### Template Version 3: Specific Problem Hook

**Subject:** [Company Name] + organic traffic

Hi [First Name],

Quick question: are you happy with the amount of traffic your website gets from Google?

I was researching businesses in [industry] and noticed your site ranks for 350+ keywords but is getting a fraction of the traffic it could be. Specifically, you're on page 2 for "[keyword example]" (800 monthly searches) and several other valuable terms.

Moving just 3-4 of these keywords to page 1 would likely add 400-600 visitors per monthand these would be people actively searching for what you offer.

I'm not pitching anything, but if you're curious about the details, I'm happy to share the quick analysis I ran. It might spark some ideas for your team.

Worth a conversation?

[Your Name]
[Riflebird Agency]

---

## Implementation Workflow

### Step 1: Prospect Research (Manual)
- Identify target prospect
- Verify they have organic traffic (check domain exists in Google)
- Note their industry/business type for context

### Step 2: Run Ahrefs MCP Calls (3 API Calls)
Execute the 3 calls outlined above:
1. `site-explorer-metrics` (health snapshot)
2. `site-explorer-top-pages` (content performance)
3. `site-explorer-organic-keywords` (quick wins)

### Step 3: Extract Insights (5-10 Minutes Analysis)
Review the data and identify:
- 1-2 standout numbers (traffic volume, keyword count, DR)
- 1-2 specific examples of page 2 keywords
- 1 structural issue (traffic concentration, underperforming pages)

### Step 4: Personalize Email (2-3 Minutes)
- Choose appropriate template (discovery, value-first, or problem hook)
- Insert specific numbers and keywords
- Adjust tone based on prospect's business maturity
- Add context about their industry if relevant

### Step 5: Send + Track
- Send email
- Track open/reply in CRM
- If they respond, offer to send 1-page PDF summary with details

---

## Credit Efficiency Analysis

**Cost Per Prospect:**
- 3 Ahrefs API calls
- ~10-15 minutes of analysis time
- High-quality, personalized insight

**Expected ROI:**
- If 1 in 10 prospects responds positively ’ 30 API calls for 1 qualified lead
- Much lower than traditional cold outreach effort
- Demonstrates expertise before any sales conversation

**Scaling Strategy:**
- Target 5-10 prospects per week = 15-30 API calls/week
- Focus on high-fit industries (professional services, local businesses)
- Refine templates based on response rates

---

## Quality Control Checklist

Before sending any outreach email, verify:

- [ ] All numbers are accurate and from the most recent Ahrefs data
- [ ] Keyword examples are business-relevant (not random informational queries)
- [ ] Insights are specific to their business (not generic SEO advice)
- [ ] Email tone matches their business maturity (casual vs. professional)
- [ ] No jargon without explanation (avoid "DR", "SERP", "backlinks" unless defined)
- [ ] Clear, easy CTA (reply to this email, simple yes/no question)
- [ ] Email is 5-7 sentences max (respect their time)

---

## Future Enhancements (Optional)

Once this process is validated, consider:

1. **Automated Reporting:** Build a simple script to generate 1-page PDF reports
2. **Competitive Comparison:** Add `site-explorer-organic-competitors` to show how they stack up
3. **Historical Trending:** Use `site-explorer-metrics-history` to show traffic trends
4. **Batch Processing:** Use `batch-analysis-batch-analysis` for comparing multiple prospects

However, start with the minimal 3-call approach first to validate the process and refine messaging before adding complexity.

---

## Key Success Metrics

Track these to optimize the process:

- **Email open rate** (target: >40%)
- **Reply rate** (target: >10%)
- **Positive reply rate** (target: >5%)
- **Qualified lead conversion** (replied + interested in conversation)
- **Time per prospect** (target: <20 minutes total)
- **API calls per lead generated** (target: <50 calls per qualified lead)

---

## Important Reminders

1. **Never execute Ahrefs MCP calls during planning** - only run them when actively working on a specific prospect
2. **Keep emails simple and non-technical** - avoid SEO jargon
3. **Focus on business impact, not metrics** - translate numbers into business outcomes
4. **Provide value first, sell second** - the email should be helpful even if they don't respond
5. **Use Australian spelling and context** - "optimise" not "optimize", reference local keywords

---

## Template Selection Guide

**Use Template 1 (Discovery)** when:
- Prospect is a larger, more established business
- You want a consultative, professional tone
- The data shows clear opportunities

**Use Template 2 (Value-First)** when:
- Prospect is mid-sized business
- You want to lead with helping, not selling
- You have very specific, compelling insights

**Use Template 3 (Problem Hook)** when:
- Prospect is smaller, local business
- Their traffic situation is clearly suboptimal
- You want a more direct, action-oriented approach

---

## Conclusion

This plan provides a systematic, efficient approach to using Ahrefs MCP for lead generation. By limiting ourselves to 3 strategic API calls and focusing on extracting simple, actionable insights, we can provide genuine value to prospects while conserving resources.

The key is to position ourselves as helpful experts, not salespeople. The data does the sellingwe just translate it into plain English and make it useful.
