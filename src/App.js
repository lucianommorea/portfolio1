import React from 'react'
import './App.css';
import Header from './components/Header/Header.js'
import About from './components/About/About';
import About2 from './components/About2/About2';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <About2 />
      <Projects />
    </div>
  );
}

export default App;
