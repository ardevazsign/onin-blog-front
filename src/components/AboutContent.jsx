import { AnimatePresence, motion } from 'framer-motion';
import AboutHero from './AboutHero';
import Mission from './Mission';
import OurTeam from './OurTeam';

const AboutContent = ({ active }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={active}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -40 }}
        transition={{ duration: 0.35 }}
      >
        {active === 'about' && <AboutHero />}
        {active === 'mission' && <Mission />}
        {active === 'team' && <OurTeam />}
      </motion.div>
    </AnimatePresence>
  );
};

export default AboutContent;
