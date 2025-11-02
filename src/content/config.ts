import { z, defineCollection } from 'astro:content';

const art = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    image: z.string(),
    excerpt: z.string(),
    medium: z.string().optional(),
    size: z.string().optional(),
    status: z.string().optional(),
    series: z.string().optional()
  })
});

const writing = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    image: z.string().optional(),
    excerpt: z.string()
  })
});

export const collections = {
  paintedmind: art,
  paintedword: writing
};
