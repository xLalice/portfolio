import React, { useRef } from "react";
import { SectionTitle } from "../components/SectionTitle";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { projectsData } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import { useIsMobile } from "../hooks/isMobile";

export const Projects: React.FC = () => {
  const ref = useRef(null);

  const isMobile = useIsMobile();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const y1 = useTransform(smoothProgress, [0, 1], [0, isMobile ? 0 : -50]);
  const y2 = useTransform(smoothProgress, [0, 1], [0, isMobile ? 0 : -200]);

  const column1 = projectsData.filter((_, index) => index % 2 === 0);
  const column2 = projectsData.filter((_, index) => index % 2 !== 0);

  return (
    <section id="projects" className="py-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionTitle title="Featured Projects" />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">

          <motion.div style={{ y: y1 }} className="space-y-8 lg:space-y-12">
            {column1.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </motion.div>

          <motion.div
            style={{ y: y2 }}
            className="space-y-8 lg:space-y-12 md:mt-20"
          >
            {column2.map((project) => (
              <ProjectCard key={project.title} project={project}/>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Projects;