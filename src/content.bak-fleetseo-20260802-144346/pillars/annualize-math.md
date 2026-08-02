---
title: Annualize Subscription Math — Monthly vs Yearly in One Table
metaDescription: >-
  Turn $9.99/mo into real yearly cost, compare annual prepay discounts, and rank cuts by
  dollars saved — not by which app annoys you most.
publishedAt: '2026-06-02'
updatedAt: '2026-06-02'
reviewedAt: '2026-06-02'
excerpt: >-
  The formula every audit needs: monthly × 12, weekly ÷ 52, and true cost per use when
  you’re deciding what to cut first.
targetKeyword: annualize subscription cost
heroImage: https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80
status: published
tags:
  - budgeting
  - annualize
author: morgan-hale-subaudit
---

## Core formulas

```
yearly_from_monthly = monthly_price × 12
true_monthly_from_annual = annual_prepay ÷ 12
cost_per_use = yearly_from_monthly ÷ sessions_per_year
```

| Display price | Annualized |
|---------------|------------|
| $9.99/mo | **$119.88/yr** |
| $14.99/mo | **$179.88/yr** |
| $19.99/mo | **$239.88/yr** |
| $89/yr prepay | **$7.42/mo** effective |

Sort your spreadsheet by **annualized descending** — top three lines are usually most of spend.

## “20% off annual” — real discount check

```
discount_truth = 1 - (annual_prepay ÷ (monthly × 12))
```

If discount_truth &lt; 15% and you might churn in 6 months, **stay monthly**.

## Per-use sanity (optional)

| Service | Annualized | Uses last 90d | Cost/use |
|---------|------------|---------------|----------|
| Gym app | $240 | 4 | $60 |
| Chat AI | $240 | 90 | $2.67 |

High cost/use → cancel or downgrade before negotiating family plans.

## Worked example — streaming + AI

| Line | Monthly | ×12 |
|------|---------|-----|
| Video A | $15.49 | $185.88 |
| Video B | $16.99 | $203.88 |
| Chat AI | $20.00 | $240.00 |
| **Total** | $52.48 | **$629.76** |

Cutting Video B funds a full [AI tool](/pillars/ai-tools) upgrade — or vice versa — but not both without behavior change.

## Tie to audit workflow

1. Export 90 days ( [subscription audit](/pillars/subscription-audit) ).
2. Annualize every row.
3. Apply cuts with [cancel playbook](/pillars/cancel-playbook).

*Next:* [Family subscription math](/pillars/family-subscriptions) · [How to audit every subscription on your card](/articles/1-how-to-audit-every-subscription-on-your-credit-card-in-one-afternoon)
