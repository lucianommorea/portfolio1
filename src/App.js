import React from 'react'
import './App.css';
import Header from './components/Header/Header.js'
import About from './components/About/About';
import About2 from './components/About2/About2';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import { motion, useScroll } from "framer-motion";
import Particle from './components/Particle';

function App() {
  const { scrollYProgress } = useScroll();


  return (
    <div className="App">
      <Particle />
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <Header />
      <About />
      <About2 />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
