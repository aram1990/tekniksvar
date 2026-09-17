import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: any) {
  const articles = await getCollection('articles', ({ data }) => !data.draft);
  const sorted = articles.sort((a, b) => new Date(b.data.publishedAt).getTime() - new Date(a.data.publishedAt).getTime());

  return rss({
    title: 'Tekniksvar',
    description: 'Teknik förklarad. Problem lösta. Praktiska guider, problemlösning och verktyg på svenska.',
    site: context.site || 'https://tekniksvar.com',
    items: sorted.map((article) => ({
      title: article.data.title,
      pubDate: new Date(article.data.publishedAt),
      description: article.data.description,
      link: `/artiklar/${article.slug}/`,
    })),
    customData: `<language>sv-SE</language>`,
  });
}
