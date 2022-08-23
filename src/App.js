import React from 'react'
import './App.css';
import Header from './components/Header/Header.js'
import About from './components/About/About';
import About2 from './components/About2/About2';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <About2 />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
