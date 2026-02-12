
import { Header } from "../sections/Header";
import { Navbar } from "../sections/Navbar";
import { LazyMotion, domAnimation } from "framer-motion";
import React from "react";

const Projects = React.lazy(() => import("../sections/Projects"));
const About = React.lazy(() => import("../sections/About"));
const Contact = React.lazy(() => import("../sections/Contact"));

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