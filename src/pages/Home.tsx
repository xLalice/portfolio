
import { Header } from "../sections/Header";
import { Navbar } from "../sections/Navbar";
import About from "../sections/About";
import { Projects } from "../sections/Projects";
import Contact from "../sections/Contact";
import { LazyMotion, domAnimation } from "framer-motion";

export const Home = () => {
  return (
    <LazyMotion features={domAnimation}>
      <div className="w-full text-sky-100 scrollbar-thin scrollbar-webkit">
        <Navbar />
        <Header />
        <About />
        <Projects />
        <Contact />
      </div>
    </LazyMotion>
  );
};

export default Home;