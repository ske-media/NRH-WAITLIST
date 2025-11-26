import { motion } from "framer-motion";

const VisualSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className="relative py-20 lg:py-32 px-4 lg:px-8 overflow-hidden bg-gradient-dark">
      {/* Décorations - Cercles flous */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        {/* Title */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          variants={itemVariants}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-cream mb-6">
            Le Rêve
          </h2>
          <div className="w-24 h-1 bg-gradient-burgundy mx-auto mb-6" />
          <p className="text-lg md:text-xl text-cream/70 max-w-3xl mx-auto font-body font-light leading-relaxed">
            Des créations uniques, façonnées à la main, alliant la finesse de la
            haute pâtisserie à la chaleur des souvenirs d'enfance.
          </p>
        </motion.div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            variants={itemVariants}
            className="group relative overflow-hidden rounded-2xl bg-card border border-gold/20 shadow-elegant hover:shadow-glow transition-all duration-500"
            whileHover={{ scale: 1.02 }}
          >
            <div className="aspect-[4/3] overflow-hidden">
              <motion.img
                src="/images/choco.webp"
                alt="Bûche Chocolat Signature"
                className="w-full h-full object-cover transition-transform duration-700"
                whileHover={{ scale: 1.1 }}
              />
            </div>
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 via-dark-bg/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <motion.div
              className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
            >
              <h3 className="font-heading text-2xl md:text-3xl text-gold mb-2">
                Chocolat Signature
              </h3>
              <p className="text-cream/70 text-sm md:text-base font-body">
                Chocolat Valrhona, ganache onctueuse, biscuit moelleux
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="group relative overflow-hidden rounded-2xl bg-card border border-gold/20 shadow-elegant hover:shadow-glow transition-all duration-500"
            whileHover={{ scale: 1.02 }}
          >
            <div className="aspect-[4/3] overflow-hidden">
              <motion.img
                src="/images/pistache.webp"
                alt="Bûche Pistache Framboise"
                className="w-full h-full object-cover transition-transform duration-700"
                whileHover={{ scale: 1.1 }}
              />
            </div>
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 via-dark-bg/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <motion.div
              className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
            >
              <h3 className="font-heading text-2xl md:text-3xl text-gold mb-2">
                Pistache Framboise
              </h3>
              <p className="text-cream/70 text-sm md:text-base font-body">
                Crème de pistache sicilienne, insert framboise, biscuit amande
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Animation */}
        <motion.div
          className="mt-16 text-center"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <p className="text-gold text-sm md:text-base font-body font-semibold tracking-wider uppercase">
            Édition limitée
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default VisualSection;
