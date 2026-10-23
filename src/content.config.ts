import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Schéma commun enrichi pour le SEO, GEO (IA) et Schema.org
const baseSchema = z.object({
  title: z.string(),
  subtitle: z.string().optional(),
  metaTitle: z.string().optional(),
  metaDescription: z.string().optional(),
  duree: z.string(),
  prix: z.string(),
  prerequis: z.string().optional(),
  targetAudience: z.array(z.string()).optional(),
  materielRequis: z.array(z.string()).optional(),
  resume: z.string(),
  content: z.string(),
  programme: z.array(z.string()).optional(),
  benefits: z.array(z.string()).default([]),
  faq: z.array(
    z.object({
      question: z.string(),
      answer: z.string(),
    })
  ).optional(),
  checkoutUrl: z.string().url().optional(),
  featured: z.boolean().default(false),
  isNew: z.boolean().default(false),
  draft: z.boolean().default(false),
});

// Collection 1 : Soins en cabinet
const soins = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/soins' }),
  schema: baseSchema,
});

// Collection 2 : Formations Présentiel
const formations = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/formations' }),
  schema: baseSchema,
});

// Collection 3 : Formations à Distance / En Ligne
const formationsDistance = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/formations-distance' }),
  schema: baseSchema,
});

export const collections = {
  soins,
  formations,
  'formations-distance': formationsDistance,
};
