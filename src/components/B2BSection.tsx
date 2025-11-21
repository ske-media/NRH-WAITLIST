import { motion } from "framer-motion";
import { Building2, Users, Award, ArrowRight, Heart, Clock, Shield, Sparkles, Gift, TrendingUp } from "lucide-react";

const B2BSection = () => {
  const advantages = [
    {
      icon: Users,
      title: "Inclusivité totale",
      description: "Sans lactose, sans gluten, indice glycémique bas. Un dessert qui convient à tous vos collaborateurs, quelle que soit leur contrainte alimentaire ou leur régime de santé."
    },
    {
      icon: Award,
      title: "Excellence reconnue",
      description: "Une signature de chef étoilé qui reflète l'excellence de votre entreprise. Chaque bûche est une œuvre d'art pâtissière qui valorise votre image de marque."
    },
    {
      icon: Building2,
      title: "Artisanat local engagé",
      description: "Soutenez un chef genevois et ses valeurs : proximité, qualité, bienveillance. Un choix responsable qui renforce votre engagement RSE et votre ancrage local."
    },
    {
      icon: Heart,
      title: "Bien-être au travail",
      description: "Offrez un moment de plaisir authentique sans compromettre la santé. Des créations gourmandes qui respectent les besoins nutritionnels de vos équipes."
    },
    {
      icon: Clock,
      title: "Simplicité logistique",
      description: "Livraison organisée, conditionnement adapté aux volumes, flexibilité des dates. Nous gérons tous les détails pour que vous vous concentriez sur l'essentiel."
    },
    {
      icon: Shield,
      title: "Fiabilité et traçabilité",
      description: "Ingrédients premium, processus maîtrisés, respect des normes sanitaires. Une garantie de qualité et de sécurité pour vos événements professionnels."
    }
  ];

  const useCases = [
    {
      icon: Sparkles,
      title: "Événements d'entreprise",
      description: "Réunions de fin d'année, séminaires, lancements produits, célébrations d'équipe"
    },
    {
      icon: Gift,
      title: "Cadeaux clients et partenaires",
      description: "Marquez les esprits avec un présent unique qui témoigne de votre attention et de votre exigence"
    },
    {
      icon: TrendingUp,
      title: "Outils de fidélisation",
      description: "Renforcez vos relations commerciales avec un cadeau qui sort de l'ordinaire et crée un souvenir mémorable"
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
            Des créations d'exception pour vos événements d'entreprise et vos cadeaux clients. Une approche qui allie excellence gustative, valeurs responsables et impact mémorable.
          </p>
        </motion.div>

        {/* Advantages */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
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

        {/* Use Cases */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h3
            className="font-heading text-3xl md:text-4xl text-cream mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Des solutions adaptées à vos besoins
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                className="glass-card rounded-2xl p-6 border border-gold/20 hover:border-gold/40 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className="w-12 h-12 mb-4 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center">
                  <useCase.icon className="w-6 h-6 text-gold" />
                </div>
                <h4 className="font-heading text-xl text-gold mb-3">
                  {useCase.title}
                </h4>
                <p className="text-cream/80 font-body leading-relaxed text-sm">
                  {useCase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pricing Tiers */}
        <motion.div
          className="glass-card rounded-3xl p-8 md:p-12 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-heading text-3xl text-gold mb-4 text-center">
            Tarifs professionnels
          </h3>
          <p className="text-cream/70 text-center mb-8 font-body text-sm">
            Des remises progressives adaptées à vos volumes. Devis personnalisé pour vos besoins spécifiques.
          </p>
          <div className="space-y-4">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-between p-5 bg-card/20 rounded-xl border border-gold/10 hover:border-gold/30 hover:bg-card/30 transition-all duration-300"
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
          <motion.p
            className="text-center text-cream/60 text-sm mt-6 font-body"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            * Tarifs dégressifs sur la base de CHF 42 par bûche. Conditions personnalisées pour les très gros volumes.
          </motion.p>
        </motion.div>

        {/* Value Proposition */}
        <motion.div
          className="glass-card rounded-3xl p-8 md:p-12 mb-12 max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-heading text-2xl md:text-3xl text-gold mb-4">
            Pourquoi choisir la Collection 2025 pour votre entreprise ?
          </h3>
          <div className="grid md:grid-cols-2 gap-6 mt-8 text-left">
            <div className="space-y-3">
              <p className="text-cream/90 font-body">
                <span className="text-gold font-semibold">✓ Différenciation :</span> Sortez des cadeaux classiques avec une création unique qui marque les esprits
              </p>
              <p className="text-cream/90 font-body">
                <span className="text-gold font-semibold">✓ Impact durable :</span> Un souvenir gustatif qui renforce votre image et vos relations
              </p>
              <p className="text-cream/90 font-body">
                <span className="text-gold font-semibold">✓ Responsabilité :</span> Un choix aligné avec les valeurs modernes : santé, local, qualité
              </p>
            </div>
            <div className="space-y-3">
              <p className="text-cream/90 font-body">
                <span className="text-gold font-semibold">✓ Flexibilité :</span> Personnalisation possible, livraisons adaptées, accompagnement sur mesure
              </p>
              <p className="text-cream/90 font-body">
                <span className="text-gold font-semibold">✓ Excellence :</span> Une signature de chef reconnu qui valorise votre entreprise
              </p>
              <p className="text-cream/90 font-body">
                <span className="text-gold font-semibold">✓ Simplicité :</span> Un interlocuteur unique, une solution clé en main
              </p>
            </div>
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
          <motion.p
            className="text-cream/80 font-body mb-6 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Discutons de votre projet et créons ensemble une expérience mémorable
          </motion.p>
          <motion.button
            onClick={handleContactClick}
            className="group relative px-8 md:px-12 py-4 md:py-6 bg-gradient-burgundy text-cream font-body font-semibold text-base md:text-lg rounded-full overflow-hidden transition-all duration-500 hover:shadow-gold hover:scale-105 inline-flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Demander un devis professionnel</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          <motion.p
            className="text-cream/60 font-body text-sm mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Réponse sous 24h • Devis personnalisé • Accompagnement dédié
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default B2BSection;

