import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import { Building2, Mail, Phone, User, FileText, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubtleParticles from "@/components/SnowParticles";

const Devis = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    entreprise: "",
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    nombreBuches: "",
    dateLivraison: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Validation téléphone flexible (internationale, mobile, fixe)
  const validatePhone = (phone: string): boolean => {
    if (!phone) return false;
    // Nettoyer les espaces, tirets, parenthèses et points
    const cleaned = phone.replace(/[\s\-\(\)\.]/g, "");
    
    // Vérifier qu'il contient au moins des chiffres
    if (!/\d/.test(cleaned)) return false;
    
    // Accepter les formats :
    // - International : + suivi de 1-3 chiffres (indicatif) puis 6-12 chiffres
    // - National avec 0 : 0 suivi de 6-12 chiffres (mobile 07X, fixe 01X, 02X, 04X, etc.)
    // - Direct : 6-15 chiffres (pour formats courts ou internationaux sans +)
    const internationalPattern = /^\+\d{1,3}\d{6,12}$/; // +33, +41, etc.
    const nationalPattern = /^0\d{6,12}$/; // 07X, 01X, 02X, 04X, etc.
    const directPattern = /^\d{6,15}$/; // Formats directs sans préfixe
    
    return internationalPattern.test(cleaned) || 
           nationalPattern.test(cleaned) || 
           directPattern.test(cleaned);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validation
    if (!formData.entreprise.trim()) {
      toast.error("Veuillez entrer le nom de votre entreprise");
      setIsSubmitting(false);
      return;
    }

    if (!formData.nom.trim()) {
      toast.error("Veuillez entrer votre nom");
      setIsSubmitting(false);
      return;
    }

    if (!formData.prenom.trim()) {
      toast.error("Veuillez entrer votre prénom");
      setIsSubmitting(false);
      return;
    }

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

    if (!formData.telephone.trim()) {
      toast.error("Veuillez entrer votre numéro de téléphone");
      setIsSubmitting(false);
      return;
    }

    if (!validatePhone(formData.telephone)) {
      toast.error("Veuillez entrer un numéro de téléphone valide (international, mobile ou fixe)");
      setIsSubmitting(false);
      return;
    }

    if (!formData.nombreBuches.trim()) {
      toast.error("Veuillez indiquer le nombre de bûches souhaité");
      setIsSubmitting(false);
      return;
    }

    // En développement local
    if (import.meta.env.DEV) {
      await new Promise((resolve) => setTimeout(resolve, 500));
      toast.success("🎉 Demande de devis envoyée !", {
        description: "Nous vous répondrons sous 24h.",
        duration: 8000,
        style: {
          background: "linear-gradient(135deg, hsl(180 40% 18% / 0.3) 0%, hsl(0 60% 25% / 0.3) 100%)",
          border: "2px solid hsl(180 40% 18%)",
          borderRadius: "20px",
          boxShadow: "0 16px 64px rgba(0, 0, 0, 0.4)",
          padding: "24px",
          fontSize: "18px",
          fontWeight: "700",
          color: "hsl(35 25% 95%)",
        },
      });
      setFormData({
        entreprise: "",
        nom: "",
        prenom: "",
        email: "",
        telephone: "",
        nombreBuches: "",
        dateLivraison: "",
        message: "",
      });
      setIsSubmitting(false);
      return;
    }

    // En production, envoyer à Netlify Forms
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("form-name", "devis");
      formDataToSend.append("entreprise", formData.entreprise);
      formDataToSend.append("nom", formData.nom);
      formDataToSend.append("prenom", formData.prenom);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("telephone", formData.telephone);
      formDataToSend.append("nombreBuches", formData.nombreBuches);
      if (formData.dateLivraison) {
        formDataToSend.append("dateLivraison", formData.dateLivraison);
      }
      if (formData.message) {
        formDataToSend.append("message", formData.message);
      }

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formDataToSend as any).toString(),
      });

      if (response.ok) {
        toast.success("🎉 Demande de devis envoyée !", {
          description: "Nous vous répondrons sous 24h.",
          duration: 8000,
        });
        setFormData({
          entreprise: "",
          nom: "",
          prenom: "",
          email: "",
          telephone: "",
          nombreBuches: "",
          dateLivraison: "",
          message: "",
        });
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="relative min-h-screen">
      <Header />
      <SubtleParticles />

      <section className="relative py-20 lg:py-32 px-4 lg:px-8 min-h-screen flex items-center bg-gradient-dark">
        <motion.div
          className="max-w-3xl mx-auto w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Back Button */}
          <motion.button
            onClick={() => navigate(-1)}
            className="mb-8 flex items-center gap-2 text-cream/70 hover:text-cream font-body transition-colors duration-300"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ArrowLeft className="w-5 h-5" />
            Retour
          </motion.button>

          {/* Title */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 mb-4"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Building2 className="w-8 h-8 text-cream/80" />
            </motion.div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-cream mb-4 tracking-wide">
              Demande de devis
            </h1>
            <div className="w-24 h-1 bg-gradient-burgundy mx-auto mb-4" />
            <p className="text-cream/70 text-base md:text-lg font-body leading-relaxed">
              Remplissez ce formulaire pour recevoir un devis personnalisé pour votre entreprise
            </p>
          </motion.div>

          {/* Form Card */}
          <motion.div
            className="bg-card border border-dark-teal/30 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-elegant"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Décorations */}
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-dark-teal/5 rounded-full blur-3xl opacity-50" />
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />

            <form
              name="devis"
              method="POST"
              netlify
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="devis" />

              {/* Entreprise */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <label
                  htmlFor="entreprise"
                  className="block text-sm font-medium text-foreground mb-2 flex items-center gap-2"
                >
                  <Building2 className="w-4 h-4" />
                  Entreprise
                </label>
                <input
                  type="text"
                  id="entreprise"
                  name="entreprise"
                  value={formData.entreprise}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b-2 border-dark-teal/40 focus:border-dark-teal outline-none py-3 px-2 text-foreground text-lg transition-colors duration-300 placeholder:text-muted-foreground cursor-text"
                  placeholder="Nom de votre entreprise"
                  required
                />
              </motion.div>

              {/* Nom et Prénom */}
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <label
                    htmlFor="nom"
                    className="block text-sm font-medium text-foreground mb-2 flex items-center gap-2"
                  >
                    <User className="w-4 h-4" />
                    Nom
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b-2 border-dark-teal/40 focus:border-dark-teal outline-none py-3 px-2 text-foreground text-lg transition-colors duration-300 placeholder:text-muted-foreground cursor-text"
                    placeholder="Dupont"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <label
                    htmlFor="prenom"
                    className="block text-sm font-medium text-foreground mb-2 flex items-center gap-2"
                  >
                    <User className="w-4 h-4" />
                    Prénom
                  </label>
                  <input
                    type="text"
                    id="prenom"
                    name="prenom"
                    value={formData.prenom}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b-2 border-dark-teal/40 focus:border-dark-teal outline-none py-3 px-2 text-foreground text-lg transition-colors duration-300 placeholder:text-muted-foreground cursor-text"
                    placeholder="Jean"
                    required
                  />
                </motion.div>
              </div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2 flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b-2 border-dark-teal/40 focus:border-dark-teal outline-none py-3 px-2 text-foreground text-lg transition-colors duration-300 placeholder:text-muted-foreground cursor-text"
                  placeholder="jean.dupont@entreprise.ch"
                  required
                />
              </motion.div>

              {/* Téléphone */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <label
                  htmlFor="telephone"
                  className="block text-sm font-medium text-foreground mb-2 flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b-2 border-dark-teal/40 focus:border-dark-teal outline-none py-3 px-2 text-foreground text-lg transition-colors duration-300 placeholder:text-muted-foreground cursor-text"
                  placeholder="+41 79 123 45 67 ou 079 123 45 67"
                  required
                />
              </motion.div>

              {/* Nombre de bûches */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                <label
                  htmlFor="nombreBuches"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Nombre de bûches souhaité
                </label>
                <select
                  id="nombreBuches"
                  name="nombreBuches"
                  value={formData.nombreBuches}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b-2 border-dark-teal/40 focus:border-dark-teal outline-none py-3 px-2 text-foreground text-lg transition-colors duration-300 cursor-pointer"
                  required
                >
                  <option value="">Sélectionnez...</option>
                  <option value="10-20">10-20 bûches</option>
                  <option value="20-30">20-30 bûches</option>
                  <option value="30-40">30-40 bûches</option>
                  <option value="40+">40+ bûches</option>
                </select>
              </motion.div>

              {/* Date de livraison */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                <label
                  htmlFor="dateLivraison"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Date de livraison souhaitée (optionnel)
                </label>
                <input
                  type="date"
                  id="dateLivraison"
                  name="dateLivraison"
                  value={formData.dateLivraison}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b-2 border-dark-teal/40 focus:border-dark-teal outline-none py-3 px-2 text-foreground text-lg transition-colors duration-300 cursor-pointer"
                />
              </motion.div>

              {/* Message */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2 flex items-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  Message (optionnel)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-transparent border-b-2 border-dark-teal/40 focus:border-dark-teal outline-none py-3 px-2 text-foreground text-lg transition-colors duration-300 placeholder:text-muted-foreground resize-none cursor-text"
                  placeholder="Informations complémentaires, contraintes particulières..."
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-8 py-4 md:py-6 bg-gradient-burgundy text-cream font-semibold text-lg rounded-full transition-all duration-500 hover:shadow-gold hover:scale-105 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.3 }}
                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
              >
                <span className="relative z-10">
                  {isSubmitting ? "Envoi en cours..." : "Envoyer la demande de devis"}
                </span>
              </motion.button>
            </form>

            {/* Privacy Note */}
            <motion.p
              className="text-xs text-center text-cream/60 mt-6 font-body"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              Vos données sont utilisées uniquement pour traiter votre demande de devis
            </motion.p>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
};

export default Devis;


