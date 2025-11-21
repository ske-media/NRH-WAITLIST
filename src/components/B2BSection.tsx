import { motion } from "framer-motion";
import { Building2, Users, Award, ArrowRight } from "lucide-react";

const B2BSection = () => {
  const advantages = [
    {
      icon: Users,
      title: "Inclusivité",
      description: "Offrez un dessert qui convient à tous vos collaborateurs, quelle que soit leur contrainte alimentaire"
    },
    {
      icon: Award,
      title: "Qualité",
      description: "Une signature qui reflète l'excellence de votre entreprise"
    },
    {
      icon: Building2,
      title: "Artisanat local",
      description: "Soutenez un chef genevois et ses valeurs : proximité, qualité, bienveillance"
    }
  ];

  const pricingTiers = [
    { range: "10-20 bûches", discount: "10%" },
    { range: "21-50 bûches", discount: "15%" },
    { range: "51+ bûches", discount: "20%" }
  ];

  const handleContactClick = () => {
    window.location.href = "mailto:contact@nicolasbuiler.com?subject=Devis professionnel - Collection 2025";
  };

  return (
    <section className="relative py-20 lg:py-32 px-4 lg:px-8 bg-gradient-dark overflow-hidden">
      {/* Décorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-cream mb-6">
            Offrir du sens, pas juste du sucre
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-6" />
          <p className="text-lg md:text-xl text-cream/70 font-body max-w-3xl mx-auto">
            Des créations d'exception pour vos événements d'entreprise et vos cadeaux clients
          </p>
        </motion.div>

        {/* Advantages */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
        >
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              className="glass-card rounded-2xl p-6 text-center hover:shadow-glow transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center">
                <advantage.icon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-heading text-xl text-gold mb-3">
                {advantage.title}
              </h3>
              <p className="text-cream/80 font-body leading-relaxed">
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Pricing Tiers */}
        <motion.div
          className="glass-card rounded-3xl p-8 md:p-12 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-heading text-3xl text-gold mb-8 text-center">
            Tarifs professionnels
          </h3>
          <div className="space-y-4">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-between p-4 bg-card/20 rounded-xl border border-gold/10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <span className="text-cream font-body font-semibold text-lg">
                  {tier.range}
                </span>
                <span className="text-gold font-heading text-2xl">
                  -{tier.discount}
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
            <span className="relative z-10">Demander un devis professionnel</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default B2BSection;

