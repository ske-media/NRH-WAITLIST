import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToCollection = () => {
    const collectionSection = document.getElementById("collection-section");
    collectionSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://res.cloudinary.com/agence-orbit/video/upload/v1763740985/xmas_ljdo6l.mp4"
            type="video/mp4"
          />
        </video>
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
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-cream mb-6 tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Ré-enchantez votre Noël.
        </motion.h1>

        <motion.h2
          className="font-heading text-2xl md:text-4xl lg:text-5xl text-cream mb-6 leading-tight tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          La promesse d'un dessert d'exception où chaque convive, sans exception, retrouve le goût authentique des fêtes.
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-cream/80 mb-10 font-body font-light leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          Des créations signées Nicolas Bulier, pensées pour le plaisir de tous. Sans lactose · Sans gluten · Indice glycémique bas
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

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.button
            onClick={scrollToCollection}
            className="group relative px-8 md:px-12 py-4 md:py-6 bg-gradient-burgundy text-cream font-body font-semibold text-base md:text-lg rounded-full overflow-hidden transition-all duration-500 hover:shadow-gold hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Découvrir les Créations</span>
          </motion.button>
          <motion.button
            onClick={() => {
              const b2bSection = document.getElementById("b2b-section");
              b2bSection?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-cream/80 hover:text-cream font-body text-sm md:text-base font-medium transition-colors duration-300 underline underline-offset-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Offre Entreprises
          </motion.button>
        </div>
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
