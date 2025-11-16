# Layer 2: Lite Audit System for Warm Leads
## Comprehensive SEO Analysis for Engaged Prospects

---

## 📋 Table of Contents
1. [Overview](#overview)
2. [When to Trigger](#when-to-trigger)
3. [Resource Investment](#resource-investment)
4. [Audit Execution Paths](#audit-execution-paths)
5. [API Call Strategy](#api-call-strategy)
6. [Issue Detection Framework](#issue-detection-framework)
7. [Lite Audit Template](#lite-audit-template)
8. [Implementation Workflow](#implementation-workflow)
9. [Success Metrics](#success-metrics)
10. [Best Practices](#best-practices)

---

## 🎯 Overview

### Purpose
The lite audit is deployed ONLY after a prospect shows interest through reply, call booking, or request for more information. This is your opportunity to provide comprehensive analysis and demonstrate value.

### Goals
- Convert 50% of lite audits to sales calls
- Close 20% of lite audits to clients
- Provide enough value to justify engagement
- Position Riflebird as SEO experts

### Key Deliverables
**For Warm Leads:**
- Full lite audit document (1-2 pages)
- Detailed comparison tables
- Strategic recommendations
- Action plan with timeline
- Next steps clearly defined

---

## 🔔 When to Trigger Layer 2

### Trigger Events
- ✅ Prospect replies to cold email
- ✅ Prospect books a discovery call
- ✅ Prospect asks for more details
- ✅ Referral or warm introduction
- ✅ Downloaded resource and requested follow-up
- ✅ Attended webinar/event and expressed interest

### What NOT to Trigger On
- ❌ Cold prospect with no response
- ❌ Auto-reply or out-of-office message
- ❌ Generic "not interested" reply
- ❌ Unqualified lead (too small, wrong industry)

---

## 💰 Resource Investment

- **Chrome DevTools:** Unlimited (FREE) - deep technical analysis
- **Ahrefs API Calls:** 3-6 based on business size
- **Time:** 15-25 minutes total
- **Output:** 1-2 page professional markdown document
- **Cost:** ~$0.50-1.00 per audit

### Time Breakdown
- Chrome DevTools deep dive: 5 minutes
- Ahrefs Path A/B/C analysis: 10 minutes
- Document creation: 5-10 minutes
- Follow-up preparation: 5 minutes

---

## 🛤️ Audit Execution Paths

### Decision Tree

```
WARM LEAD (Replied/Interested)
│
├─[DR <15 OR Traffic <500]
│  └→ Path B (Small Business)
│     └→ Focus: Foundation building
│     └→ Calls: 3 (metrics + keywords + top-pages)
│     └→ Cost: ~$0.50-0.90
│
├─[DR 15-30 AND Traffic 500-5000]
│  └→ Path B or C (depending on data)
│     └→ Focus: Quick wins
│     └→ Calls: 3-4
│     └→ Cost: ~$0.90-1.20
│
└─[DR >30 OR Traffic >5000]
   └→ Path A (Full Competitive)
      └→ Focus: Market share capture
      └→ Calls: 4-6
      └→ Cost: ~$1.00-1.50
```

---

### Path A: Established Business (DR 20+, Traffic 1000+)

**Best For:**
- Established websites with authority
- Businesses with existing traffic
- Competitive markets
- Multiple competitors to analyze

**API Calls:**
1. **site-explorer-metrics** → Overview (10 units)
2. **site-explorer-organic-keywords** → Quality check + opportunities (50 units)
3. **site-explorer-organic-competitors** → Gap analysis (50 units)
4. **batch-analysis-batch-analysis** → Competitive comparison (40 units)

**Total:** 4 calls, ~150 units (~$1.50)

**Focus Areas:**
- Competitive gap analysis
- Market share opportunities
- Content depth vs competitors
- Backlink profile comparison
- Keyword cannibalization
- Authority building strategy

---

### Path B: Small/Local Business (DR <20, Traffic <1000)

**Best For:**
- New or small websites
- Local service businesses
- Limited existing SEO
- Foundation-building opportunities

**API Calls:**
1. **site-explorer-metrics** → Overview (10 units)
2. **site-explorer-organic-keywords** (limit: 20) → Current rankings (40 units)
3. **site-explorer-top-pages** → Traffic distribution (30 units)

**Total:** 3 calls, ~80-90 units (~$0.80-0.90)

**Focus Areas:**
- Technical foundation issues
- Low-hanging fruit keywords
- Local SEO opportunities
- On-page optimization
- Content creation priorities
- Basic link building

---

### Path C: Quick Competitive Gap (Known Competitors)

**Best For:**
- When competitors are already identified
- Referral with competitive intel
- Follow-up to micro-audit with competitor data
- Industry-specific analysis

**API Calls:**
1. **batch-analysis-batch-analysis** → Multi-competitor comparison (40 units)
2. **site-explorer-organic-keywords** → Deep dive (50 units)

**Total:** 2 calls, ~90 units (~$0.90)

**Focus Areas:**
- Direct competitor comparison
- Keyword gap analysis
- Content opportunities
- Quick wins identification
- Strategic positioning

---

## 🔧 API Call Strategy

### Essential Calls (Use for Every Audit)

#### 1. site-explorer-metrics
**Purpose:** Get overview metrics and establish baseline

**Parameters:**
```javascript
{
  target: "example.com",
  date: "2025-01-15",
  mode: "subdomains",
  country: "au"
}
```

**Fields to Extract:**
- organic_traffic
- organic_keywords
- domain_rating
- refdomains

**Cost:** ~10 units

---

#### 2. site-explorer-organic-keywords
**Purpose:** Find opportunities & check quality

**Parameters:**
```javascript
{
  target: "example.com",
  date: "2025-01-15",
  country: "au",
  limit: 30,
  select: "keyword,volume,position,traffic,url,difficulty",
  where: "position <= 20",
  order_by: "traffic:desc"
}
```

**What to Look For:**
- Page 2 keywords (position 11-20)
- High-volume low-difficulty opportunities
- Keyword cannibalization issues
- Commercial vs informational balance

**Cost:** ~40-50 units

---

### Conditional Calls (Based on Business Type)

#### 3. site-explorer-organic-competitors
**When:** For established businesses (DR >20)

**Parameters:**
```javascript
{
  target: "example.com",
  date: "2025-01-15",
  country: "au",
  limit: 3,
  select: "domain,common_keywords,competitor_traffic,domain_rating"
}
```

**Purpose:**
- Identify competitive gaps
- Find content opportunities
- Benchmark performance

**Cost:** ~50 units

---

#### 4. site-explorer-top-pages
**When:** For content-heavy sites or traffic concentration issues

**Parameters:**
```javascript
{
  target: "example.com",
  limit: 10,
  select: "url,traffic,keywords_count"
}
```

**Purpose:**
- Find traffic concentration issues
- Identify top-performing content
- Discover orphaned pages

**Cost:** ~30 units

---

#### 5. batch-analysis-batch-analysis
**When:** You know the competitors already

**Parameters:**
```javascript
{
  select: ["domain_rating", "organic_traffic", "organic_keywords", "refdomains"],
  targets: [
    { url: "example.com", mode: "subdomains", protocol: "both" },
    { url: "competitor1.com", mode: "subdomains", protocol: "both" },
    { url: "competitor2.com", mode: "subdomains", protocol: "both" }
  ],
  country: "au",
  volume_mode: "monthly"
}
```

**Purpose:**
- Multi-competitor comparison
- Quick competitive benchmarking
- Authority gap analysis

**Cost:** ~40 units

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

---

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
6. Meta description improvements
7. Image alt text additions
8. FAQ schema markup
9. Local business schema
10. Mobile responsiveness fixes

---

## 📄 Lite Audit Template

**Important:** This document is ONLY created after a prospect shows interest. Use this template for all warm leads.

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

---

## 🚨 Priority Issues & Opportunities

### Issue #1: [Descriptive Title]
**The Problem:**
- [Specific description of the issue with data]
- Impact: Missing [X] potential visitors monthly
- Evidence: [Chrome DevTools data or Ahrefs metrics]

**The Fix:**
- [Specific action item 1]
- [Specific action item 2]
- [Specific action item 3]
- Time required: [X] hours
- Expected result: [Specific outcome]

**Why This Matters:**
[One sentence explaining business impact]

---

### Issue #2: [Descriptive Title]
**The Problem:**
- [Specific description of the issue with data]
- Impact: [Quantified impact]
- Evidence: [Data source]

**The Fix:**
- [Specific action item 1]
- [Specific action item 2]
- [Specific action item 3]
- Time required: [X] hours
- Expected result: [Specific outcome]

**Why This Matters:**
[One sentence explaining business impact]

---

### Issue #3: [Descriptive Title]
**The Problem:**
- [Specific description of the issue with data]
- Impact: [Quantified impact]
- Evidence: [Data source]

**The Fix:**
- [Specific action item 1]
- [Specific action item 2]
- [Specific action item 3]
- Time required: [X] hours
- Expected result: [Specific outcome]

**Why This Matters:**
[One sentence explaining business impact]

---

## 📊 Competitive Landscape

| Metric | You | Competitor A | Competitor B | Industry Avg |
|--------|-----|--------------|--------------| -------------|
| Monthly Traffic | [X] | [X] | [X] | [X] |
| Total Keywords | [X] | [X] | [X] | [X] |
| Domain Rating | [X] | [X] | [X] | [X] |
| Referring Domains | [X] | [X] | [X] | [X] |
| Page Load Time | [X]s | [X]s | [X]s | [X]s |

**Key Insight:** [One sentence about competitive position and opportunity]

---

## 🎯 Quick Win Keywords (Page 2 Opportunities)

| Keyword | Current Position | Monthly Searches | Current URL | Potential Traffic |
|---------|-----------------|------------------|-------------|-------------------|
| [keyword] | #[12] | [450] | [URL] | +[100] visits/mo |
| [keyword] | #[15] | [320] | [URL] | +[70] visits/mo |
| [keyword] | #[18] | [280] | [URL] | +[50] visits/mo |

**Total Opportunity:** +[220] organic visitors monthly with simple optimizations

---

## 💡 Immediate Action Plan

### Week 1: Quick Technical Fixes (2-3 hours)
- [ ] Update title tags for top 3 page 2 keywords
- [ ] Add H1 tags to service pages (currently missing)
- [ ] Create internal links from homepage to [X] service pages
- [ ] Fix mobile responsiveness on [specific pages]
- [ ] Add alt text to [X] images

**Expected Impact:** Improved crawlability, better rankings within 2-3 weeks

---

### Week 2-3: Content Optimization (5-8 hours)
- [ ] Expand thin content on [money page 1] (currently [X] words → target [Y] words)
- [ ] Add FAQ sections targeting long-tail keywords
- [ ] Optimize meta descriptions for CTR on top 10 pages
- [ ] Create location-specific landing page for [City]
- [ ] Add commercial modifiers to [X] product/service pages

**Expected Impact:** Better targeting, increased CTR, more qualified traffic

---

### Week 4: Technical Enhancements (3-4 hours)
- [ ] Implement local business schema markup
- [ ] Add FAQ schema to [X] pages
- [ ] Improve page speed (target <2.5s load time)
- [ ] Create XML sitemap and submit to Google
- [ ] Set up Google Search Console monitoring

**Expected Impact:** Better SERP features, improved indexing, measurable tracking

---

### Week 5-8: Strategic Growth (Ongoing)
- [ ] Build 5-10 quality local citations
- [ ] Create content targeting [specific keyword cluster]
- [ ] Optimize Google Business Profile
- [ ] Implement monthly rank tracking
- [ ] Create backlink outreach strategy

**Expected Impact:** Authority building, sustained growth, competitive positioning

---

## 📈 Expected Results

**If these recommendations are implemented:**

**Month 1:**
- 20-30% increase in page 1 rankings
- 3-5 page 2 keywords moving to page 1
- Improved SERP click-through rates

**Month 2:**
- 15-25% increase in organic traffic
- Better keyword targeting and relevance
- Reduced bounce rate on optimized pages

**Month 3:**
- 10-15% increase in organic conversions
- Improved local visibility
- Stronger competitive position

**Month 6:**
- 50-75% increase in total organic traffic
- [X] new keywords ranking in top 10
- Sustainable growth trajectory established

---

## 🎯 Technical Findings (Chrome DevTools Analysis)

**On-Page SEO:**
- Title tags: [X/10 pages optimized]
- Meta descriptions: [X/10 pages have unique descriptions]
- H1 tags: [X/10 pages have proper H1]
- Image alt text: [X%] coverage
- Internal linking: [X] orphaned pages found

**Performance:**
- Average page load time: [X] seconds
- Largest Contentful Paint: [X] seconds
- First Input Delay: [X] ms
- Cumulative Layout Shift: [X]

**Mobile:**
- Mobile-friendly: [Yes/No]
- Viewport configured: [Yes/No]
- Text readability: [Pass/Fail]
- Touch targets: [Pass/Fail]

**Structured Data:**
- Local business schema: [Present/Missing]
- FAQ schema: [Present/Missing]
- Product schema: [Present/Missing]
- Review schema: [Present/Missing]

---

## 🚀 Why These Issues Matter for Your Business

[Customized paragraph explaining specific business impact]

For [Company Name], these SEO improvements translate directly to:
- More customers finding you for [specific service] searches
- Better visibility in [City] local market
- Reduced dependence on paid advertising
- Increased credibility through higher rankings
- More qualified leads with higher conversion potential

The competitive gap analysis shows [Competitor Name] is capturing [X%] more of the market through organic search. By implementing these recommendations, [Company Name] can close that gap within 3-6 months.

---

## 💬 Next Steps

**Option 1: DIY Implementation**
Use this audit as a roadmap and implement changes in-house. We're happy to answer questions as you go.

**Option 2: Managed SEO Partnership**
Riflebird Agency can implement all recommendations plus ongoing optimization:
- Full technical SEO implementation
- Content strategy and creation
- Link building and authority development
- Monthly reporting and optimization
- Ongoing keyword research and targeting

**Ready to discuss?** Book a 30-minute strategy call: [booking link]

---

## 📞 Contact Information

**Riflebird Agency**
Ali Tahmaseb
Digital Marketing Specialist
[Email]
[Phone]
[Website]

---

*This audit identifies surface-level opportunities using Chrome DevTools and Ahrefs data. A comprehensive technical audit would reveal additional growth potential including advanced schema implementation, international SEO, content gap analysis, and conversion rate optimization opportunities.*

**Next Steps:** Ready to implement these changes? Let's discuss a full SEO strategy for [Company Name].
```

---

## 📋 Implementation Workflow

### File Organization
```
/audits/
  /lite/
    /company-name-1/
      - audit.md (use template above)
      - api-data.json (raw Ahrefs responses)
      - chrome-data.json (DevTools extraction)
      - proposal.pdf (if moving to sales)
      - notes.md (call notes, follow-up items)
    /company-name-2/
      - audit.md
      - api-data.json
      - chrome-data.json
      - proposal.pdf
      - notes.md
```

---

### Follow-Up Schedule

#### Warm Leads (Lite Audit)
- **Immediate:** Send lite audit document via email
- **Day 1:** Follow-up email confirming receipt
- **Day 2:** Book call to discuss findings (30 min)
- **Day 3:** Send call recording and summary
- **Day 5:** Send proposal with pricing
- **Day 7:** Follow up on proposal
- **Day 10:** Final follow-up or move to nurture

---

## 📊 Success Metrics

### Layer 2: Lite Audit Metrics

**Volume & Conversion:**
- **Trigger Rate:** 10% of cold emails (from Layer 1)
- **Lite Audits Created:** 10-15 per week
- **API Cost:** <$1.00 per audit
- **Time Investment:** 20-25 minutes per audit
- **Call Booking Rate:** 50% of lite audits
- **Close Rate:** 20% of lite audits

**Quality Indicators:**
- Prospect engagement with document
- Questions asked during call
- Request for proposal
- Speed to decision
- Referrals generated

---

### Tracking What Works

**Lite Audit Effectiveness:**
- Which Path (A/B/C) converts best?
- What's the optimal document length?
- Which comparisons resonate most?
- Do prospects prefer data tables or narratives?
- Which CTAs drive most calls?

---

### Overall Funnel (Layer 1 + Layer 2)

```
100 Micro-Audits (Layer 1)
  ↓ 10% reply rate
10 Lite Audits (Layer 2)
  ↓ 50% book calls
5 Sales Calls
  ↓ 40% close rate
2 New Clients

Cost Breakdown:
- Layer 1: 100 × $0.02 = $2 (Chrome DevTools primarily)
- Layer 2: 10 × $1.00 = $10 (Ahrefs deep analysis)
- Total Weekly Cost: $12

Revenue:
- 2 clients × $3,000 = $6,000
- ROI: 500x or 50,000%
```

---

## 📝 Best Practices

### Do's ✅

**Documentation:**
- ✅ Reference their original reply/interest in your follow-up
- ✅ Create professional, branded documentation
- ✅ Include specific data points and evidence
- ✅ Provide competitive analysis and context
- ✅ Give clear timeline for improvements
- ✅ Prepare for sales call with deeper insights

**Communication:**
- ✅ Use business language, not SEO jargon
- ✅ Quantify impact in traffic/leads/revenue
- ✅ Show quick wins first, long-term strategy second
- ✅ Include visual elements (tables, comparisons)
- ✅ Make recommendations actionable and specific

**Process:**
- ✅ Choose the right Path (A/B/C) based on data
- ✅ Combine Chrome DevTools + Ahrefs insights
- ✅ Save all raw data for reference
- ✅ Set clear next steps and deadlines
- ✅ Follow up consistently

---

### Don'ts ❌

**Documentation:**
- ❌ Don't overwhelm with 10+ issues
- ❌ Don't be too technical for non-SEO audience
- ❌ Don't forget to include Chrome DevTools findings
- ❌ Don't give away full implementation details
- ❌ Don't make promises you can't keep

**Communication:**
- ❌ Don't use SEO jargon without explanation
- ❌ Don't forget to book next steps
- ❌ Don't be too salesy in the audit document
- ❌ Don't ignore their specific questions from reply
- ❌ Don't send generic template without customization

**Process:**
- ❌ Don't run unnecessary API calls (respect budget)
- ❌ Don't skip Chrome DevTools analysis
- ❌ Don't forget to track which path was used
- ❌ Don't lose momentum (send within 24 hours)
- ❌ Don't fail to follow up on scheduled calls

---

## 🎯 Optimization Tips

### Document Length
- **Too Short (<1 page):** Doesn't demonstrate expertise
- **Too Long (>3 pages):** Overwhelming, won't be read
- **Sweet Spot (1.5-2 pages):** Professional, digestible, actionable

### Data Presentation
- **Use tables** for competitive comparisons
- **Use bullet points** for action items
- **Use bold** to highlight key metrics
- **Use sections** for easy scanning
- **Use real numbers** not percentages only

### Call-to-Action
- **Be specific:** "Book a 30-min call" not "Let's chat"
- **Offer options:** DIY vs Managed service
- **Remove friction:** Provide booking link
- **Create urgency:** "Limited spots this month"
- **Show value:** "Free implementation guide with call"

---

## 🚀 Advanced Techniques

### Segmentation by Industry

**Local Service Business:**
- Focus on Google Business Profile
- Local citations and directories
- Location-specific landing pages
- Review schema and management
- Local link building

**E-commerce:**
- Product page optimization
- Category structure
- Product schema markup
- User-generated content strategy
- Conversion rate optimization

**B2B/SaaS:**
- Long-form content strategy
- Thought leadership positioning
- Comparison/alternative pages
- Case study optimization
- Lead magnet integration

**Professional Services:**
- Expertise, Authority, Trust (E-A-T)
- Professional credentials display
- Service area pages
- FAQ schema implementation
- Testimonial and review optimization

---

## 📈 Scaling Lite Audits

### When You Have 10+ Per Week

**Templating:**
- Create industry-specific templates
- Build reusable sections library
- Automate data extraction where possible
- Use snippets for common issues

**Team Delegation:**
- Junior: Chrome DevTools extraction
- Mid: Ahrefs analysis and Path selection
- Senior: Document creation and recommendations
- You: Quality review and sales call

**Automation Opportunities:**
- Auto-generate competitive tables
- Pre-populate common issues by industry
- Email sequences for follow-up
- CRM integration for tracking

---

## 🎯 Final Thoughts

### Key Success Factors

1. **Speed Matters:** Send audit within 24 hours of reply
2. **Quality Over Quantity:** Better to do 10 great audits than 20 mediocre ones
3. **Personalization Wins:** Reference their specific business situation
4. **Data Drives Decisions:** Use Chrome + Ahrefs insights together
5. **Follow-Up Persistence:** Most sales happen on the 5th+ touchpoint

### Remember

The lite audit is your chance to:
- Demonstrate expertise and value
- Build trust and credibility
- Differentiate from competitors
- Set up the sales conversation
- Create a roadmap for engagement

**It's not just an audit—it's the beginning of a relationship.**

---

*Document Version: 2.0 - Chrome DevTools + Ahrefs Integration*
*Last Updated: January 2025*
*Created for: Riflebird Agency*
