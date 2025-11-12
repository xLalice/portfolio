
import { ProjectCardProps } from "../types";
import { Button } from "./Button";
import { GradientText } from "./GradientText";
import ProjectTechIcon from "./ProjectTechIcon";

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

export default ProjectCard;