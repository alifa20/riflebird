# Ahrefs MCP Capabilities

This document outlines the capabilities available through the Ahrefs Model Context Protocol (MCP) integration.

## Overview

The Ahrefs MCP provides programmatic access to Ahrefs' comprehensive SEO and marketing analytics data. All tools require specific input schemas - use the `doc` tool first to get the correct schema for each endpoint.

## Core Capabilities

### 1. Rank Tracking

Monitor and analyze keyword rankings for tracked projects.

**Available Tools:**
- `rank-tracker-overview` - Get keyword rankings and metrics for a project
  - Track rankings by date and device type
  - Compare current vs. historical performance
  - Filter and sort by various metrics
  - Supports custom column selection

- `rank-tracker-competitors-overview` - Analyze competitor rankings
  - Compare competitor performance over time
  - Track keyword overlaps
  - Monitor competitive changes

**Key Parameters:**
- `project_id` - Your Ahrefs project ID
- `date` - Date for ranking data
- `date_compared` - Optional date for comparison
- `device` - Device type (mobile/desktop)
- `volume_mode` - Search volume calculation mode

### 2. Keywords Explorer

Comprehensive keyword research and analysis.

**Available Tools:**

- `keywords-explorer-overview` - Get detailed keyword metrics
  - Search volume, CPC, keyword difficulty
  - Traffic potential and search intent
  - SERP feature analysis
  - Filter by country and target

- `keywords-explorer-matching-terms` - Find keyword ideas by matching patterns
  - Multiple match modes available
  - Extensive filtering options
  - Customizable metric selection

- `keywords-explorer-related-terms` - Discover related keywords
  - "Also rank for" keywords
  - "Also talk about" keywords
  - Related topic suggestions

- `keywords-explorer-search-suggestions` - Get search suggestions
  - Autocomplete-style keyword ideas
  - Associated metrics for each suggestion

- `keywords-explorer-volume-history` - Historical search volume data
  - Track volume trends over time
  - Seasonal pattern analysis

- `keywords-explorer-volume-by-country` - Search volume by geography
  - Country-level volume breakdown
  - Geographic opportunity identification

**Key Features:**
- Country-specific data
- Custom date ranges
- Advanced filtering with `where` clauses
- Sorting with `order_by`
- Field selection with `select`

### 3. Site Explorer

In-depth website and domain analysis.

**Metrics & Statistics:**

- `site-explorer-metrics` - Core SEO performance metrics
  - Organic traffic estimates
  - Keyword rankings count
  - Domain/URL rating
  - Backlink statistics

- `site-explorer-domain-rating` - Domain authority metrics
- `site-explorer-backlinks-stats` - Backlink profile statistics
- `site-explorer-outlinks-stats` - Outbound link analysis

**Backlink Analysis:**

- `site-explorer-all-backlinks` - Detailed backlink data
  - Complete backlink profiles
  - Anchor text information
  - Link attributes (dofollow/nofollow)
  - Advanced aggregation options

- `site-explorer-broken-backlinks` - Identify broken links
  - Find 404 backlinks
  - Opportunity for reclaiming links

- `site-explorer-refdomains` - Referring domain analysis
  - Unique domains linking to target
  - Domain quality metrics

- `site-explorer-anchors` - Anchor text distribution
  - Internal and external anchors
  - Anchor text patterns

**Link Analysis:**

- `site-explorer-linkeddomains` - External domains you link to
- `site-explorer-linked-anchors-external` - Outbound anchor text
- `site-explorer-linked-anchors-internal` - Internal linking patterns

**Organic Performance:**

- `site-explorer-organic-keywords` - All ranking keywords
  - Position tracking
  - SERP feature presence
  - Traffic and value estimates
  - Historical comparisons

- `site-explorer-organic-competitors` - Identify organic competitors
  - Common keyword analysis
  - Competitive gap identification

- `site-explorer-top-pages` - Best performing pages
  - Traffic by page
  - Top keywords per page
  - Performance trends

**Paid Performance:**

- `site-explorer-paid-pages` - Paid search landing pages
  - Ad presence tracking
  - Paid keyword data
  - Traffic estimates

**Best Pages:**

- `site-explorer-best-by-external-links` - Pages with most backlinks
- `site-explorer-best-by-internal-links` - Most linked internal pages
- `site-explorer-pages-by-traffic` - Pages ranked by traffic

**Historical Data:**

- `site-explorer-refdomains-history` - Referring domains over time
- `site-explorer-domain-rating-history` - Domain rating trends
- `site-explorer-url-rating-history` - URL rating evolution
- `site-explorer-pages-history` - Page count changes
- `site-explorer-metrics-history` - Traffic/keyword trends
- `site-explorer-keywords-history` - Ranking keyword trends
- `site-explorer-total-search-volume-history` - Total volume trends

