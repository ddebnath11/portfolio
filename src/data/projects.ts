export interface ProjectData {
  slug: string;
  title: string;
  description: string;
  category: string;
  featured?: boolean;
  thumbnail: string;
  github?: string;
}

export const projectsList: ProjectData[] = [
  {
    slug: "stagram-v1",
    title: "StatGram (v1)",
    description: "An interactive data visualization platform built with HTML, CSS, and JavaScript, leveraging Chart.js to seamlessly generate and render custom charts.",
    category: "WEBDEV",
    featured: true,
    thumbnail: "../images/statgram-thumb.png",
    github: "https://github.com/ddebnath11/cleanstats"
  },

];