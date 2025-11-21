import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import { Sparkles } from "lucide-react";

const FormSection = () => {
  const [formData, setFormData] = useState({
    prenom: "",
    email: "",
    telephone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation basique
    if (!formData.prenom || !formData.email) {
      toast.error("Veuillez remplir au moins le prénom et l'email");
      return;
    }

    toast.success("Merci ! Vous serez averti dès l'ouverture des précommandes.");
    setFormData({ prenom: "", email: "", telephone: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="form-section"
      className="relative py-20 lg:py-32 px-4 lg:px-8 min-h-screen flex items-center bg-gradient-dark"
    >
      <motion.div
        className="max-w-2xl mx-auto w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-4"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles className="w-6 h-6 text-gold" />
          </motion.div>
          <h2 className="font-heading text-4xl md:text-5xl text-gold mb-4 tracking-wide">
            Rejoindre la liste privilège
          </h2>
          <p className="text-cream/70 text-base md:text-lg font-light leading-relaxed">
            Inscrivez-vous pour un accès prioritaire à la vente privée. Les quantités étant limitées, c'est la seule garantie de pouvoir savourer nos créations pour vos fêtes.
          </p>
        </motion.div>

        {/* Form Card with Glassmorphism */}
        <motion.div
          className="bg-card border border-gold/20 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-elegant"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Décorations - Cercles flous */}
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-gold/5 rounded-full blur-3xl opacity-50" />
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <input type="hidden" name="form-name" value="contact" />

            {/* Prénom */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <label
                htmlFor="prenom"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Prénom
              </label>
              <input
                type="text"
                id="prenom"
                name="prenom"
                value={formData.prenom}
                onChange={handleChange}
                className="w-full bg-transparent border-b-2 border-gold/30 focus:border-gold outline-none py-3 text-foreground text-lg transition-colors duration-300 placeholder:text-muted-foreground"
                placeholder="Jean"
                required
              />
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border-b-2 border-gold/30 focus:border-gold outline-none py-3 text-foreground text-lg transition-colors duration-300 placeholder:text-muted-foreground"
                placeholder="jean@exemple.com"
                required
              />
            </motion.div>

            {/* Téléphone - Optionnel */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <label
                htmlFor="telephone"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Téléphone <span className="text-cream/50 text-xs font-normal">(optionnel)</span>
              </label>
              <input
                type="tel"
                id="telephone"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                className="w-full bg-transparent border-b-2 border-gold/30 focus:border-gold outline-none py-3 text-foreground text-lg transition-colors duration-300 placeholder:text-muted-foreground"
                placeholder="06 12 34 56 78"
              />
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="w-full mt-8 py-4 md:py-6 bg-gradient-burgundy text-cream font-semibold text-lg rounded-full transition-all duration-500 hover:shadow-gold hover:scale-105 relative overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Je réserve mon accès prioritaire</span>
            </motion.button>
          </form>

          {/* Privacy Note */}
          <motion.p
            className="text-xs text-center text-cream/60 mt-6 font-body"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            Vos données sont utilisées uniquement pour vous informer de
            l'ouverture des précommandes
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FormSection;
