import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Project';
import Gallery from './components/Gallery';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-darker">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Gallery />
      <Resume />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}

export default App;