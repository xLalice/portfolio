import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Header = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]); 
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const x1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]); 

  return (
    <motion.div
    id="header"
      ref={ref}
      className="min-h-screen border-box flex flex-col justify-center items-center relative"
      style={{ opacity }}
    >
      <motion.div 
        className="text-left w-full max-w-4xl px-6 mb-20"
        style={{ y: y1, scale }}
      >
        <motion.h3 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm md:text-2xl lg:text-10xl font-orbitron tracking-wider text-teal-400"
          style= {{x: x1}}
        >
          Hello, I'm
        </motion.h3>
        <motion.h1 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-4xl md:text-6xl font-orbitron font-extrabold uppercase bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text animate-pulse-slow"
        >
          John Lorenz
        </motion.h1>
        <motion.h1 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-right text-4xl md:text-6xl font-orbitron font-extrabold uppercase bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text animate-pulse-slow"
        >
          Inocentes  
        </motion.h1>
        <motion.h2 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-right text-xl md:text-2xl font-orbitron font-bold text-teal-300 mt-2"
          style={{x: x2}}
        >
          A Full-stack JavaScript Developer
        </motion.h2>
      </motion.div>
      <motion.div 
        className=" text-center max-w-2xl px-6 md:px-12"
        style={{ y: y2 }}
      >
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-sm md:text-base font-orbitron text-gray-300"
        >
          Fullstack JavaScript developer crafting seamless, dynamic web
          experiences.
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="text-sm md:text-base font-orbitron text-gray-300 mt-2"
        >
          Explore my GitHub or scroll down to view my projects.
        </motion.p>
      </motion.div>
      <Particles />
    </motion.div>
  );
};

const Particles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-teal-400/20"
          initial={{ 
            x: Math.random() * 100 - 50 + "%", 
            y: Math.random() * 100 + "%",
            opacity: Math.random() * 0.5 + 0.2
          }}
          animate={{ 
            y: [null, Math.random() * -100 - 50],
            opacity: [null, 0]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: Math.random() * 10 + 10,
            ease: "linear"
          }}
          style={{
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
};