**Geographic Data:**

- `site-explorer-metrics-by-country` - Performance by country
  - Organic traffic by region
  - Country-specific rankings

### 4. SERP Overview

Analyze search engine results pages.

**Available Tools:**

- `serp-overview-serp-overview` - Detailed SERP analysis
  - Rankings for top positions
  - Competitor metrics in SERP
  - SERP feature identification
  - Country-specific results

**Use Cases:**
- Competitive SERP analysis
- Featured snippet opportunities
- Ranking difficulty assessment

### 5. Batch Analysis

Efficient bulk domain/URL analysis.

**Available Tools:**

- `batch-analysis-batch-analysis` - Analyze multiple targets at once
  - Process up to multiple URLs/domains
  - Get key metrics for all targets
  - Compare multiple sites efficiently

**Key Features:**
- Customizable metric selection
- Country-specific data
- Sorting and ordering options

### 6. Project Management

Manage Ahrefs projects and settings.

**Available Tools:**

- `management-projects` - List and filter projects
  - View all accessible projects
  - Filter by ownership and access
  - Identify projects with rank tracker keywords

- `management-project-keywords` - Get keywords for a project
- `management-project-competitors` - List tracked competitors
- `management-locations` - Available tracking locations
  - Country and region data
  - US state-level locations

**Site Audit:**

- `site-audit-projects` - List site audit projects

### 7. Documentation

**Available Tools:**

- `doc` - Get detailed schema for any tool
  - **IMPORTANT**: Always use this first to get the correct input schema
  - Provides parameter requirements
  - Shows available options and constraints

## Common Parameters

Most tools support these common parameters:

- `select` - Specify which fields to return
- `where` - Filter results with SQL-like conditions
- `order_by` - Sort results
- `limit` - Limit number of results
- `country` - Country code for geographic data
- `mode` - Analysis scope (domain, subdomain, prefix, exact)
- `protocol` - http or https
- `date` - Date for snapshot data
- `date_compared` - Comparison date
- `timeout` - Request timeout in milliseconds

## Analysis Modes

When analyzing targets, you can specify:

- `domain` - Entire domain
- `subdomain` - Specific subdomain only
- `prefix` - URL path prefix
- `exact` - Exact URL only

## Best Practices

1. **Always check the schema first** - Use `mcp__ahrefs-mcp__doc` before calling other tools
2. **Use selective fields** - Only request needed data with `select` parameter
3. **Apply filters** - Use `where` clauses to narrow results
4. **Set appropriate limits** - Avoid requesting excessive data
5. **Leverage historical data** - Use date comparison for trend analysis
6. **Country-specific analysis** - Always specify relevant country codes

## Practical Use Cases for Riflebird Agency

### Client Audits
- Analyze client website SEO health
- Identify technical issues and opportunities
- Benchmark against competitors

### Keyword Research
- Find high-value keywords for Local SEO services
- Discover Google Ads campaign opportunities
- Identify content gaps

### Competitive Analysis
- Track competitor rankings
- Analyze competitor backlink profiles
- Identify competitive keyword opportunities

### Campaign Tracking
- Monitor ranking improvements over time
- Track organic traffic growth
- Measure SEO campaign ROI

### Link Building
- Find broken link opportunities
- Identify high-authority linking domains
- Analyze anchor text distribution

### Content Strategy
- Identify top-performing content topics
- Find featured snippet opportunities
- Discover related keyword clusters

## Rate Limits & Quotas

Rate limits and quotas depend on your Ahrefs subscription plan. Monitor usage to stay within limits.

## Example Workflows

### New Client SEO Audit
1. Get domain metrics with `site-explorer-metrics`
2. Analyze backlink profile with `site-explorer-backlinks-stats`
3. Review top pages with `site-explorer-top-pages`
4. Check organic keywords with `site-explorer-organic-keywords`
5. Identify competitors with `site-explorer-organic-competitors`

### Keyword Research for Service Page
1. Start with `keywords-explorer-overview` for seed keywords
2. Expand with `keywords-explorer-matching-terms`
3. Find related terms with `keywords-explorer-related-terms`
4. Analyze SERP competition with `serp-overview-serp-overview`
5. Check search trends with `keywords-explorer-volume-history`

### Competitor Analysis
1. Use `batch-analysis-batch-analysis` for multiple competitors
2. Deep dive with `site-explorer-organic-competitors`
3. Compare backlink profiles with `site-explorer-refdomains`
4. Track keyword overlaps with rank tracker tools
5. Monitor changes with historical data tools
