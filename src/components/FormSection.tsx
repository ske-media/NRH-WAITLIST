import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import { Sparkles, CheckCircle2 } from "lucide-react";

const FormSection = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validation email
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Validation téléphone suisse (format 07X XXX XX XX - 10 chiffres)
  const validatePhone = (phone: string): boolean => {
    if (!phone) return false; // Obligatoire
    // Nettoyer les espaces et tirets pour la validation
    const cleaned = phone.replace(/[\s\-\(\)]/g, "");
    // Vérifier qu'il y a exactement 10 chiffres et commence par 07
    return /^07\d{8}$/.test(cleaned);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validation nom
    if (!formData.nom.trim()) {
      toast.error("Veuillez entrer votre nom");
      setIsSubmitting(false);
      return;
    }

    // Validation prénom
    if (!formData.prenom.trim()) {
      toast.error("Veuillez entrer votre prénom");
      setIsSubmitting(false);
      return;
    }

    // Validation email
    if (!formData.email.trim()) {
      toast.error("Veuillez entrer votre adresse email");
      setIsSubmitting(false);
      return;
    }

    if (!validateEmail(formData.email)) {
      toast.error("Veuillez entrer une adresse email valide");
      setIsSubmitting(false);
      return;
    }

    // Validation téléphone (obligatoire)
    if (!formData.telephone.trim()) {
      toast.error("Veuillez entrer votre numéro de téléphone");
      setIsSubmitting(false);
      return;
    }

    if (!validatePhone(formData.telephone)) {
      toast.error("Veuillez entrer un numéro de téléphone suisse valide (format: 07X XXX XX XX)");
      setIsSubmitting(false);
      return;
    }

    // Fonction pour afficher le message de succès
    const showSuccessMessage = () => {
      toast.success("🎉 Inscription réussie !", {
        description: "Vous serez averti en priorité dès l'ouverture de la vente privée.",
        duration: 8000,
        style: {
          background: "linear-gradient(135deg, hsl(38 75% 55% / 0.3) 0%, hsl(0 60% 25% / 0.3) 100%)",
          border: "2px solid hsl(38 75% 55%)",
          borderRadius: "20px",
          boxShadow: "0 16px 64px rgba(0, 0, 0, 0.4), 0 0 32px hsl(38 75% 55% / 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
          padding: "24px",
          fontSize: "18px",
          fontWeight: "700",
          color: "hsl(35 25% 95%)",
          minWidth: "420px",
          maxWidth: "500px",
        },
        className: "font-bold text-cream shadow-2xl",
      });
      setFormData({ nom: "", prenom: "", email: "", telephone: "" });
    };

    // En développement local, Netlify Forms ne fonctionne pas
    // On simule une soumission réussie
    if (import.meta.env.DEV) {
      // Simuler un délai pour l'expérience utilisateur
      await new Promise((resolve) => setTimeout(resolve, 500));
      showSuccessMessage();
      setIsSubmitting(false);
      return;
    }

    // En production, envoyer à Netlify Forms
    try {
      // Préparer les données pour Netlify
      const formDataToSend = new FormData();
      formDataToSend.append("form-name", "contact");
      formDataToSend.append("nom", formData.nom);
      formDataToSend.append("prenom", formData.prenom);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("telephone", formData.telephone);

      // Envoyer à Netlify Forms via AJAX
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formDataToSend as any).toString(),
      });

      if (response.ok) {
        showSuccessMessage();
      } else {
        throw new Error("Erreur lors de l'envoi");
      }
    } catch (error) {
      toast.error("Une erreur est survenue", {
        description: "Veuillez réessayer plus tard.",
      });
    } finally {
      setIsSubmitting(false);
    }
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
            Accès à la vente privée
          </h2>
          <p className="text-cream/70 text-base md:text-lg font-light leading-relaxed">
            Rejoignez la liste privée pour un accès exclusif à la vente. Quantités limitées, réservées aux membres de la liste.
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
            netlify
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <input type="hidden" name="form-name" value="contact" />

            {/* Nom */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <label
                htmlFor="nom"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Nom
              </label>
              <input
                type="text"
                id="nom"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                className="w-full bg-transparent border-b-2 border-gold/30 focus:border-gold outline-none py-3 text-foreground text-lg transition-colors duration-300 placeholder:text-muted-foreground"
                placeholder="Muller"
                required
              />
            </motion.div>

            {/* Prénom */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
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
                placeholder="Thomas"
                required
              />
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
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
                placeholder="thomas.muller@bluewin.ch"
                required
              />
            </motion.div>

            {/* Téléphone - Obligatoire */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <label
                htmlFor="telephone"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Téléphone
              </label>
              <input
                type="tel"
                id="telephone"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                className="w-full bg-transparent border-b-2 border-gold/30 focus:border-gold outline-none py-3 text-foreground text-lg transition-colors duration-300 placeholder:text-muted-foreground"
                placeholder="079 123 45 67"
                required
              />
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-8 py-4 md:py-6 bg-gradient-burgundy text-cream font-semibold text-lg rounded-full transition-all duration-500 hover:shadow-gold hover:scale-105 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 }}
              whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
            >
              <span className="relative z-10">
                {isSubmitting ? "Envoi en cours..." : "Rejoindre la vente privée"}
              </span>
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
            l'ouverture de la vente privée
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FormSection;
