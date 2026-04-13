import { TechItem } from "../types";
import { 
  FaReact, FaNodeJs, FaPython, FaGitAlt, FaTwitter
} from 'react-icons/fa/index.js';
import { 
  SiExpress, SiTailwindcss, SiJavascript, SiTypescript, SiNextdotjs, 
  SiMongodb, SiPostgresql, SiJest, SiReactquery, SiPrisma, SiSwagger, 
  SiGooglemaps, SiRedis, SiAnthropic, SiOpenai, SiGooglegemini, SiPuppeteer,
  SiDrizzle, SiLangchain
} from 'react-icons/si/index.js';
import { VscAzure } from "react-icons/vsc/index.js";
import { BsClockHistory, BsRobot } from "react-icons/bs/index.js"; 

/**
 * Icons are imported from /index.js subpaths to help Vite's tree-shaking
 * and reduce the dev-mode bundle size identified in the audit.
 */

export const tech = {
  javascript: { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' }, 
  typescript: { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' }, 
  python: { name: 'Python', icon: FaPython, color: '#3776AB' },

  react: { name: 'React', icon: FaReact, color: '#61DAFB' },
  nextjs: { name: 'Next.js', icon: SiNextdotjs, color: '#000000' }, 
  tailwind: { name: 'Tailwind', icon: SiTailwindcss, color: '#38B2AC' },
  reactQuery: { name: 'React Query', icon: SiReactquery, color: '#FF4154' },

  nodejs: { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
  express: { name: 'Express.js', icon: SiExpress, color: '#000000' },
  rest: { name: 'REST API', icon: SiSwagger, color: '#85EA2D' },
  nodeCron: { name: 'NodeCron', icon: BsClockHistory, color: '#A020F0' },

  mongodb: { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  postgresql: { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
  prisma: { name: 'Prisma', icon: SiPrisma, color: '#2D3748' },

  git: { name: 'Git', icon: FaGitAlt, color: '#F05032' },
  jest: { name: 'Jest', icon: SiJest, color: '#C21325' },
  googleMaps: { name: 'Google Maps', icon: SiGooglemaps, color: '#4285F4' }, 
  twitterApi: { name: 'Twitter API', icon: FaTwitter, color: '#1DA1F2' },
  bullmq: { name: 'BullMQ / Redis', icon: SiRedis, color: '#DC382D' },
  openai: { name: 'OpenAI', icon: SiOpenai, color: '#412991' },
  anthropic: { name: 'Anthropic', icon: SiAnthropic, color: '#7575E3' },
  gemini: { name: 'Google Gemini', icon: SiGooglegemini, color: '#4285F4' },
  puppeteer: { name: 'Puppeteer', icon: SiPuppeteer, color: '#40B5A4' },
  azure: { name: 'Azure Storage', icon: VscAzure, color: '#0078D4' },
  drizzle: { name: 'Drizzle ORM', icon: SiDrizzle, color: '#C5F74F' },
  langchain: { name: 'LangGraph', icon: SiLangchain, color: '#1C3C3C' },
  mastra: { name: 'Mastra', icon: BsRobot, color: '#4A90E2' },
};

export interface TechCategory {
  title: string;
  items: TechItem[];
}

export const techCategories: TechCategory[] = [
  {
    title: "Frontend Core",
    items: [tech.react, tech.nextjs, tech.typescript, tech.tailwind, tech.reactQuery, tech.javascript]
  },
  {
    title: "Backend & Services",
    items: [tech.nodejs, tech.express, tech.python, tech.rest, tech.nodeCron, tech.drizzle, tech.langchain, tech.mastra]
  },
  {
    title: "Database",
    items: [tech.postgresql, tech.mongodb, tech.prisma]
  },
  {
    title: "DevOps & Tools",
    items: [tech.git, tech.jest, tech.googleMaps, tech.twitterApi]
  }
];

export const techStack: TechItem[] = Object.values(tech);