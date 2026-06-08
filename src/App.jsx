import React from 'react';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Splash from './components/Splash';

function App() {

  const [showSplash, setShowSplash] = useState(true);

  return (
    <main className="bg-rich-black min-h-screen text-white-text selection:bg-neon-red/30 selection:text-white-text">
    
      {showSplash ? (
        <Splash onComplete={() => setShowSplash(false)} />)
        : (
          <div>
            <Navbar />
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Experience />
              <Contact />
            <Footer />
          </div>
        )}

    </main>
  );
}

export default App;
