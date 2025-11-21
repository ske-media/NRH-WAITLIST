import { motion } from "framer-motion";
import { Check } from "lucide-react";

const NutritionalSection = () => {
  const benefits = [
    {
      title: "Indice Glycémique Bas",
      description: "Préparation soigneusement pensée pour éviter les pics de glycémie"
    },
    {
      title: "Ingrédients nobles",
      description: "Pistache de Sicile, vanille de Madagascar, chocolat 70% : seulement le meilleur"
    },
    {
      title: "Sucres naturels",
      description: "Érythritol, stévia et sucres à index glycémique bas pour une douceur sans culpabilité"
    },
    {
      title: "Farines alternatives",
      description: "Amande, pistache, cacao : des textures authentiques sans gluten"
    },
    {
      title: "Matières grasses saines",
      description: "Huiles végétales sélectionnées, beurres de fruits secs : du bon gras pour votre santé"
    }
  ];

  return (
    <section className="relative py-20 lg:py-32 px-4 lg:px-8 bg-gradient-dark overflow-hidden">
      {/* Décorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl opacity-50" />
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
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-6" />
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
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center">
                <Check className="w-6 h-6 text-gold" />
              </div>
              <div className="flex-1">
                <h3 className="font-heading text-xl md:text-2xl text-gold mb-2">
                  {benefit.title}
                </h3>
                <p className="text-cream/80 font-body leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
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
            * Les informations nutritionnelles sont indicatives et peuvent varier selon les préparations. 
            En cas de régime alimentaire strict ou d'allergies, veuillez consulter votre médecin. 
            Ces créations sont conçues pour une consommation occasionnelle dans le cadre d'une alimentation équilibrée.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default NutritionalSection;

