import React, { useRef } from "react";
import { SectionTitle } from "../components/SectionTitle";
import { motion, useScroll, useTransform } from "framer-motion";
import { projectsData } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export const Projects: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  
  const y2 = useTransform(scrollYProgress, [0, 1], [400, -800]);

  const column1 = projectsData.filter((_, index) => index % 2 === 0);
  const column2 = projectsData.filter((_, index) => index % 2 !== 0);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <SectionTitle title="Projects" />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div style={{ y: y1 }} className="space-y-12">
            {column1.map((project, index) => (
              <ProjectCard
                key={index}
                image={project.image}
                title={project.title}
                description={project.description}
                link={project.link}
                technologies={project.technologies}
              />
            ))}
          </motion.div>

          <motion.div style={{ y: y2 }} className="space-y-12">
            {column2.map((project, index) => (
              <ProjectCard
                key={index}
                image={project.image}
                title={project.title}
                description={project.description}
                link={project.link}
                technologies={project.technologies}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

