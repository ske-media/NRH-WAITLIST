import { motion } from "framer-motion";
import { Instagram, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-4 lg:px-8 bg-dark-bg border-t border-gold/20">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-heading text-2xl text-gold mb-2">
              Nicolas Builer
            </h3>
            <p className="text-sm text-cream/70">
              Haute Pâtisserie · Collection Exclusive
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.a
              href="https://www.instagram.com/nicolasbulier/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/70 hover:text-gold transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="mailto:contact@nicolasbuiler.com"
              className="text-cream/70 hover:text-gold transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </motion.a>
          </motion.div>

          {/* Copyright */}
          <motion.p
            className="text-sm text-cream/70 text-center md:text-right"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            © {currentYear} Nicolas Builer. Tous droits réservés.
          </motion.p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
