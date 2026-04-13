import { useMotionValueEvent, useScroll, m, AnimatePresence } from "framer-motion";
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
      <m.nav
        variants={navbarVariants}
        animate={hidden ? "hidden" : "visible"}
        className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 backdrop-blur-md bg-(--color-bg-primary)/30 border-b border-(--color-border)"
      >
        <div className="relative group cursor-pointer z-50">
          <Link to="home" href="#home" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
            <span className="font-orbitron font-black text-2xl tracking-tighter text-(--color-accent)">
              JLI
            </span>
          </Link>
          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-(--color-accent) group-hover:w-full transition-all duration-300 opacity-80" />
        </div>

        <ul className="hidden md:flex gap-10 items-center">
          {navItems.map((item, index) => (
            <m.li 
              key={item} 
              className="relative group"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
            >
              <Link
                to={item.toLowerCase()}
                href={`#${item.toLowerCase()}`}
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="font-mono text-[11px] uppercase tracking-[0.2em] text-(--color-text-secondary) hover:text-(--color-accent) transition-all cursor-pointer"
              >
                {item}
              </Link>
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-(--color-accent) group-hover:w-full transition-all duration-300"></span>
            </m.li>
          ))}
        </ul>

        <button 
          className="md:hidden z-50 text-(--color-text-primary) cursor-pointer p-2 hover:bg-(--color-text-primary)/10 rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-(--color-accent) focus-visible:outline-offset-4" 
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </m.nav>

      <AnimatePresence>
        {isOpen && (
          <m.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-40 bg-(--color-bg-primary)/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            {navItems.map((item) => (
              <m.div
                 key={item}
                 whileHover={{ scale: 1.1 }}
                 whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.toLowerCase()}
                  href={`#${item.toLowerCase()}`}
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  onClick={() => setIsOpen(false)} 
                  className="font-orbitron text-3xl font-bold text-(--color-text-secondary) hover:text-(--color-accent) transition-colors cursor-pointer uppercase tracking-widest"
                >
                  {item}
                </Link>
              </m.div>
            ))}
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
};
