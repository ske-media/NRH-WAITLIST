import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/buche-chocolat-detail.jpg";

const HeroSection = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById("form-section");
    formSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Bûche de Noël signature"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/80 via-dark-bg/60 to-dark-bg/90" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <motion.h1
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-cream mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Nicolas Builer
        </motion.h1>

        <motion.h2
          className="font-heading text-3xl md:text-5xl lg:text-6xl text-cream mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          La Magie de Noël s'invite à votre table
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-cream/80 mb-10 font-body font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          Collection Exclusive 2024 · Quantités limitées
        </motion.p>

        {/* Badges Features */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <span className="px-4 py-2 bg-gold/20 backdrop-blur-sm border border-gold/40 rounded-full text-cream text-sm font-body font-medium">
            Artisanal
          </span>
          <span className="px-4 py-2 bg-gold/20 backdrop-blur-sm border border-gold/40 rounded-full text-cream text-sm font-body font-medium">
            Édition Limitée
          </span>
          <span className="px-4 py-2 bg-gold/20 backdrop-blur-sm border border-gold/40 rounded-full text-cream text-sm font-body font-medium">
            Haute Pâtisserie
          </span>
        </motion.div>

        <motion.button
          onClick={scrollToForm}
          className="group relative px-8 md:px-12 py-4 md:py-6 bg-gradient-burgundy text-cream font-body font-semibold text-base md:text-lg rounded-full overflow-hidden transition-all duration-500 hover:shadow-gold hover:scale-105"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">M'inscrire à la vente privée</span>
        </motion.button>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
