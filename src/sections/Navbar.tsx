import { useMotionValueEvent, useScroll, motion, spring } from "framer-motion";
import { useState } from "react";
import { Link } from "react-scroll";

const navItems = ["About", "Projects", "Contact"];

export const Navbar = () => {
  const { scrollY } = useScroll();
  const [scrollDirection, setScrollDirection] = useState("up");

  useMotionValueEvent(scrollY, "change", (current) => {
    if (current < 100) {
      setScrollDirection("up");
    } else {
      const diff = current - (scrollY?.getPrevious() ?? 0);
      setScrollDirection(diff > 0 ? "down" : "up");
    }
  });

  return (
    <motion.nav
      className="fixed w-full flex justify-between items-center backdrop-blur-sm z-10 p-4 md:p-8"
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0.8 },
      }}
      animate={scrollDirection === "down" ? "hidden" : "visible"}
      transition={{
        duration: 1,
        type: spring,
      }}
    >
      <div className="logo relative">
        <span className="font-orbitron font-bold text-2xl md:text-3xl tracking-[0.2em] uppercase bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text px-4 py-2 rounded-xl hover:from-teal-500 hover:to-blue-600 transition-all duration-300">
          <Link to="header" spy={true} smooth={true}>
            JLI
          </Link>
        </span>
        <div className="absolute -bottom-2 left-0 w-full h-1.5 bg-teal-400 rounded-full opacity-60 hover:opacity-100 transition-opacity duration-300 transform hover:scale-105"></div>
      </div>

      <div>
        <ul className="flex gap-6 md:gap-10 list-none">
          {navItems.map((item) => (
            <li
              key={item}
              className="relative font-orbitron font-medium text-lg cursor-pointer hover:text-teal-400 transition-colors duration-200 group"
            >
              <Link to={item.toLowerCase()} spy={true} smooth={true}>
                {item}
              </Link>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-teal-400 group-hover:w-full transition-all duration-300"></span>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};
