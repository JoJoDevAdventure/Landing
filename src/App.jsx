import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { useSnapshot } from 'valtio';
import CustomPopup from './components/CustomPopup';
import './index.css';
import About from './Pages/About';
import Home from './Pages/Home';
import Footer from './sections/Footer';
import Header from './sections/Header';
import appState from './stores/state';

const pageVariants = {
  initial: { opacity: 0, x: 200 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeInOut" } },
  exit: { opacity: 0, x: -200, transition: { duration: 0.5, ease: "easeInOut" } },
};

const App = () => {
  const { isOnAbout } = useSnapshot(appState);

  return (
    <main className='overflow-hidden'>
      <CustomPopup />
      <Header />
      <AnimatePresence mode="wait">
        {isOnAbout ? (
          <motion.div
            key="about"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <About />
          </motion.div>
        ) : (
          <motion.div
            key="home"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Home />
          </motion.div>
        )}
      </AnimatePresence>
      <Footer />
    </main>
  );
};

export default App;