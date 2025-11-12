import { MotionValue } from 'framer-motion';
import { IconType } from 'react-icons';

export interface TechItem {
  name: string;
  icon: IconType;
  color: string;
}

export interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export interface TechIconProps {
  tech: TechItem;
  index: number;
  scrollYProgress: MotionValue<number>;
}  

export interface ProjectData {
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

export interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
  technologies: TechItem[];
}