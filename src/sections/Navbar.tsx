import { useMotionValueEvent, useScroll, motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = ["About", "Projects", "Contact"];

export const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false); 

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 100) {
        setHidden(true);
    } else {
        setHidden(false);
    }
  });

  const navbarVariants = {
    visible: { y: 0, transition: { duration: 0.35 } },
    hidden: { y: "-100%", transition: { duration: 0.35 } },
  };

  const menuVariants = {
    closed: { 
      opacity: 0,
      x: "100%",
      transition: { duration: 0.2 }
    },
    open: { 
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <>
      <motion.nav
        variants={navbarVariants}
        animate={hidden ? "hidden" : "visible"}
        className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 backdrop-blur-md bg-black/30 border-b border-white/5"
      >
        <div className="relative group cursor-pointer z-50">
          <Link to="home" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
            <span className="font-orbitron font-bold text-2xl tracking-widest bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text">
              JLI
            </span>
          </Link>
          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-400 group-hover:w-full transition-all duration-300 opacity-80" />
        </div>

        <ul className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <li key={item} className="relative group">
              <Link
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="font-orbitron text-sm uppercase tracking-wider text-gray-300 hover:text-teal-400 transition-colors cursor-pointer"
              >
                {item}
              </Link>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-400 group-hover:w-full transition-all duration-300"></span>
            </li>
          ))}
        </ul>

        <div className="md:hidden z-50 text-white cursor-pointer mr-8" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            {navItems.map((item) => (
              <motion.div
                 key={item}
                 whileHover={{ scale: 1.1 }}
                 whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.toLowerCase()}
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  onClick={() => setIsOpen(false)} 
                  className="font-orbitron text-3xl font-bold text-gray-300 hover:text-teal-400 transition-colors cursor-pointer uppercase tracking-widest"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};