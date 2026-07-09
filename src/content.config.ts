import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  // This targets local markdown files inside src/content/projects/
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    project_category: z.string(), // Added to match your card component props
    featured: z.boolean().optional().default(false),
    image: z.object({
      url: z.string(),
      alt: z.string()
    }).optional(), // Made optional in case a project doesn't have an image yet
    tags: z.array(z.string()).optional()
  })
});

export const collections = { projects };