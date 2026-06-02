import type { BottomAmazonPick } from '@/utils/amazon-affiliate';

/**
 * Curated high-AOV household picks (bulk refills, ink, appliances).
 * Shown site-wide at the bottom of every page; merged with /products/ catalog.
 */
export const BOTTOM_AMAZON_PICKS: BottomAmazonPick[] = [
  {
    asin: 'B09DV14ZZL',
    title: 'Fire TV Stick 4K',
    subtitle: 'Prime ecosystem hardware — audit channel add-ons separately',
    price: 49.99,
  },
  {
    asin: 'B0B7MKRR58',
    title: 'Roku Express 4K+',
    subtitle: 'Neutral platform for stacking paid streaming apps',
    price: 39.99,
  },
];
