import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaGitAlt } from 'react-icons/fa';
import { SiExpress, SiTailwindcss, SiJavascript, SiTypescript, SiNextdotjs, SiMongodb, SiPostgresql, SiJest } from 'react-icons/si';
import { IconType } from 'react-icons';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import Profile from "../assets/image.jpg";
import { SectionTitle } from '../components/SectionTitle';
import { Button } from '../components/Button';

interface TechItem {
  name: string;
  icon: IconType;
  color: string;
}

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

interface TechIconProps {
  tech: TechItem;
  index: number;
  scrollYProgress: any;
}

const techStack: TechItem[] = [
  { name: 'JavaScript', icon: SiJavascript, color: 'yellow' },
  { name: 'Python', icon: FaPython, color: 'blue' },
  { name: 'TypeScript', icon: SiTypescript, color: 'blue' },
  { name: 'React.js', icon: FaReact, color: 'cyan' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'gray' },
  { name: 'Node.js', icon: FaNodeJs, color: 'green' },
  { name: 'Express.js', icon: SiExpress, color: 'gray' },
  { name: 'MongoDB', icon: SiMongodb, color: 'green' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: 'blue' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'teal' },
  { name: 'Git', icon: FaGitAlt, color: 'red' },
  { name: 'Jest', icon: SiJest, color: 'red' },
];

export const GradientText: React.FC<GradientTextProps> = ({ children, className = '' }) => {
  const textRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <motion.span
      ref={textRef}
      className={`bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text ${className}`}
      style={{ opacity }}
    >
      {children}
    </motion.span>
  );
};

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

  // Create a delayed progress for staggered animations
  const delayedProgress = useTransform(
    scrollYProgress, 
    [0, 0.4], 
    [0, 1 - (index * 0.05)]
  );

  const opacity = useTransform(delayedProgress, [0, 0.7], [0, 1]);
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

export const About: React.FC = () => {
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const smoothProgress = useSpring(scrollYProgress, { 
    stiffness: 100, 
    damping: 30, 
    restDelta: 0.001 
  });
  
  // Transform values for different elements
  const profileOpacity = useTransform(smoothProgress, [0, 0.2], [0, 1]);
  const profileX = useTransform(smoothProgress, [0, 0.2], [-50, 0]);
  const profileRotate = useTransform(smoothProgress, [0, 0.2], [-5, 0]);
  
  const techStackOpacity = useTransform(smoothProgress, [0.1, 0.3], [0, 1]);
  const techStackX = useTransform(smoothProgress, [0.1, 0.3], [50, 0]);
  
  const para1Opacity = useTransform(smoothProgress, [0.2, 0.4], [0, 1]);
  const para1Y = useTransform(smoothProgress, [0.2, 0.4], [20, 0]);
  
  const para2Opacity = useTransform(smoothProgress, [0.3, 0.5], [0, 1]);
  const para2Y = useTransform(smoothProgress, [0.3, 0.5], [20, 0]);
  
  const buttonOpacity = useTransform(smoothProgress, [0.4, 0.6], [0, 1]);
  const buttonY = useTransform(smoothProgress, [0.4, 0.6], [20, 0]);
  
  const techContainerOpacity = useTransform(smoothProgress, [0.2, 0.4], [0, 1]);
  const techContainerScale = useTransform(smoothProgress, [0.2, 0.4], [0.95, 1]);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-zinc-950">
      <div className="container mx-auto px-6">
        <SectionTitle title="About" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-8 items-center">
            <motion.div 
              className="relative"
              style={{ 
                opacity: profileOpacity, 
                x: profileX, 
                rotate: profileRotate 
              }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-teal-500/30 shadow-xl shadow-teal-500/20">
                <img 
                  src={Profile} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            
            <div className="max-w-md text-gray-300">
              <motion.p 
                className="mb-4 font-serif text-sm leading-relaxed"
                style={{ opacity: para1Opacity, y: para1Y }}
              >
                I'm a passionate full-stack developer with 1 year of experience building engaging web applications. 
                My journey in web development started with a curiosity about how websites work, and evolved into 
                a deep passion for creating intuitive and efficient digital experiences.
              </motion.p>
              <motion.p 
                className="font-serif text-sm leading-relaxed"
                style={{ opacity: para2Opacity, y: para2Y }}
              >
                When I'm not coding, you can find me reading books, playing games/basketball or just learning and improving myself in general. I believe in continuous learning and keeping up with 
                the latest tech trends to deliver modern solutions.
              </motion.p>
              
              <motion.div 
                className="mt-8 flex space-x-4 justify-center"
                style={{ opacity: buttonOpacity, y: buttonY }}
                whileHover={{ scale: 1.05 }}
              >
                <Button>Contact</Button>
              </motion.div>
            </div>
          </div>
          
          <motion.div 
            className="bg-zinc-900/50 rounded-2xl shadow-xl shadow-teal-500/10 p-8 border border-teal-500/20 backdrop-blur-sm"
            style={{ opacity: techStackOpacity, x: techStackX }}
            whileHover={{ 
              scale: 1.03,
              boxShadow: "0 20px 25px -5px rgba(45, 212, 191, 0.1), 0 10px 10px -5px rgba(45, 212, 191, 0.04)"
            }}
          >
            <h3 className="text-2xl font-orbitron font-bold mb-6">
              <GradientText>Tech Stack</GradientText>
            </h3>
            
            <motion.div 
              className="bg-gradient-to-br from-zinc-900 to-zinc-800 p-6 rounded-xl border border-teal-500/10"
              style={{ 
                opacity: techContainerOpacity, 
                scale: techContainerScale 
              }}
            >
              <div className="grid grid-cols-3 gap-6">
                {techStack.map((tech, index) => (
                  <TechIcon 
                    key={index} 
                    tech={tech} 
                    index={index} 
                    scrollYProgress={smoothProgress} 
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;