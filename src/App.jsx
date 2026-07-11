import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { useEffect, useState } from 'react';
import About from './components/About.jsx';
import AnimatedCursor from './components/AnimatedCursor.jsx';
import BackgroundEffects from './components/BackgroundEffects.jsx';
import Certifications from './components/Certifications.jsx';
import Contact from './components/Contact.jsx';
import Education from './components/Education.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import LoadingScreen from './components/LoadingScreen.jsx';
import Navbar from './components/Navbar.jsx';
import Projects from './components/Projects.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import Skills from './components/Skills.jsx';
import Timeline from './components/Timeline.jsx';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.documentElement.classList.remove('light');
    document.documentElement.classList.add('dark');
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="app-shell relative min-h-screen overflow-hidden bg-ink text-slate-100 transition-colors duration-500 light:bg-slate-50 light:text-slate-950">
      <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>
      <ScrollProgress />
      <AnimatedCursor />
      <BackgroundEffects />
      <Navbar />
      <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Timeline />
        <Projects />
        <Certifications />
        <Contact />
      </motion.main>
      <Footer />
    </div>
  );
}

export default App;
