import React from "react";
import { Button } from "./Button";
import { GradientText } from "./GradientText";
import ProjectTechIcon from "./ProjectTechIcon";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { ProjectData} from "../types";

export interface ProjectCardProps {
  project: ProjectData;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project
}) => {
  return (
    <div className="bg-zinc-900/50 rounded-2xl shadow-xl shadow-teal-500/10 border border-teal-500/20 backdrop-blur-sm overflow-hidden flex flex-col h-full transform transition-all hover:-translate-y-2 duration-300">

      <div className="relative group h-64 overflow-hidden shrink-0">
        <img
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          src={project.image}
          alt={project.title}
        />

        <div className="absolute inset-0 bg-zinc-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">

          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <Button className="flex items-center gap-2">
              <FaGithub /> Code
            </Button>
          </a>

          {project.demoLink && (
            <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
              <Button className="flex items-center gap-2">
                <FaExternalLinkAlt /> Live Demo
              </Button>
            </a>
          )}
        </div>
      </div>

      <div className="p-8 flex flex-col flex-grow">

        <h3 className="text-2xl font-orbitron font-bold mb-3">
          <GradientText>{project.title}</GradientText>
        </h3>

        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
          {project.description}
        </p>

        {project.highlights && project.highlights.length > 0 && (
          <ul className="mb-6 space-y-2">
            {project.highlights.map((item: string, i: number) => (
              <li key={i} className="flex items-start text-sm text-gray-300">
                <span className="text-teal-500 mr-2 mt-1">▹</span>
                <span className="font-serif leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto">
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 p-4 rounded-xl border border-teal-500/10">
            <h4 className="text-xs font-orbitron text-gray-500 uppercase tracking-widest mb-3">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, idx) => (
                <ProjectTechIcon key={idx} tech={tech} />
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectCard;