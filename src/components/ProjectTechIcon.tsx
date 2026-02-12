import React from "react";
import { TechItem } from "../types";

interface ProjectTechIconProps {
  tech: TechItem;
  index?: number; 
}

const ProjectTechIcon: React.FC<ProjectTechIconProps> = ({ tech }) => {
  const Icon = tech.icon;

  return (
    <div 
      className="relative group flex items-center justify-center p-2 rounded-md bg-zinc-800/50 border border-zinc-700/50 hover:bg-zinc-800 transition-colors duration-300 cursor-help"
    >
      <Icon 
        size={18} 
        style={{ color: tech.color, filter: `drop-shadow(0 0 1px ${tech.color})` }}
      />

      <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/80 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-zinc-700 z-10">
        {tech.name}
      </span>
    </div>
  );
};

export default ProjectTechIcon;