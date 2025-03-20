import React, { useRef } from "react";
import { SectionTitle } from "../components/SectionTitle";
import { Button } from "../components/Button";
import { GradientText } from "./About";
import { FaReact, FaNodeJs, FaVuejs } from "react-icons/fa";
import {
  SiExpress,
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiFirebase,
  SiNextdotjs,
  SiStripe,
  SiTailwindcss,
  SiPostman,
  SiSocketdotio,
  SiGatsby,
  SiGraphql,
  SiCss3
} from "react-icons/si";
import { IconType } from "react-icons";
import { motion, useScroll, useTransform } from "framer-motion";

interface TechItem {
  name: string;
  icon: IconType;
  color: string;
}

interface ProjectData {
  image: string;
  title: string;
  description: string;
  link: string;
  technologies: {
    name: string;
    icon: IconType;
    color: string;
  }[];
}

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
  technologies: TechItem[];
}

const projectsData: ProjectData[] = [
  {
    image: "https://itsechi.github.io/portfolio/assets/twitter-d4328ad1.webp",
    title: "Twitter Clone",
    description:
      "A Twitter clone built with React and Firebase. The users can edit their profile, follow and unfollow accounts, write and like tweets and visit other profiles. I made it possible for users to log in through Google or use the site as a guest to test the functionality.",
    link: "https://itsechi.github.io/twitter-clone/",
    technologies: [
      { name: "React", icon: FaReact, color: "cyan" },
      { name: "Firebase", icon: SiFirebase, color: "yellow" },
      { name: "JavaScript", icon: SiJavascript, color: "yellow" },
    ],
  },
  {
    image: "https://itsechi.github.io/portfolio/assets/todoList-4ca14a42.webp",
    title: "Todo List",
    description:
      "A simple task organizer made with TypeScript and the MERN stack. The user can add, edit and delete lists and tasks, log in with Google or use local storage to save tasks and monitor progress with a progress bar for each list.",
    link: "https://itsechi.github.io/typescript-todo/",
    technologies: [
      { name: "TypeScript", icon: SiTypescript, color: "blue" },
      { name: "MongoDB", icon: SiMongodb, color: "green" },
      { name: "Express.js", icon: SiExpress, color: "gray" },
      { name: "React.js", icon: FaReact, color: "cyan" },
      { name: "Node.js", icon: FaNodeJs, color: "green" },
    ],
  },
  {
    image: "https://example.com/images/ecommerce.webp",
    title: "E-Commerce Platform",
    description:
      "A fully functional e-commerce site built with Next.js and Stripe integration. Features include product listings, shopping cart, user authentication, and payment processing with real-time order tracking.",
    link: "https://example.com/ecommerce-demo/",
    technologies: [
      { name: "Next.js", icon: SiNextdotjs, color: "black" },
      { name: "Stripe", icon: SiStripe, color: "purple" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "teal" },
    ],
  },
  {
    image: "https://example.com/images/weather.webp",
    title: "Weather Dashboard",
    description:
      "A weather application that fetches real-time data using a public API. Users can search for cities, view current weather conditions, and see a 5-day forecast with responsive design.",
    link: "https://example.com/weather-app/",
    technologies: [
      { name: "Vue.js", icon: FaVuejs, color: "green" },
      { name: "JavaScript", icon: SiJavascript, color: "yellow" },
      { name: "API", icon: SiPostman, color: "orange" },
    ],
  },
  {
    image: "https://example.com/images/chat.webp",
    title: "Real-Time Chat App",
    description:
      "A chat application with real-time messaging using WebSocket. Supports private and group chats, user status indicators, and message persistence with a clean UI.",
    link: "https://example.com/chat-demo/",
    technologies: [
      { name: "React", icon: FaReact, color: "cyan" },
      { name: "Socket.io", icon: SiSocketdotio, color: "black" },
      { name: "Node.js", icon: FaNodeJs, color: "green" },
    ],
  },
  {
    image: "https://example.com/images/blog.webp",
    title: "Personal Blog",
    description:
      "A static blog site built with Gatsby for fast performance. Includes markdown support for posts, a comment system, and SEO optimization with a modern, minimal design.",
    link: "https://example.com/blog-demo/",
    technologies: [
      { name: "Gatsby", icon: SiGatsby, color: "purple" },
      { name: "GraphQL", icon: SiGraphql, color: "pink" },
      { name: "CSS", icon: SiCss3, color: "blue" },
    ],
  },
];

interface ProjectTechIconProps {
  tech: TechItem;
}

const ProjectTechIcon: React.FC<ProjectTechIconProps> = ({ tech }) => {
  const colorClasses: Record<string, string> = {
    yellow: "text-yellow-400",
    blue: "text-blue-400",
    cyan: "text-cyan-400",
    gray: "text-gray-400",
    green: "text-green-400",
    teal: "text-teal-400",
    red: "text-red-400",
  };

  return (
    <div className="flex items-center gap-1">
      <div className={`text-lg ${colorClasses[tech.color]}`}>
        <tech.icon />
      </div>
      <span className="text-xs font-orbitron text-gray-300">{tech.name}</span>
    </div>
  );
};

export const Projects: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  
  const y2 = useTransform(scrollYProgress, [0, 1], [400, -800]);

  const column1 = projectsData.filter((_, index) => index % 2 === 0);
  const column2 = projectsData.filter((_, index) => index % 2 !== 0);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <SectionTitle title="Projects" />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div style={{ y: y1 }} className="space-y-12">
            {column1.map((project, index) => (
              <ProjectCard
                key={index}
                image={project.image}
                title={project.title}
                description={project.description}
                link={project.link}
                technologies={project.technologies}
              />
            ))}
          </motion.div>

          <motion.div style={{ y: y2 }} className="space-y-12">
            {column2.map((project, index) => (
              <ProjectCard
                key={index}
                image={project.image}
                title={project.title}
                description={project.description}
                link={project.link}
                technologies={project.technologies}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  link,
  technologies,
}) => {
  return (
    <div className="bg-zinc-900/50 rounded-2xl shadow-xl shadow-teal-500/10 border border-teal-500/20 backdrop-blur-sm overflow-hidden transform transition-all hover:scale-105 duration-300">
      <div className="relative group">
        <img className="w-full h-64 object-cover" src={image} alt={title} />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <Button>View Project</Button>
          </a>
        </div>
      </div>

      <div className="p-8">
        <h3 className="text-2xl font-orbitron font-bold mb-4">
          <GradientText>{title}</GradientText>
        </h3>

        <p className="text-gray-300 font-serif text-sm leading-relaxed mb-6">
          {description}
        </p>

        <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 p-4 rounded-xl border border-teal-500/10 mb-6">
          <h4 className="text-sm font-orbitron text-gray-300 mb-3">
            Technologies Used:
          </h4>
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech, idx) => (
              <ProjectTechIcon key={idx} tech={tech} />
            ))}
          </div>
        </div>

        <div className="flex justify-end">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-orbitron text-sm text-teal-400 hover:text-teal-300 transition-colors duration-200"
          >
            Visit Project →
          </a>
        </div>
      </div>
    </div>
  );
};