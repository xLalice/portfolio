import { useRef } from "react";
import { GradientTextProps } from "../types";
import { useScroll, useTransform, motion } from "framer-motion";

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