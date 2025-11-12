
import { useTransform, motion } from "framer-motion";
import { TechIconProps } from "../types";

const TechIcon: React.FC<TechIconProps> = ({ tech, index, scrollYProgress }) => {
  const colorClasses = {
    yellow: "text-yellow-400 shadow-yellow-500/10 border-yellow-500/20",
    blue: "text-blue-400 shadow-blue-500/10 border-blue-500/20",
    cyan: "text-cyan-400 shadow-cyan-500/10 border-cyan-500/20",
    gray: "text-gray-400 shadow-gray-500/10 border-gray-500/20",
    green: "text-green-400 shadow-green-500/10 border-green-500/20",
    teal: "text-teal-400 shadow-teal-500/10 border-teal-500/20",
    red: "text-red-400 shadow-red-500/10 border-red-500/20"
  };

  const delayedProgress = useTransform(
    scrollYProgress, 
    [0, 0.4], 
    [0, 1 - (index * 0.05)]
  );

  const opacity = useTransform(delayedProgress, [0, 0.2], [0, 1]);
  const y = useTransform(delayedProgress, [0, 0.7], [20, 0]);

  return (
    <motion.div 
      className="flex flex-col items-center"
      style={{ opacity, y }}
      whileHover={{ 
        scale: 1.1,
        transition: { duration: 0.2 } 
      }}
    >
      <div className={`w-14 h-14 flex items-center justify-center bg-zinc-800 rounded-full text-2xl shadow-md border ${colorClasses[tech.color as keyof typeof colorClasses]}`}>
        <tech.icon />
      </div>
      <span className="mt-2 text-xs font-orbitron text-gray-300">{tech.name}</span>
    </motion.div>
  );
};

export default TechIcon;