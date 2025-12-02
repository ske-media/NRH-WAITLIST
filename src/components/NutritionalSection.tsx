import { motion } from "framer-motion";
import { Check } from "lucide-react";

const NutritionalSection = () => {
  const benefits = [
    {
      title: "Sucres naturels et fibres sucrantes",
      description: "Sucres naturels et fibres sucrantes : sucre de coco, sucre de canne complet ou sirop d'agave pour leurs apports en vitamines et minéraux. Des fibres sucrantes à faible indice glycémique pour une douceur sans culpabilité grâce à l'inuline* et au fructose."
    },
    {
      title: "Matières grasses saines et végétales",
      description: "Huiles végétales, huile de coco, beurre de cacao, plus légers gustativement et bons pour la santé, contribuant ainsi à une meilleure gestion du cholestérol grâce à leur origine végétale."
    },
    {
      title: "Farines alternatives et fruits secs",
      description: "Amande, pistache, noisette, farine de riz complet : des textures authentiques, sans gluten – Farine T80, T150, plus nutritives et favorables pour une glycémie stable. "
    }
  ];

  return (
    <section className="relative py-20 lg:py-32 px-4 lg:px-8 bg-gradient-dark overflow-hidden">
      {/* Décorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-dark-teal/10 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-cream mb-6 tracking-wide">
            La gourmandise éclairée
          </h2>
          <div className="w-24 h-1 bg-gradient-burgundy mx-auto mb-6" />
          <p className="text-lg md:text-xl text-cream/70 font-body max-w-3xl mx-auto">
            Des créations pensées pour votre bien-être, sans compromis sur le plaisir
          </p>
        </motion.div>

        {/* Benefits List */}
        <motion.div
          className="space-y-6 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="glass-card rounded-xl p-6 flex items-start gap-4 hover:shadow-glow transition-all duration-300"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-dark-teal/30 border border-dark-teal/50 flex items-center justify-center">
                <Check className="w-6 h-6 text-cream" />
              </div>
              <div className="flex-1">
                <h3 className="font-heading text-xl md:text-2xl text-cream mb-2">
                  {benefit.title}
                </h3>
                <p className="text-cream/80 font-body leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Note explicative sur l'inuline */}
        <motion.div
          className="text-center mt-8 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-sm text-cream/70 font-body italic max-w-2xl mx-auto">
            <span className="text-cream/90">*</span> Inuline = fibre soluble issue de la racine de chicorée
          </p>
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          className="text-center mt-12 pt-8 border-t border-gold/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-xs text-cream/60 font-body max-w-3xl mx-auto leading-relaxed">
            Les informations nutritionnelles sont indicatives et peuvent varier selon les préparations. 
            En cas de régime alimentaire strict ou d'allergies, veuillez consulter votre médecin. 
            Ces créations sont conçues pour une consommation occasionnelle dans le cadre d'une alimentation équilibrée.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default NutritionalSection;

