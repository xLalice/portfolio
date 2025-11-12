import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import Profile from "../assets/image.jpg";
import { SectionTitle } from '../components/SectionTitle';
import { GradientText } from '../components/GradientText';
import { techStack } from '../data/techStack';
import TechIcon from '../components/TechIcon';


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

  const profileOpacity = useTransform(smoothProgress, [0, 0.2], [0, 1]);
  const profileX = useTransform(smoothProgress, [0, 0.2], [-50, 0]);
  const profileRotate = useTransform(smoothProgress, [0, 0.2], [-5, 0]);

  const techStackOpacity = useTransform(smoothProgress, [0.1, 0.3], [0, 1]);
  const techStackX = useTransform(smoothProgress, [0.1, 0.3], [50, 0]);

  const para1Opacity = useTransform(smoothProgress, [0.2, 0.4], [0, 1]);
  const para1Y = useTransform(smoothProgress, [0.2, 0.4], [20, 0]);

  const para2Opacity = useTransform(smoothProgress, [0.3, 0.5], [0, 1]);
  const para2Y = useTransform(smoothProgress, [0.3, 0.5], [20, 0]);

  return (
    <section id="about" ref={sectionRef} className="py-20">
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
                className="mb-4 font-serif text-xl text-justify leading-relaxed"
                style={{ opacity: para1Opacity, y: para1Y }}
              >
                I'm a passionate full-stack developer with 1 year of experience building engaging web applications.
                My journey in web development started with a curiosity about how websites work, and evolved into
                a deep passion for creating intuitive and efficient digital experiences.
              </motion.p>
              <motion.p
                className="font-serif text-xl leading-relaxed"
                style={{ opacity: para2Opacity, y: para2Y }}
              >
                When I'm not coding, you can find me reading books, playing games/basketball or just learning and improving myself in general. I believe in continuous learning and keeping up with
                the latest tech trends to deliver modern solutions.
              </motion.p>
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

            <div
              className="bg-gradient-to-br from-zinc-900 to-zinc-800 p-6 rounded-xl border border-teal-500/10"
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;