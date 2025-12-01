import { motion } from "framer-motion";
import { Users, Clock, Gift, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const B2BSection = () => {
  const navigate = useNavigate();
  
  const painPoints = [
    {
      icon: Users,
      problem: "Pour des collaborateurs exclus à cause de contraintes alimentaires",
      solution: "Des bûches sans lactose, sans gluten, IG bas. Personne n'est laissé de côté."
    },
    {
      icon: Gift,
      problem: "Des cadeaux clients qui se démarquent",
      solution: "Une création unique qui marque les esprits et renforce vos relations."
    },
    {
      icon: Clock,
      problem: "Logistique simplifiée",
      solution: "Livraison organisée, conditionnement adapté, flexibilité des dates. On s'occupe de tout."
    }
  ];

  const pricingTiers = [
    { range: "10-20 bûches", discount: "10%" },
    { range: "20-30 bûches", discount: "12%" },
    { range: "30-40 bûches", discount: "15%" },
    { range: "40+ bûches", discount: "Devis personnalisé", isCustom: true }
  ];

  const handleContactClick = () => {
    navigate("/devis");
  };

  return (
    <section id="b2b-section" className="relative py-20 lg:py-32 px-4 lg:px-8 bg-gradient-dark overflow-hidden">
      {/* Décorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-dark-teal/10 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-cream mb-6 tracking-wide">
            Offre Entreprises
          </h2>
          <div className="w-24 h-1 bg-gradient-burgundy mx-auto mb-6" />
          <p className="text-lg md:text-xl text-cream/70 font-body max-w-2xl mx-auto">
            Des solutions qui répondent directement à vos défis professionnels.
          </p>
        </motion.div>

        {/* Pain Points & Solutions */}
        <motion.div
          className="space-y-6 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
        >
          {painPoints.map((item, index) => (
            <motion.div
              key={index}
              className="glass-card rounded-2xl p-6 md:p-8 hover:shadow-glow transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-dark-teal/30 border border-dark-teal/50 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-cream" />
                </div>
                <div className="flex-1">
                  <p className="text-cream/60 font-body text-sm mb-2">
                    {item.problem}
                  </p>
                  <p className="text-cream font-body font-semibold text-lg">
                    {item.solution}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pricing Tiers - Simplified */}
        <motion.div
          className="glass-card rounded-3xl p-8 md:p-10 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-burgundy rounded-lg px-6 py-4 mb-6">
            <h3 className="font-heading text-2xl text-cream mb-2 text-center tracking-wide">
              Tarifs dégressifs
            </h3>
            <p className="text-cream/90 font-body text-sm text-center">
              (à partir de 10 bûches)
            </p>
          </div>
          <div className="space-y-3">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-between p-4 bg-card/20 rounded-xl border border-dark-teal/20 hover:border-dark-teal/40 transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <span className="text-cream font-body font-medium">
                  {tier.range}
                </span>
                <span className="text-cream font-heading text-xl">
                  {tier.isCustom ? tier.discount : `-${tier.discount}`}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.button
            onClick={handleContactClick}
            className="group relative px-8 md:px-12 py-4 md:py-6 bg-gradient-burgundy text-cream font-body font-semibold text-base md:text-lg rounded-full overflow-hidden transition-all duration-500 hover:shadow-gold hover:scale-105 inline-flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Demander un devis</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          <motion.p
            className="text-cream/60 font-body text-sm mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Réponse sous 24h
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default B2BSection;

