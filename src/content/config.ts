import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string().default('Aram Anwar'),
    publishedAt: z.string(),
    updatedAt: z.string().optional(),
    contentType: z.enum(['guide', 'fix', 'explanation', 'comparison', 'review', 'feature']),
    topics: z.array(z.string()),
    tags: z.array(z.string()).default([]),
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
    heroImageCredit: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    sources: z.array(z.object({
      name: z.string(),
      url: z.string()
    })).optional(),
  }),
});

export const collections = {
  articles,
};
