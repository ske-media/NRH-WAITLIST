import { motion } from "framer-motion";

const ChefSection = () => {
  return (
    <section className="relative py-20 lg:py-32 px-4 lg:px-8 bg-gradient-dark overflow-hidden">
      {/* Décorations - Cercles flous */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image du Chef */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 via-gray-900 to-black border border-gold/20 shadow-elegant">
              {/* Placeholder élégant pour le portrait du chef */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-gold/20 to-burgundy/20 border-2 border-gold/40 flex items-center justify-center">
                    <span className="text-4xl">👨‍🍳</span>
                  </div>
                  <p className="text-cream/60 text-sm font-body italic">
                    Portrait du Chef Nicolas Bulier
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contenu texte */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2
              className="font-heading text-4xl md:text-5xl lg:text-6xl text-cream mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Quand la vie vous défie...
            </motion.h2>

            <motion.div
              className="space-y-4 text-lg md:text-xl text-cream/80 font-body leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p>
                Un diagnostic de <span className="text-gold font-semibold">diabète foudroyant</span> à 35 ans.
                Une promesse faite à lui-même : continuer à créer, mais autrement.
              </p>

              <p>
                Trois années de recherche. Des milliers d'essais. Une quête pour des saveurs intenses
                sans compromettre la santé.
              </p>

              <p>
                Aujourd'hui, le Chef Nicolas Bulier présente ses <span className="text-gold font-semibold">œuvres pâtissières d'exception</span> :
                des bûches de Noël qui prouvent que l'excellence peut rimer avec bienveillance.
              </p>
            </motion.div>

            {/* Citation du Chef */}
            <motion.blockquote
              className="mt-8 p-6 bg-card/30 border-l-4 border-gold rounded-r-lg glass-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-cream italic text-lg md:text-xl font-body leading-relaxed mb-2">
                "Chaque bouchée doit être un moment de grâce. Pour vous. Pour vos proches.
                Pour ceux qui pensaient ne plus jamais goûter une bûche digne de ce nom."
              </p>
              <footer className="text-gold text-base font-body font-semibold mt-4">
                — Chef Nicolas Bulier
              </footer>
            </motion.blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChefSection;

