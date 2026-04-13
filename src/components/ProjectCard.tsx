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
    <div className="bg-(--color-bg-secondary)/50 rounded-2xl shadow-xl shadow-(--color-accent)/10 border border-(--color-border) backdrop-blur-sm overflow-hidden flex flex-col h-full transform transition-all hover:-translate-y-2 duration-300">

      <div className="relative group h-64 overflow-hidden shrink-0">
        <img
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
        />

        <div className="absolute inset-0 bg-(--color-bg-tertiary)/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">

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

        <p className="text-(--color-text-secondary) text-sm mb-4 leading-relaxed">
          {project.description}
        </p>

        {project.highlights && project.highlights.length > 0 && (
          <ul className="mb-6 space-y-2">
            {project.highlights.map((item: string, i: number) => (
              <li key={i} className="flex items-start text-sm text-(--color-text-secondary)">
                <span className="text-(--color-accent) mr-2 mt-1">▹</span>
                <span className="font-serif leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto">
          <div className="bg-gradient-to-br from-(--color-bg-tertiary) to-(--color-bg-secondary) p-4 rounded-xl border border-(--color-border)">
            <h4 className="text-xs font-orbitron text-(--color-text-dim) uppercase tracking-widest mb-3">
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