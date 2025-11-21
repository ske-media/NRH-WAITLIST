import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    const formSection = document.getElementById("form-section");
    formSection?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToB2B = () => {
    const b2bSection = document.getElementById("b2b-section");
    b2bSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/95 backdrop-blur-xl border-b border-gold/20 shadow-elegant"
        >
          <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              {/* Logo / Nom du Chef */}
              <motion.div
                className="font-heading text-xl md:text-2xl text-gold"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Nicolas Bulier
              </motion.div>

              {/* CTA Buttons */}
              <div className="flex items-center gap-4">
                <motion.button
                  onClick={scrollToB2B}
                  className="hidden md:block text-cream/80 hover:text-cream font-body text-sm font-medium transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Offre Entreprises
                </motion.button>
                <motion.button
                  onClick={scrollToForm}
                  className="px-6 py-2 bg-gradient-burgundy text-cream font-body font-semibold text-sm rounded-full transition-all duration-500 hover:shadow-gold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Rejoindre la liste privilège
                </motion.button>
              </div>
            </div>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default Header;

