import React from 'react';
import { motion } from 'framer-motion';
import { TechItem } from '../types';

interface TechIconProps {
  tech: TechItem;
  index: number;
}

const TechIcon: React.FC<TechIconProps> = ({ tech, index }) => {
  const Icon = tech.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center justify-center gap-2 group cursor-pointer"
    >
      <div
        className="relative p-4 rounded-xl bg-zinc-800/30 border border-zinc-700/50 overflow-hidden transition-colors duration-300"
      >
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
          style={{ backgroundColor: tech.color }}
        />

        <Icon
          size={28}
          style={{ color: tech.color, filter: `drop-shadow(0 0 2px ${tech.color})` }}
          className="relative z-10 transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <span className="text-xs font-orbitron text-zinc-400 group-hover:text-zinc-200 transition-colors">
        {tech.name}
      </span>
    </motion.div>
  );
};

export default TechIcon;