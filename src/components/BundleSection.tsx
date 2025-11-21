import { motion } from "framer-motion";
import { Gift, CheckCircle } from "lucide-react";

const BundleSection = () => {
  return (
    <section className="relative py-20 lg:py-32 px-4 lg:px-8 bg-gradient-dark overflow-hidden">
      {/* Décorations */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/20 border border-gold/40 mb-6"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Gift className="w-8 h-8 text-gold" />
          </motion.div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-cream mb-6">
            La Collection Complète
          </h2>
          <p className="text-xl md:text-2xl text-gold font-body font-semibold mb-4">
            Pour ne laisser personne au bord de la table
          </p>
        </motion.div>

        {/* Bundle Card */}
        <motion.div
          className="glass-card rounded-3xl p-8 md:p-12 shadow-elegant"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Prix en évidence */}
          <div className="text-center mb-8">
            <div className="inline-block">
              <div className="flex items-baseline justify-center gap-3 mb-2">
                <span className="text-5xl md:text-6xl font-heading text-gold">CHF 138</span>
              </div>
              <p className="text-cream/70 text-sm font-body">
                Les 3 bûches de la Collection Exclusive
              </p>
            </div>
          </div>

          {/* Argumentaire */}
          <motion.div
            className="grid md:grid-cols-3 gap-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-center p-4 bg-card/20 rounded-xl border border-gold/10">
              <CheckCircle className="w-8 h-8 text-gold mx-auto mb-3" />
              <p className="text-cream font-body font-semibold mb-2">Trois profils gustatifs</p>
              <p className="text-cream/70 text-sm font-body">
                Pistache, Vanille, Chocolat : des saveurs qui marquent les esprits
              </p>
            </div>
            <div className="text-center p-4 bg-card/20 rounded-xl border border-gold/10">
              <CheckCircle className="w-8 h-8 text-gold mx-auto mb-3" />
              <p className="text-cream font-body font-semibold mb-2">Trois contraintes alimentaires couvertes</p>
              <p className="text-cream/70 text-sm font-body">
                Sans lactose, sans gluten, vegan : une table pour tous
              </p>
            </div>
            <div className="text-center p-4 bg-card/20 rounded-xl border border-gold/10">
              <CheckCircle className="w-8 h-8 text-gold mx-auto mb-3" />
              <p className="text-cream font-body font-semibold mb-2">Zéro personne exclue</p>
              <p className="text-cream/70 text-sm font-body">
                Chacun peut savourer l'excellence, quel que soit son régime
              </p>
            </div>
          </motion.div>

          {/* Conseil du Chef */}
          <motion.div
            className="mt-8 p-6 bg-gold/10 border border-gold/30 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-gold font-body font-semibold text-lg mb-3">
              💡 Conseil du Chef
            </p>
            <p className="text-cream/90 font-body leading-relaxed">
              La <span className="text-gold font-semibold">Vanille</span> et le <span className="text-gold font-semibold">Velours</span> se conservent 72h au frais. 
              Servez l'<span className="text-gold font-semibold">Élixir</span> le 24 pour une texture optimale. 
              Sortez 30 minutes avant la dégustation pour révéler toutes les saveurs.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BundleSection;

