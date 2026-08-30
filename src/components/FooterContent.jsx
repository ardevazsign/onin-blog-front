import { AnimatePresence, motion } from 'framer-motion';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import TermsAndConditions from '../pages/TermsConditions';
import Contact from '../pages/Contact';

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
        {active === 'policy' && <PrivacyPolicy />}
        {active === 'terms' && <TermsAndConditions />}
        {active === 'contact' && <Contact />}
      </motion.div>
    </AnimatePresence>
  );
};

export default AboutContent;
