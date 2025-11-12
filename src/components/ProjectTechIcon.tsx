import { TechItem } from "../types";

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

export default ProjectTechIcon;