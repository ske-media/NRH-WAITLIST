import { motion } from "framer-motion";

const TestimonialsSection = () => {
  return (
    <section className="relative py-20 lg:py-32 px-4 lg:px-8 bg-gradient-dark overflow-hidden">
      {/* Décorations */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
            {/* Icône de guillemet en background */}
            <div className="relative mb-12">
              <div className="w-32 h-32 text-gold/10 absolute left-1/2 -translate-x-1/2 -top-8 flex items-center justify-center">
                <span className="text-9xl font-serif leading-none">"</span>
              </div>
            
            {/* Citation */}
            <motion.blockquote
              className="relative glass-card rounded-3xl p-8 md:p-12 shadow-elegant"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="font-heading text-2xl md:text-3xl lg:text-4xl text-cream mb-8 leading-relaxed italic">
                "Mon mari est diabétique. Il n'avait pas goûté une bûche digne de ce nom depuis 5 ans.
                Hier soir, il a eu les larmes aux yeux. Merci, Chef."
              </p>
              
              <footer className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold/20 to-burgundy/20 border border-gold/40 flex items-center justify-center">
                  <span className="text-xl">👩</span>
                </div>
                <div className="text-left">
                  <p className="font-heading text-lg text-gold font-semibold">
                    Claire B.
                  </p>
                  <p className="text-cream/70 font-body text-sm">
                    Genève
                  </p>
                </div>
              </footer>
            </motion.blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

