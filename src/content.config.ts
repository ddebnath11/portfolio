import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    project_category: z.string(), 
    featured: z.boolean().optional().default(false),
    image: z.object({
      url: z.string(),
      alt: z.string()
    }).optional(), 
    tags: z.array(z.string()).optional()
  })
});

export const collections = { projects };