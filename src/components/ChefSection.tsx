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
              <img
                src="/images/chef.webp"
                alt="Portrait du Chef Nicolas Bulier"
                className="w-full h-full object-cover"
              />
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
              className="font-heading text-4xl md:text-5xl lg:text-6xl text-cream mb-8 tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              D'une épreuve est née une vocation.
            </motion.h2>

            <motion.div
              className="space-y-6 text-lg md:text-xl text-cream/80 font-body leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p>
                Le jour où le sucre est devenu un défi, ma passion est devenue une mission. Pour moi, Chef Pâtissier, le diagnostic d'un <span className="text-gold font-semibold">diabète à 35 ans</span> sonnait comme une fin. C'était sans compter sur la résilience et l'envie de créer.
              </p>

              <p>
                Trois années de recherche acharnée dans mon atelier genevois. Des milliers d'heures à repenser chaque ingrédient, chaque texture, chaque équilibre. Non pas pour faire 'sans', mais pour créer 'avec' : avec la noblesse de la pistache de Sicile, l'intensité du chocolat grand cru, la douceur naturelle des sucres rares.
              </p>

              <p>
                Aujourd'hui, je ne présente pas de simples bûches. Je vous confie le fruit de mon histoire : la preuve que la gourmandise peut être un art bienveillant, un luxe qui prend soin de vous et de ceux que vous aimez.
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

