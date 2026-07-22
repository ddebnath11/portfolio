export interface ProjectData {
  slug: string;
  title: string;
  description: string;
  category: string;
  techstack: string[];
  featured?: boolean;
  thumbnail: string;
  github?: string;
  launch?:string;
}

export const projectsList: ProjectData[] = [
  {
    slug: "statgram-v1",
    title: "StatGram (v1)",
    description: "An interactive data visualization platform built with HTML, CSS, and JavaScript and Chart.js",
    category: "WEBDEV",
    techstack: ['HTML', 'CSS', 'JS'],
    featured: true,
    thumbnail: "../images/statgram-thumb.png",
    github: "https://github.com/ddebnath11/cleanstats",
    launch: "https://statgram.netlify.app/"
  },

  {
    slug: "umsoman-website-redesign",
    title: "umsoman Redesign",
    description: "A complete redesign of the official website of United Media Services, Oman.",
    category: "WEBDEV",
    techstack: ['AstroJS', 'TailwindCSS', 'Figma'],
    featured: false,
    thumbnail: "../images/umsoman-thumb.png",
    github: "https://github.com/ddebnath11/cleanstats",
    launch: "https://statgram.netlify.app/"
  }

];