import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import DynamicGreeting from './components/DynamicGreeting';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import PWAInstallPrompt from './components/PWAInstallPrompt';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';
import ThemeToggle from './components/ThemeToggle';
import BackgroundElements from './components/BackgroundElements';
import HeroIllustration from './components/HeroIllustration';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral dark:bg-neutral-dark text-text-main dark:text-text-main-dark">
      <CustomCursor />
      <BackgroundElements />
      <ScrollProgress />
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 dark:from-primary-dark/5 dark:via-accent-dark/5 dark:to-secondary-dark/5" />
          
          <div className="container mx-auto px-4 relative">
            <div className="text-center">
              <DynamicGreeting />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8"
              >
                <p className="text-xl md:text-2xl text-text-main/70 dark:text-text-main-dark/70 max-w-2xl mx-auto">
                  I create beautiful and functional web applications that make a difference.
                </p>
              </motion.div>
              <HeroIllustration />
            </div>
          </div>
        </section>

        {/* Main Content Sections */}
        <AnimatePresence mode="wait">
          <About />
          <Projects />
          <Contact />
        </AnimatePresence>
      </main>

      <Footer />
      <PWAInstallPrompt />
      <ScrollToTop />
      <div className="fixed bottom-8 left-8 z-50">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default App;
