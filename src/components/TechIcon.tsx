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
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ scale: 1.1 }}
      className="flex flex-col items-center justify-center gap-3 group cursor-pointer"
    >
      <div
        className="relative p-5 rounded-sm bg-(--color-bg-secondary) border border-(--color-border) overflow-hidden transition-colors duration-300 group-hover:border-(--color-accent)"
      >
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
          style={{ backgroundColor: tech.color }}
        />

        <Icon
          size={32}
          style={{ color: tech.color }}
          className="relative z-10"
        />
      </div>

      <span className="font-mono text-[10px] uppercase tracking-widest text-(--color-text-dim) group-hover:text-(--color-text-primary) transition-colors">
        {tech.name}
      </span>
    </motion.div>
  );
};

export default TechIcon;