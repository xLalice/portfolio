import React from 'react';
import { m, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import Profile from "../assets/image.jpg";
import { SectionTitle } from '../components/SectionTitle';
import { techCategories } from '../data/techStack';
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
            <m.div
              className="relative"
              style={{
                opacity: profileOpacity,
                x: profileX,
                rotate: profileRotate
              }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-(--color-border) shadow-xl shadow-(--color-accent)/10">
                <img
                  src={Profile}
                  alt="Profile"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </m.div>

            <div className="max-w-md text-(--color-text-secondary)">
              <m.p
                className="mb-4 font-serif text-xl text-left leading-relaxed"
                style={{ opacity: para1Opacity, y: para1Y }}
              >
                I am a Fullstack Developer focused on performance and scalability. I specialize in building React applications backed by Node.js and PostgreSQL. Currently, I'm exploring cloud architecture to optimize application deployment.

              </m.p>
              <m.p
                className="font-serif text-xl leading-relaxed text-(--color-text-dim)"
                style={{ opacity: para2Opacity, y: para2Y }}
              >
                
                When I'm not coding, learning a new tech or debugging, I'm on the basketball court or reading an Agatha Christie book.
              </m.p>
            </div>
          </div>

          <m.div
            className="bg-(--color-bg-secondary)/50 rounded-2xl shadow-xl shadow-(--color-accent)/10 p-8 border border-(--color-border) backdrop-blur-sm"
            style={{ opacity: techStackOpacity, x: techStackX }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 20px 25px -5px rgba(45, 212, 191, 0.1), 0 10px 10px -5px rgba(45, 212, 191, 0.04)"
            }}
          >
            <h3 className="text-2xl font-orbitron font-bold mb-6 text-(--color-text-primary)">
              Tech Stack
            </h3>

            <div
              className="bg-gradient-to-br from-(--color-bg-tertiary) to-(--color-bg-secondary) p-6 rounded-xl border border-(--color-border)"
            >
              <div className="grid grid-cols-1 gap-6">
                {techCategories.map((category, index) => (
                  <div key={index} className="w-full bg-(--color-bg-tertiary)/50 p-6 rounded-xl border border-(--color-border) hover:border-(--color-accent)/30 transition-colors">

                    <h3 className="text-xl font-orbitron text-(--color-accent) mb-4 border-b border-(--color-border) pb-2 ">
                      {category.title}
                    </h3>

                    <div className="flex flex-wrap gap-4 ">
                      {category.items.map((item, itemIndex) => (
                        <TechIcon
                          key={itemIndex}
                          tech={item}
                          index={itemIndex}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
};

export default About;
