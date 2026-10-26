import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const pillars = await getCollection('pillars', ({ data }) => data.status === 'published');
  const articles = await getCollection('articles', ({ data }) => data.status === 'published');

  const items = [
    ...pillars.map((p) => ({
      title: p.data.title,
      link: `/pillars/${p.slug}/`,
      pubDate: p.data.publishedAt,
      description: p.data.excerpt,
    })),
    ...articles.map((a) => ({
      title: a.data.title,
      link: `/articles/${a.slug}/`,
      pubDate: a.data.publishedAt,
      description: a.data.excerpt,
    })),
  ].sort((a, b) => +new Date(b.pubDate) - +new Date(a.pubDate));

  return rss({
    title: 'Second Spring Club',
    description: 'Honest reviews for women in perimenopause and beyond.',
    site: context.site,
    items,
  });
}
