import React from 'react'
import './App.css';
import Header from './components/Header/Header.js'
import About from './components/About/About';
import About2 from './components/About2/About2';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import { motion, useScroll } from "framer-motion";
import Particle from './components/Particle';
import { useRef } from 'react'
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Contacto from './components/Contacto/Contacto';


function App() {
  const { scrollYProgress } = useScroll();
  const about2 = useRef(null);
  const projects = useRef(null);
  const technologies = useRef(null);
  const contact = useRef(null);
  const home = useRef(null);

  return (
    <div className="App">
      <Particle />
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <ScrollToTop />
      <Header home={home} about2={about2} projects={projects} technologies={technologies} contact={contact} />
      <About home={home}/>
      <About2 about2={about2} />
      <Projects projects={projects} />
      <Skills technologies={technologies} />
      <Contacto contact={contact} />
    </div>
  );
}

export default App;
