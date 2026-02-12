import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SocialIcon } from "../components/SocialIcon";
import { info } from "../data/personalInfo";

export const Header = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const x1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  return (
    <motion.section
      id="home"
      ref={ref}
      className="min-h-screen border-box flex flex-col justify-center items-center relative overflow-hidden"
      style={{ opacity }}
    >
      <motion.div
        className="w-full max-w-5xl px-6 mb-12 relative z-10"
        style={{ y: y1, scale }}
      >
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-2xl font-orbitron tracking-widest text-teal-400 mb-2 pl-1"
          style={{ x: x1 }}
        >
          Hello, I'm
        </motion.h3>

        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-extrabold uppercase bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text leading-tight"
        >
          John Lorenz
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-right text-5xl md:text-7xl lg:text-8xl font-orbitron font-extrabold uppercase bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text leading-tight"
        >
          Inocentes
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-right text-xl md:text-3xl font-orbitron font-bold text-teal-100/80 mt-4 tracking-wide"
          style={{ x: x2 }}
        >
          Fullstack Developer <span className="text-teal-500 mx-2">|</span> React • Node.js • Typescript
        </motion.h2>
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row gap-6 items-center justify-center relative z-10"
        style={{ y: y2 }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.1 }}
      >
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-teal-500 text-black font-orbitron font-bold uppercase tracking-wider rounded shadow-[0_0_20px_rgba(45,212,191,0.5)] hover:shadow-[0_0_30px_rgba(45,212,191,0.8)] transition-all"
        >
          View Projects
        </motion.a>

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05, backgroundColor: "rgba(45, 212, 191, 0.1)" }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 border border-teal-500 text-teal-400 font-orbitron font-bold uppercase tracking-wider rounded hover:border-teal-400 transition-all"
        >
          Contact Me
        </motion.a>
      </motion.div>

      <div className="flex gap-6 mt-4">
        <SocialIcon href={info.github} label="GitHub">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </SocialIcon>

        <SocialIcon href={info.linkedin} label="LinkedIn">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </SocialIcon>

        <SocialIcon href={`mailto:${info.email}`} label="Email">
          <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-11.179l4.623 5.467zm-4.488-6.353l15.424 12.037 1.912-1.523-1.666-1.3-13.681-10.772-1.989 1.558zm13.375 6.353l4.623-5.467v11.179l-4.623-5.712zm-9.035 2.112l3.525 2.749 3.525-2.749 5.353 6.611h-17.756l5.353-6.611z" />
        </SocialIcon>

        <SocialIcon href="/resume.pdf" label="Resume">
          <path d="M14 0h-12c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-16l-6-6zm-2 15h-8v-2h8v2zm0-4h-8v-2h8v2zm6-4h-14v-2h14v2zm-6-9v5h5l-5-5z" />
        </SocialIcon>
      </div>

      <Particles />
    </motion.section>
  );
};

const Particles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 md:w-2 md:h-2 rounded-full bg-teal-400/20"
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