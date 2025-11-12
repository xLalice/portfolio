import { TechItem } from "../types";
import { 
  FaReact, FaNodeJs, FaPython, FaGitAlt, FaTwitter
} from 'react-icons/fa';
import { 
  SiExpress, SiTailwindcss, SiJavascript, SiTypescript, SiNextdotjs, 
  SiMongodb, SiPostgresql, SiJest, SiReactquery, SiPrisma, SiSwagger, 
  SiGooglemaps, SiLeaflet
} from 'react-icons/si';
import { BsClockHistory } from "react-icons/bs"; 

export const tech = {
  javascript: { name: 'JavaScript', icon: SiJavascript, color: 'yellow' },
  python: { name: 'Python', icon: FaPython, color: 'blue' },
  typescript: { name: 'TypeScript', icon: SiTypescript, color: 'blue' },
  react: { name: 'React.js', icon: FaReact, color: 'cyan' },
  nextjs: { name: 'Next.js', icon: SiNextdotjs, color: 'gray' },
  nodejs: { name: 'Node.js', icon: FaNodeJs, color: 'green' },
  express: { name: 'Express.js', icon: SiExpress, color: 'gray' },
  mongodb: { name: 'MongoDB', icon: SiMongodb, color: 'green' },
  postgresql: { name: 'PostgreSQL', icon: SiPostgresql, color: 'blue' },
  tailwind: { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'teal' },
  git: { name: 'Git', icon: FaGitAlt, color: 'red' },
  jest: { name: 'Jest', icon: SiJest, color: 'red' },
  reactQuery: { name: 'React Query', icon: SiReactquery, color: 'red' },
  prisma: { name: 'Prisma', icon: SiPrisma, color: 'teal' },
  rest: { name: 'REST API', icon: SiSwagger, color: 'orange' },
  twitterApi: { name: 'Twitter API', icon: FaTwitter, color: 'skyblue' },
  nodeCron: { name: 'NodeCron', icon: BsClockHistory, color: 'purple' },
  googleMaps: { name: 'Google Maps API', icon: SiGooglemaps, color: 'green' },
  leaflet: { name: 'React Leaflet', icon: SiLeaflet, color: 'green' },
};

export const techStack: TechItem[] = Object.values(tech);